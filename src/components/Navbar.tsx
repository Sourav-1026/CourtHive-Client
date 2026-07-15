"use client";

import React, { useState } from "react";
import { Button } from "@heroui/react";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { MdLogin } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { usePathname } from "next/navigation";
import AvatarDropDown from "./AvatarDropDown";
import { authClient } from "@/lib/auth-client";

interface NavLink {
  href: string;
  label: string;
}

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/courts", label: "Courts" },
    ...(user
      ? [
          { href: "/add-court", label: "Add Court" },
          { href: "/my-listings", label: "My Listings" },
          { href: "/my-bookings", label: "My Bookings" },
        ]
      : []),
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string): boolean =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-[#0d1f14] backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <p className="font-bold text-lime-400 text-lg">CourtHive</p>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm text-white transition-colors pb-1 ${isActive(link.href) ? "border-b-2 border-lime-400  font-medium" : "hover:text-lime-400"}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop auth */}
        <div className="hidden md:flex items-center gap-1.5">
          {user ? (
            <AvatarDropDown user={user} />
          ) : (
            <>
              <Link href="/login">
                <Button className="rounded-none bg-transparent text-lime-500 border border-lime-500 hover:bg-lime-400 hover:text-white">
                  Login
                  <MdLogin />
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="rounded-none bg-lime-500 text-black hover:bg-lime-400">
                  Register
                  <MdLogin />
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile right side */}
        <div className="flex md:hidden items-center gap-3">
          {user && <AvatarDropDown user={user} />}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-lime-500 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-separator bg-[#0d1f14] backdrop-blur-lg px-6 py-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm text-white font-medium transition-colors block py-1 ${isActive(link.href) ? "border-l-2 border-lime-400 pl-3 " : "hover:text-lime-300"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {!user && (
            <div className="flex flex-col gap-2 pt-2 border-t border-separator">
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                <Button className="rounded-none bg-transparent text-lime-500 border border-lime-500 hover:bg-lime-400 hover:text-white w-full">
                  Login
                  <BiLogIn />
                </Button>
              </Link>
              <Link href="/signup" onClick={() => setMenuOpen(false)}>
                <Button className="rounded-none bg-lime-500 text-black w-full hover:bg-lime-400">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
