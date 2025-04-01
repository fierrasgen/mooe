export const GITHUB_PAGES_PREFIX = '/mooe';

export const ROUTES = {
    INDEX: GITHUB_PAGES_PREFIX,
    ADMIN: `${GITHUB_PAGES_PREFIX}/admin`,
    ABOUT: `${GITHUB_PAGES_PREFIX}/about`,
    CATALOG: `${GITHUB_PAGES_PREFIX}/catalog/:category`,
    CARD: `${GITHUB_PAGES_PREFIX}/catalog/:category/:id`,
    CONTACTS: `${GITHUB_PAGES_PREFIX}/contacts`
};
