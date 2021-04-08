import '../prism.less';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import DocsetSwitcher from './docset-switcher';
import Header from './header';
import HeaderButton from './header-button';
import HeaderMenu from './header-menu'
import PropTypes from 'prop-types';
import React, {createContext, useMemo, useRef, useState} from 'react';
import Search from './search';
import styled from '@emotion/styled';
import useLocalStorage from 'react-use/lib/useLocalStorage';
import {Button} from '@apollo/space-kit/Button';
import {
  FlexWrapper,
  Layout,
  MenuButton,
  Sidebar,
  SidebarNav,
  breakpoints,
  colors,
  useResponsiveSidebar
} from 'gatsby-theme-apollo-core';
import {Helmet} from 'react-helmet';
import {IconLayoutModule} from '@apollo/space-kit/icons/IconLayoutModule';
import {Link, graphql, navigate, useStaticQuery} from 'gatsby';
import {MobileLogo} from './mobile-logo';
import {Select} from './select';
import {SelectedLanguageContext} from './multi-code-block';
import {getSpectrumUrl, getVersionBasePath} from '../utils';
import {groupBy} from 'lodash';
import {size} from 'polished';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';

const TopBarWrapper = styled.div({
  display: "none",
  height: 72,
  width: "100%",
  position: "fixed",
  backgroundColor: "white",
  borderBottom: "1px solid #eee",
  zIndex: 1,
  [breakpoints.md]: {
    display: "block"
  },
});

const MainContentWrapper = styled.div({
  [breakpoints.md]: {
    paddingTop: 0
  }
});

const InsideContentWrapper = styled.div({
  width: "100%",
  marginTop: 20
})

const Main = styled.main({
  flexGrow: 1
});

const ButtonWrapper = styled.div({
  flexGrow: 1
});

const StyledButton = styled(Button)({
  width: '100%',
  ':not(:hover)': {
    backgroundColor: colors.background
  }
});

const StyledIcon = styled(IconLayoutModule)(size(16), {
  marginLeft: 'auto'
});

const MobileNav = styled.div({
  display: 'none',
  [breakpoints.md]: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 32,
    color: colors.text1
  }
});

const HeaderInner = styled.span({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: 32
});

const Eyebrow = styled.div({
  flexShrink: 0,
  padding: '8px 56px',
  backgroundColor: colors.background,
  color: colors.primary,
  fontSize: 14,
  position: 'sticky',
  top: 0,
  a: {
    color: 'inherit',
    fontWeight: 600
  },
  [breakpoints.md]: {
    padding: '8px 24px'
  }
});

function getVersionLabel(version) {
  return `v${version}`;
}

const GA_EVENT_CATEGORY_SIDEBAR = 'Sidebar';

function handleToggleAll(expanded) {
  trackCustomEvent({
    category: GA_EVENT_CATEGORY_SIDEBAR,
    action: 'Toggle all',
    label: expanded ? 'expand' : 'collapse'
  });
}

function handleToggleCategory(label, expanded) {
  trackCustomEvent({
    category: GA_EVENT_CATEGORY_SIDEBAR,
    action: 'Toggle category',
    label,
    value: Number(expanded)
  });
}

const MobileLogoWrapper = styled.span({
  width: "50px",
  height: "50px",
  position: "absolute",
  right: "22px"
});

export const NavItemsContext = createContext();

