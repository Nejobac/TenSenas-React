import React from "react";
import "./Problematica.css"
const ProblematicaComponent = () => {
  return (
    <div class="card mb-3 border-info" /* style="max-width: 540px; "*/>
      <div class="row g-0">
        <div class="col-md-4">
          {/* 
    <img src={"..."} class="img-fluid rounded-start" alt="..." /> */}
        </div>
        <div class="col-md-8" className="problematica" >
          <div class="card-body ">
            <h5 class="card-title">Problematica</h5>
            <p class="card-text">            
            <p>Sabias que en chile existen ... 
                personas con discapacidad auditiva y solo ... 
                maneja la LSCH es por eso que buscamos un 
                cambio ven y unete al cambio asi juntos 
                logremos un Chile mas inclusivo</p>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProblematicaComponent;
