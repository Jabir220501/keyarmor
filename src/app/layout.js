// import 'bootstrap/dist/css/bootstrap.css';
import "./styles/plugins/global/plugins.bundle.css";
import "./styles/style.bundle.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
