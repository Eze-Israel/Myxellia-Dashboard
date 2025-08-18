// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Home, Users } from "lucide-react";
// import Link from "next/link";

// export default function ListingOverView() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       {/* Listings Overview */}
//       <Card className="shadow-sm rounded-2xl">
//         <CardHeader className="flex flex-row items-center justify-between pb-2">
//           <div className="flex items-center space-x-2">
//             <Home className="w-5 h-5 text-indigo-600" />
//             <CardTitle className="text-base font-semibold">Listings Overview</CardTitle>
//           </div>
//           <Link href="#" className="text-sm text-indigo-600 font-medium hover:underline">
//             View all →
//           </Link>
//         </CardHeader>
//         <CardContent className="flex justify-between text-center">
//           <div>
//             <p className="text-gray-500 text-sm">Total</p>
//             <p className="text-xl font-bold">1.8k</p>
//           </div>
//           <div>
//             <p className="text-gray-500 text-sm">Active</p>
//             <p className="text-xl font-bold">80</p>
//           </div>
//           <div>
//             <p className="text-gray-500 text-sm">Archived</p>
//             <p className="text-xl font-bold">1k</p>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Users Overview */}
//       <Card className="shadow-sm rounded-2xl">
//         <CardHeader className="flex flex-row items-center justify-between pb-2">
//           <div className="flex items-center space-x-2">
//             <Users className="w-5 h-5 text-indigo-600" />
//             <CardTitle className="text-base font-semibold">Users Overview</CardTitle>
//           </div>
//           <Link href="#" className="text-sm text-indigo-600 font-medium hover:underline">
//             View all →
//           </Link>
//         </CardHeader>
//         <CardContent className="flex justify-between text-center">
//           <div>
//             <p className="text-gray-500 text-sm">Total</p>
//             <p className="text-xl font-bold">20.7k</p>
//           </div>
//           <div>
//             <p className="text-gray-500 text-sm">Riders</p>
//             <p className="text-xl font-bold">8.5k</p>
//           </div>
//           <div>
//             <p className="text-gray-500 text-sm">Subscribers</p>
//             <p className="text-xl font-bold">7.5k</p>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Users, ChevronRight } from "lucide-react";
import Link from "next/link";

function Header({
  icon,
  title,
  href = "#",
}: {
  icon: React.ReactNode;
  title: string;
  href?: string;
}) {
  return (
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <div className="flex items-center space-x-2">
        <span className="text-indigo-600">{icon}</span>
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </div>
      <Link href={href} className="text-sm text-indigo-600 font-medium hover:underline inline-flex items-center gap-1">
        View all <ChevronRight className="h-4 w-4" />
      </Link>
    </CardHeader>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

export default function ListingOverview() {
  return (
    <div className="flex flex-col gap-6">
      {/* Listings Overview */}
      <Card className="rounded-2xl border border-gray-200 bg-white">
        <Header icon={<Home className="w-5 h-5" />} title="Listings Overview" />
        <CardContent className="flex justify-between">
          <Stat label="Total" value="1.8k" />
          <Stat label="Active" value="80" />
          <Stat label="Archived" value="1k" />
        </CardContent>
      </Card>

      {/* Users Overview */}
      <Card className="rounded-2xl border border-gray-200 bg-white">
        <Header icon={<Users className="w-5 h-5" />} title="Users Overview" />
        <CardContent className="flex justify-between">
          <Stat label="Total" value="20.7k" />
          <Stat label="Riders" value="8.5k" />
          <Stat label="Subscribers" value="7.5k" />
        </CardContent>
      </Card>
    </div>
  );
}
