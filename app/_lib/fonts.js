import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300','400', '500', '700', '900'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  fallback: ['system-ui','sans-serif'],
});
