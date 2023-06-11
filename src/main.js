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
import AdminProjectPagae from "./pages/admin/Project";
import AdminProjectAddPage from "./pages/admin/Project-add";
import AdminProjectEditPage from "./pages/admin/Project-edit";


router.on("/", () => render(HomePage,app));
router.on("/about",() => render(AboutPage,app));
router.on("/service",() => render(ServicesPage,app));
router.on("/work",() => render(WorkPage,app));
router.on("/blog", () => render(BlogPage,app));
router.on("/contact", () => render(ContactPage,app));
router.on("/admin", () => render(AdminProjectPagae,app));
router.on("/admin/add", () => render(AdminProjectAddPage,app));
router.on("/admin/:id/edit", ({data}) => render( () => AdminProjectEditPage(data),app));

router.resolve();



