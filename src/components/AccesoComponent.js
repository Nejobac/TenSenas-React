import React from "react";
import "./Acceso.css"





const AccesoComponent = () => {
  return (
    <div class="card mb-3 border-info" /* style="max-width: 540px; "*/>
      <div class="row g-0">
        <div class="col-md-4">
          {/* 
    <img src={"..."} class="img-fluid rounded-start" alt="..." /> */}
        </div>
        <div class="col-md-8" className="acceso" >
          <div class="card-body ">
            <h5 class="card-title">Acceso las 24 horas</h5>
            <p class="card-text">
            <p>Si tienes libre un momento al día lo puedes usar en 
                TenSeñas nuestra página esta a disposición del aprendizaje 
                las 24 horas del día.</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccesoComponent;
