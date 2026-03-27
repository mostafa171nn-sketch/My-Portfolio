import { redirect } from 'next/navigation';
import { getLocale, getTranslations } from 'next-intl/server';

export default function RootPage() {
  // With middleware configured, getLocale will return default 'en' or detected locale
  // Redirect to localized path for proper provider context
  const locale = 'en'; // Default, or await getLocale() if server component allows
  redirect(`/${locale}`);
}

