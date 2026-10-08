"use client";

import Image from "next/image";
import { useRef } from "react";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
};

/** Image that opens full-size in a native <dialog> — accessible, no library. */
export function ZoomableImage({ src, alt, width, height, className, sizes }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => dialogRef.current?.showModal()}
        className="group block h-full w-full cursor-zoom-in overflow-hidden rounded-xl"
        aria-label={`Enlarge: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className={cn("h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]", className)}
        />
      </button>
      <dialog
        ref={dialogRef}
        onClick={(e) => e.target === dialogRef.current && dialogRef.current.close()}
        className="m-auto max-h-[92dvh] max-w-[92vw] bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto max-h-[92dvh] w-auto object-contain"
        />
        <form method="dialog" className="absolute top-3 right-3">
          <button className="rounded-full bg-black/70 px-4 py-2 text-sm text-white" autoFocus>
            Close
          </button>
        </form>
      </dialog>
    </>
  );
}
