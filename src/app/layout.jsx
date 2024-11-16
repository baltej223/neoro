import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import "./index.css"
export default function RootLayout({ children }) {
  return (
      <>
        <html lang="en" suppressHydrationWarning>
        <head />
        <body>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script src="./gemini.js"></script>
        </body>
        </html>
      </>
  )
}
