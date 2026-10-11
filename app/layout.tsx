import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Untukmu, Selalu | Selamat Ulang Tahun",
  description: "Sebuah surat kecil untuk hari istimewamu.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
