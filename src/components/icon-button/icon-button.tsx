import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

export function IconButton({ transparent = false, ...rest }: IconButtonProps) {
  return (
    <button
      {...rest}
      className={
        (twMerge(
          `${
            transparent
              ? "border rounded-[6px] border-white/10 bg-black/20 p-1.5"
              : "border rounded-[6px] border-white/10 bg-black/10 p-1.5"
          }`
        ),
        rest.className)
      }
    />
  );
}
