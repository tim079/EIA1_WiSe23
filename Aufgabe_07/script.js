function showAlert(message) {
    alert(message);
}

function createInputElement(type, placeholder) {
    const inputElement = document.createElement('input');
    inputElement.type = type;
    inputElement.placeholder = placeholder;
    return inputElement;
}

function createButtonElement(text, clickHandler) {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = text;
    buttonElement.addEventListener('click', clickHandler);
    return buttonElement;
}

function startAdventure() {
    const questionElement = document.createElement('p');
    questionElement.textContent = "Wuhuuu, du hast das Glück und hast eine Freifahrt mit der DB frei. Du stehst am Freiburger Hbf. Wohin soll es gehen, MÜNCHEN oder FRANKFURT? Tippe die Antwort (entspricht dem Großgeschriebenem) ein.";

    const inputElement = createInputElement('text', 'Antwort hier eingeben');
    const submitButton = createButtonElement('Submit', () => handleCitySelection(inputElement.value));

    document.body.appendChild(questionElement);
    document.body.appendChild(inputElement);
    document.body.appendChild(submitButton);
}

function handleCitySelection(city) {
    if (city === 'MÜNCHEN') {
        munichAdventure();
    } else if (city === 'FRANKFURT') {
        showAlert('Schlechte Wahl, denn leider ist aufgrund von Bauarbeiten die nächsten drei Tage eine Streckensperrung zwischen Mannheim und Frankfurt – du kommst nur nach Mannheim und dahin möchte man nicht.');
    } else {
        showAlert('Keine korrekte Eingabe.');
    }
}

function munichAdventure() {
    const questionElement = document.createElement('p');
    questionElement.textContent = 'Gute Wahl. Gehe nun auf Gleis 1, dort fährt gleich der ICE ein. Du hast einen Sitzplatz reserviert, doch leider steht auf der Anzeigetafel, dass die Wagenreihung umgekehrt sein wird. Im DB-Navigator steht allerdings nichts davon. Vertraust du auf die ANZEIGETAFEL oder den DB-NAVIGATOR?';

    const inputElement = createInputElement('text', 'Antwort hier eingeben');
    const submitButton = createButtonElement('Submit', () => handleRowChance(inputElement.value));

    document.body.innerHTML = '';
    document.body.appendChild(questionElement);
    document.body.appendChild(inputElement);
    document.body.appendChild(submitButton);
}

function handleRowChance(rowChance) {
    if (rowChance === "ANZEIGETAFEL") {
        handleAnzeigetafel();
    } else if (rowChance === 'DB-NAVIGATOR') {
        handleDBNavigator();
    } else {
        showAlert('Keine korrekte Eingabe.');
    }
}

// Der Rest des Codes bleibt ähnlich, und die Struktur wird nach dem gleichen Muster geändert.
// Beachte, dass promptUser-Funktionen nicht mehr notwendig sind, da die Eingabe über DOM-Elemente erfolgt.

// ...
// Der restliche Code bleibt gleich
// ...

startAdventure();

