import React from "react";
import logo from "../asset/img/logo.png";

const NavBarComponent = () => {
  return (
      <nav class="navbar bg-info">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <ul class="nav justify-content-end ">
            <img
              src={logo}
              class="d-inline-block align-text-top flex-start"
              alt="Logo"
              style={{
                  width: "8%",
                height: "24%",
                
            }}
            />
            TenSeñas
            
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sobre Nosotros
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contáctanos
              </a>
            </li>
            <li class="nav-item">
              <button type="button" class="btn btn-light">
                Iniciar Sesion
              </button>
            </li>
          </ul>
        </a>
      </div>
    </nav>
  );
};
export default NavBarComponent;
