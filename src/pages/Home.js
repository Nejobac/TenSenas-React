import React from "react";
import {OtherNavBar,NavBarComponent,HomeComponent,PlanComponent} from "../components";
const HomePage = () =>{
    return(
        <div class="container-fluid">
            <OtherNavBar/>
            <div className="home" class="container">
            <HomeComponent/>
            <br></br>
            <PlanComponent/>
            </div>
            <div class="row">
                <div class="col">
                    <PlanComponent/>
                    <PlanComponent/>
                </div>
            <div class="col">
                    <PlanComponent/>
                    <PlanComponent/>         
                </div>
            </div>
        </div>
    )
}
export default HomePage;