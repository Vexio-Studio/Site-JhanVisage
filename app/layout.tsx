import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jhan Alves | Studio Visage",
  description:
    "Visagismo masculino estratégico para homens que querem presença, identidade e autoridade."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
