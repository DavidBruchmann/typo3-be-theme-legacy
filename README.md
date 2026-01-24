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
