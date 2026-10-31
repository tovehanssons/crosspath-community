"use strict";

//Kontaktformulär för CrossPath

// Hämta element från DOM
const userFormEl = document.querySelector("#contact-form");
const nameInputEl = document.querySelector("#name");
const emailInputEl = document.getElementById("email");
const messageInputEl = document.querySelector("#message");
const clearBtnEl = document.querySelector("#clear-btn");
const errorListEl = document.querySelector("#error-list");

userFormEl.addEventListener("submit", onSubmit);
clearBtnEl.addEventListener("click", clearForm);

let errorList = [];

function onSubmit(event) {
    event.preventDefault();

    // Läs in värde från formulär
    const name = nameInputEl.value.trim();
    const email = emailInputEl.value.trim();
    const message = messageInputEl.value.trim();

    // Validera formuläret
    if (!validateForm(name, email, message)) {
        // Skriv ut fel om validering misslyckas
        writeErrors();
    }
}

// Validera formuläret
function validateForm(name, email, message) {

    // Tömmer felmeddelanden som redan skrivits ut
    errorList = [];
    errorListEl.innerHTML = "";

    // Variabel som har koll på eventuella fel
    let validate = true;

    // Validera namn-input
    if (name === "") {
        errorList.push("Ange ditt namn");
        validate = false;
    }

    // Validera email-input
    if (email.length === 0) {
        errorList.push("Ange din e-postadress");
        validate = false;
    }

    if (email.length > 0 && !email.includes("@")) {
        errorList.push("Ange en giltig e-postadress");
        validate = false;
    }

    // Validera meddelande-input
    if (message.length === 0) {
        errorList.push("Skriv ett meddelande");
        validate = false;
    }

    return validate;
}

// Skriver ut felmeddelanden
function writeErrors() {
    if (errorList.length > 0) {
        for (let i = 0; i < errorList.length; i++) {
            const liEl = document.createElement("li");
            liEl.innerHTML = errorList[i];

            errorListEl.appendChild(liEl);
        }
    }
}

// Rensar formuläret
function clearForm() {
    userFormEl.reset();

    errorList = [];
    errorListEl.innerHTML = "";
}