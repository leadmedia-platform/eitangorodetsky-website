import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim();

export default function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      {/*
        strategy="beforeInteractive" → Next injects these into the <head> of the
        initial server HTML. Google Search Console's "Google Analytics"
        verification requires the gtag snippet to live in <head>, and it gives
        more reliable tracking (runs before hydration). GA_ID is .trim()'d to
        guard against a stray newline in the env value.
      */}
      <Script
        id="ga-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="beforeInteractive"
      />
      <Script id="ga-init" strategy="beforeInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
