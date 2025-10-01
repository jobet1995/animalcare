import { PawPrint } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  textClassName?: string;
};

export function Logo({ className, textClassName }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <PawPrint className="h-6 w-6 text-primary" />
      <span
        className={cn(
          "text-xl font-bold tracking-tight text-foreground",
          textClassName,
        )}
      >
        AnimalKind
      </span>
    </Link>
  );
}
