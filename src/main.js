import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const app = document.querySelector('#app');
import { render, router } from "./uilities";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AbouPage";
import ServicesPage from "./pages/ServicesPage";
import WorkPage  from "./pages/WorkPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";


router.on("/", () => render(HomePage,app));
router.on("/about",() => render(AboutPage,app));
router.on("/service",() => render(ServicesPage,app));
router.on("/work",() => render(WorkPage,app));
router.on("/blog", () => render(BlogPage,app));
router.on("/contact", () => render(ContactPage,app));

router.resolve();



