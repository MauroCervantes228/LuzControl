import React from "react";
import ReactDom from "react-dom/client";
import LuzControl from "./components/LuzControl";


const root=ReactDom.createRoot(document.getElementById("root"));

root.render(
    <>
        <LuzControl/>
    </>
)