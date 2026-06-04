import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Category folder slug → human-readable display name
const CATEGORY_DISPLAY: Record<string, string> = {
  Linux: 'Linux',
  'Software-Engineering': '软件工程',
  VitePress: 'VitePress',
};

interface BreadcrumbItem {
  name: string;
  item: string;
}

function buildBreadcrumbs(
  pathname: string,
  pageTitle: string,
  siteUrl: string,
): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [
    { name: '首页', item: siteUrl },
    { name: '文档', item: `${siteUrl}/docs` },
  ];

  const clean = pathname.replace(/^\/docs\/?/, '').replace(/\/$/, '');
  if (!clean) return items;

  const parts = clean.split('/');

  // Single-level doc: /docs/begin
  if (parts.length === 1) {
    items.push({ name: pageTitle, item: `${siteUrl}/docs/${parts[0]}` });
    return items;
  }

  // Nested doc: /docs/Category/doc-slug
  const categorySlug = parts[0];
  const categoryName = CATEGORY_DISPLAY[categorySlug] ?? categorySlug;
  items.push({ name: categoryName, item: `${siteUrl}/docs/${categorySlug}` });
  items.push({ name: pageTitle, item: `${siteUrl}${pathname}` });

  return items;
}

/**
 * Injects BreadcrumbList + TechArticle JSON-LD on every doc page.
 * Renders at build time (Docusaurus SSG), so search engines see it in static HTML.
 */
export default function StructuredData(): React.JSX.Element {
  const { metadata } = useDoc();
  const { pathname } = useLocation();
  const {
    siteConfig: { url: siteUrl, title: siteTitle },
  } = useDocusaurusContext();

  const breadcrumbs = buildBreadcrumbs(pathname, metadata.title, siteUrl);

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.item,
    })),
  };

  const description = metadata.description || metadata.frontMatter?.description || '';

  // Docusaurus v3 returns milliseconds, validate > 2010-01-01
  const dateModified =
    metadata.lastUpdatedAt && metadata.lastUpdatedAt > 1262304000000
      ? new Date(metadata.lastUpdatedAt).toISOString()
      : undefined;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: metadata.title,
    description,
    url: `${siteUrl}${metadata.permalink}`,
    ...(dateModified ? { dateModified } : {}),
    author: {
      '@type': 'Person',
      name: 'damokeris',
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: siteTitle,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
    </>
  );
}
