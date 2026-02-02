import {version} from '../../../package.json';
[![TYPO3 14](https://img.shields.io/badge/TYPO3-14-orange.svg)](https://get.typo3.org/version/14)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/L3L81RC51J)
<CustomBadge label="version" value={version} color="#28a745" />


# "Backend Theme Legacy" for TYPO3 v14

TYPO3 v14 has new backend module-Icons, and some people are missing
the colorful icons of previous versions.

This extension brings back the colorful icons. I did it primarily due
to accessibility reasons because I can handle the backend faster with
the older icons.

## Details and usage

Every user is free to use any backend theme, this extension is just
offering an additional theme, which is showing the old icons.

To change the theme, just go in the backend to your own backend user
account and adjust the theme.

There aren't any administrative tasks to consider, the extension works
out of the box and display is purely depending on the individual
user-settings, which only add an additional CSS file in the backend
if the according theme is selected.

## Installation

The extension can be installed in the extension manager or with composer:

```
composer require wdb/be-theme-legacy
```

## Technical background

Module Icons in TYPO3 v14 are usually added inline in the html
code as SVG-markup. This extension is disabling display of these
SVGs and adding a background-icon to the parent element of the
SVGs. Both things are done with CSS only.

The CSS is added conditionally by an EventHandler, depending on
the user-settings.

## individual adjustments and your own theme extension

Please feel free to clone the repository with respect to the license,
and adjust the namespaces to create your own theme.

Furthermore you can copy and paste only the `website` folder into your
own repository of any kind, to easily create a static website on github,io.

For Icons I discovered the icon-repository of TYPO3-developer
Benjamin Kott, pay attention to the "guide" about colors and sizes
as well as icon groups / types.
https://typo3.github.io/TYPO3.Icons/index.html
