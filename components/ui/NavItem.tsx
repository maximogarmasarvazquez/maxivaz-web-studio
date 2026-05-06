export default function NavItem({
  href,
  icon,
  label,
  onClick,
  vertical = false,
  isActive = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  vertical?: boolean;
  isActive?: boolean;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        group flex w-full
        ${vertical ? "flex-col items-center gap-2" : "items-center gap-4"}
        text-sm
      `}
    >
      {/* ICON */}
      <div
        className={`
          w-12 h-12 flex items-center justify-center rounded-xl
          transition

          ${
            isActive
              ? "bg-black text-white dark:bg-white dark:text-black shadow-md"
              : "bg-black/5 text-black/70 hover:bg-black/10 hover:text-black dark:bg-white/10 dark:text-white/70 dark:hover:bg-white/20 dark:hover:text-white"
          }
        `}
      >
        {icon}
      </div>

      {/* LABEL */}
      <span
        className={`
          flex-1   /* 🔥 ocupa espacio fijo */
          whitespace-nowrap   /* 🔥 evita salto */
          transition-colors

          ${
            isActive
              ? "text-black dark:text-white font-medium"
              : "text-black/60 dark:text-white/60 group-hover:text-black dark:group-hover:text-white"
          }
        `}
      >
        {label}
      </span>
    </a>
  );
}