'use client';

import Script from 'next/script';

// Global tracking functions
declare global {
  interface Window {
    fbq: (command: string, ...args: unknown[]) => void;
  }
}

// Utility functions for tracking events
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

export const trackViewContent = (contentName?: string) => {
  trackEvent('ViewContent', contentName ? { content_name: contentName } : undefined);
};

export const trackLead = () => {
  trackEvent('Lead');
};

export const trackSchedule = () => {
  trackEvent('Schedule');
};

export const trackCustomEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  }
};

// Video tracking functions
export const trackVideoUnmuted = (videoName?: string) => {
  trackCustomEvent('VideoUnmuted', videoName ? { video_name: videoName } : undefined);
};

export const trackVideo10Percent = (videoName?: string) => {
  trackCustomEvent('Video10Percent', videoName ? { video_name: videoName } : undefined);
};

export const trackVideo25Percent = (videoName?: string) => {
  trackCustomEvent('Video25Percent', videoName ? { video_name: videoName } : undefined);
};

export const trackVideo50Percent = (videoName?: string) => {
  trackCustomEvent('Video50Percent', videoName ? { video_name: videoName } : undefined);
};

export const trackVideo75Percent = (videoName?: string) => {
  trackCustomEvent('Video75Percent', videoName ? { video_name: videoName } : undefined);
};

export const trackVideoComplete = (videoName?: string) => {
  trackCustomEvent('VideoComplete', videoName ? { video_name: videoName } : undefined);
};

// Button tracking function
export const trackButtonClick = (location: string, buttonText: string, scrollDepth?: number) => {
  const parameters: Record<string, unknown> = {
    button_location: location,
    button_text: buttonText,
    page: typeof window !== 'undefined' ? window.location.pathname : undefined
  };

  if (scrollDepth !== undefined) {
    parameters.scroll_depth = scrollDepth;
  }

  trackEvent('InitiateCheckout', parameters);
};

export default function MetaPixel() {
  return (
    <>
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1123464865960130');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1123464865960130&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
}