export default function PageLayout(props) {
  const data = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            siteName
            topMenu {
              category
              name
              link
              external
            }
          }
        }
      }
    `
  );

  const {
    sidebarRef,
    openSidebar,
    sidebarOpen,
    handleWrapperClick,
    handleSidebarNavLinkClick
  } = useResponsiveSidebar();

  const buttonRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const selectedLanguageState = useLocalStorage('docs-lang');

  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  const {pathname} = props.location;
  const {siteName, title, topMenu} = data.site.siteMetadata;
  const {
    subtitle,
    sidebarContents,
    versions,
    versionDifference,
    versionBasePath,
    defaultVersion
  } = props.pageContext;
  const {
    spectrumHandle,
    twitterHandle,
    youtubeUrl,
    navConfig = {},
    footerNavConfig,
    logoLink,
    algoliaApiKey,
    algoliaIndexName,
    menuTitle
  } = props.pluginOptions;

  const {navItems, navCategories} = useMemo(() => {
    const navItems = Object.entries(navConfig).map(([title, navItem]) => ({
      ...navItem,
      title
    }));
    return {
      navItems,
      navCategories: Object.entries(groupBy(navItems, 'category'))
    };
  }, [navConfig]);

  const hasNavItems = navItems.length > 0;
  const sidebarTitle = (
    <span className="title-sidebar">{subtitle || siteName}</span>
  );

  return (
    <Layout>
      <Helmet
        titleTemplate={['%s', subtitle, title].filter(Boolean).join(' - ')}
      >
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Helmet>
      
      <TopBarWrapper>
        <Header>
          <MobileNav>
            <MenuButton onClick={openSidebar} />
            <MobileLogoWrapper>
              <MobileLogo />
            </MobileLogoWrapper>
          </MobileNav>
          {algoliaApiKey && algoliaIndexName && (
            <Search
              siteName={siteName}
              apiKey={algoliaApiKey}
              indexName={algoliaIndexName}
            />
          )}
          <HeaderButton />
          <HeaderMenu 
            topMenu={topMenu}
            pathname={pathname}
            pageContext={props.pageContext}
          />
        </Header>
        
      </TopBarWrapper>

      <MainContentWrapper>
        <Main>



          <FlexWrapper onClick={handleWrapperClick}>
            <Sidebar
              responsive
              className="sidebar"
              open={sidebarOpen}
              ref={sidebarRef}
              title={siteName}
              logoLink={logoLink}
              topMenu={topMenu}
              pathname={pathname}
              pageContext={props.pageContext}
            >
              <HeaderInner>
                
                {versions && versions.length > 0 && (
                  <Select
                    feel="flat"
                    size="small"
                    value={versionDifference ? versionBasePath : '/'}
                    onChange={navigate}
                    style={{marginLeft: 8}}
                    options={versions.reduce(
                      (acc, version) => ({
                        ...acc,
                        [getVersionBasePath(version)]: getVersionLabel(version)
                      }),
                      {
                        '/': defaultVersion
                          ? getVersionLabel(defaultVersion)
                          : 'Latest'
                      }
                    )}
                  />
                )}
              </HeaderInner>
              {sidebarContents && (
                <SidebarNav
                  contents={sidebarContents}
                  pathname={pathname}
                  onToggleAll={handleToggleAll}
                  onToggleCategory={handleToggleCategory}
                  onLinkClick={handleSidebarNavLinkClick}
                />
              )}
            </Sidebar>

            <InsideContentWrapper>
              <SelectedLanguageContext.Provider value={selectedLanguageState}>
                <NavItemsContext.Provider value={navItems}>
                  {props.children}
                </NavItemsContext.Provider>
              </SelectedLanguageContext.Provider>
            </InsideContentWrapper>
            
          
          </FlexWrapper>
        </Main>
        {hasNavItems && (
          <DocsetSwitcher
            siteName={menuTitle || siteName}
            spectrumUrl={spectrumHandle && getSpectrumUrl(spectrumHandle)}
            twitterUrl={twitterHandle && `https://twitter.com/${twitterHandle}`}
            youtubeUrl={youtubeUrl}
            navItems={navItems}
            navCategories={navCategories}
            footerNavConfig={footerNavConfig}
            open={menuOpen}
            buttonRef={buttonRef}
            onClose={closeMenu}
          />
        )}
      </MainContentWrapper>
    </Layout>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
  pluginOptions: PropTypes.object.isRequired
};
