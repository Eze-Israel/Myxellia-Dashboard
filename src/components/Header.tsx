import { FC } from "react";
import { Home, User, FileText, Search,  ScrollText, } from "lucide-react";
import { FaToolbox, } from "react-icons/fa";
import { Input } from "@/components/ui/Input";
import Link from "next/link";

const Header: FC = () => {
  return (
    <nav className="w-full bg-white text-black flex items-center justify-between md:px-[80px] py-6">
        <Link href="/" className="flex text-sm items-center gap-2 hover:bg-gray-200 p-2 px-6 rounded-lg text-lg hover:font-bold">
          <Home size={20} /> Dashboard
        </Link>
        <Link href="/" className="flex text-sm items-center gap-2 hover:bg-gray-200 p-2 px-6 rounded-lg text-lg hover:font-bold">
          <FaToolbox size={20} /> Listings
        </Link>
        <Link href="/" className="flex text-sm items-center gap-2 hover:bg-gray-200 p-2 px-6 rounded-lg text-lg hover:font-bold">
          <User size={20} /> Users
        </Link>
        <Link href="/" className="flex text-sm items-center gap-2 hover:bg-gray-200 p-2 px-6 rounded-lg text-lg hover:font-bold">
          <FileText size={20} /> Request
        </Link>
        <Link href="/" className="flex text-sm items-center gap-2 hover:bg-gray-200 p-2 px-6 rounded-lg text-lg hover:font-bold">
          <ScrollText size={20} /> Applications
        </Link>
          <div className="relative hidden md:block w-80 ml-2">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black" />
            <Input placeholder="Search candidates, jobs..." className="pl-9 text-black" />
            </div>
    </nav>
  );
};

export default Header;
