import React, { useEffect, useRef, useState } from 'react';
import DocItemContent from '@theme-original/DocItem/Content';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import type { Props } from '@theme/DocItem/Content';

function ArticleMeta(): React.JSX.Element | null {
  const { metadata } = useDoc();
  const { formattedLastUpdatedAt } = metadata;
  const contentRef = useRef<HTMLDivElement>(null);
  const [readingTime, setReadingTime] = useState<number | null>(null);

  // Measure content text to estimate reading time
  useEffect(() => {
    if (!contentRef.current) return;
    const timer = setTimeout(() => {
      const text = contentRef.current?.textContent || '';
      const charCount = text.replace(/\s/g, '').length;
      // 中文阅读约 350 字/分钟，英文约 200 词/分钟，取综合
      setReadingTime(Math.max(1, Math.ceil(charCount / 350)));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="doc-meta-bar" ref={contentRef}>
      {readingTime && (
        <span className="doc-meta-item">
          <svg className="doc-meta-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          阅读时间约 {readingTime} 分钟
        </span>
      )}
      {formattedLastUpdatedAt && (
        <span className="doc-meta-item">
          <svg className="doc-meta-svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8v4l3 3" />
            <circle cx="12" cy="12" r="10" />
          </svg>
          更新于 {formattedLastUpdatedAt}
        </span>
      )}
    </div>
  );
}

export default function DocItemContentWrapper(props: Props): React.JSX.Element {
  return (
    <div className="doc-item-content-wrapper">
      <ArticleMeta />
      <DocItemContent {...props} />
    </div>
  );
}
