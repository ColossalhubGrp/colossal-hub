"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { loginUrl, navLinks, products, site } from "@/lib/site";

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/30 dark:bg-black/60"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.22, ease: "easeOut" }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col overflow-y-auto bg-white dark:bg-slate-900"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-16 items-center justify-between border-b border-slate-200 dark:border-slate-800 px-4">
              <span className="text-lg font-semibold text-slate-900 dark:text-white">{site.name}</span>
              <button onClick={onClose} className="rounded-md p-2 text-slate-500 dark:text-slate-400" aria-label="Close menu">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-4 py-5">
              <p className="px-2 text-xs font-medium text-slate-500 dark:text-slate-400">Products</p>
              <ul className="mt-2">
                {products.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} onClick={onClose} className="flex items-center justify-between rounded-md px-2 py-2.5 text-[15px] font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800">
                      {p.name}
                      {p.soon && <span className="text-xs font-normal text-slate-500 dark:text-slate-400">Coming soon</span>}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="mt-4 border-t border-slate-200 dark:border-slate-800 pt-4">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} onClick={onClose} className="block rounded-md px-2 py-2.5 text-[15px] font-medium text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto space-y-2 border-t border-slate-200 dark:border-slate-800 p-4">
              <a href={loginUrl} target="_blank" rel="noopener noreferrer" onClick={onClose} className="block rounded-md border border-slate-300 dark:border-slate-700 py-2.5 text-center text-sm font-medium text-slate-800 dark:text-slate-100">
                Log in
              </a>
              <Link href="/demo" onClick={onClose} className="block rounded-md bg-blue-600 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-700">
                Book a demo
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
