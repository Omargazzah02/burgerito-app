"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Nav() {
  const { data: session } = useSession();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

 

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black py-4 px-4 md:px-10 shadow-md flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-[var(--orange-color)] font-bold text-2xl hover:opacity-90 transition"
        >
          BURGERITO (ADMIN)
        </Link>

        {/* ---- Version Bureau ---- */}
        <div className="hidden md:flex gap-4 items-center">
          {session ? (
            <>
              <button
                className="button--red hover:opacity-90 transition"
                onClick={() => signOut({ callbackUrl: "/login" })}
              >
                Me déconnecter
              </button>
              <Link
                href="/me"
                className="button--orange hover:opacity-90 transition"
              >
                Mon profil
              </Link>

             
            </>
          ) : (
            <>
              <Link
                href="/register"
                className="button--gray hover:opacity-90 transition"
              >
                Inscription
              </Link>
              <Link
                href="/login"
                className="button--orange hover:opacity-90 transition"
              >
                Connexion
              </Link>
            </>
          )}
        </div>

        {/* ---- Bouton Mobile ---- */}
        <div className="flex items-center gap-4 md:hidden">
         
          <button
            className="text-2xl text-white"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>

        {/* ---- Menu Mobile ---- */}
        {isMenuOpen && (
          <div className="absolute top-16 right-4 bg-white text-black shadow-lg rounded-lg flex flex-col gap-3 p-4 z-[9999] w-56 md:hidden">
            {session ? (
              <>
                <button
                  className="text-left text-red-600 font-semibold"
                  onClick={() => {
                    signOut({ callbackUrl: "/login" });
                    setIsMenuOpen(false);
                  }}
                >
                  Me déconnecter
                </button>

                <Link
                  href="/me"
                  className="text-[var(--orange-color)] font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mon profil
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/register"
                  className="button--gray text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inscription
                </Link>
                <Link
                  href="/login"
                  className="button--orange text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Connexion
                </Link>
              </>
            )}
          </div>
        )}
      </nav>

    
      <div className="pt-24" />
    </>
  );
}
