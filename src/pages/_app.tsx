import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import '@/styles/globals.css'

const openSans = Open_Sans({ subsets: ['latin'] })
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={openSans.className}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  )
}
