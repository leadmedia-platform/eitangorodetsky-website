import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function Analytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      {/*
        Inline init rendered directly into the server HTML (a plain <script>,
        NOT next/script) so the gtag('config', …) call is present on the first
        server response. next/script injects inline scripts client-side after
        hydration, which left the config out of the static HTML — breaking GSC's
        Google Analytics verification and pre-hydration tracking.
      */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            `window.dataLayer = window.dataLayer || [];` +
            `function gtag(){dataLayer.push(arguments);}` +
            `gtag('js', new Date());` +
            `gtag('config', '${GA_ID}');`,
        }}
      />
    </>
  );
}
