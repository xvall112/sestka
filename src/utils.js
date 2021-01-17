import { parse } from 'query-string';

/**
 * Returns the session storage object
 *
 * @returns {Object}
 */
export const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : {
  getItem: () => undefined,
  setItem: () => undefined,
};

/**
 * Returns the current theme mode. light | dark
 *
 * @returns {string}
 */
export const getThemeMode = () => {
  if (typeof window !== 'undefined') {
    return window.sessionStorage.getItem('themeMode') || 'light';
  }

  return 'light';
}

/**
 * Returns true if the curent theme is in light mode, false otherwise.
 *
 * @returns {boolean}
 */
export const isLightMode = () => getThemeMode() === 'light';

/**
 * Return an object containing the query string parameters.
 *
 * @returns {*}
 */
export const getQueryParams = () => {
  if (typeof window === 'undefined') {
    return {};
  }

  return parse(window.location.search);
};
