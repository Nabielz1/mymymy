import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Untukmu, Selalu | Selamat Ulang Tahun",
  description: "Sebuah surat kecil untuk hari istimewamu.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
