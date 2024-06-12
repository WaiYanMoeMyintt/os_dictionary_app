import { Nunito } from "next/font/google";
import "./globals.css";
const inter = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Dictionary Web App",
  description: "Search any nouns or phrases on app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
