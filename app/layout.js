import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <main style={{ marginLeft: '50px'}}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
