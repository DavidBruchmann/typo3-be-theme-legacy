import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'The Theme',
    Svg: require('../../../../Resources/Public/Icons/Extension.svg').default,  // You can replace with TYPO3 icons
    description: (
      <>
        A modernized, lightweight backend experience for <b>TYPO3 v14.1+</b>.
        Focusing on CSS variables, clean module icons, and seamless integration.
      </>
    ),
    link: '/docs/introduction',
  },
  {
    title: 'Extended Features',
    Svg: require('../../../../Resources/Public/Icons/Extension.svg').default,
    description: (
      <>
        Beyond the backend: Automated GitHub workflows,
        <b>beautified offline documentation</b>, and a portable CI/CD toolkit.
      </>
    ),
    link: '/docs/Changelog',
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--6 card')}>
      <div className="text--center">
        {/* You can replace Svg with an <img> pointing to your TYPO3 icons */}
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="button button--outline button--primary" to={link}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
