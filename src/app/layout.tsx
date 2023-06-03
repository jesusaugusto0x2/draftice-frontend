import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Draftice",
  description: "Main page for draftice app",
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
