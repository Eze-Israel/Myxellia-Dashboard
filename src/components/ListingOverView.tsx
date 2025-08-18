"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Users } from "lucide-react";
import Link from "next/link";

export default function ListingOverView() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Listings Overview */}
      <Card className="shadow-sm rounded-2xl">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex items-center space-x-2">
            <Home className="w-5 h-5 text-indigo-600" />
            <CardTitle className="text-base font-semibold">Listings Overview</CardTitle>
          </div>
          <Link href="#" className="text-sm text-indigo-600 font-medium hover:underline">
            View all →
          </Link>
        </CardHeader>
        <CardContent className="flex justify-between text-center">
          <div>
            <p className="text-gray-500 text-sm">Total</p>
            <p className="text-xl font-bold">1.8k</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Active</p>
            <p className="text-xl font-bold">80</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Archived</p>
            <p className="text-xl font-bold">1k</p>
          </div>
        </CardContent>
      </Card>

      {/* Users Overview */}
      <Card className="shadow-sm rounded-2xl">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-indigo-600" />
            <CardTitle className="text-base font-semibold">Users Overview</CardTitle>
          </div>
          <Link href="#" className="text-sm text-indigo-600 font-medium hover:underline">
            View all →
          </Link>
        </CardHeader>
        <CardContent className="flex justify-between text-center">
          <div>
            <p className="text-gray-500 text-sm">Total</p>
            <p className="text-xl font-bold">20.7k</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Riders</p>
            <p className="text-xl font-bold">8.5k</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Subscribers</p>
            <p className="text-xl font-bold">7.5k</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
