(function() {
    const patchIconParts = async (element) => {
        // ait for definitions and first render-cycle (Lit-Standard)
        await customElements.whenDefined(element.localName);
        const IconProto = customElements.get('typo3-backend-icon').prototype;
        const originalUpdate = IconProto.update;

        // 2. Die update-Methode patchen
        IconProto.update = function(changedProperties) {
            // original rendering of Lit
            originalUpdate.call(this, changedProperties);
            // set attributes after Lit rebuilt DOM
            const shadow = this.shadowRoot;
            if (shadow) {
                const svg = shadow.querySelector('svg');
                const wrapper = shadow.querySelector('.icon-markup') || shadow.querySelector('span');
                if (svg && !svg.hasAttribute('part')) {
                    svg.setAttribute('part', 'svg');
                }
                if (wrapper && !wrapper.hasAttribute('part')) {
                    wrapper.setAttribute('part', 'icon');
                }
            }
        };
    };

    const observer = new MutationObserver((mutations) => {
        mutations.forEach(m => m.addedNodes.forEach(node => {
            if (node.nodeType === 1) {
                if (node.tagName === 'TYPO3-BACKEND-ICON') patchIconParts(node);
                node.querySelectorAll('typo3-backend-icon').forEach(patchIconParts);
            }
        }));
    });
    observer.observe(document.body, { childList: true, subtree: true });
    const breadcrumbIcon = document.querySelector('.breadcrumb-item-first typo3-backend-icon');
    if (breadcrumbIcon) {
        patchIconParts(breadcrumbIcon);
    }
})();
