/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import LoginForm from "../components/Login";
import "./pages.css";
import "./Login.css";
function Login() {
  return (
    <div className="login">
        <div className="login__container">
            <LoginForm />
            <div className="login__container-background">
                <div class="login__hexagons-container">
                    <div class="login__group-hexagons">
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                    </div>
                    <div class="login__group-hexagons">
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                    </div>
                    <div class="login__group-hexagons">
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                    </div>
                    <div class="login__group-hexagons">
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                    </div>
                </div>
                <div class="login__hexagons-container">
                    <div class="login__group-hexagons">
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                    </div>
                    <div class="login__group-hexagons">
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                    </div>
                    <div class="login__group-hexagons">
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                    </div>
                    <div class="login__group-hexagons">
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                        <div class="login__hexagon-container"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Login;