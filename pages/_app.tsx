import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { CartProvider } from '@/context/cart'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CartProvider>
      <Component { ...pageProps } />
    </CartProvider>
    
  )
}
