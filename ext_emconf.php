<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'Backend Legacy Theme (colored icons)',
    'description' => 'Displayes colored icons in the backend of TYPO3 v14 like in former versions.',
    'category' => 'templates',
    'author' => 'David Bruchmann',
    'author_email' => 'david.bruchmann@gmail.com',
    'state' => 'stable',
    'version' => '1.0.0',
    'constraints' => [
        'depends' => [
            'core' => '14.0.0-14.99.99',
            'backend' => '14.0.0-14.99.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];
