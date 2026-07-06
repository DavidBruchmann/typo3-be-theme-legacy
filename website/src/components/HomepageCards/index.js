// src/components/HomepageCards/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const cards = [
  {
    title: 'The Backend Theme',
    description:
      'Features and technical details about the backend theme.',
    link: '/theme',
    icon: '💬',
  },
  {
    title: 'This Website -- content, styling and development',
    description:
      'Documentation about this static website, how to add content and maintain styling.',
    link: '/website',
    icon: '💬',
  },
  {
    title: 'Support the Project',
    description:
      'If this knowledge base helps you, consider supporting ongoing work and maintenance.',
    link: 'https://ko-fi.com/DavidBruchmann',
    icon: '☕',
    external: true,
  },
];

function Card({ title, description, link, icon, external }) {
  const Wrapper = external ? 'a' : Link;
  const props = external
    ? {
        href: link,
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    : {
        to: link
      };

  return (
    <Wrapper className={styles.card} {...props}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </Wrapper>
  );
}

export default function HomepageCards() {
  return (
    <section className={styles.grid}>
      {cards.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </section>
  );
}
