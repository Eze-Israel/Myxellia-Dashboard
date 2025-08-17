import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/components/Utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ className, ...props }, ref) {
  return <input ref={ref} className={cn("h-10 w-full rounded-xl border border-slate-200 bg-white px-3 outline-none focus:ring-2 focus:ring-brand/30", className)} {...props} />;
});
