"use client";

import { forwardRef } from "react";
import Link from "next/link";

/* ============================================
   Types
   ============================================ */

type Variant = "primary" | "secondary" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps & {
  href: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

/* ============================================
   Style maps
   ============================================ */

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-signal-orange text-white hover:bg-orange-hover hover:shadow-lg hover:-translate-y-0.5",
  secondary:
    "bg-forest-green text-white hover:bg-green-light hover:shadow-lg hover:-translate-y-0.5",
  outline:
    "bg-transparent border-2 border-signal-orange text-orange-text hover:bg-signal-orange hover:text-white hover:-translate-y-0.5",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-6 py-2.5 text-xs",
  md: "px-10 py-4 text-sm",
  lg: "px-14 py-5 text-base",
};

/* ============================================
   Arrow icon
   ============================================ */

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-2 inline-block transition-transform group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* ============================================
   Component
   ============================================ */

const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = "primary",
    size = "md",
    showArrow = false,
    className = "",
    children,
    ...rest
  } = props;

  const base =
    "group inline-flex items-center justify-center rounded-lg font-medium tracking-wider transition-all duration-200 cursor-pointer";

  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={classes}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {children}
        {showArrow && <ArrowIcon />}
      </Link>
    );
  }

  const { href: _href, ...buttonRest } = rest as ButtonAsButton;

  return (
    <button
      className={classes}
      ref={ref as React.Ref<HTMLButtonElement>}
      {...buttonRest}
    >
      {children}
      {showArrow && <ArrowIcon />}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
