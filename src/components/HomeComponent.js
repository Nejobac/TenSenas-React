import React from "react";
const HomeComponent = () => {
  return (
    <div align-center>
      <div
        class="card text-center border-info" /*  style={{ width: "80rem" }} */
      >
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
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
