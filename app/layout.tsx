import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://jhanalves.com.br'),
  title: "Jhan Alves | Studio Visage",
  description:
    "Visagismo masculino estratégico para homens que querem presença, identidade e autoridade.",
  openGraph: {
    title: "Jhan Alves | Studio Visage",
    description:
      "Visagismo masculino estratégico para homens que querem presença, identidade e autoridade.",
    images: ["/images/og-image.png"]
  }
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
