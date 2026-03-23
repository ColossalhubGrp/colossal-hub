"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronRight } from "lucide-react";

interface NavSubItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

interface NavColumn {
  heading: string;
  items: NavSubItem[];
}

interface NavItem {
  label: string;
  href?: string;
  columns?: NavColumn[];
  featured?: { title: string; desc: string; cta: string; badge?: string };
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileMenu({
  open,
  onClose,
  navItems,
}: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-xl overflow-y-auto"
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-lg font-semibold text-slate-900">
                  Colossal Hub
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-slate-500 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setExpanded(
                            expanded === item.label ? null : item.label
                          )
                        }
                        className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            expanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {expanded === item.label && item.columns && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-3 py-1 space-y-3">
                              {item.columns.map((col) => (
                                <div key={col.heading}>
                                  <p className="px-3 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                                    {col.heading}
                                  </p>
                                  <div className="mt-1 space-y-0.5">
                                    {col.items.map((sub) => (
                                      <a
                                        key={sub.title}
                                        href="#"
                                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50"
                                      >
                                        <sub.icon className="h-4 w-4 text-blue-600" />
                                        <div>
                                          <p className="text-sm font-medium text-slate-700">
                                            {sub.title}
                                          </p>
                                          <p className="text-xs text-slate-500">
                                            {sub.desc}
                                          </p>
                                        </div>
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-slate-100 space-y-3">
              <a
                href="#"
                className="block w-full text-center px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
              >
                Sign in
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
              >
                Start now
                <ChevronRight className="ml-1 h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
