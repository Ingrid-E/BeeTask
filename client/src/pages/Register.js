/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import RegisterForm from "../components/Register";
import "./pages.css";
function Register() {
  return (
    <div className="register">
        <div className="register__container">
            <RegisterForm />
            <div className="register__container-background">
                <div class="register__hexagons-container">
                    <div class="register__group-hexagons">
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                    </div>
                    <div class="register__group-hexagons">
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                    </div>
                    <div class="register__group-hexagons">
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                    </div>
                    <div class="register__group-hexagons">
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                    </div>
                </div>
                <div class="register__hexagons-container">
                    <div class="register__group-hexagons">
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                    </div>
                    <div class="register__group-hexagons">
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                    </div>
                    <div class="register__group-hexagons">
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                    </div>
                    <div class="register__group-hexagons">
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                        <div class="register__hexagon-container"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Register;