import type { Metadata } from 'next';
import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import { Toaster } from 'react-hot-toast';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import CurrentlyListening from '@/components/currently-listening';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matthew | Personal Portfolio',
  description: "Matthew's Website!.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className='bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]' />
        <div className='bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[15rem] 2xl:left-[-5rem] dark:bg-[#676394]' />
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position='top-right' />
            <ThemeSwitch />
            <div className='hidden lg:block'>
              <CurrentlyListening />
            </div>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <div className='bg-[#f0fbdd] absolute bottom-[-1rem] -z-10 right-[4rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#7f9952]' />
        <div className='bg-[#f6ead4] absolute bottom-[-1rem] -z-10 left-[-30rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] md:left-[-10rem] lg:left-[1rem] xl:left-[5rem] 2xl:left-[10rem] dark:bg-[#9f7e41]' />
      </body>
    </html>
  );
}
