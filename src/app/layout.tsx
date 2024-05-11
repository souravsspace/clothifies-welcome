import { cn } from "@/lib/utils"
import "./globals.css"
import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"

const fontSans = FontSans({
   subsets: ["latin"],
   variable: "--font-sans",
})

export const metadata: Metadata = {
   title: "Clothifies",
   description: "The best place to buy clothes online",
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body
            className={cn(
               "min-h-screen bg-background font-sans antialiased",
               fontSans.variable
            )}
         >
            {children}
         </body>
      </html>
   )
}
