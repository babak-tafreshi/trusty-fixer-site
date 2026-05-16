import { useEffect } from "react";

interface Options {
  title: string;
  description?: string;
  canonical?: string;
}

/** Lightweight per-route head setter (no react-helmet dependency). */
export function useDocumentHead({ title, description, canonical }: Options) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setOg = (property: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    if (description) {
      setMeta("description", description);
      setOg("og:description", description);
    }
    setOg("og:title", title);

    let linkEl: HTMLLinkElement | null = null;
    if (canonical) {
      linkEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!linkEl) {
        linkEl = document.createElement("link");
        linkEl.setAttribute("rel", "canonical");
        document.head.appendChild(linkEl);
      }
      linkEl.setAttribute("href", canonical);
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, canonical]);
}
