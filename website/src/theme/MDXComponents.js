import React from 'react';

import ModuleIcon from '@site/src/components/ModuleIcon';
import MDXComponents from '@theme-original/MDXComponents';

export default {
  ...MDXComponents,
  ModuleIcon, // Makes the component globally available to the MDX compiler
};
