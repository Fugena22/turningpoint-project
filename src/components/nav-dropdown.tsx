"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function NavDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        Khoá học
        <ChevronDown className="size-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Testing</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Content 1</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
