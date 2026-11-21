import type { ComponentPropsWithoutRef } from "react";

type BtnProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "default" | "light" | "line";
  size?: "md" | "sm";
};

export function Btn({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}: BtnProps) {
  const classes = [
    "btn",
    variant === "light" ? "btn--light" : "",
    variant === "line" ? "btn--line" : "",
    size === "sm" ? "btn--sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}
