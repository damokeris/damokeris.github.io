import React, { useEffect } from 'react';

export default function TagsReposition() {
  useEffect(() => {
    // 只在文档页面执行
    if (!document.querySelector('.theme-doc-footer-tags-row')) {
      return;
    }

    // 查找标签行
    const tagsRow = document.querySelector('.theme-doc-footer-tags-row') as HTMLElement;
    if (!tagsRow) return;

    // 查找文档标题 (h1)
    const docTitle = document.querySelector('.theme-doc-markdown.markdown h1') as HTMLElement;
    if (!docTitle) return;

    // 创建标题的父容器，用于插入标签
    const titleParent = docTitle.parentElement;
    if (!titleParent) return;

    // 创建标签容器
    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'custom-tags-container';
    tagsContainer.style.cssText = `
      margin-top: 1rem;
      margin-bottom: 2rem;
      padding: 0.75rem 1rem;
      background-color: var(--ifm-color-emphasis-100);
      border-radius: 8px;
      border-left: 4px solid var(--ifm-color-primary);
    `;

    // 复制标签行内容到新容器
    tagsContainer.innerHTML = tagsRow.innerHTML;
    
    // 隐藏原标签行
    tagsRow.style.display = 'none';
    
    // 在标题后插入标签容器
    docTitle.insertAdjacentElement('afterend', tagsContainer);

    // 改进标签样式
    const tagLinks = tagsContainer.querySelectorAll('a.tag_zVej');
    tagLinks.forEach(link => {
      const tagLink = link as HTMLElement;
      tagLink.style.cssText = `
        background-color: var(--ifm-color-primary);
        color: white;
        border-radius: 16px;
        padding: 0.25rem 0.75rem;
        margin: 0 0.25rem;
        text-decoration: none;
        font-size: 0.875rem;
        font-weight: 500;
        display: inline-block;
        transition: all 0.2s ease;
      `;
      tagLink.addEventListener('mouseenter', () => {
        tagLink.style.backgroundColor = 'var(--ifm-color-primary-dark)';
        tagLink.style.transform = 'translateY(-2px)';
      });
      tagLink.addEventListener('mouseleave', () => {
        tagLink.style.backgroundColor = 'var(--ifm-color-primary)';
        tagLink.style.transform = 'translateY(0)';
      });
    });

    // 清理函数
    return () => {
      // 如果组件卸载，恢复原状
      if (tagsRow) {
        tagsRow.style.display = '';
      }
      const existingContainer = document.querySelector('.custom-tags-container');
      if (existingContainer && existingContainer.parentElement) {
        existingContainer.parentElement.removeChild(existingContainer);
      }
    };
  }, []);

  return null; // 此组件不渲染任何内容
}