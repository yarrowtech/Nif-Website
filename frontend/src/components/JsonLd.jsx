import React, { useEffect } from "react";

/**
 * Injects JSON-LD into <head> and cleans up on unmount.
 * Uses a stable script id so it won't duplicate on re-renders.
 */
export default function JsonLd({ id = "jsonld-default", data }) {
  useEffect(() => {
    if (!data) return;

    const scriptId = `jsonld-${id}`;
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = scriptId;
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [id, data]);

  return null;
}
