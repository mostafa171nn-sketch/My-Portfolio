'use server';

import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const effectiveLocale = locale ?? 'en';
  return {
    messages: (await import(`./messages/${effectiveLocale}.json`)).default,
    locale: effectiveLocale
  };
});
