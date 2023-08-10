# RealEstateCare

## Installatie
1. Kloon de repository van Github.

    _git clone \<repository-url\>_

2. Installeer de vereiste packages.

    _npm install_

3. Start de server

    _ionic serve_

Live versie: [https://super-valkyrie-5e1714.netlify.app](https://super-valkyrie-5e1714.netlify.app/)](https://legendary-meringue-4fd5f5.netlify.app)

## Login
|Gebruikersnaam|Wachtwoord  |
|--|--|
|Mariska  |admin123 |
|Leonie|admin

**Let op:** Het JSON bestand wordt bij uitloggen opnieuw ingeladen met de beginwaardes.

## Projectomschrijving
RealEstateCare is een dienstverlenende organisatie die voor verschillende opdrachtgevers zoals woningcoöperaties en vastgoedontwikkelaars woningen onderhoudt, verbeterd en inspecteert.

Dit project is een prototype van een mobiele webapplicatie waarmee de inspecteurs op locatie hun waarnemingen kunnen rapporteren. Zij zijn hierdoor niet meer gebonden aan een vaste werkplek.

## Ingezette technologieën
- Vue.js: Vue.js is een lichtgewicht framework waarmee goed onderhoudbare en schaalbare applicaties kunnen worden gebouwd.

- Ionic: Door inzet van dit framework is een goed, overzichtelijk en eenduidig design bewerkstelligd.

- Vuex: Vuex is een state management die het mogelijk maakt data op één centrale plek in de applicatie te beheren. Door gebruik van Vuex is er gehoor gegeven aan het Singleton pattern.

- JSONBin: Om data beschikbaar te kunnen stellen via een API is JSONBin ingezet.

- Vue-router: Vue router is ingezet om tussen de componenten te kunnen navigeren.

## Gebruiksvriendelijkheid
Om de gebruiksvriendelijkheid van de applicatie naar een hoger niveau te brengen zijn de heuristieken van Jakob Nielsen in acht genomen. Deze zijn als volgt toegepast:

1. Wanneer er tijd nodig is om data te laden wordt er een loader getoond om de gebruiker zichtbaarheid te geven in de status waarin de applicatie zich bevindt.

2. In de gehele applicatie is gebruik gemaakt van begrijpbare taal en herkenbare iconen.

3. Er is een button in de header opgenomen waarmee de gebruiker altijd kan terugkeren naar de vorige pagina en hiermee zijn actie ongedaan kan maken. Daarnaast heeft de gebruiker ook de mogelijkheid om de invoer van een inspectie die hij/zij heeft aangepast te annuleren.

4. Er is binnen de gehele applicatie gebruik gemaakt van herkenbare elementen.

5. Door validatie op de invoervelden wordt de gebruiker geïnformeerd als er informatie onjuist is ingevoerd. Daarnaast worden er meldingen getoond wanneer een verplicht veld niet is ingevuld.

6. Er wordt binnen de applicatie niet verwacht dat de gebruiker zaken moet onthouden.

7. De applicatie is afgestemd op de gebruiker.

8. Het design in minimaal en verfijnd opgezet.

9. Foutmeldingen worden netjes aan de gebruiker getoond.

10. Er is een contactpagina opgenomen. Mocht de gebruiker hulp nodig hebben, dan kan hij/zij daar de contactgegevens vinden.

## Toegankelijkheid
De toegankelijkheid van de applicatie is getoetst volgens de WCAG 2.1 niveau A richtlijnen.

- Alle inputvelden en elementen zoals checkboxes zijn voorzien van aria-labels.

- Alle afbeeldingen zijn voorzien van een alt tekst.

- Er zijn geen animaties gebruikt omdat deze geen meerwaarde hebben voor de functionaliteit.

- Er is contrast ingezet tussen de achtergrond en de tekst.

- Alle pagina’s hebben een titel die het onderwerp of het doel van de pagina omschrijft.

- Het wordt middels een tekstuele melding aan de gebruiker getoond als er een invoerfout wordt gemaakt.

Er is in dit prototype nog geen gehoor gegeven aan de richtlijn om alle functionaliteit middels een toetsenbord bedienbaar te maken.

## Veiligheid
Om de applicatie enkel beschikbaar te stellen voor de inspecteurs, is een two-factor inlogprocedure geïmplementeerd. In dit prototype is de two-factor identificatie gesimuleerd door het weergeven van een verificatiecode middels een toast. In de definitieve versie zal de verificatiecode verstuurd moeten worden naar een mobiele telefoon.

Als de applicatie in productie wordt genomen is het essentieel voor de veiligheid dat het wachtwoord van de gebruiker middels hash worden opgeslagen.

## Style guide
Tijdens de ontwikkeling van het project is de style guide van het Vue.js framework in acht genomen.


## Aanvullingen
Voor het beschikbaar stellen van de data via een API is gebruik gemaakt van JSONBin. JSONbin biedt helaas geen mogelijkheid om een enkel record in de data aan te passen. Hierdoor is het binnen dit prototype niet mogelijk om de accountinstellingen wijzigen. Dit zal namelijk tot gevolg hebben dat alle accounts worden overschreven.

## Slotwoord
Ik hoop dat ik u voldoende inzicht heb kunnen geven in het proces dat is doorlopen om het prototype te bewerkstelligen. Mocht u nog vragen hebben dan kunt u mij contacteren via:
[mariska.sdw@gmail.com](mailto:mariska.sdw@gmail.com)  
