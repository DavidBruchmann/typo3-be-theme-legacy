const fs = require('fs');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const CustomBadge = require('../src/components/CustomBadge').default;

// Get version from your package.json or composer.json
const { version } = require('../package.json');

const badgeHtml = renderToStaticMarkup(
  React.createElement(CustomBadge, { label: 'docs', value: version, color: '#007bff' })
);

// Add the XML namespace if React-DOM stripped it
const svgOutput = badgeHtml.replace('<svg', '<svg xmlns="http://www.w3.org"');

fs.writeFileSync('build/badge.svg', svgOutput);
console.log('✅ Badge generated at build/badge.svg');
