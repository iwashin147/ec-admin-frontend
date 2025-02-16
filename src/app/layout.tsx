import McGlobalHeader from "@/features/shared/components/McGlobalHeader";
import StoreProvider from "@/provider/StoreProvider";
import theme from "@/styles/theme";
import { CssBaseline } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "ec-admin",
  description: "ec-admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={roboto.variable}>
        <StoreProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
              <McGlobalHeader />
              {children}
            </AppRouterCacheProvider>
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
