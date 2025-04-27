"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";

export default function Home() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const onResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });

    onResize();
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);
  const { width, height } = size;

  if (!width || !height) {
    return (
      <section className="relative w-screen h-screen overflow-hidden">
        <Image
          fill
          priority
          alt="Background illustration"
          className="object-cover object-center select-none"
          sizes="100vw"
          src={siteConfig.mainBackground}
        />
      </section>
    );
  }

  const scale = Math.max(width / 1920, height / 1080);
  const offsetX = (width - 1920 * scale) / 2;
  const offsetY = (height - 1080 * scale) / 2;

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      <Image
        fill
        priority
        alt="Background illustration"
        className="object-cover object-center select-none"
        sizes="100vw"
        src={siteConfig.mainBackground}
      />

      {siteConfig.navItems.map((item) => {
        const x = item.placement.x * scale + offsetX;
        const y = item.placement.y * scale + offsetY;

        const base = item.baseSize ?? { width: 128, height: 128 };
        const w = base.width * scale;
        const h = base.height * scale;

        const coverImage = item.coverImage;
        const hoverImage = item.hoverImage;

        return (
          <Link
            key={item.label}
            className="group absolute"
            href={item.href}
            style={{
              left: `${x}px`,
              top: `${y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {coverImage ? (
              <div
                className="relative overflow-hidden rounded"
                style={{ width: `${w}px`, height: `${h}px` }}
              >
                <Image
                  fill
                  alt={item.label}
                  className={`object-contain ${hoverImage ? "transition-opacity duration-100 group-hover:opacity-0" : ""}`}
                  src={coverImage}
                />
                {hoverImage && (
                  <Image
                    fill
                    alt={item.label}
                    className={`opacity-0 object-contain ${hoverImage ? "transition-opacity duration-100 group-hover:opacity-100" : ""}`}
                    src={hoverImage}
                  />
                )}
              </div>
            ) : (
              <span
                className="text-white text-lg font-semibold drop-shadow"
                style={{
                  fontSize: `${16 * scale}px`,
                }}
              >
                {item.label}
              </span>
            )}
          </Link>
        );
      })}
    </section>
  );
}
