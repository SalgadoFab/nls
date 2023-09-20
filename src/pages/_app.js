import { useEffect } from 'react';
import AOS from 'aos';
import { Meta } from '@/components'

import '../styles/styles.scss'
import 'aos/dist/aos.css';


export default function App({ Component, pageProps }) {

  useEffect(() => {
    setTimeout(function () { AOS.init(); }, 1000);
  }, []);

  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  )
}
