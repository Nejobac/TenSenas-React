import React from "react";
import "./home.css";
import {OtherNavBar
    ,HomeComponent,PlanComponent,
    NosotrosComponent,EquipoComponent,
    AccesoComponent,ProblematicaComponent,
    AprendeComponent
} from "../components";
const HomePage = () =>{
    return(
        <div class="container-fluid">
            <OtherNavBar/>
            <div className="home" class="container">
            <HomeComponent/>
            <br></br>
            <PlanComponent/>
            </div>
                    <NosotrosComponent/>
            <div class="row container">
                <div class="col">
                    <EquipoComponent/>
                    <ProblematicaComponent/>
                </div>
                <div class="col">
                    <AccesoComponent/>
                    <AprendeComponent/>         
                </div>
            </div>
        </div>
    )
}
export default HomePage;