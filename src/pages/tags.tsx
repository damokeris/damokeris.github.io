import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface TagInfo {
  label: string;
  count: number;
  color: string;
  icon: string;
}

const tags: TagInfo[] = [
  { label: 'Linux', count: 1, color: '#f97316', icon: '🐧' },
  { label: '软件工程', count: 4, color: '#3b82f6', icon: '🛠' },
  { label: 'VitePress', count: 4, color: '#22c55e', icon: '📝' },
  { label: '胶片相机', count: 3, color: '#a855f7', icon: '📷' },
];

// Docusaurus 自动转小写 & kebab-case 标签路径
const tagRoute: Record<string, string> = {
  'Linux': '/docs/tags/linux/',
  '软件工程': '/docs/tags/%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B/',
  'VitePress': '/docs/tags/vite-press/',
  '胶片相机': '/docs/tags/%E8%83%B6%E7%89%87%E7%9B%B8%E6%9C%BA/',
};

function TagCard({ tag }: { tag: TagInfo }) {
  const tagPath = tagRoute[tag.label] || '#';

  return (
    <Link to={tagPath} className="tag-cloud-card">
      <span className="tag-cloud-card-icon">{tag.icon}</span>
      <span className="tag-cloud-card-label">{tag.label}</span>
      <span className="tag-cloud-card-count">{tag.count} 篇</span>
    </Link>
  );
}

export default function TagsPage(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const totalDocs = tags.reduce((sum, t) => sum + t.count, 0);

  return (
    <Layout
      title="标签云"
      description="浏览所有文档标签"
    >
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className="tags-page-wrapper">
        {/* 装饰圆 */}
        <div className="tags-deco-circle tags-deco-1" />
        <div className="tags-deco-circle tags-deco-2" />

        <div className="tags-page-container">
          {/* Hero 区 */}
          <div className="tags-hero">
            <h1 className="tags-hero-title">
              <span className="tags-hero-icon">🏷️</span>
              标签云
            </h1>
            <p className="tags-hero-subtitle">
              共 {tags.length} 个分类，{totalDocs} 篇文章
            </p>
          </div>

          {/* 标签网格 */}
          <div className="tag-cloud-grid">
            {tags.map((tag) => (
              <TagCard key={tag.label} tag={tag} />
            ))}
          </div>

          {/* 底部说明 */}
          <div className="tags-footer-card">
            <p>
              点击标签查看该分类下的所有文章。
              文档系统按 <strong>Linux</strong>、<strong>软件工程</strong>、<strong>VitePress</strong>、<strong>胶片相机</strong> 四个方向组织内容。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
