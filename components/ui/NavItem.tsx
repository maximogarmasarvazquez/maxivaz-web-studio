"use client";

import React, { isValidElement, cloneElement } from "react";

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  vertical?: boolean;
  isActive?: boolean;
}

export default function NavItem({
  href,
  icon,
  label,
  onClick,
  vertical = false,
  isActive = false,
}: NavItemProps) {
  const renderIcon = () => {
    if (isValidElement(icon)) {
      return cloneElement(
        icon as React.ReactElement<{
          size?: number;
          strokeWidth?: number;
          className?: string;
        }>,
        {
          size: 22,
          strokeWidth: isActive ? 2.5 : 2,
          className: "transition-all duration-500",
        }
      );
    }
    return icon;
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        group flex w-full transition-all duration-300
        ${
          vertical
            ? "flex-row-reverse justify-end items-center gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5"
            : "items-center gap-4"
        }
        text-sm cursor-pointer
      `}
    >
      {/* ICON */}
      <div
        className={`
          shrink-0 w-11 h-11 flex items-center justify-center rounded-xl
          transition-all duration-500
          ${
            isActive
              ? "text-blue-500 scale-110"
              : "text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
          }
        `}
      >
        {renderIcon()}
      </div>

      {/* LABEL */}
      <span
        className={`
          whitespace-nowrap transition-all duration-500 ease-out
          ${
            vertical
              ? "text-base font-semibold"
              : "text-sm opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0"
          }
          ${
            isActive
              ? "text-blue-500 font-bold"
              : "text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white"
          }
        `}
      >
        {label}
      </span>
    </a>
  );
}