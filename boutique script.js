document.querySelector(".story").addEventListener("click", story);
document.querySelector(".faciliteiten").addEventListener("click", faciliteiten);
document.querySelector(".ondernemen").addEventListener("click", ondernemen);
document.querySelector(".parking").addEventListener("click", parking);
document.querySelector(".wifi").addEventListener("click", wifi);
function story() {
    const container = document.querySelector(".container");
    const element = `default`;
    container.innerHTML = element;
    document.querySelector(".story").addEventListener("click", story);
}
function faciliteiten() {
    const container = document.querySelector(".container");
    const element = `<div class="tab">
                        <button id="tab" class="tv">TV</button>
                        <button id="tab" class="ontbijt">Ontbijt</button>
                    </div>`;
    container.innerHTML = element;
    document.querySelector(".ontbijt").addEventListener("click", ontbijt);
    document.querySelector(".tv").addEventListener("click", tv);
    document.querySelector(".faciliteiten").addEventListener("click", faciliteiten);
}
// items in tabmenu faciliteiten
function tv() {
    const container = document.querySelector(".container");
    const element = `<h3 style="margin-left: 10px;">Televisie</h3>
    <p style="margin-left: 10px;">Elke kamer beschikt over een digitale flatscreen televisie met meerdere kanalen. <br>
        Op sommige TV's zitten de beschikbare zenders in de hogere kanalen.<br>Mocht je een slechte of geen
        ontvangst hebben, verhoog het kanaal stelselmatig met de 'P'-knop. <br>Ergens in de 20-tal zal de nummering
        herbeginnen vanaf 1. <br>Vanaf daar zijn alle digitale zenders beschikbaar
    </p>`;
    container.innerHTML = element;
    document.querySelector(".tv").addEventListener("click", tv);
}

function ontbijt() {
    const container = document.querySelector(".container");
    const element = `<h3 style="margin-left: 10px;">Ontbijt</h3>
    <p style="margin-left: 10px;">
        Het uitgebreid ontbijtbuffet wordt geserveerd in Hovenierstraat 50.<br>
            ma-vrij: 7:00 - 9:00 <br>
            zat-zon- en feestdagen: 8:00 - 10:00 <br> <br>
VROEG ONTBIJT: Moet u al vroeg de deur uit? We voorzien een snel self-service ontbijt. <br>
            ma-vrij: 5:00 - 7:00 <br>
            zat-zon- en feestdagen: 7:00 - 8:00 <br>
            Gelieve vooraf te reserveren en af te rekenen. <br><br>

Allergisch? Speciaal allergie-dieet is mogelijk op aanvraag.
</p>`;
    container.innerHTML = element;
    document.querySelector(".ontbijt").addEventListener("click", ontbijt)
}
// einde items in tabmenu faciliteiten
function ondernemen() {
    const container = document.querySelector(".container");
    const element = `<h3 style="margin-left: 10px;">Duurzaamheid</h3>
    <h4 style="margin-left: 10px;margin-bottom: 5px;">Help ons om nog duurzamer te ondernemen door de volgende stappen te volgen</h4>
    <ul style="margin-left: 10px;margin-top: 0px;">
        <li>Alle kranen bevatten drinkbaar water.</li>
        <li>Enkel de handdoeken op de grond zullen vervangen worden.</li>
        <li>We poetsen met ecologisch afbreekbare schoonmaakproducten. Mocht u opmerkingen hebben i.v.m. hygiëne, laat ons dit weten.</li>
        <li>Doe het licht en de verwarming uit nadat je de kamer verlaat.</li>
        <li>Maak optimaal gebruik van ons ventilatiesysteem met warmterecuperatie en laat de ramen zoveel mogelijk gesloten om de balans niet te breken.</li>
    </ul>`;
    container.innerHTML = element;
    document.querySelector(".ondernemen").addEventListener("click", ondernemen);
}
function parking() {
    const container = document.querySelector(".container");
    const element = `<h3 class="park">Parkeren</h3>
                        <p class="park">Een garage voor uw wagen is beschikbaar op aanvraag: 15 euro/nacht.<br>
                            Een afgesloten fietsenstalling is gratis beschikbaar op aanvraag.<br>
                            Parkeren: Betalend 4€ per dag via app 4411 of <a href="https://www.kortrijk.be/parko" target="_blank">www.parko.be</a>.<br>
                            Gratis parkeren op zondag. Op werkdagen tussen 19u en 9u is het ook gratis.
                        </p>`;
    container.innerHTML = element;
    document.querySelector(".parking").addEventListener("click", parking);
}
function wifi() {
    const container = document.querySelector(".container");
    const element = `<h3 class="flex">Internet</h3>
                    <p class="flex">Elke kamer heeft gratis internet.</p>
                    <p class="flex">Naam WiFi: focus <br>
                        Wachtwoord: focus123</p>
                    <div class="flex">
                        <img src="./qrwififocus.png" height="200" width="200">
                    </div>`;
    container.innerHTML = element;
    document.querySelector(".wifi").addEventListener("click", wifi);
}