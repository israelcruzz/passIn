import { ComponentProps, ReactNode } from "react";

interface TableHeaderProps extends ComponentProps<"th"> {
  children: ReactNode;
}

export function TableHeader({ children, ...th }: TableHeaderProps) {
  return (
    <th className="py-3 px-2.5 text-left" {...th}>
      {children}
    </th>
  );
}
