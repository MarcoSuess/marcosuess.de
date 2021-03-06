'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">portfolio documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-fc7028ea33c60902c9e2996568dee991afd359a561ddf6d784e69b704d719ada96592f5a8be1b82ced078ff72d4f9d331e5ffe5f7345e17bd802f280c0218965"' : 'data-target="#xs-components-links-module-AppModule-fc7028ea33c60902c9e2996568dee991afd359a561ddf6d784e69b704d719ada96592f5a8be1b82ced078ff72d4f9d331e5ffe5f7345e17bd802f280c0218965"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-fc7028ea33c60902c9e2996568dee991afd359a561ddf6d784e69b704d719ada96592f5a8be1b82ced078ff72d4f9d331e5ffe5f7345e17bd802f280c0218965"' :
                                            'id="xs-components-links-module-AppModule-fc7028ea33c60902c9e2996568dee991afd359a561ddf6d784e69b704d719ada96592f5a8be1b82ced078ff72d4f9d331e5ffe5f7345e17bd802f280c0218965"' }>
                                            <li class="link">
                                                <a href="components/AboutSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogDataProtectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogDataProtectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogLegalNoticeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogLegalNoticeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogSubmitReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DialogSubmitReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SkillsSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SkillsSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkSectionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AnchorScrollService.html" data-type="entity-link" >AnchorScrollService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ContactService.html" data-type="entity-link" >ContactService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjectsService.html" data-type="entity-link" >ProjectsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});