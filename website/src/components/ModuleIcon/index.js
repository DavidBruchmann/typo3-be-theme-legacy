import React from 'react';
import styles from './styles.module.css';

export default function ModuleIcon({ id, color, parent, description }) {
console.log(id);
  const filename = id;

  let iconSrc;
  let customClass;
  let parentHtml = '';
  if (id.startsWith('module-')) {
    iconSrc = require(`@site/static/icons/module/${filename}.svg`).default;
    customClass = "moduleIcon";
  } else if (id.startsWith('modulegroup')) {
    iconSrc = require(`@site/static/icons/modulegroup/${filename}.svg`).default;
    customClass = "moduleGroupIcon";
  }
  const hasParent = typeof parent === 'string' && parent.trim().length > 0;
  const hasDescription = typeof description === 'string' && description.trim().length > 0;
  return (
    <div className={`${styles.iconContainer} ${customClass}`}>
      {/* Rendering as an <img> prevents fill color styling via CSS. See below for color customization */}
      <img src={iconSrc} alt={id} className={styles.svgIcon} width="32" height="32"/>
      <div className={styles.textWrapper}>
        <span className={styles.iconLabel}>identifier: {id}</span><br/>
        <span className={`${styles.iconLabel} color`}>background-color: {color}</span>
        {hasParent && (
              <>
                <br/><span className={styles.iconLabel}>{parent}</span>
              </>
        )}
        {hasDescription && (
              <>
                <br/><span className={styles.iconLabel}>{description}</span>
              </>
        )}
      </div>
    </div>
  );
}
