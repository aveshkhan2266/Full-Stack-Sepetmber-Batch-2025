import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/global.scss";
import Header from "../component/common/Header";
import Navigation from "../component/common/Navigation";
import Footer from "../component/common/Footer";
import BrandLogo from "../component/common/BrandLogo";
import ScrollToTop from "../component/common/ScrollToTop";
import Providers from "../component/Provider/providers";

export const metadata = {
  title: "Fiama",
  description: "Fiama shopping website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navigation />
          <main>{children}</main>
          <BrandLogo />
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
