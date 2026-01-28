<?php
declare(strict_types=1);

namespace WDB\BeThemeLegacy\EventListener;

use TYPO3\CMS\Core\Page\Event\BeforeJavaScriptsRenderingEvent;
use TYPO3\CMS\Core\Http\ApplicationType;

/*
#[AsEventListener(
    identifier: 'WDB\BeThemeLegacy\EventListener\ThemeLegacy',
    event: BeforeJavaScriptsRenderingEvent::class
    // before: 'someIdentifier, anotherIdentifier',
)]
*/
final class BeforeJavaScriptsRenderingEventListener
{
    public function __invoke(BeforeJavaScriptsRenderingEvent $event): void
    {
        $request = $this->getRequest();
        if (!$request || !ApplicationType::fromRequest($request)->isBackend()) {
            return;
        }
        $userTheme = $this->getBackendUser()->uc['theme'] ?? '';
        if ($userTheme === 'be_theme_legacy') {
            $assetCollector = $event->getAssetCollector();
            $this->addJavaScriptFile($assetCollector);
        }
    }

    private function addJavaScriptFile($assetCollector)
    {
        $identifier = 'be-theme-legacy-script';
        $source = 'EXT:be_theme_legacy/Resources/Public/JavaScript/be-theme-legacy.js';
        $attributes = [];
        $options = [];
        $assetCollector->addJavaScript($identifier, $source, $attributes, $options);
    }

    private function getRequest()
    {
        return $GLOBALS['TYPO3_REQUEST'] ?? null;
    }

    private function getBackendUser()
    {
        return $GLOBALS['BE_USER'] ?? null;
    }
}
