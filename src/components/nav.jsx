import React from "react";
import "./nav.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
 

    return (
        <>
            <div className="nav-container">
                <div> 
                    <Link to="/"><b>Debaty</b> ZSEM</Link>
                </div>
                <nav>
                    <Link to="/rejestracja">Rejestracja</Link>
                    <Link to="/tabela">Tabela</Link>
                    <Link to="/zasady">Zasady</Link>
                    <Link to="/regulamin">Regulamin</Link>
                </nav>
            </div>
        </>
    );
}

async function onClick() {
    const navigationPromise = navigate('/pages/rejestracja');
    await navigationPromise;
}