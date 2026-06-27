'use client'

import Script from 'next/script'
import { useEffect, useRef } from 'react'
import { track } from '@/lib/tracking'

const GA_ID = 'G-DHQ8SXE0FW'
const PIXEL_ID = '1408932024403985'
const CLARITY_ID = 'xd9nzn45f3'

/** Scroll milestones to track (percent of page height). */
const SCROLL_MILESTONES = [25, 50, 75, 100] as const

function useScrollTracking() {
  const fired = useRef<Set<number>>(new Set())

  useEffect(() => {
    function onScroll() {
      const scrolled =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      for (const milestone of SCROLL_MILESTONES) {
        if (scrolled >= milestone && !fired.current.has(milestone)) {
          fired.current.add(milestone)
          track.scroll(milestone)
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

function TrackingInit() {
  useScrollTracking()

  useEffect(() => {
    // ViewContent: landing page fully loaded and interactive
    track.viewContent()
  }, [])

  return null
}

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>

      {/* Meta Pixel Code */}
      <Script id="meta-pixel-init" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');

          fbq('init', '${PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
      {/* End Meta Pixel Code */}

      {/* Microsoft Clarity */}
      <Script id="clarity-init" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;
            t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];
            y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_ID}");
        `}
      </Script>
      {/* End Microsoft Clarity */}

      <TrackingInit />
      {children}
    </>
  )
}
