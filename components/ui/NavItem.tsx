"use client";

import React, { isValidElement, cloneElement } from "react";
import Link from "next/link";
import type { LucideProps } from "lucide-react";

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
      return cloneElement(icon as React.ReactElement<LucideProps>, {
        size: 22,
        strokeWidth: isActive ? 2.5 : 2,
        className: "transition-all duration-300",
      });
    }
    return icon;
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        group flex items-center w-full cursor-pointer
        transition-all duration-300
        ${vertical ? "gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5" : "gap-4"}
      `}
    >
      {/* ICON */}
      <div
        className={`
          w-11 h-11 flex items-center justify-center rounded-xl shrink-0
          transition-all duration-300
          ${
            isActive
              ? "text-blue-500 scale-110"
              : "text-black dark:text-white opacity-70 group-hover:opacity-100"
          }
        `}
      >
        {renderIcon()}
      </div>

      {/* LABEL */}
      <span
        className={`
          whitespace-nowrap transition-all duration-300
          ${vertical ? "text-base" : "text-sm"}
          ${
            isActive 
              ? "text-blue-500 dark:text-blue-500 font-bold" 
              : "text-gray-700 dark:text-gray-300 font-medium"
          }
        `}
      >
        {label}
      </span>
    </Link>
  );
}