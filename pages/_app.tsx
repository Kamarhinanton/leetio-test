import '@/styles/index.scss'
import type { AppProps } from 'next/app'
import {GlobalProvider} from "@/context/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  );
}
