import * as React from "react";

const DEFAULT_FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'%3E%3Crect width='100%25' height='100%25' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%2364748B'%3EImage unavailable%3C/text%3E%3C/svg%3E";

export function ImageWithFallback(
  props: React.ImgHTMLAttributes<HTMLImageElement>,
) {
  const { src: incomingSrc, onError, ...rest } = props;

  const normalizeSrc = (s?: string) => {
    if (!s) return undefined;
    if (s.startsWith("http")) return s;
    return s.startsWith("/") ? s : `/${s}`;
  };

  const [src, setSrc] = React.useState<string | undefined>(
    normalizeSrc(incomingSrc),
  );

  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setSrc(DEFAULT_FALLBACK);
    onError?.(e);
  };

  return (
    <img
      loading="lazy"
      referrerPolicy="no-referrer"
      crossOrigin="anonymous"
      {...rest}
      src={src}
      onError={handleError}
    />
  );
}
