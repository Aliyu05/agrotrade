import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat_500 = Montserrat({
  subsets: ["latin"],
  weight: "500",
});

export default function NavBar() {
  return (
    <div>
      <nav className="h-[58px] flex items-center px-4 md:px-20">
        {/* Navbar */}
        <div className="w-full flex flex-row justify-between items-center">
          {/* Logo */}
          <ul className="hidden md:flex flex-row items-center gap-4 md:gap-12">
            <li>
              <Image width={38} height={38} src="/AGROTRADE.png" alt="logo" />
            </li>
            {/* Navbar items */}
            <li
              className={`${montserrat_500.className} text-green-700 hover:text-yellow-700`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`${montserrat_500.className} text-green-700 hover:text-yellow-700`}
            >
              <Link href="/products">Products</Link>
            </li>
            <li
              className={`${montserrat_500.className} text-green-700 hover:text-yellow-700`}
            >
              <Link href="/about-us">About us</Link>
            </li>
            <li
              className={`${montserrat_500.className} text-green-700 hover:text-yellow-700`}
            >
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>

          {/* Mobile view: Show "Home" and "Products" links on the left */}
          <div className="md:hidden flex flex-row items-center gap-4">
            <Link
              href="/"
              className={`${montserrat_500.className} text-green-700 hover:text-yellow-700`}
            >
              Home
            </Link>
            <Link
              href="/products"
              className={`${montserrat_500.className} text-green-700 hover:text-yellow-700`}
            >
              Products
            </Link>
          </div>
          
          {/* Sign up link on the right */}
          <Link
            href="/auth/signup"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* Separator */}
      <div className="grid grid-cols-3">
        <div className="h-[4px] bg-green-500"></div>
        <div className="h-[4px] bg-yellow-500"></div>
        <div className="h-[4px] bg-red-500"></div>
      </div>
    </div>
  );
}


