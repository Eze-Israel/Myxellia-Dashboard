import { FC } from "react";
import { Home, Users, FileText, Search, ShoppingBagIcon } from "lucide-react";

import Link from "next/link";

const Header: FC = () => {
  return (
    <nav className="w-full bg-white text-black flex items-center justify-between px-[100px] py-4">
        <Link href="/" className="flex items-center gap-1 hover:text-gray-300">
          <Home size={18} /> Dashboard
        </Link>
        <Link href="/listings" className="flex items-center gap-1 hover:text-gray-300">
          <ShoppingBagIcon size={18} /> Listings
        </Link>
        <Link href="/users" className="flex items-center gap-1 hover:text-gray-300">
          <Users size={18} /> Users
        </Link>
        <Link href="/request" className="flex items-center gap-1 hover:text-gray-300">
          <FileText size={18} /> Request
        </Link>
        <Link href="/applications" className="flex items-center gap-1 hover:text-gray-300">
          <FileText size={18} /> Applications
        </Link>
         <button className="p-2 rounded-full bg-white text-black">
        <Search size={18} />
      </button>
     
    </nav>
  );
};

export default Header;
