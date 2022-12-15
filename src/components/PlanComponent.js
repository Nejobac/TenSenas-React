import React from "react";
import "./Plan.css"
const PlanComponent = () => {
  return (
    <div class="card mb-3 border-info" /* style="max-width: 540px; "*/>
      <div class="row g-0">
        <div class="col-md-4">
          {/* 
    <img src={"..."} class="img-fluid rounded-start" alt="..." /> */}
        </div>
        <div class="col-md-8" className="planAprendizaje" >
          <div class="card-body ">
            <h5 class="card-title">Plan de Aprendizaje</h5>
            <p class="card-text">
              <p>La idea de TenSeñas es que aprendas de una manera 
                interactiva realizando pequeñas actividades y juegos 
                que al completar aumenta tu porcentaje de avanze junto a 
                pequeños logros para motivarte en tu meta de adquerir un 
                nuevo lenguaje y herramienta para la inclusión.</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlanComponent;
