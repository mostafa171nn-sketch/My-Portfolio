import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import '../globals.css';

export async function generateMetadata() {
  return {
    title: "Mostafa Omar - Professional Web Developer Portfolio",
    description: "Front-end developer specializing in React, Next.js, Tailwind. Building clean, interactive websites.",
  };
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}

