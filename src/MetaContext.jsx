import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
const API = import.meta.env.VITE_API_PAGEMETA_ROUTE;


export function MetaProvider({ children }) {
  const loc = useLocation();
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    fetch(`${API}?route=${encodeURIComponent(loc.pathname)}`)
      .then(r => r.json())
      .then(data => setMeta(data))
      .catch(() => setMeta(null));
  }, [loc.pathname]);

  return (
    <>
      <Helmet>
        {/* default tags if you want */}
      </Helmet>

      {meta && (
        <Helmet>
          {meta.title && <title>{meta.title}</title>}
          {meta.description && <meta name="description" content={meta.description} />}
          {meta.keywords && <meta name="keywords" content={meta.keywords} />}
          {meta.favicon && <link rel="icon" href={meta.favicon} type="image/png" />}
        </Helmet>
      )}

      {children}
    </>
  );
}
