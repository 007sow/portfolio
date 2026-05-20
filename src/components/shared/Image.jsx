import React, { useState } from "react";
import { IKImage } from "imagekitio-react";

function Image({ src, className = "", w, h, alt = "", style }) {
  const [failed, setFailed] = useState(false);
  const endpoint = import.meta.env.VITE_IK_URL_ENDPOINT;
  const canUseImageKit = Boolean(endpoint && src && !failed);
  const directSrc = src?.startsWith("http") || src?.startsWith("/") ? src : null;

  if (canUseImageKit) {
    return (
      <IKImage
        urlEndpoint={endpoint}
        path={src}
        className={className}
        width={w}
        height={h}
        alt={alt}
        lqip={{ active: true, quality: 20 }}
        transformation={[
          {
            width: w,
            height: h,
          },
        ]}
        style={style}
        onError={() => setFailed(true)}
      />
    );
  }

  if (directSrc) {
    return (
      <img
        src={directSrc}
        className={className}
        width={w || undefined}
        height={h || undefined}
        alt={alt}
        style={style}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div
      className={`flex min-h-44 items-center justify-center bg-white/65 text-center text-sm font-semibold text-stone-600 dark:bg-black/20 dark:text-slate-300 ${className}`}
      style={style}
      role="img"
      aria-label={alt}
    >
      <div className="flex flex-col items-center gap-3 px-6">
        <span className="h-10 w-10 rounded-full border border-current opacity-30" />
        <span>{alt || "Project preview"}</span>
      </div>
    </div>
  );
}

export default Image;
