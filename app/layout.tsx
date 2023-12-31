import "./globals.css";
import { Providers } from "@/redux/provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
export const metadata = {
  title: "ManifestIndia",
  description: "Manifesto manifested!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Providers>
            <Header/>
            <Footer/>
            {children}
            <Toaster />
          </Providers>{" "}
        </ThemeProvider>
      </body>
    </html>
  );
}
