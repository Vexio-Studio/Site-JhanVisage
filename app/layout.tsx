import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jhanvisage.com.br"),
  title: "Jhan Alves | Studio Visage",
  description:
    "Visagismo masculino estratégico para homens que querem presença, identidade e autoridade.",
  openGraph: {
    title: "Jhan Alves | Studio Visage",
    description:
      "Visagismo masculino estratégico para homens que querem presença, identidade e autoridade.",
    url: "https://jhanvisage.com.br",
    siteName: "Jhan Studio Visage",
    images: [
      {
        url: "https://jhanvisage.com.br/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jhan Alves | Studio Visage",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
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
