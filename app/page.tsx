import Image from "next/image";

import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="relative w-screen h-screen">
        <Image
          fill
          priority
          alt="Full-screen hero"
          className="object-cover object-center"
          sizes="100vw"
          src={siteConfig.mainBackground}
        />
      </div>
    </section>
  );
}
