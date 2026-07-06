<?php

declare(strict_types=1);

namespace WDB\BeThemeLegacy\EventListener;

use TYPO3\CMS\Core\Attribute\AsEventListener;
use TYPO3\CMS\Core\Http\ApplicationType;
use TYPO3\CMS\Core\Page\Event\BeforeStylesheetsRenderingEvent;

#[AsEventListener(
    identifier: 'be-theme-legacy/before-stylesheets-rendering-event'
)]
final class BeforeStylesheetsRenderingEventListener extends AbstractEventListener
{
    public function __invoke(BeforeStylesheetsRenderingEvent $event): void
    {
        $request = $this->getRequest();
        if (!$request || !ApplicationType::fromRequest($request)->isBackend()) {
            return;
        }
        $userTheme = $this->getBackendUser()->getUserSettings()->toArray()['theme'] ?? '';
        if ($userTheme === 'be_theme_legacy') {
            $assetCollector = $event->getAssetCollector();
            $this->addStyleSheetFile($assetCollector);
        }
    }

    private function addStyleSheetFile($assetCollector)
    {
        $identifier = 'be-theme-legacy-style';
        $source = 'EXT:be_theme_legacy/Resources/Public/Css/be-theme-legacy.css';
        $attributes = [
            'media' => 'all'
        ];
        $options = [
            'priority' => false,
            'useNonce' => false,
            // 'external' => true,
        ];
        $assetCollector->addStyleSheet($identifier, $source, $attributes, $options);
    }
}
