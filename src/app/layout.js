import { Urbanist, Nunito } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--body-color-font",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--heading-font",
});

export const metadata = {
  title: {
    absolute: "",
    default: "RC Techbox - Smart School ERP Solution",
    template: "%s | RC Techbox - Smart School ERP Solution",
  },
  description:
    "RC Techbox offers a complete School ERP system to simplify administration, manage academics, streamline communication, and enhance student learning experience.",
  openGraph: {
    title: "RC Techbox - Smart School ERP Solution",
    description:
      "RC Techbox School ERP helps schools manage students, teachers, fees, attendance, exams, and communication in one powerful platform.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${urbanist.variable} ${nunito.variable}`}>
        {children}
      </body>
    </html>
  );
}
