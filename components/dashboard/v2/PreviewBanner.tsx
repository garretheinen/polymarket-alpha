"use client";

import { AnimatePresence, motion } from "framer-motion";

interface PreviewBannerProps {
  observedName?: string | null;
}

export default function PreviewBanner({
  observedName,
}: PreviewBannerProps) {
  return (
    <AnimatePresence>
      {observedName && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{
            duration: 0.18,
            ease: "easeOut",
          }}
          className="
            mb-5
            rounded-2xl
            border
            border-blue-100
            bg-blue-50/40
            p-4
          "
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-blue-600">
            Preview
          </p>

          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            {observedName}
          </h3>

          <p className="mt-1 text-sm text-slate-600">
            Click to view intelligence
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}