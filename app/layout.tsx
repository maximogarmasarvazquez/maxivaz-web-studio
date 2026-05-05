import "./globals.css";
import FloatingNav from "@/components/layout/FloatingNav";
import ThemeProvider from "@/components/theme/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden bg-white text-black dark:bg-[#0B0B0B] dark:text-white transition-colors duration-300">
        <ThemeProvider>
          <FloatingNav />

          <main className="w-full overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}