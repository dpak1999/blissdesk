import { cn } from "@workspace/ui/lib/utils";
import { ReactNode } from "react";

export const WidgetHeader = ({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) => {
  return (
    <header
      className={cn(
        "bg-gradient-to-b from-primary p-4 text-primary-foreground to-[#72e3ad]",
        classname
      )}
    >
      {children}
    </header>
  );
};
