import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageCards from '@site/src/components/HomepageCards';
import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">

        <div class="col--8">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div>
            <p>The Backend of TYPO3 v14 got some new icons for modules.<br/>
              Some people are missing the old colored icons.<br/>
              <strong>This extension brings back the old colored icons!</strong>
            </p>
            <p>Personally, I can recognize the topics faster with the old icons.
            </p>
            </div>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/website">
                <Translate id="my-id" description="explore-documentation">Explore the Theme Documentation</Translate>
              </Link>
            </div>
        </div>

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Modern TYPO3 Backend Customization">
      <HomepageHeader />
      <main>
        <HomepageCards />
      </main>
    </Layout>
  );
}
