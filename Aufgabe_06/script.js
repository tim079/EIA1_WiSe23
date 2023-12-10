function promptUser(question) {
    return prompt(question);
}

function showAlert(message) {
    alert(message);
}

function startAdventure() {
    let city = promptUser("Wuhuuu, du hast das Glück und hast eine Freifahrt mit der DB frei. Du stehst am Freiburger Hbf. Wohin soll es gehen, MÜNCHEN oder FRANKFURT? Tippe die Antwort (entspricht dem Großgeschriebenem) ein.");

    if (city === 'MÜNCHEN') {
        munichAdventure();
    } else if (city === 'FRANKFURT') {
        showAlert('Schlechte Wahl, denn leider ist aufgrund von Bauarbeiten die nächsten drei Tage eine Streckensperrung zwischen Mannheim und Frankfurt – du kommst nur nach Mannheim und dahin möchte man nicht.');
    } else {
        showAlert('Keine korrekte Eingabe.');
    }
}

function munichAdventure() {
    let rowChance = promptUser('Gute Wahl. Gehe nun auf Gleis 1, dort fährt gleich der ICE ein. Du hast einen Sitzplatz reserviert, doch leider steht auf der Anzeigetafel, dass die Wagenreihung umgekehrt sein wird. Im DB-Navigator steht allerdings nichts davon. Vertraust du auf die ANZEIGETAFEL oder den DB-NAVIGATOR?');

    if (rowChance === "ANZEIGETAFEL") {
        handleAnzeigetafel();
    } else if (rowChance === 'DB-NAVIGATOR') {
        handleDBNavigator();
    } else {
        showAlert('Keine korrekte Eingabe.');
    }
}

function handleAnzeigetafel() {
    let motivation = promptUser('Pech gehabt, die Anzeigtafel lag falsch und du stehst nun am anderen Ende des eben eingefahrenen Zuges und musst nun leider dort einsteigen, denn der Zug fährt gleich wieder ab. Wirst du dich durch den Zug KÄMPFEN oder KAPITULIEREN; indem du dich an die Treppe zwischen den Waggons setzt?');

    if (motivation === "KÄMPFEN") {
        showAlert('Leider ist jegliches Zwängen und Drücken zwecklos, denn der Zug ist so überfüllt, dass sich da erstmal nichts bewegen wird. Zu allem Überfluss ertönt gerade die Durchsage, dass aufgrund einer Oberleitungstörung die Zugfahrt ab der nächsten Haltestelle endet - und damit endet auch die Illusion, mit der DB sein Ziel pünktlich erreichen zu können.');
    } else if (motivation === "KAPITULIEREN") {
        showAlert('Ohje, das ist ja mal ungemütlich und die Aussicht ist ja super ... nicht! Und gerade jetzt kommt auch noch der Schaffner und will dich von der Treppe wegscheuchen, die frei bleiben soll. Und als wäre das schon nicht genug gewesen, erklingt gerade noch die Durchsage, dass aufgrund des Schneechaos in München bzw. Bayern der ICE in Karlsruhe seine Fahrt einstellt. Das wars dann mit München...');
    } else {
        showAlert('Keine korrekte Eingabe.');
    }
}

function handleDBNavigator() {
    let seatplace = promptUser('Natürlich hat der DB-Navigator recht gehabt, gute Entscheidung! Der Zug ist eingefahren und du bist auf der Suche nach deinem reservierten Sitzplatz. 65, 66, ahhh, 67 – mein Sitzplatz! Na super, da sitzt schon jemand und schläft... Wirst du ihn WECKEN oder setzt du dich ins BORDRESTAURANT?');

    if (seatplace === 'WECKEN') {
        handleWecken();
    } else if (seatplace === 'BORDRESTAURANT') {
        handleBordrestaurant();
    } else {
        showAlert('Keine korrekte Eingabe.');
    }
}

function handleWecken() {
    let noise = promptUser('Grummel grummel, da war ja einer begeistert, für dich aufstehen zu müssen. Aber naja, sein Pech, dass er zu geizig war, sich einen Sitzplatz zu reservieren. Eigentlich würde nun einer entspannten Fahrt nichts mehr im Wege stehen. Doch wären da nicht diese nervigen Kinder zwei Sitze weiter, die den ganzen Waggon mit ihrem Handyspiel auf voller Lautstärke beschallen. Wirst du dich bei den Eltern BESCHWEREN oder darauf HOFFEN, das jemand anderes es tut?');

    if (noise === 'BESCHWEREN') {
        showAlert('Kuller kuller und die Tränen rollen und Schreie fallen, obwohl du eigentlich ganz höflich die Kinder darum gebeten hast, ihr Spiel leiser zu stellen. Na schöne Scheiße, das war ja mal für die Katz. Doch ein Glück und Pech zugleich, so eben sagt der Schaffner durch, dass der Zug am nächsten Bahnhof halten und nicht mehr weiterfahren wird – eine Oberleitungsstörung macht es möglich.');
    } else if (noise === 'HOFFEN') {
        showAlert('Zu schön wäre es, doch genau wie du vermag keiner sich zu beschweren, denn alle hoffen genau wie du, dass es jemand anderes tut. Doch du hast Glück und Pech zugleich: Der Krach hat gleich ein Ende, deine Fahrt aber auch: Eine Oberleitungsstörung sorgt für das vorzeitige Fahrzende an der nächsten Haltestelle.');
    } else {
        showAlert('Keine korrekte Eingabe.');
    }
}

function handleBordrestaurant() {
    let switchTrain = promptUser('Uhhh klasse, im Bordrestaurant ist noch ein Platz an einem Einzeltisch frei – fühlt sich ja fast wie die erste Klasse an! Eigentlich hättest du nun etwas bestellt, doch das Bordbistro hat auf die Zugfahrt nicht auf, na toll... Und als ob das nicht genug wäre, kommt nun die Durchsage, dass du deinen Anschlusszug nicht erreichen wirst. Du kannst entweder einen RE nehmen, der allerdings länger braucht, oder du wartest auf den ICE eine Stunde später. Für was entscheidest du dich?');

    if (switchTrain === 'RE') {
        showAlert('Wuhu, der rammelvolle, versiffte RE lädt zu einer reudigen Fahrt ein. Doch diese Tour bleibt dir erspart. Alle Züge nach München sind heute und auf morgen abgesagt, denn in Bayern herrscht ein Schneechaos.');
    } else if (switchTrain === 'ICE') {
        showAlert('Brrrrr, das war eiskalte Stunde Wartezeit an Gleis 8, und du bist schon voller Vorfreude auf den warmen ICE. Doch gerade erfährst du per Durchsage, dass alle Züge nach München heute und auf morgen abgesagt sind, denn in Bayern herrscht ein Schneechaos.');
    } else {
    showAlert('Keine korrekte Eingabe.');
    }
    }
    
    startAdventure();
