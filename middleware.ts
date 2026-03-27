import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // List of locales supported
  locales: ['en', 'ar'],
  
  // Default locale if not in `locales`
  defaultLocale: 'en',

  // Whether to automatically add locale to path if not exists
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

