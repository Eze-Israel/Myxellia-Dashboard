import React from 'react'
import { LucideStar } from 'lucide-react'

const Header1 = () => {
  return (
    <div>
    <header className="w-full bg-black text-white flex items-center justify-between px-6 py-4">
    <h1 className='flex items-center'><LucideStar size={30}/> <b className='text-4xl'>myxellia</b></h1>
    <div className='flex space-x-4'>
   
    </div>

    </header>
     
    </div>
  )
}

export default Header1

"use client";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Search, Bell, Plus } from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="container flex h-16 items-center gap-3">
        <div className="relative hidden md:block w-80">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <Input placeholder="Search candidates, jobs..." className="pl-9" />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" className="hidden sm:inline-flex"><Plus className="mr-2 h-4 w-4" />New Job</Button>
          <Button variant="ghost" aria-label="Notifications"><Bell className="h-5 w-5" /></Button>
          <div className="h-8 w-8 rounded-full bg-brand/10" />
        </div>
      </div>
    </header>
  );
}
