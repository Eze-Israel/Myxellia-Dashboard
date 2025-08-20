import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/components/Utils";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "h-10 w-full rounded-xl border border-slate-200 bg-gray-100 px-3 outline-none focus:ring-2 focus:ring-brand/30",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
