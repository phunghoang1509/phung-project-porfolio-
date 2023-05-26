import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

const app = document.querySelector('#app');
import { render, router } from "./uilities";

import HomePage from "./pages/HomePage";

render(HomePage , app);