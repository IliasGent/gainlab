import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";
import LocalizedLayout from "./components/LocalizedLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GainLab | Science-Backed Supplements",
  description: "Advanced performance nutrition for serious progress.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const themeScript = `
(function() {
  try {
    var theme = localStorage.getItem('gainlab-theme');
    var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
    if (!theme && supportDarkMode) theme = 'dark';
    if (!theme) theme = 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`.replace(/\n/g, ""); // Minify slightly for safety

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider>
          <AuthProvider>
            <LanguageProvider>
              <CartProvider>
                <LocalizedLayout>
                  {children}
                </LocalizedLayout>
              </CartProvider>
            </LanguageProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
