import type { InstructionStep } from "@/data/products";

/**
 * Cone quick-guide steps for Navina Classic and Navina Smart.
 * Copy follows the locale snabbguider (Förberedelser & Användning and
 * equivalents), including the English quick guides. Norwegian is Classic
 * only — Smart has no
 * Norwegian cone or catheter sheet and stays unavailable in that locale.
 * Illustrations are the official Navina system panels (same files as the
 * catheter tab). The attached cone PNG packs were LoFric urinary-catheter
 * drawings, so they are not used here.
 */

const classicImages = [
  "/images/instructions/navina-classic/cone/1-preparation.png",
  "/images/instructions/navina-classic/cone/2-activation.png",
  "/images/instructions/navina-classic/cone/3-instillation.png",
  "/images/instructions/navina-classic/cone/4-evacuation.png",
  "/images/instructions/navina-classic/cone/5-disassembly.png",
] as const;

const smartImages = [
  "/images/instructions/navina-smart/cone/1-preparation.png",
  "/images/instructions/navina-smart/cone/2-activation.png",
  "/images/instructions/navina-smart/cone/3-instillation.png",
  "/images/instructions/navina-smart/cone/4-evacuation.png",
  "/images/instructions/navina-smart/cone/5-disassembly.png",
] as const;

export const navinaClassicCone: InstructionStep[] = [
  {
    title: {
      en: "Preparation",
      sv: "Förberedelser",
      fi: "Valmistelu",
      da: "Forberedelse",
      no: "Klargjøring",
    },
    text: {
      en: "1. Fill water to the 0-mark of the container. Close the lid. 2. Connect the water container tube between the water container and the control unit (dark blue). 3. Connect the cone tube between the control unit and the cone (light blue/white). Note: Follow colour coding and symbols. Use lukewarm (36–38 °C) clean water only. Make sure the safety valve on the lid is not blocked during the procedure.",
      sv: "1. Fyll på med vatten upp till 0-markeringen på behållaren och stäng locket. 2. Anslut vattenbehållaren och kontrollenheten med vattenbehållarens slang (mörkblå). 3. Anslut kontrollenheten och konan med konslangen (ljusblå/vit). Obs! Följ färgkodningen och symbolerna. Använd endast ljummet rent vatten (36–38 °C). Försäkra dig om att säkerhetsventilen på locket inte är blockerad under irrigeringen.",
      fi: "1. Täytä säiliö vedellä 0-merkkiin asti ja sulje kansi. 2. Liitä vesisäiliöletku vesisäiliön ja ohjausyksikön välille (tummansininen). 3. Liitä kartioletku ohjausyksikön ja kartion välille (harmaa/valkoinen). Huomaa: Seuraa värikoodeja ja symboleja. Käytä vain kädenlämpöistä, puhdasta vettä (36-38 °C). Varmista, että kannen turvaventtiili ei ole tukossa suolihuuhtelutoimenpiteen aikana.",
      da: "1. Fyld vand i beholderen op til 0-mærket. Luk låget. 2. Montér vandbeholderslangen mellem vandbeholderen og kontrolenheden (mørkeblå). 3. Montér slangen til conen mellem kontrolenheden og conen (lyseblå/hvid). OBS! Følg farvekoderne og symbolerne. Anvend kun lunkent, rent vand (36–38 °C). Tjek at sikkerhedsventilen på låget ikke er blokeret under irrigation.",
      no: "1. Fyll vann til 0-merket på beholderen. Lukk lokket. 2. Koble til slangen mellom vannbeholderen og kontrollenheten (mørkeblå). 3. Koble til slangen mellom kontrollenheten og conen (lyseblå/hvit). Merk: Følg fargekoder og symboler. Bruk kun lunkent og rent vann (36–38 °C). Kontroller at sikkerhetsventilen på lokket ikke er blokkert under prosedyren.",
    },
    image: classicImages[0],
  },
  {
    title: {
      en: "Activation",
      sv: "Aktivering",
      fi: "Aktivointi",
      da: "Aktivering",
      no: "Aktivering",
    },
    text: {
      en: "1. Make sure the water flow is opened. 2. Pump water with the dark blue pump until it covers 3/4 of the cone, making it slippery. 3. Close the water flow. Note: Do not add additional lubricant.",
      sv: "1. Kontrollera att vattenflödet är öppet. 2. Pumpa vatten med den mörkblå pumpen tills vattnet täcker konan och aktiverar den hala ytan. 3. Stäng av vattenflödet. Obs! Inget annat glidmedel behövs.",
      fi: "1. Varmista, että vesivirta on auki. 2. Täytä kartiopussi pumppaamalla vettä tummansinisellä pumpulla kunnes vettä on noin 3/4 kartion pituudelta. Kartio saa näin liukkaan pinnan. 3. Sulje vesivirta. Huomaa: Älä käytä mitään lisäliukasteita.",
      da: "1. Tjek, at der er åbnet for vandet. 2. Pump vand med den mørkeblå pumpe, til vandet dækker conen og aktiverer den glatte overflade. 3. Luk af for vandet. Obs! Smørremiddel er ikke nødvendigt.",
      no: "1. Kontroller at vanngjennomstrømningen er åpen. 2. Pump vann med den mørkeblå pumpen til 3/4 av conen er fuktet og glatt. 3. Lukk vanngjennomstrømningen. Merk: Ikke bruk ekstra smøremiddel.",
    },
    image: classicImages[1],
  },
  {
    title: {
      en: "Instillation",
      sv: "Tillförsel av vatten",
      fi: "Veden johtaminen",
      da: "Vandtilførsel",
      no: "Instillasjon",
    },
    text: {
      en: "1. Carefully insert the cone, without any force, into the rectum, as far as instructed by your healthcare professional. Hold it in place during the procedure. 2. Open the water flow. 3. Instill the water volume, as indicated by your health care provider, using the dark blue pump. Stop or pause the instillation at any time by releasing the pump and closing the water flow. 4. Close the water flow. Note: Never insert the cone with force. If experiencing resistance, remove the cone, and follow the instructions for use troubleshooting section. If resistance continues, stop using irrigation and seek help from a health care professional.",
      sv: "1. För försiktigt in konan i ändtarmen, utan att ta i, tills konan sitter bekvämt, enligt instruktionerna från sjukvårdspersonalen. Håll den på plats under irrigeringen. 2. Öppna vattenflödet. 3. Pumpa in den mängd vatten som sjukvårdspersonalen har angivit med hjälp av den mörkblå pumpen. Du kan när som helst avbryta eller pausa vattentillförseln genom att släppa pumpen. 4. Stäng vattenflödet.",
      fi: "1. Vie kartio varovaisesti, voimaa käyttämättä peräsuoleen, kunnes kartio asettuu sopivasti peräaukkoa vasten terveydenhuollon ammattilaisen antamien ohjeiden mukaisesti. 2. Avaa vesivirta. 3. Johda vettä terveydenhuollon ammattilaisen sinulle neuvoma määrä, käyttäen tummansinistä pumppua. Voit milloin tahansa lopettaa veden johtamisen tai pitää siitä taukoa vapauttamalla pumpun ja sulkemalla vesivirran. 4. Sulje vesivirta. Huomaa: Älä milloinkaan vie kartiota peräsuoleen voimaa käyttäen. Jos tunnet vastusta, poista kartio, ja seuraa annettuja käyttöohjeita. Jos vastus jatkuu, lopeta huuhtelu ja kysy neuvoa terveydenhuollon ammattilaiselta.",
      da: "1. Indfør forsigtigt conen i endetarmen, uden at forcere det, i henhold til sundhedspersonalets vejledning. Hold conen på plads under irrigationen. 2. Åbn for vandet. 3. Pump den mængde vand ind, som sundhedspersonalet har angivet, med den mørkeblå pumpe. Du kan til enhver tid afbryde eller holde en pause med vandtilførslen ved at slippe pumpen. 4. Luk for vandet. OBS! Indfør aldrig conen med kraft. Hvis der opleves modstand ved indføring af conen, tag den ud, og følg vejledningen for problemløsning i brugsvejledningen. Hvis modstand fortsat opleves, ophør med irrigation og søg hjælp hos sundhedspersonalet.",
      no: "1. Sett conen forsiktig inn i endetarmen uten å bruke makt slik at det føles komfortabelt og som helsepersonell har instruert deg. 2. Åpne vanngjennomstrømningen. 3. Sett inn den vannmengden du har fått opplyst av helsepersonell ved å bruke den mørkeblå pumpen. Du kan når som helst stoppe eller ta en pause i innstallasjonen ved å slippe opp pumpen og lukke vanngjennomstrømningen. 4. Lukk vanngjennomstrømningen. Merk: Sett aldri conen inn med makt. Hvis du opplever motstand, trekk ut conen og følg instruksjonene i brukerveilederen i avsnittet for problemløsning. Hvis du fortsatt opplever motstand, stopp irrigasjonen og søk hjelp av helsepersonell.",
    },
    image: classicImages[2],
  },
  {
    title: {
      en: "Evacuation",
      sv: "Tömning",
      fi: "Tyhjennys",
      da: "Tømning",
      no: "Tømming",
    },
    text: {
      en: "1. Remove the cone gently. 2. Allow the bowel to empty. If needed to start emptying, relax for 10–15 minutes, lean forward, cough or massage the abdomen.",
      sv: "1. Ta försiktigt ut konan. 2. Låt tarmen tömmas. Om tarmen inte börjar tömmas automatiskt, slappna av i 10–15 minuter, luta dig framåt, hosta eller massera magen.",
      fi: "1. Poista kartio varovaisesti. 2. Anna suolen tyhjentyä. Jos suoli ei ala tyhjentyä itsestään, rentoudu 10–15 minuuttia ja yritä sitten nojata eteenpäin, hiero vatsaa tai liikuta ylävartaloa, jotta tyhjenemisprosessi alkaisi.",
      da: "1. Tag forsigtigt conen ud. 2. Lad tarmen tømmes. Hvis tarmen ikke automatisk begynder at tømmes, slap af i 10-15 minutter, læn dig forover, host eller massér maven.",
      no: "1. Ta forsiktig ut conen. 2. La tarmen tømme seg. Hvis det er nødvendig å starte tømmingen, slapp av i 10-15 minutter, bøy deg forover, host eller masser magen.",
    },
    image: classicImages[3],
  },
  {
    title: {
      en: "Disassembly",
      sv: "Isärtagning",
      fi: "Purkaminen",
      da: "Afmontering",
      no: "Demontering",
    },
    text: {
      en: "1. Open the water container lid. 2. Disconnect the tubes from the control unit. 3. Empty the water from the tubes. 4. Open the water flow and empty the water from the control unit. 5. Disconnect the single use cone and dispose of it as household waste. It must not be reused and not flushed down the toilet. 6. Disconnect the tube from the water container and empty the water. 7. Clean and dry the tubing, water container and control unit with a cloth and mild soapy water. Note: Tick a box in the usage calendar (see instructions for use) after each use to keep track of when to exchange the water container and tube set.",
      sv: "1. Öppna vattenbehållarens lock. 2. Koppla loss slangarna från kontrollenheten. 3. Töm ut vattnet ur slangarna. 4. Öppna vattenflödet och töm ut vattnet ur kontrollenheten. 5. Koppla loss engångskonan och kassera den som hushållsavfall. Den får inte återanvändas eller spolas ner i toaletten. 6. Koppla loss slangen från vattenbehållaren och töm ut vattnet. 7. Skölj av slangarna, vattenbehållaren och kontrollenheten, rengör dem med vatten och mild tvål och torka dem. Obs! Markera en ruta i förbrukningsmatrixen (se bruksanvisningen) efter varje användning för att hålla reda på när vattenbehållaren och vattenslangsetet behöver bytas.",
      fi: "1. Avaa vesisäiliön kansi. 2. Irrota letkut ohjausyksiköstä. 3. Poista vesi letkuista. 4. Avaa vesivirta ja tyhjennä vesi ohjausyksiköstä. 5. Irrota kertakäyttöinen kartio ja hävitä kotitalousjätteen mukana. Kartiota ei saa käyttää uudelleen eikä sitä saa huuhdella alas wc-pöntöstä. 6. Irrota letku vesisäiliöstä ja poista vesi. 7. Tarvittaessa puhdista ja kuivaa letkusto, vesisäiliö ja ohjausyksikkö laimealla saippuavedellä ja liinalla. Huomaa: Merkitse jokainen huuhtelu käyttökalenteriin (katso käyttöohjeet) voidaksesi seurata, milloin vesisäiliö ja letkusto tulee vaihtaa uuteen.",
      da: "1. Åbn vandbeholderlåget. 2. Kobl slangerne fra kontrolenheden. 3. Tøm vand af slangerne. 4. Åbn for vandet og tøm vand af kontrolenheden. 5. Frakobl engangs-conen, og kassér den som husholdningsaffald. Conen må ikke genbruges, og den må ikke skylles ud i toilettet. 6. Kobl slangen fra vandbeholderen og tøm den for vand. 7. Skyl slangerne og vandbeholderen, rengør dem i mildt sæbevand og tør dem. Kontrolenheden må kun aftørres. OBS! Sæt kryds i din kalender (se brugsvejledning) efter hver irrigation for at holde styr på, hvornår vandbeholder og slangesæt skal udskiftes.",
      no: "1. Åpne lokket på vannbeholderen. 2. Koble slangene fra kontrollenheten. 3. Tøm vann ut av slangene. 4. Åpne vanngjennomstrømningen og tøm vannet ut av kontrollenheten. 5. Koble fra engangs conen og kast den i restavfall. Conen må ikke gjenbrukes eller kastet i toalettet. 6. Koble slangen fra vannbeholderen og tøm ut vannet. 7. Rengjør og tørk slangene, vannbeholderen og kontrollenheten med en klut, mild såpe og vann. Merk: Merk av en boks i kalenderen (se brukerveilederen) etter bruk for å holde rede på når vannbeholderen og slangesettet skal skiftes.",
    },
    image: classicImages[4],
  },
];

