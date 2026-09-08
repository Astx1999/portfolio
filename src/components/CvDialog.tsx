"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { site } from "@/data/site";
import { withBasePath } from "@/lib/basePath";

type CvContextValue = {
  openCv: () => void;
};

const CvContext = createContext<CvContextValue | null>(null);

export function CvProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [previewHeight, setPreviewHeight] = useState(1400);
  const href = withBasePath(site.cv);

  const openCv = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const update = () => {
      const width = scroller.clientWidth;
      setPreviewHeight(Math.ceil(width * site.cvPageRatio));
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(scroller);
    return () => observer.disconnect();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement;
    const scrollY = window.scrollY;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", onKey);
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [open, close]);

  return (
    <CvContext.Provider value={{ openCv }}>
      {children}
      {open ? (
        <div className="fixed inset-0 z-[200] flex items-end justify-center p-2 sm:items-center sm:p-6">
          <button
            type="button"
            className="absolute inset-0 bg-[var(--ink)]/45 backdrop-blur-sm"
            aria-label="Close CV"
            onClick={close}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex h-[min(94dvh,920px)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)] shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-[var(--border-subtle)] px-4 py-3">
              <p
                id={titleId}
                className="font-[family-name:var(--font-syne)] text-sm font-semibold text-[var(--ink)]"
              >
                Astghik H. CV
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={href}
                  download="Astghik-Hovhannisyan-CV.pdf"
                  className="rounded-full bg-gradient-to-r from-[var(--copper)] via-[#fb923c] to-[var(--accent-pink)] px-3.5 py-1.5 text-xs font-semibold text-white"
                >
                  Download
                </a>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-lg leading-none text-[var(--muted)] transition-colors hover:bg-[var(--surface-soft)] hover:text-[var(--ink)]"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>
            <div
              ref={scrollerRef}
              className="min-h-0 flex-1 touch-pan-y overflow-y-auto overscroll-contain bg-white [-webkit-overflow-scrolling:touch]"
            >
              {Array.from({ length: site.cvPageCount }, (_, index) => (
                <iframe
                  key={index}
                  title={`Astghik H. CV, page ${index + 1}`}
                  src={`${href}#page=${index + 1}&view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                  scrolling="no"
                  className="pointer-events-none block w-full border-0"
                  style={{ height: previewHeight }}
                />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </CvContext.Provider>
  );
}

export function OpenCvButton({
  className,
  children = "CV",
  onOpen,
}: {
  className?: string;
  children?: React.ReactNode;
  onOpen?: () => void;
}) {
  const { openCv } = useCv();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onOpen?.();
        openCv();
      }}
    >
      {children}
    </button>
  );
}

function useCv() {
  const value = useContext(CvContext);
  if (!value) {
    throw new Error("OpenCvButton must be used within CvProvider");
  }
  return value;
}
