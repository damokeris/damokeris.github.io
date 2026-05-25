import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      {/* 浮动装饰圆 */}
      <div className={styles.floatingCircle} />
      <div className={styles.floatingCircle} />
      <div className={styles.floatingCircle} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px', padding: '1rem' }}>
            <Heading as="h1" className={styles.heroTitle}>
              天才就是
            </Heading>
            <p className={styles.heroSubtitle}>
              99% 的努力和 1% 的灵感
            </p>
            <p className={styles.heroQuote}>
              --放心，这里只有那 1%
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/docs/begin">
                从这里开始
              </Link>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: '300px', textAlign: 'center', padding: '1rem' }}>
            <img
              src="/img/VSCode-Thick.webp"
              alt="VSCode Logo"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      {/* 浅色主题 — 蓝色微点阵 */}
      <div className="light-dots" />
      {/* 深色主题 — 星空 */}
      <div className="starry-bg" />
      {/* 深色主题 — 流星雨 */}
      <div className="meteor-container">
        <div className="meteor" />
        <div className="meteor" />
        <div className="meteor" />
        <div className="meteor" />
        <div className="meteor" />
        <div className="meteor" />
        <div className="meteor" />
        <div className="meteor" />
      </div>
      <Layout
        title={siteConfig.title}
        description={siteConfig.tagline}>
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </>
  );
}
