import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/components/Utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4",
  lg: "h-12 px-6 text-lg"
};

const variants = {
  primary: "bg-brand text-white hover:bg-brand-700 shadow-soft",
  ghost: "bg-transparent hover:bg-slate-100",
  outline: "border border-slate-200 hover:bg-slate-50"
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", ...props }, ref
) {
  return (
    <button ref={ref} className={cn("rounded-2xl font-medium transition-colors", sizes[size], variants[variant], className)} {...props} />
  );
});
