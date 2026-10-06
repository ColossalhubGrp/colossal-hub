"use client";

import { usePathname } from "next/navigation";
import { pageNames, whatsappLink } from "@/lib/site";

export function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36A9.42 9.42 0 0 1 2.6 12.04C2.6 6.84 6.84 2.6 12.05 2.6a9.38 9.38 0 0 1 6.67 2.77 9.38 9.38 0 0 1 2.76 6.68c0 5.2-4.24 9.45-9.43 9.45zm8.03-17.48A11.26 11.26 0 0 0 12.05.7C5.8.7.7 5.8.7 12.04c0 2 .52 3.95 1.52 5.67L.6 23.6l6.02-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.35-11.34 0-3.03-1.18-5.88-3.32-8.03z" />
    </svg>
  );
}

export default function WhatsAppButton() {
  const pathname = usePathname();
  const from = pageNames[pathname] ?? `${pathname} on your website`;
  const href = whatsappLink(`Hello Colossal Hub. I'm on ${from} and have a question.`);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-slate-900/20 transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <WhatsAppGlyph className="h-7 w-7" />
    </a>
  );
}
