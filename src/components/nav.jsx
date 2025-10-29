import React from "react";
import "./nav.scss";

export default function Nav() {

    return (
        <>
            <div className="nav-container">
                <div><b>De</b> ZSEM</div>
                <nav>
                    <ul>
                        <li><a>Rejestracja</a></li>
                        <li><a>Tabela</a></li>
                        <li><a>Zasady</a></li>
                        <li><a href="">Regulamin</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}