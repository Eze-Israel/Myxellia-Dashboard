import { FC } from "react";
import { Home, Users, FileText, Search, LucideHandbag , FileBarChart} from "lucide-react";
import { Input } from "@/components/ui/Input";
import Link from "next/link";

const Header: FC = () => {
  return (
    <nav className="w-full bg-white text-black flex items-center justify-between px-[100px] py-6">
        <Link href="/" className="flex items-center gap-1 hover:text-gray-300">
          <Home size={18}  /> Dashboard
        </Link>
        <Link href="/listings" className="flex items-center gap-1 hover:text-gray-300">
          <LucideHandbag size={18} /> Listings
        </Link>
        <Link href="/users" className="flex items-center gap-1 hover:text-gray-300">
          <Users size={18} /> Users
        </Link>
        <Link href="/request" className="flex items-center gap-1 hover:text-gray-300">
          <FileText size={18} /> Request
        </Link>
        <Link href="/applications" className="flex items-center gap-1 hover:text-gray-300">
          <FileBarChart size={18} /> Applications
        </Link>
          <div className="relative hidden md:block w-80">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input placeholder="Search candidates, jobs..." className="pl-9 text-black" />
            </div>
     
    </nav>
  );
};

export default Header;
