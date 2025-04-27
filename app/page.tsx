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
  const isMobile = width < 768;
  const backgroundSrc = isMobile
    ? siteConfig.navBackground.mobile
    : siteConfig.navBackground.desktop;

  if (!width || !height) {
    return (
      <section className="relative w-screen h-screen overflow-hidden">
        <Image
          fill
          priority
          alt="Background illustration"
          className="object-cover object-center select-none"
          sizes="100vw"
          src={backgroundSrc}
        />
      </section>
    );
  }

  // compute object-cover scale + center offset for 1920×1080 artboard
  const scale = Math.max(width / 1920, height / 1080);
  const offsetX = (width - 1920 * scale) / 2;
  const offsetY = (height - 1080 * scale) / 2;

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background */}
      <Image
        fill
        priority
        alt="Background illustration"
        className="object-cover object-center select-none"
        sizes="100vw"
        src={backgroundSrc}
      />

      {/* Nav items */}
      {siteConfig.navItems.map((item) => {
        const placement = isMobile
          ? item.placement.mobile
          : item.placement.desktop;
        const { x: px, y: py } = placement;

        const { width: bw, height: bh } = item.baseSize;
        const w = bw * scale;
        const h = bh * scale;

        const x = px * scale + offsetX;
        const y = py * scale + offsetY;

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
            <div
              className="relative overflow-hidden rounded"
              style={{ width: `${w}px`, height: `${h}px` }}
            >
              <Image
                fill
                alt={item.label}
                className="object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                src={item.coverImage}
              />
              {item.hoverImage && (
                <Image
                  fill
                  alt={`${item.label} hover`}
                  className="object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  src={item.hoverImage}
                />
              )}
            </div>
          </Link>
        );
      })}
    </section>
  );
}
