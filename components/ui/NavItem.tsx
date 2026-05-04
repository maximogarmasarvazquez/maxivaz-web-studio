export default function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 text-sm hover:text-white transition"
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-white/20 transition">

        {/* icono centrado */}
        <div className="flex items-center justify-center w-full h-full">
          {icon}
        </div>

      </div>

      <span className="opacity-80 group-hover:opacity-100 transition">
        {label}
      </span>
    </a>
  );
}
