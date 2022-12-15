import React from "react";
/* import "./Home.css"
 */const HomeComponent = () => {
  return (
    <div className="cuerpologin">
      <div
        class="card text-center border-info" /*  style={{ width: "80rem" }} */
      >
        <div class="card-body">
          <a href="#" class="btn btn-light border-info">
            Iniciar Sesión
          </a>{" "}
          <br />
          <br />
          <a href="#" class="btn btn-info">
            Registrarse
          </a>
        </div>
      </div>
    </div>
  );
};
export default HomeComponent;
