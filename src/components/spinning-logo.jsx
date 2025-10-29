import React from "react";
import "./spinning-logo.scss";

export default function SpinningLogo() {

    return (
        <>
            <div className="logo-container">
                <img className="logo-gear" src="./logo_zsem_gear.png" alt="ni ma loga"/>
                <img className="logo-content" src="./logo_zsem_content.png" alt="ukradli"/>
            </div>
        </>
    );
}