export const navinaSmartCone: InstructionStep[] = [
  {
    title: {
      en: "Preparation",
      sv: "Förberedelser",
      fi: "Valmistelu",
      da: "Forberedelse",
    },
    text: {
      en: "Note: Make sure that the control unit is charged and the parameters are set before starting on this page. 1. Fill with water to the upper mark of the container and close the lid. 2. Connect the water container tube between the water container and the control unit (dark blue). 3. Connect the cone tube between the control unit and the cone (light blue/white). Note: Follow color coding and symbols. Use lukewarm (36–38 °C) clean water only.",
      sv: "Obs! Kontrollera att enheten är laddad och att alla parametrar är inställda innan du påbörjar den här sidan. 1. Fyll på med vatten upp till 0-markeringen på behållaren och stäng locket. 2. Anslut vattenbehållaren och kontrollenheten med vattenbehållarens slang (mörkblå). 3. Anslut kontrollenheten och konan med konslangen (ljusblå/vit). Obs! Följ färgkodningen och symbolerna. Använd endast ljummet rent vatten (36–38 °C).",
      fi: "Huomaa: Varmista, että ohjausyksikkö on ladattu ja parametrit on asetettu ennen kuin aloitat tällä sivulla esitettyjä valmisteluja. 1. Täytä säiliö vedellä säiliössä olevaan 0-merkkiin asti ja sulje kansi. 2. Liitä vesisäiliöletku vesisäiliön ja ohjausyksikön (tummansininen) välille. 3. Liitä kartioletku ohjausyksikön ja katetrin välille (harmaa/valkoinen). Huomaa: Seuraa värikoodeja ja symboleja. Käytä vain kädenlämpöistä, puhdasta vettä (36-38 °C).",
      da: "OBS: Kontrolenheden skal være opladet og parametrene indstillet, før du begynder på denne side. 1. Fyld vand i beholderen, op til 0-mærket, og luk låget. 2. Montér vandbeholderslangen mellem vandbeholderen og kontrolenheden (mørkeblå). 3. Montér cone-slangen mellem kontrolenheden og conen (lyseblå/hvid). OBS! Følg farvekoderne og symbolerne. Anvend kun lunkent, rent vand (36–38 °C). Tjek at sikkerhedsventilen på låget ikke er blokeret under irrigation.",
    },
    image: smartImages[0],
  },
  {
    title: {
      en: "Activation",
      sv: "Aktivering",
      fi: "Aktivointi",
      da: "Aktivering",
    },
    text: {
      en: "1. Turn on the Navina Smart control unit by pressing the power button. 2. Press any button to go to activation mode. 3. Press and hold the water button to pump water until the cone is covered with water (making it slippery) and the icon appears on the screen. 4. Press advance when you are ready to continue to instillation mode. Note: Do not add additional lubricant.",
      sv: "1. Slå på Navina Smart-kontrollenheten genom att trycka på strömknappen. 2. Gå till aktiveringsläget genom att trycka på valfri knapp. 3. Tryck och håll in vattenknappen för att pumpa in vatten tills vattnet täcker konan och aktiverar den hala ytan och ikonen syns på skärmen. 4. Tryck på knappen för att gå vidare när du är redo att föra in konan och gå vidare till vattentillförselläget. Obs! Inget annat glidmedel behövs.",
      fi: "1. Käynnistä Navina Smart -ohjausyksikkö painamalla virtapainiketta. 2. Siirry aktivointivaiheeseen painamalla mitä tahansa painiketta. 3. Paina ja pidä vesipainiketta pumpataksesi vettä, kunnes katetri peittyy veteen (katetri saa näin liukkaan pinnan) ja kuvake ilmestyy näytölle. 4. Paina etenemispainiketta, kun olet valmis asettamaan katetrin ja jatkamaan vedenjohtamistilaan. Huomaa: Älä käytä mitään lisäliukasteita.",
      da: "1. Tænd Navina Smart kontrolenheden ved at trykke på tænd/sluk-knappen. 2. Tryk på en knap for at gå til aktiveringsfunktionen. 3. Tryk på vandknappen og hold den nede for at pumpe vand, til keglen er dækket og aktiverer den glatte overflade. 4. Tryk på videre-knappen, når du er klar til at indføre keglen, og gå til vandtilførselsfunktionen. OBS! Smørremiddel er ikke nødvendigt.",
    },
    image: smartImages[1],
  },
  {
    title: {
      en: "Instillation",
      sv: "Tillförsel av vatten",
      fi: "Veden johtaminen",
      da: "Vandtilførsel",
    },
    text: {
      en: "1. Carefully insert the cone, without any force, as you have been instructed by your healthcare professional. Hold the cone in place during irrigation. 2. Instill water by pressing the water button. Note: Never insert the cone with force. If experiencing resistance, remove the cone, and see the instructions for use troubleshooting section. If resistance continues, stop using irrigation and seek help from a health care professional. Do not turn off the control unit.",
      sv: "1. För försiktigt in konan, utan att ta i, enligt instruktionerna från sjukvårdspersonalen. Håll konan på plats under irrigeringen. 2. Tillför vattnet genom att trycka på vattenknappen. Obs! För aldrig in konan med våld. Om du upplever ett motstånd, avlägsna konan och läs avsnittet om felsökning i bruksanvisningen. Om motståndet kvarstår, sluta använda irrigering och kontakta din förskrivare för att få hjälp. Stäng inte av kontrollenheten.",
      fi: "1. Aseta kartio terveydenhuoltoammattilaisen ohjeistuksen mukaisesti. 2. Johda vettä painamalla vesipainiketta. Huomaa: Älä koskaan aseta kartiota väkisin. Jos tunnet vastusta, poista katetri ja katso käyttöohjeiden vianmääritysosio. Jos vastus jatkuu, lopeta huuhtelun käyttö ja pyydä apua terveydenhuollon ammattilaiselta. Älä sammuta ohjausyksikköä.",
      da: "1. Indfør forsigtigt rektalkeglen i endetarmen, uden at forcere det, i henhold til sundhedspersonalets vejledning. Hold conen på plads under irrigationen. 2. Tilfør vand ved at trykke på vandknappen. OBS! Indfør aldrig conen med kraft. Hvis der opleves modstand ved indføring af conen, tag den ud, og følg vejledningen for problemløsning i brugsvejledningen. Hvis modstand fortsat opleves, ophør med irrigation og søg hjælp hos sundhedspersonalet. Sluk ikke kontrolenheden.",
    },
    image: smartImages[2],
  },
  {
    title: {
      en: "Evacuation",
      sv: "Tömning",
      fi: "Tyhjennys",
      da: "Tømning",
    },
    text: {
      en: "1. Remove the cone gently. 2. Allow the bowels to empty. If needed to start emptying, relax for 10–15 minutes, lean forward, cough or massage the abdomen. Do not turn off the control unit.",
      sv: "1. Ta försiktigt ut konan. 2. Låt tarmen tömmas. Om tarmen inte börjar tömmas automatiskt, slappna av i 10–15 minuter, luta dig framåt, hosta eller massera magen. Stäng inte av kontrollenheten.",
      fi: "1. Poista kartio varovasti. 2. Anna suolen tyhjentyä. Jos suoli ei ala tyhjentyä itsestään, rentoudu 10-15 minuuttia ja yritä sitten nojata eteenpäin, yskäise tai hiero vatsaa tai liikuta ylävartaloa, jotta tyhjeneminen alkaisi. Älä sammuta ohjausyksikköä.",
      da: "1. Tag forsigtigt conen ud. 2. Lad tarmen tømmes. Hvis tarmen ikke automatisk begynder at tømmes, slap af i 10-15 minutter, læn dig forover, host eller massér maven. Sluk ikke kontrolenheden.",
    },
    image: smartImages[3],
  },
  {
    title: {
      en: "Disassembly",
      sv: "Isärtagning",
      fi: "Purkaminen",
      da: "Afmontering",
    },
    text: {
      en: "1. Open the water container lid. 2. Disconnect the tubes from the control unit. 3. Empty water from the tubes by raising the disconnected ends. 4. Turn off the Navina Smart control unit and empty water from the control unit. 5. Disconnect the tube from the water container and empty the water container. 6. Disconnect the single use cone and dispose of it as household waste. It must not be reused and not flushed down the toilet. 7. Clean and dry the tubing and water container with a cloth and mild soapy water. The control unit must only be wiped clean. Note: Tick a box in the usage calendar (see instructions for use) after each use to keep track of when to exchange the water container and tube set. Transfer data: see instructions on opposite side.",
      sv: "1. Öppna vattenbehållarens lock. 2. Koppla loss slangarna från kontrollenheten. 3. Töm ut vattnet ur slangarna. 4. Stäng av Navina Smart-kontrollenheten och töm den på vatten. 5. Koppla loss slangen från vattenbehållaren och töm ut vattnet. 6. Koppla loss engångskonan och kassera den som hushållsavfall. Den får inte återanvändas eller spolas ner i toaletten. 7. Skölj av de återanvändbara delarna, rengör dem med vatten och mild tvål och torka dem. Kontrollenheten skall endast torkas av. Obs! Markera en ruta i förbrukningsmatrixen (se bruksanvisningen) efter varje användning för att hålla reda på när vattenbehållaren och vattenslangsetet behöver bytas. Överföring av data: var god vänd för instruktioner.",
      fi: "1. Avaa vesisäiliön kansi. 2. Irrota letkut ohjausyksiköstä. 3. Poista vesi letkuista nostamalla irrotetut päät ylös. 4. Sammuta Navina Smart -ohjausyksikkö ja tyhjennä vesi ohjausyksiköstä. 5. Irrota letku vesisäiliöstä ja poista vesi. 6. Irrota kertakäyttöinen kartio ja hävitä kotitalousjätteen mukana. Katetria ei saa käyttää uudelleen eikä sitä saa huuhdella alas wc-pöntöstä. 7. Tarvittaessa puhdista ja kuivaa letkusto, vesisäiliö ja ohjausyksikkö laimealla saippuavedellä ja liinalla. Ohjausyksikön saa vain pyyhkiä puhtaaksi. Huomaa: Merkitse jokainen huuhtelu käyttökalenteriin (katso käyttöohjeet) voidaksesi seurata, milloin vesisäiliö ja letkusto tulee vaihtaa uuteen. Tietojen siirtäminen: katso ohjeet kääntöpuolelta.",
      da: "1. Åbn vandbeholderlåget. 2. Kobl slangerne fra kontrolenheden. 3. Tøm vand af slangerne. 4. Sluk for kontrolenheden og tøm den for vand. 5. Frakobl conen, og kassér den som husholdningsaffald. Conen må ikke genbruges og den må ikke skylles ud i toilettet. 6. Kobl slangen fra vandbeholderen og tøm den for vand. 7. Skyl de genanvendelige dele, rengør dem i mildt sæbevand og tør dem. Kontrolenheden må kun aftørres. OBS! Sæt kryds i din brugskalender (se brugsvejledning) efter hver irrigation for at holde styr på hvornår vandbeholder og slangesæt skal udskiftes. Dataoverførsel: se vejledning på modsatte side.",
    },
    image: smartImages[4],
  },
];
