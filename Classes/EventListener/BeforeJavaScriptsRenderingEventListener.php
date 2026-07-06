<?php

declare(strict_types=1);

namespace WDB\BeThemeLegacy\EventListener;

use TYPO3\CMS\Core\Attribute\AsEventListener;
use TYPO3\CMS\Core\Http\ApplicationType;
use TYPO3\CMS\Core\Page\Event\BeforeJavaScriptsRenderingEvent;

#[AsEventListener(
    identifier: 'be-theme-legacy/before-javascript-rendering-event'
)]
final class BeforeJavaScriptsRenderingEventListener extends AbstractEventListener
{
    public function __invoke(BeforeJavaScriptsRenderingEvent $event): void
    {
        $request = $this->getRequest();
        if (!$request || !ApplicationType::fromRequest($request)->isBackend()) {
            return;
        }
        $userTheme = $this->getBackendUser()->getUserSettings()->toArray()['theme'] ?? '';
        if ($userTheme === 'be_theme_legacy') {
            $assetCollector = $event->getAssetCollector();
            $this->addJavaScriptFile($assetCollector);
        }
    }

    private function addJavaScriptFile($assetCollector): void
    {
        $identifier = 'be-theme-legacy-script';
        $source = 'EXT:be_theme_legacy/Resources/Public/JavaScript/be-theme-legacy.js';
        $attributes = [];
        $options = [];
        $assetCollector->addJavaScript($identifier, $source, $attributes, $options);
    }
}
