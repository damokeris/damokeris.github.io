import React from 'react';
import Link from '@docusaurus/Link';
import './styles.css';

interface CategoryCard {
  title: string;
  description: string;
  icon: string;
  docId: string;
  count: number;
}

const categories: CategoryCard[] = [
  {
    title: 'Linux',
    description: 'Linux 系统学习笔记与运维实践，从入门到进阶的知识沉淀',
    icon: '🐧',
    docId: '/docs/Linux/linux-01',
    count: 1,
  },
  {
    title: '软件工程',
    description: '软件工程方法论、架构设计、最佳实践与工程化思考',
    icon: '⚙️',
    docId: '/docs/Software-Engineering/SE-01',
    count: 4,
  },
  {
    title: 'VitePress',
    description: 'VitePress 静态站点生成器学习记录，从搭建到深入使用的完整笔记',
    icon: '📘',
    docId: '/docs/VitePress/vitepress-01',
    count: 4,
  },
];

export default function DocsLanding(): React.JSX.Element {
  return (
    <div className="docs-landing">
      {/* Hero */}
      <div className="docs-landing__hero">
        <h1 className="docs-landing__title">文档中心</h1>
        <p className="docs-landing__subtitle">
          更快的方法是不要重做已经做过的工作
        </p>
      </div>

      {/* 分类统计 */}
      <div className="docs-landing__stats">
        <div className="docs-landing__stat-item">
          <span className="docs-landing__stat-number">3</span>
          <span className="docs-landing__stat-label">分类</span>
        </div>
        <div className="docs-landing__stat-divider" />
        <div className="docs-landing__stat-item">
          <span className="docs-landing__stat-number">9</span>
          <span className="docs-landing__stat-label">篇文章</span>
        </div>
      </div>

      {/* 分类卡片 */}
      <div className="docs-landing__grid">
        {categories.map((cat) => (
          <Link
            key={cat.docId}
            to={cat.docId}
            className="docs-landing__card"
          >
            <span className="docs-landing__card-icon">{cat.icon}</span>
            <div className="docs-landing__card-body">
              <h3 className="docs-landing__card-title">{cat.title}</h3>
              <p className="docs-landing__card-desc">{cat.description}</p>
            </div>
            <div className="docs-landing__card-footer">
              <span className="docs-landing__card-count">{cat.count} 篇文章</span>
              <span className="docs-landing__card-arrow">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
