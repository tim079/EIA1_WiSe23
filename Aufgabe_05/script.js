let city = prompt("Wuhuuu, du hast das Glück und hast eine Freifahrt mit der DB frei. Du stehst am Freiburger Hbf. Wohin soll es gehen, München oder Frankfurt?")

if (city === 'München') {
    let rowChance = prompt('Gute Wahl. Gehe nun auf Gleis 1, dort fährt gleich der ICE ein. Du hast einen Sitzplatz reserviert, doch leider steht auf der Anzeigetafel, dass die Wagenreihung umgekehrt sein wird. Im DB-Navigator steht allerdings nichts davon. Vertraust du auf die Anzeigetafel oder den DB-Navigator?');
    
    if (rowChance === "Anzeigetafel") {
        let motivation = prompt('Pech gehabt, die Anzeigtafel lag falsch und du stehst nun am anderen Ende des eben eingefahrenen Zuges und musst nun leider dort einsteigen, denn der Zug fährt gleich wieder ab. Wirst du dich nun durch den Zug kämpfen oder kapitulierst du und setzt dich an die Treppe zwischen den Waggons?');
        
        if (motivation === "kämpfen") {
            alert('Leider ist jegliches Zwängen und Drücken zwecklos, denn der Zug ist so überfüllt, dass sich da erstmal nichts bewegen wird. Zu allem Überfluss ertönt gerade die Durchsage, dass aufgrund einer Oberleitungstörung die Zugfahrt ab der nächsten Haltestelle endet - und damit endet auch die Illusion, mit der DB sein Ziel pünktlich erreichen zu können.');
        } else if (motivation === "kapitulieren") {
            alert('Ohje, das ist ja mal ungemütlich und die Aussicht ist ja super ... nicht! Und gerade jetzt kommt auch noch der Schaffner und will dich von der Treppe wegscheuchen, die frei bleiben soll. Und als wäre das schon nicht genug gewesen, erklingt gerade noch die Durchsage, dass aufgrund des Schneechaos in München bzw. Bayern der ICE in Karlsruhe seine Fahrt einstellt. Das wars dann mit München...');
        } else {
            alert('Keine korrekte Eingabe.');
        }
    } else if (rowChance === 'DB-Navigator') {
        let seatplace = prompt('Natürlich hat der DB-Navigator recht gehabt, gute Entscheidung! Der Zug ist eingefahren und du bist auf der Suche nach deinem reservierten Sitzplatz. 65, 66, ahhh, 67 – mein Sitzplatz! Na super, da sitzt schon jemand und schläft... Wirst du ihn wecken oder setzt du dich ins Bordrestaurant?');

        if (seatplace === 'wecken') {
            let noise = prompt('Grummel grummel, da war ja einer begeistert, für dich aufstehen zu müssen. Aber naja, sein Pech, dass er zu geizig war, sich einen Sitzplatz zu reservieren. Eigentlich würde nun einer entspannten Fahrt nichts mehr im Wege stehen. Doch wären da nicht diese nervigen Kinder zwei Sitze weiter, die den ganzen Waggon mit ihrem Handyspiel auf voller Lautstärke beschallen. Wirst du dich bei den Eltern beschweren oder darauf hoffen, das jemand anderes es tut?');
            
            if (noise === 'beschweren') {
                alert('Kuller kuller und die Tränen rollen und Schreie fallen, obwohl du eigentlich ganz höflich die Kinder darum gebeten hast, ihr Spiel leiser zu stellen. Na schöne Scheiße, das war ja mal für die Katz. Doch ein Glück und Pech zugleich, so eben sagt der Schaffner durch, dass der Zug am nächsten Bahnhof halten und nicht mehr weiterfahren wird – eine Oberleitungsstörung macht es möglich.');
            } else if (noise === 'hoffen') {
                alert('Zu schön wäre es, doch genau wie du vermag keiner sich zu beschweren, denn alle hoffen genau wie du, dass es jemand anderes tut. Doch du hast Glück und Pech zugleich: Der Krach hat gleich ein Ende, deine Fahrt aber auch: Eine Oberleitungsstörung sorgt für das vorzeitige Fahrzende an der nächsten Haltestelle.');
            } else {
                alert('Keine korrekte Eingabe.');
            }
        } else if (seatplace === 'Bordrestaurant') {
            let switchTrain = prompt('Uhhh klasse, im Bordrestaurant ist noch ein Platz an einem Einzeltisch frei – fühlt sich ja fast wie die erste Klasse an! Eigentlich hättest du nun etwas bestellt, doch das Bordbistro hat auf die Zugfahrt nicht auf, na toll... Und als ob das nicht genug wäre, kommt nun die Durchsage, dass du deinen Anschlusszug nicht erreichen wirst. Du kannst entweder einen RE nehmen, der allerdings länger braucht, oder du wartest auf den ICE eine Stunde später. Für was entscheidest du dich?');

            if (switchTrain === 'RE') {
                alert('Wuhu, der rammelvolle, versiffte RE lädt zu einer reudigen Fahrt ein. Doch diese Tour bleibt dir erspart. Alle Züge nach München sind heute und auf morgen abgesagt, denn in Bayern herrscht ein Schneechaos.');
            } else if (switchTrain === 'ICE') {
                alert('Brrrrr, das war eiskalte Stunde Wartezeit an Gleis 8 und du bist schon voller Vorfreude auf den warmen ICE. Doch gerade erfährst du per Durchsage, dass alle Züge nach München heute und auf morgen abgesagt sind, denn in Bayern herrscht ein Schneechaos.');
            } else {
                alert('Keine korrekte Eingabe.');
            }
        }
    } else {
        alert('Keine korrekte Eingabe.');
    }
} else if (city === 'Frankfurt') {
    alert('Schlechte Wahl, denn leider ist aufgrund von Bauarbeiten die nächsten drei Tage eine Streckensperrung zwischen Mannheim und Frankfurt – du kommst nur nach Mannheim und dahin möchte man nicht.');
} else {
    alert('Keine korrekte Eingabe.');
}

    