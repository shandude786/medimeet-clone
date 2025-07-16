import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Medimeet - Doctor's Appointment Booking App",
  description: "Connect with doctors and book appointments easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}
        <main className="min-h-screen">{children}</main>
        {/* footer */}
      </body>
    </html>
  );
}
