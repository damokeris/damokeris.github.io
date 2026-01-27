import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px', padding: '1rem' }}>
            <Heading as="h1" className="hero__title">
              天才就是
            </Heading>
            <p className="hero__subtitle" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              99% 的努力和 1% 的灵感
            </p>
            <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>
              --放心，这里只有那 1%
            </p>
            <div className={styles.buttons} style={{ marginTop: '2rem' }}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/begin">
                从这里开始
              </Link>

            </div>
          </div>
          <div style={{ flex: 1, minWidth: '300px', textAlign: 'center', padding: '1rem' }}>
            <img 
              src="/img/VSCode-Thick.png" 
              alt="VSCode Logo" 
              style={{ maxWidth: '100%', height: 'auto', maxHeight: '300px' }}
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
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
