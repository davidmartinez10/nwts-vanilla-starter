import "./style.css";

import style from "./main.module.css";

const h1  = document.querySelector("div > h1");
const img = document.querySelector("div > img");

if (h1) h1.className = style.header;
if (img) img.className = style.logo;
