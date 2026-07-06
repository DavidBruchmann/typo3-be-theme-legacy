<?php

declare(strict_types=1);

defined('TYPO3') or die();

$GLOBALS['TCA']['be_users']['columns']['user_settings']['columns']['theme']['config']['items'][] = [
    'label' => 'Legacy Theme (colored icons)',
    'value' => 'be_theme_legacy',
];
