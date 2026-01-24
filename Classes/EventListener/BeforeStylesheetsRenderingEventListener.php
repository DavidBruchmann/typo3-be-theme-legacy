<?php
declare(strict_types=1);

namespace WDB\BeThemeLegacy\EventListener;

use TYPO3\CMS\Core\Page\Event\BeforeStylesheetsRenderingEvent;
use TYPO3\CMS\Core\Http\ApplicationType;

/*
#[AsEventListener(
    identifier: 'WDB\BeThemeLegacy\EventListener\ThemeLegacy',
    event: BeforeStylesheetsRenderingEvent::class
    // before: 'someIdentifier, anotherIdentifier',
)]
*/
final class BeforeStylesheetsRenderingEventListener
{
    public function __invoke(BeforeStylesheetsRenderingEvent $event): void
    {
        $request = $this->getRequest();
        if (!$request || !ApplicationType::fromRequest($request)->isBackend()) {
            return;
        }
        $userTheme = $this->getBackendUser()->uc['theme'] ?? '';
        if ($userTheme === 'be_theme_legacy') {
            $identifier = 'be-theme-legacy-style';
            $source = 'EXT:be_theme_legacy/Resources/Public/Css/theme.css';
            $attributes = [
                'media' => 'all'
            ];
            $options = [
                'priority' => false,
                'useNonce' => false,
                // 'external' => true,
            ];
            $assetCollector = $event->getAssetCollector()->addStyleSheet($identifier, $source, $attributes, $options);
        }
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
