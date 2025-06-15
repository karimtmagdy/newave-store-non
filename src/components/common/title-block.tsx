import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";

const TitleBlock = ({ children, className }: { children: PropsWithChildren<React.ReactNode>, className?: string }) => {
  return (
    <div className={cn("flex sm:flex-row flex-col gap-2 justify-between sm:items-center items-start", className)}>
      {children}
    </div>
  );
};
export default TitleBlock