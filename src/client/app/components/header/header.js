// src/client/app/components/header/header.js
export default async function header() {
    const response = await fetch('/header.html');
    let html = await response.text();
    document.getElementById('header').innerHTML = html;
}