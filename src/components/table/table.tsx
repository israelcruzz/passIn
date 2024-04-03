import { ComponentProps, ReactNode } from "react";

interface TableProps extends ComponentProps<"table"> {
  children: ReactNode;
}

export function Table({ children, ...table }: TableProps) {
  return (
    <div className="w-full border border-white/10 rounded-lg">
      <table className="w-full" {...table}>
        {children}
      </table>
    </div>
  );
}
