import "./globals.css";
import FloatingNav from "@/components/layout/FloatingNav";

export const metadata = {
  title: "Maxivaz Web Studio",
  description: "Desarrollo de páginas web modernas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#0B0B0B] text-white">

        <FloatingNav />

        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
