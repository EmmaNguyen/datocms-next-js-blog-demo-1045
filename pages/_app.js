import '../styles/index.css'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="ga-load"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-B64QP05MRG`}
        />

      <Script id="ga-push" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-B64QP05MRG');
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
