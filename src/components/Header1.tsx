
"use client";
import React from 'react'
import { LucideStar, Bell, CalendarDaysIcon, MessageSquareDotIcon, Calculator  } 
from 'lucide-react'
import { Button } from "@/components/ui/Button";
import { FaCalculator} from "react-icons/fa6";



// write a funtion for onclick on the header1 icons next
const Header1 = () => {
  return (
    <div>
    <header className="w-full bg-black text-white flex items-center justify-between md:px-[100px] py-4">
    <h1 className='flex items-center'><LucideStar size={30}/> <b className='text-4xl'>myxellia</b></h1>
     <div className="container flex h-16 items-center gap-3">
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" aria-label="Notifications"><Bell className="h-8 w-8" /></Button>
          <Button variant="ghost" aria-label="Notifications"><MessageSquareDotIcon className="h-8 w-8" /></Button>
          <Button variant="ghost" aria-label="Notifications"><CalendarDaysIcon className="h-8 w-8" /></Button>
          <Button variant="outline" className="hidden sm:inline-flex"><FaCalculator/></Button>
          <div className="h-8 w-8 rounded-full bg-brand/10" />
        </div>
      </div>

    </header>
     
    </div>
  )
}

export default Header1


