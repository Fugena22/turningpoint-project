import Logo from "@/components/logo";
import NavDropdown from "@/components/nav-dropdown";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-[#FAFAFA] w-full fixed top-0 left-0 right-0">
      <div className="container">
        <div className="flex items-center justify-between py-2 h-20">
          <Logo />
          <div className="flex gap-4 text-primary items-start">
            <NavDropdown />
            <Link href="/">Về chúng tôi</Link>
          </div>
          <div>
            <Button variant="link" size="default">
              Đăng nhập
            </Button>
            <Button variant="default" size="default">
              Đăng ký
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
