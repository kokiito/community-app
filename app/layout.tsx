import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tokyo Bouldering Club",
  description:
    "東京ボルダリングクラブとは都内近郊でボルダリングを一緒に登るために定期的に集うコミュニテイです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
