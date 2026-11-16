import Image from "next/image";

/**
 * A real product screenshot inside the same minimal browser frame the
 * homepage uses. Brief 6.4: a real screen beats an invented mock-up.
 * To refresh: retake, re-crop, replace the file in public/screens/.
 */
export default function Screen({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  priority?: boolean;
}) {
  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_24px_48px_-28px_rgba(15,23,42,0.35)]">
        <div className="flex items-center gap-1.5 border-b border-slate-200 dark:border-slate-800 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
          <span className="ml-4 rounded bg-slate-100 dark:bg-slate-800 px-3 py-0.5 text-[11px] text-slate-500 dark:text-slate-400">
            app.colossalhub.com
          </span>
        </div>
        <Image src={src} alt={alt} width={width} height={height} priority={priority} className="w-full" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs text-slate-500 dark:text-slate-400">{caption}</figcaption>
      )}
    </figure>
  );
}
