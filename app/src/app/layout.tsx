import AppProvider from "@/components/AppProvider";
import "./globals.css";

export const metadata = {
  title: "ReNext App",
  description: "Build RENEXT on RENEC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>{children} </AppProvider>
      </body>
    </html>
  );
}
