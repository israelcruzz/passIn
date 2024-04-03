import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface TableCeilProps extends ComponentProps<"td"> {}

export function TableCeil(props: TableCeilProps) {
  return (
    <td className={twMerge('px-2.5 py-3 text-gray-200', props.className)} {...props} />
  );
}
