import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function NotFound() {
  return (
    <Layout title="页面未找到" description="Page not found">
      <div className="light-dots" />
      <div className="starry-bg" />
      <div className="meteor-container">
        <div className="meteor" />
        <div className="meteor" />
        <div className="meteor" />
      </div>

      <main className="container margin-vert--xl" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row">
          <div className="col col--6 col--offset-3">
            <div className={styles.hero}>
              <div className={styles.heroBg} />

              {/* 装饰浮动圆 */}
              <div
                className={styles.floatingCircle}
                style={{
                  width: '120px',
                  height: '120px',
                  top: '-40px',
                  right: '-30px',
                  animation: 'float-1 8s ease-in-out infinite',
                }}
              />
              <div
                className={styles.floatingCircle}
                style={{
                  width: '80px',
                  height: '80px',
                  bottom: '-20px',
                  left: '-20px',
                  animation: 'float-2 10s ease-in-out infinite',
                }}
              />

              <div className={styles.heroContent} style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <Heading
                  as="h1"
                  className="hero__title"
                  style={{
                    fontSize: '5rem',
                    fontWeight: 900,
                    background: 'linear-gradient(135deg, var(--ifm-color-primary), var(--ifm-color-primary-light))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '0.5rem',
                    lineHeight: 1.1,
                  }}
                >
                  404
                </Heading>

                <p
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.5rem',
                    fontWeight: 500,
                  }}
                >
                  这片星空还没有内容
                </p>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-tertiary)',
                    marginBottom: '2.5rem',
                    maxWidth: '360px',
                    margin: '0 auto 2.5rem',
                  }}
                >
                  你找的页面可能被移走了、改名了，或者从来就不存在
                </p>

                <Link
                  to="/"
                  className="button button--primary button--lg"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span>←</span> 回到首页
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
