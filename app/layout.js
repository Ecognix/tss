import "./globals.css";
import { SiteHeader, SiteFooter } from "../components/SiteShell";
import Assistant from "../components/Assistant";

export const metadata = {
  title: "TSS Arena | Guwahati's place to play",
  description: "A new home for the game at TSS Arena in Satgaon, Guwahati. Explore the turf and try the booking experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Assistant />
      </body>
    </html>
  );
}
