import { Switch, Route } from "wouter";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ServicesPage from "@/pages/services";
import ProductsPage from "@/pages/products";
import ProcessPage from "@/pages/process";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";

function App() {
  return (
    <div className="font-body bg-light dark:bg-dark transition-colors duration-300 ease-in-out min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/process" component={ProcessPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
