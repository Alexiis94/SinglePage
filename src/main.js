import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import { router } from "./router/index.routes";

// sel e agrega antes del iff, para que la web comience  con true
router(window.location.hash);
window.addEventListener("hashchange", () => {
  //con el window.location.hash > lo ocupo para mostrar
  // las rutas que doy click
  //console.log(window.location.hash);
  router(window.location.hash);
});
