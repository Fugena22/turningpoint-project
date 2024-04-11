import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/Logo.png" alt="logo" width={200} height={20} priority />
    </Link>
  );
}
