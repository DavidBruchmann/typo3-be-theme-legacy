<?php

declare(strict_types=1);

namespace WDB\BeThemeLegacy\EventListener;

use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Http\ServerRequest;

class AbstractEventListener
{
    protected function getRequest(): ServerRequest
    {
        return $GLOBALS['TYPO3_REQUEST'];
    }

    protected function getBackendUser(): BackendUserAuthentication
    {
        return $GLOBALS['BE_USER'];
    }
}
