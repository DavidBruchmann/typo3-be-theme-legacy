import React from 'react';

const CustomBadge = ({ label, value, color = '#007bff' }) => {
  const labelWidth = label.length * 8 + 14;
  const valueWidth = value.length * 8 + 14;
  const totalWidth = labelWidth + valueWidth;

  return React.createElement('svg', { width: totalWidth, height: 20 }, // xmlns: 'http://www.w3.org',
    React.createElement('mask', { id: 'a' },
      React.createElement('rect', { width: totalWidth, height: 20, rx: 3, fill: '#fff' })
    ),
    React.createElement('g', { mask: 'url(#a)' },
      React.createElement('path', { fill: '#555', d: `M0 0h${labelWidth}v20H0z` }),
      React.createElement(

'path', { fill: color, d: `M${labelWidth} 0h${valueWidth}v20H${labelWidth}z` })
    ),
    React.createElement('g', { fill: '#fff', textAnchor: 'middle', fontFamily: 'Verdana,Geneva,sans-serif', fontSize: 11 },
      React.createElement('text', { x: labelWidth / 2, y: 14 }, label),
      React.createElement('text', { x: labelWidth + valueWidth / 2, y: 14 }, value)
    )
  );
};

export default CustomBadge;
