/**
 * Clinical copy taken from the LoFric IFU sheets (indications, warnings,
 * adverse reactions, do-not-use lines, package and storage).
 *
 * English for LoFric Elle Pro is translated from the Swedish IFU. That sheet
 * has Swedish, Norwegian, Finnish and Danish only.
 */
type Localized = { en: string; sv: string; fi: string; da: string; no: string };

export type IfuClinical = {
  indications: Localized[];
  safety: Localized[];
  contraindications: Localized[];
  contraindicationsIntro?: Localized;
  warningSigns: Localized[];
  storage: Localized;
};

const L = (en: string, sv: string, fi: string, da: string, no: string): Localized => ({
  en,
  sv,
  fi,
  da,
  no,
});

/** PDF 01 — LoFric (Classic). Gender-agnostic. Includes infants. */
export const classicIfu: IfuClinical = {
  indications: [
    L(
      "For short and long term intermittent urinary catheterization.",
      "För kort- och långtidsanvändning vid kateterisering av urinvägarna.",
      "Lyhyt- ja pitkäaikaiseen omatoimiseen toistokatetrointiin.",
      "Til intermitterende kort- og langtidskateterisering.",
      "For kort- og langvarig intermitterende kateterisering.",
    ),
    L(
      "For adults, adolescents, children, and infants.",
      "För vuxna, ungdomar, barn och spädbarn.",
      "Aikuisille, nuorille, lapsille ja vauvoille.",
      "Til voksne, unge, børn og spædbørn.",
      "For voksne, ungdom, barn og spedbarn.",
    ),
  ],
  safety: [
    L(
      "For single use only.",
      "Endast för engångsbruk.",
      "Kertakäyttöinen.",
      "Kun til engangsbrug.",
      "Kun til engangsbruk.",
    ),
    L(
      "Once used the surface coating will deteriorate and is no longer sterile.",
      "Efter användning kommer ytbeläggningen att försämras och katetern är inte längre steril.",
      "Käytetyn tuotteen pinnoite heikkenee, eikä tuote ole enää steriili.",
      "Efter brug er overfladebelægningen ikke længere intakt og ikke længere steril.",
      "Etter bruk vil overflatebelegget forringes og ikke lenger være sterilt.",
    ),
    L(
      "Reuse may lead to discomfort, urethral damage, or infection.",
      "Återanvändning kan leda till obehag, skador på urinröret eller infektion.",
      "Uudelleenkäyttö voi aiheuttaa epämukavuutta, virtsaputken vaurioita tai infektioita.",
      "Genbrug kan medføre ubehag, beskadigelse af urinrøret eller infektion.",
      "Gjenbruk kan føre til ubehag, skade eller infeksjon i urinrøret.",
    ),
    L(
      "Do not use a product if the sterile packaging is broken or damaged.",
      "Använd aldrig en produkt om den sterila förpackningen är bruten eller skadad.",
      "Älä käytä tuotetta, jos steriili pakkaus on vahingoittunut.",
      "Brug ikke et produkt, hvis den sterile pakning er brudt eller beskadiget.",
      "Ikke bruk et produkt dersom den sterile emballasjen er brutt eller skadet.",
    ),
    L(
      "Urinary catheterization therapy is associated with an increased risk of urethral bleeding, trauma and/or infection.",
      "Kateterisering är förknippad med en ökad risk för blödning från urinröret, trauma på urinröret och/eller urinvägsinfektion.",
      "Virtsarakon katetrointiin liittyy virtsaputken verenvuodon, vaurion ja/tai virtsatieinfektion suurentunut riski.",
      "Behandling med urinkateterisering er forbundet med en øget risiko for blødning, skader og/eller infektion i urinrøret.",
      "Behandling med kateterisering er forbundet med økt risiko for blødning, skade og/eller infeksjon i urinrøret.",
    ),
    L(
      "LoFric catheters are for prescription use only. AU: Always consult a healthcare professional before using LoFric catheters.",
      "LoFric-katetrar är endast avsedda för användning efter förskrivning.",
      "LoFric-katetri on saatavilla vain terveydenhuollon ammattilaisen määräyksellä.",
      "LoFric katetre skal ordineres af en læge.",
      "LoFric katetre er kun for reseptbelagt bruk.",
    ),
    L(
      "Follow instructions and advice from your healthcare professional.",
      "Följ de anvisningar och råd som du har fått av sjukvårdspersonalen.",
      "Noudata terveydenhuollon ammattilaisen antamia ohjeita.",
      "Følg instruktioner og rådgivning fra sundhedspersonalet.",
      "Følg instruksjonene og rådene du har fått av foreskriver og annet helsepersonell.",
    ),
    L(
      "Contact your prescriber if you experience difficulties.",
      "Kontakta sjukvårdspersonal/förskrivare om du upplever problem.",
      "Jos vaikeuksia ilmenee, ota yhteys hoidon määränneeseen terveydenhuollon ammattilaiseen.",
      "Kontakt den ordinerende læge eller sygeplejerske, hvis du oplever problemer.",
      "Kontakt legen din hvis du opplever problemer.",
    ),
  ],
  contraindications: [
    L(
      "Do not use a product if the sterile packaging is broken or damaged.",
      "Använd aldrig en produkt om den sterila förpackningen är bruten eller skadad.",
      "Älä käytä tuotetta, jos steriili pakkaus on vahingoittunut.",
      "Brug ikke et produkt, hvis den sterile pakning er brudt eller beskadiget.",
      "Ikke bruk et produkt dersom den sterile emballasjen er brutt eller skadet.",
    ),
    L(
      "For single use only. Once used the surface coating will deteriorate and is no longer sterile. Reuse may lead to discomfort, urethral damage, or infection.",
      "Endast för engångsbruk. Efter användning kommer ytbeläggningen att försämras och katetern är inte längre steril. Återanvändning kan leda till obehag, skador på urinröret eller infektion.",
      "Kertakäyttöinen. Käytetyn tuotteen pinnoite heikkenee, eikä tuote ole enää steriili. Uudelleenkäyttö voi aiheuttaa epämukavuutta, virtsaputken vaurioita tai infektioita.",
      "Kun til engangsbrug. Efter brug er overfladebelægningen ikke længere intakt og ikke længere steril. Genbrug kan medføre ubehag, beskadigelse af urinrøret eller infektion.",
      "Kun til engangsbruk. Etter bruk vil overflatebelegget forringes og ikke lenger være sterilt. Gjenbruk kan føre til ubehag, skade eller infeksjon i urinrøret.",
    ),
  ],
  warningSigns: [
    L(
      "Common adverse reactions (>1/100) related to catheterization therapy includes urethral damage and urinary tract infection.",
      "Vanliga biverkningar (> 1/100) förknippade med kateterisering innefattar urinrörsskada och urinvägsinfektion.",
      "Katetrointiin liittyviä tavallisia haittavaikutuksia (> 1/100) ovat virtsaputken vauriot ja virtsatieinfektio.",
      "Almindelige bivirkninger (>1/100), der er relateret til behandling med kateterisering, omfatter urinrørsskader og urinvejsinfektion.",
      "Vanlige bivirkninger (> 1/100) relatert til behandling med kateterisering omfatter skade i urinrøret og urinveisinfeksjon.",
    ),
    L(
      "If unexpected discomfort, sign of trauma or infection occurs, discontinue use and consult your prescriber.",
      "Om oväntat obehag, tecken på trauma eller infektion uppstår, avbryt användningen och kontakta förskrivaren.",
      "Jos ilmenee odottamatonta epämukavuutta, vaurion tai infektion merkkejä, lopeta käyttö ja ota yhteys hoidon määränneeseen terveydenhuollon ammattilaiseen.",
      "Hvis der opstår uventet ubehag, tegn på traume eller infektion, skal du stoppe med at anvende katetret og spørge din ordinerende læge eller sygeplejerske til råds.",
      "Hvis det oppstår uventet ubehag, tegn på traumer eller infeksjon, må du avslutte bruken og kontakte foreskrivende lege.",
    ),
    L(
      "Any serious adverse reaction occurring when using the catheter should be reported to the manufacturer and your local health authority.",
      "Eventuella allvarliga biverkningar som uppstår vid användning av katetern ska rapporteras till tillverkaren och din lokala hälsovårdsmyndighet.",
      "Kaikki katetrin käyttöön liittyvät vakavat haittavaikutukset tulee ilmoittaa valmistajalle ja paikalliselle terveysviranomaiselle.",
      "Enhver alvorlig bivirkning, der opstår ved brugen af katetret, skal rapporteres til producenten og den lokale sundhedsmyndighed.",
      "Eventuelle alvorlige bivirkninger som oppstår i forbindelse med bruk av katetret, skal rapporteres til produsenten og lokale helsemyndigheter.",
    ),
    L(
      "Contact your prescriber if you experience difficulties.",
      "Kontakta sjukvårdspersonal/förskrivare om du upplever problem.",
      "Jos vaikeuksia ilmenee, ota yhteys hoidon määränneeseen terveydenhuollon ammattilaiseen.",
      "Kontakt den ordinerende læge eller sygeplejerske, hvis du oplever problemer.",
      "Kontakt legen din hvis du opplever problemer.",
    ),
  ],
  storage: L(
    "Store in their package in a dry place, at room temperature. Use before expiry date on package.",
    "Förvaras i förpackningen vid rumstemperatur på en torr plats. Använd före utgångsdatumet på förpackningen.",
    "Säilytä tuotteet alkuperäispakkauksessaan, kuivassa paikassa ja huoneenlämmössä. Käytä ennen pakkaukseen merkittyä viimeistä käyttöpäivää.",
    "Opbevares i indpakningen på et tørt sted ved stuetemperatur. Bruges før sidste anvendelsesdato, som står på pakken.",
    "Oppbevares i emballasjen på et tørt sted med romtemperatur. Brukes før utløpsdatoen på emballasjen.",
  ),
};

/** PDF 02 — LoFric Elle Pro. Female. Nordic IFU; English translated from Swedish. */
export const elleProIfu: IfuClinical = {
  indications: [
    L(
      "For both short- and long-term use of clean intermittent catheterisation.",
      "För både kort- och långtidsanvändning av ren intermittent kateterisering.",
      "Lyhyt- ja pitkäaikaiseen virtsarakon toistokatetrointiin.",
      "Til kort- og langtidsbehandling af urinblæren med intermitterende urinkateterisering.",
      "Til kort- og langsiktig blæretømming med ren intermitterende kateterisering.",
    ),
    L(
      "Female users, adults, adolescents and children.",
      "Kvinnliga användare, vuxna, ungdomar och barn.",
      "Naispuolisille aikuisille, nuorille ja lapsille.",
      "Kvindelige brugere; voksne, unge og børn.",
      "For kvinnlige voksne, ungdommer og barn.",
    ),
  ],
  safety: [
    L(
      "For single use only. After one use the surface coating will deteriorate and the catheter is no longer sterile.",
      "Endast för engångsbruk. Efter en användning kommer ytbeläggningen att försämras och katetern är inte längre steril.",
      "Kertakäyttöinen. Käytetyn tuotteen pinnoite heikkenee, eikä tuote ole enää steriili.",
      "Kun til engangsbrug. Efter brug er overfladebelægningen ikke længere intakt og ikke længere steril.",
      "Kun til engangsbruk. Etter bruk forringes overflatebelegget, og er ikke lenger steril.",
    ),
    L(
      "Reuse may lead to discomfort, urethral damage or infection.",
      "Återanvändning kan leda till obehag, skador på urinröret eller infektion.",
      "Uudelleenkäyttö voi aiheuttaa epämukavuutta, virtsaputken vaurion tai infektion.",
      "Genbrug kan medføre ubehag, beskadigelse af urinrøret eller infektion.",
      "Gjenbruk kan føre til ubehag, skade eller infeksjon i urinrøret.",
    ),
    L(
      "Never use a product if the sterile packaging is broken or damaged.",
      "Använd aldrig en produkt om den sterila förpackningen är bruten eller skadad.",
      "Älä käytä tuotetta, jos steriili pakkaus on vahingoittunut.",
      "Brug ikke et produkt, hvis den sterile emballage er brudt eller beskadiget.",
      "Ikke bruk et produkt dersom den sterile emballasjen er brutt eller skadet.",
    ),
    L(
      "Catheterisation is associated with an increased risk of bleeding in the urethra, trauma and/or urinary tract infection.",
      "Kateterisering är förknippad med en ökad risk för blödning i urinröret, trauma och/eller urinvägsinfektion.",
      "Virtsarakon katetrointiin liittyy virtsaputken verenvuodon, vaurion ja/tai virtsatieinfektion lisääntynyt riski.",
      "Behandling med urinkateterisering er forbundet med en øget risiko for blødning, skader og/eller infektion i urinrøret.",
      "Behandling med kateterisering er forbundet med økt risiko for blødning, skade og/eller infeksjon i urinrøret.",
    ),
    L(
      "LoFric catheters are intended for use only after prescription.",
      "LoFric-katetrar är endast avsedda för användning efter förskrivning.",
      "LoFric-katetrit ovat saatavilla vain terveydenhuollon ammattilaisen määräyksellä.",
      "LoFric katetre skal ordineres af en læge.",
      "LoFric-katetre er kun til reseptbelagt bruk.",
    ),
    L(
      "Follow the instructions and advice you have received from healthcare professionals.",
      "Följ de anvisningar och råd som du har fått av sjukvårdspersonalen.",
      "Noudata terveydenhuollon ammattilaisen antamia ohjeita.",
      "Følg instruktioner og rådgivning fra sundhedspersonalet.",
      "Følg instruksjonene og rådene du har fått av helsepersonell.",
    ),
    L(
      "Contact your healthcare professional or prescriber if you experience problems.",
      "Kontakta sjukvårdspersonal/förskrivare om du upplever problem.",
      "Jos vaikeuksia ilmenee, ota yhteys hoidon määränneeseen terveydenhuollon ammattilaiseen.",
      "Kontakt den ordinerende læge eller sygeplejerske, hvis du oplever problemer.",
      "Kontakt legen din hvis du opplever problemer.",
    ),
  ],
  contraindications: [
    L(
      "Never use a product if the sterile packaging is broken or damaged.",
      "Använd aldrig en produkt om den sterila förpackningen är bruten eller skadad.",
      "Älä käytä tuotetta, jos steriili pakkaus on vahingoittunut.",
      "Brug ikke et produkt, hvis den sterile emballage er brudt eller beskadiget.",
      "Ikke bruk et produkt dersom den sterile emballasjen er brutt eller skadet.",
    ),
    L(
      "For single use only. After one use the surface coating will deteriorate and the catheter is no longer sterile. Reuse may lead to discomfort, urethral damage or infection.",
      "Endast för engångsbruk. Efter en användning kommer ytbeläggningen att försämras och katetern är inte längre steril. Återanvändning kan leda till obehag, skador på urinröret eller infektion.",
      "Kertakäyttöinen. Käytetyn tuotteen pinnoite heikkenee, eikä tuote ole enää steriili. Uudelleenkäyttö voi aiheuttaa epämukavuutta, virtsaputken vaurion tai infektion.",
      "Kun til engangsbrug. Efter brug er overfladebelægningen ikke længere intakt og ikke længere steril. Genbrug kan medføre ubehag, beskadigelse af urinrøret eller infektion.",
      "Kun til engangsbruk. Etter bruk forringes overflatebelegget, og er ikke lenger steril. Gjenbruk kan føre til ubehag, skade eller infeksjon i urinrøret.",
    ),
  ],
  warningSigns: [
    L(
      "Common adverse reactions (> 1/100) associated with catheterisation include urethral damage and urinary tract infection.",
      "Vanliga biverkningar (> 1/100) förknippade med kateterisering innefattar skada i urinröret och urinvägsinfektion.",
      "Katetrointiin liittyviä yleisiä haittavaikutuksia (>1/100) ovat virtsaputken vaurio ja virtsatieinfektio.",
      "Almindelige bivirkninger (> 1/100) i forbindelse med kateterbehandling omfatter skader på urinrøret og urinvejsinfektion.",
      "Vanlige bivirkninger (> 1/100) relatert til behandling med kateterisering omfatter skade i urinrøret og urinveisinfeksjon.",
    ),
    L(
      "If unexpected discomfort, signs of trauma or infection occur, discontinue use and contact the prescriber.",
      "Om oväntat obehag, tecken på trauma eller infektion uppstår ska du avbryta användningen och kontakta förskrivaren.",
      "Jos ilmenee odottamatonta epämukavuutta, vaurion merkkejä tai infektio, lopeta käyttö ja ota yhteys hoidon määränneeseen terveydenhuollon ammattilaiseen.",
      "Hvis der opstår uventet ubehag, tegn på traume eller infektion, skal du afbryde brugen og kontakte den ordinerende læge.",
      "Hvis det oppstår uventet ubehag eller tegn på skade eller infeksjon, må du avslutte bruken og kontakte foreskrivende lege.",
    ),
    L(
      "Any serious adverse reactions that occur when using the catheter should be reported to the manufacturer and your local health authority.",
      "Eventuella allvarliga biverkningar som uppstår vid användning av katetern ska rapporteras till tillverkaren och din lokala hälsovårdsmyndighet.",
      "Kaikki katetrin käyttöön liittyvät vakavat haittavaikutukset tulee ilmoittaa valmistajalle ja paikalliselle terveysviranomaiselle.",
      "Enhver alvorlig bivirkning, der opstår ved brugen af katetret, skal rapporteres til producenten og de lokale sundhedsmyndigheder.",
      "Alle alvorlige bivirkninger som oppstår i forbindelse med bruk av kateteret, skal rapporteres til produsenten og lokale helsemyndigheter.",
    ),
    L(
      "Contact your healthcare professional or prescriber if you experience problems.",
      "Kontakta sjukvårdspersonal/förskrivare om du upplever problem.",
      "Jos vaikeuksia ilmenee, ota yhteys hoidon määränneeseen terveydenhuollon ammattilaiseen.",
      "Kontakt den ordinerende læge eller sygeplejerske, hvis du oplever problemer.",
      "Kontakt legen din hvis du opplever problemer.",
    ),
  ],
  storage: L(
    "Store in the package at room temperature in a dry place. Use before the expiry date on the package.",
    "Förvaras i förpackningen vid rumstemperatur på en torr plats. Använd före utgångsdatumet på förpackningen.",
    "Säilytä tuotteet alkuperäispakkauksessaan kuivassa paikassa huoneenlämmössä. Käytä ennen pakkaukseen merkittyä viimeistä käyttöpäivää.",
    "Opbevares i emballagen på et tørt sted ved stuetemperatur. Skal bruges før udløbsdatoen på emballagen.",
    "Oppbevares i emballasjen på et tørt sted i romtemperatur. Brukes før utløpsdatoen på emballasjen.",
  ),
};

/** PDF 03 — salt-solution activation, collection-bag steps. LoFric Hydro-Kit. Adults, adolescents and children. */
export const hydroKitIfu: IfuClinical = {
  indications: [
    L(
      "For short and long term bladder management with intermittent urinary catheterization.",
      "För både kort- och långvarig intermittent kateterisering.",
      "Lyhyt- ja pitkäaikaiseen virtsarakon omatoimiseen toistokatetrointiin.",
      "Til kort- og langtidsbehandling med intermitterende urinkateterisering.",
      "For kort- og langsiktig blæretømming med intermitterende kateterisering.",
    ),
    L(
      "For adults, adolescents and children.",
      "För vuxna, ungdomar och barn.",
      "Aikuisille, nuorille ja lapsille.",
      "Til voksne, unge og børn.",
      "For voksne, ungdom og barn.",
    ),
  ],
  safety: [
    L(
      "For single use only.",
      "Endast för engångsbruk.",
      "Kertakäyttöinen.",
      "Kun til engangsbrug.",
      "Kun til engangsbruk.",
    ),
    L(
      "Once used the surface coating will deteriorate and is no longer sterile.",
      "Efter användning kommer ytbeläggningen att försämras och katetern är inte längre steril.",
      "Käytetyn tuotteen pinnoite heikkenee, eikä tuote ole enää steriili.",
      "Efter brug er overfladebelægningen ikke længere intakt og ikke længere steril.",
      "Etter bruk vil overflatebelegget forringes og ikke lenger være sterilt.",
    ),
    L(
      "Reuse may lead to discomfort, urethral damage or infection.",
      "Återanvändning kan leda till obehag, skador på urinröret eller infektion.",
      "Uudelleenkäyttö voi aiheuttaa epämukavuutta, virtsaputken vaurioita tai infektioita.",
      "Genbrug kan medføre ubehag, beskadigelse af urinrøret eller infektion.",
      "Gjenbruk kan føre til ubehag, skade eller infeksjon i urinrøret.",
    ),
    L(
      "Do not use a product if the sterile packaging is broken or damaged.",
      "Använd aldrig en produkt om den sterila förpackningen är bruten eller skadad.",
      "Älä käytä tuotetta, jos steriili pakkaus on vahingoittunut.",
      "Brug ikke et produkt, hvis den sterile pakning er brudt eller beskadiget.",
      "Ikke bruk et produkt dersom den sterile emballasjen er brutt eller skadet.",
    ),
    L(
      "Urinary catheterization therapy is associated with an increased risk of urethral bleeding, trauma and/or infection.",
      "Kateterisering är förknippad med en ökad risk för urinrörsblödning, trauma och/eller urinvägsinfektion.",
      "Virtsarakon katetrointiin liittyy virtsaputken verenvuodon, vaurion ja/tai virtsatieinfektion suurentunut riski.",
      "Behandling med urinkateterisering er forbundet med en øget risiko for blødning, skader og/eller infektion i urinrøret.",
      "Behandling med kateterisering er forbundet med økt risiko for blødning, skade og/eller infeksjon i urinrøret.",
    ),
    L(
      "LoFric catheters are for prescription use only. AU: Always consult a health care professional before using LoFric catheters.",
      "LoFric-katetrar är endast avsedda för användning efter förskrivning.",
      "LoFric-katetri on saatavilla vain terveydenhuollon ammattilaisen määräyksellä.",
      "LoFric katetre er kun til brug på bevilling.",
      "LoFric katetre er kun for reseptbelagt bruk.",
    ),
    L(
      "Follow instructions and advice from your healthcare professional.",
      "Följ de anvisningar och råd som du har fått av sjukvårdspersonalen.",
      "Noudata terveydenhuollon ammattilaisen antamia ohjeita.",
      "Følg instruktioner og rådgivning fra sundhedspersonalet.",
      "Følg instruksjonene og rådene du har fått av foreskriver og annet helsepersonell.",
    ),
    L(
      "Contact your prescriber if you experience difficulties.",
      "Kontakta sjukvårdspersonal/förskrivare om du upplever problem.",
      "Jos vaikeuksia ilmenee, ota yhteys hoidon määränneeseen lääkäriin.",
      "Kontakt den ordinerende læge eller sygeplejerske, hvis du oplever problemer.",
      "Kontakt legen din hvis du opplever problemer.",
    ),
  ],
  contraindications: [
    L(
      "Do not use a product if the sterile packaging is broken or damaged.",
      "Använd aldrig en produkt om den sterila förpackningen är bruten eller skadad.",
      "Älä käytä tuotetta, jos steriili pakkaus on vahingoittunut.",
      "Brug ikke et produkt, hvis den sterile pakning er brudt eller beskadiget.",
      "Ikke bruk et produkt dersom den sterile emballasjen er brutt eller skadet.",
    ),
    L(
      "For single use only. Once used the surface coating will deteriorate and is no longer sterile. Reuse may lead to discomfort, urethral damage or infection.",
      "Endast för engångsbruk. Efter användning kommer ytbeläggningen att försämras och katetern är inte längre steril. Återanvändning kan leda till obehag, skador på urinröret eller infektion.",
      "Kertakäyttöinen. Käytetyn tuotteen pinnoite heikkenee, eikä tuote ole enää steriili. Uudelleenkäyttö voi aiheuttaa epämukavuutta, virtsaputken vaurioita tai infektioita.",
      "Kun til engangsbrug. Efter brug er overfladebelægningen ikke længere intakt og ikke længere steril. Genbrug kan medføre ubehag, beskadigelse af urinrøret eller infektion.",
      "Kun til engangsbruk. Etter bruk vil overflatebelegget forringes og ikke lenger være sterilt. Gjenbruk kan føre til ubehag, skade eller infeksjon i urinrøret.",
    ),
  ],
  warningSigns: [
    L(
      "Common adverse reactions (>1/100) related to catheterization therapy includes urethral damage and urinary tract infection.",
      "Vanliga biverkningar (> 1/100) förknippade med kateterisering innefattar urinrörsskada och urinvägsinfektion.",
      "Katetrointiin liittyviä tavallisia haittavaikutuksia (> 1/100) ovat virtsaputken vauriot ja virtsatieinfektio.",
      "Almindelige bivirkninger (>1/100), der er relateret til behandling med urinkateterisering, omfatter urinrørsskader og urinvejsinfektion.",
      "Vanlige bivirkninger (> 1/100) relatert til behandling med kateterisering omfatter skade i urinrøret og urinveisinfeksjon.",
    ),
    L(
      "If unexpected discomfort, sign of trauma or infection occurs, discontinue use and consult your prescriber.",
      "Om oväntat obehag, tecken på trauma eller infektion uppstår ska du avbryta användningen och kontakta förskrivaren.",
      "Jos ilmenee odottamatonta epämukavuutta tai vaurion tai infektion merkkejä, lopeta käyttö ja ota yhteys hoidon määränneeseen lääkäriin.",
      "Hvis der opstår uventet ubehag, tegn på skade eller infektion, skal du afbryde engangskateteriseringen og kontakte den ordinerende læge eller sygeplejerske.",
      "Hvis det oppstår uventet ubehag eller tegn på skade eller infeksjon, må du avslutte bruken og kontakte foreskrivende lege.",
    ),
    L(
      "Any serious adverse reaction occurring when using the catheter should be reported to the manufacturer and your local health authority.",
      "Eventuella allvarliga biverkningar som uppstår vid användning av katetern ska rapporteras till tillverkaren och din lokala hälsovårdsmyndighet.",
      "Kaikki katetrin käyttöön liittyvät vakavat haittavaikutukset tulee ilmoittaa valmistajalle ja paikalliselle terveysviranomaiselle.",
      "Enhver alvorlig hændelse, der opstår ved brugen af katetret, skal rapporteres til producenten og din lokale sundhedsmyndighed.",
      "Eventuelle alvorlige bivirkninger som oppstår i forbindelse med bruk av katetret, skal rapporteres til produsenten og lokale helsemyndigheter.",
    ),
    L(
      "Contact your prescriber if you experience difficulties.",
      "Kontakta sjukvårdspersonal/förskrivare om du upplever problem.",
      "Jos vaikeuksia ilmenee, ota yhteys hoidon määränneeseen lääkäriin.",
      "Kontakt den ordinerende læge eller sygeplejerske, hvis du oplever problemer.",
      "Kontakt legen din hvis du opplever problemer.",
    ),
  ],
  storage: L(
    "Store in their package in a dry place, at room temperature. Use before expiry date on package.",
    "Förvaras i förpackningen vid rumstemperatur på en torr plats. Använd före utgångsdatumet på förpackningen.",
    "Säilytä tuotteet alkuperäispakkauksessaan, kuivassa paikassa ja huoneenlämmössä. Käytä ennen pakkaukseen merkittyä viimeistä käyttöpäivää.",
    "Opbevares i indpakningen på et tørt sted ved stuetemperatur. Bruges før pakningens udløbsdato.",
    "Oppbevares i emballasjen på et tørt sted med romtemperatur. Brukes før utløpsdatoen på emballasjen.",
  ),
};

/**
 * PDF 04 — salt-solution activation with insertion grip. LoFric Origo.
 * Same patient population as the Hydro-Kit salt IFU. Norwegian is the only
 * Nordic column with an explicit contraindications heading.
 */
export const origoIfu: IfuClinical = {
  indications: hydroKitIfu.indications.map((item, index) =>
    index === 0
      ? L(
          "For short and long term bladder management with intermittent urinary catheterization.",
          "För både kort- och långvarig intermittent kateterisering.",
          "Lyhyt- ja pitkäaikaiseen virtsarakon omatoimiseen toistokatetrointiin.",
          "Til kort- og langvarig blærebehandling med intermitterende urinkateterisering.",
          "For kort- og langsiktig blæretømming med intermitterende kateterisering.",
        )
      : item,
  ),
  safety: [
    L(
      "For single use only. Once used the surface coating will deteriorate and is no longer sterile.",
      "Endast för engångsbruk. Efter användning kommer ytbeläggningen att försämras och katetern är inte längre steril.",
      "Kertakäyttöinen. Käytetyn tuotteen pinnoite heikkenee, eikä tuote ole enää steriili.",
      "Kun til engangsbrug. Efter brug er overfladebelægningen ikke længere intakt og ikke længere steril.",
      "Kun til engangsbruk. Etter bruk vil overflatebelegget forringes og ikke lenger være sterilt.",
    ),
    L(
      "Reuse may lead to discomfort, urethral damage or infection.",
      "Återanvändning kan leda till obehag, skador på urinröret eller infektion.",
      "Uudelleenkäyttö voi aiheuttaa epämukavuutta, virtsaputken vaurioita tai infektioita.",
      "Genbrug kan medføre ubehag, beskadigelse af urinrøret eller infektion.",
      "Gjenbruk kan føre til ubehag, skade eller infeksjon i urinrøret.",
    ),
    L(
      "Do not use a product if the sterile packaging is broken or damaged.",
      "Använd aldrig en produkt om den sterila förpackningen är bruten eller skadad.",
      "Älä käytä tuotetta, jos steriili pakkaus on vahingoittunut.",
      "Brug ikke et produkt, hvis den sterile pakning er brudt eller beskadiget.",
      "Ikke bruk et produkt dersom den sterile emballasjen er brutt eller skadet.",
    ),
    L(
      "Urinary catheterization therapy is associated with an increased risk of urethral bleeding, trauma and/or infection.",
      "Kateterisering är förknippad med en ökad risk för urinrörsblödning, trauma och/eller urinvägsinfektion.",
      "Virtsarakon katetrointiin liittyy virtsaputken verenvuodon, vaurion ja/tai virtsatieinfektion suurentunut riski.",
      "Behandling med urinkateterisering er forbundet med en øget risiko for blødning, traumer og/eller infektion i urinrøret.",
      "Behandling med kateterisering er forbundet med økt risiko for blødning, skade og/eller infeksjon i urinrøret.",
    ),
    L(
      "LoFric catheters are for prescription use only. AU: Always consult a health care professional before using LoFric catheters.",
      "LoFric-katetrar är endast avsedda för ordinerad användning.",
      "LoFric-katetri on saatavilla vain terveydenhuollon ammattilaisen määräyksellä.",
      "LoFric katetre er kun til brug på bevilling.",
      "LoFric katetre er kun for reseptbelagt bruk.",
    ),
    L(
      "Follow instructions and advice from your healthcare professional.",
      "Följ de anvisningar och råd som du har fått av sjukvårdspersonalen.",
      "Noudata terveydenhuollon ammattilaisen antamia ohjeita.",
      "Følg instruktioner og rådgivning fra sundhedspersonalet.",
      "Følg instruksjonene og rådene du har fått av foreskriver og annet helsepersonell.",
    ),
    L(
      "Contact your prescriber if you experience difficulties.",
      "Kontakta sjukvårdspersonal/förskrivare om du upplever problem.",
      "Jos vaikeuksia ilmenee, ota yhteys hoidon määränneeseen lääkäriin.",
      "Kontakt den ordinerende læge, hvis du oplever problemer.",
      "Kontakt legen din hvis du opplever problemer.",
    ),
  ],
  contraindicationsIntro: L(
    "",
    "",
    "",
    "",
    "Det er ikke identifisert kontraindikasjoner for LoFric katetre.",
  ),
  contraindications: [
    L(
      "Do not use a product if the sterile packaging is broken or damaged.",
      "Använd aldrig en produkt om den sterila förpackningen är bruten eller skadad.",
      "Älä käytä tuotetta, jos steriili pakkaus on vahingoittunut.",
      "Brug ikke et produkt, hvis den sterile pakning er brudt eller beskadiget.",
      "Ikke bruk et produkt dersom den sterile emballasjen er brutt eller skadet.",
    ),
    L(
      "For single use only. Once used the surface coating will deteriorate and is no longer sterile. Reuse may lead to discomfort, urethral damage or infection.",
      "Endast för engångsbruk. Efter användning kommer ytbeläggningen att försämras och katetern är inte längre steril. Återanvändning kan leda till obehag, skador på urinröret eller infektion.",
      "Kertakäyttöinen. Käytetyn tuotteen pinnoite heikkenee, eikä tuote ole enää steriili. Uudelleenkäyttö voi aiheuttaa epämukavuutta, virtsaputken vaurioita tai infektioita.",
      "Kun til engangsbrug. Efter brug er overfladebelægningen ikke længere intakt og ikke længere steril. Genbrug kan medføre ubehag, beskadigelse af urinrøret eller infektion.",
      "Kun til engangsbruk. Etter bruk vil overflatebelegget forringes og ikke lenger være sterilt. Gjenbruk kan føre til ubehag, skade eller infeksjon i urinrøret.",
    ),
  ],
  warningSigns: [
    L(
      "Common adverse reactions (>1/100) related to catheterization therapy includes urethral damage and urinary tract infection.",
      "Vanliga biverkningar (> 1/100) förknippade med kateterisering innefattar urinrörsskada och urinvägsinfektion.",
      "Katetrointiin liittyviä tavallisia haittavaikutuksia (> 1/100) ovat virtsaputken vauriot ja virtsatieinfektio.",
      "Almindelige bivirkninger (> 1/100), der er relateret til behandling med urinkateterisering, omfatter urinrørsskader og urinvejsinfektion.",
      "Vanlige bivirkninger (> 1/100) relatert til behandling med kateterisering omfatter skade i urinrøret og urinveisinfeksjon.",
    ),
    L(
      "If unexpected discomfort, sign of trauma or infection occurs, discontinue use and consult your prescriber.",
      "Om oväntat obehag, tecken på trauma eller infektion uppstår ska du avbryta användningen och kontakta förskrivaren.",
      "Jos ilmenee odottamatonta epämukavuutta tai vaurion tai infektion merkkejä, lopeta käyttö ja ota yhteys hoidon määränneeseen lääkäriin.",
      "Hvis der opstår uventet ubehag, tegn på traume eller infektion, skal du afbryde brugen og kontakte den ordinerende læge.",
      "Hvis det oppstår uventet ubehag eller tegn på skade eller infeksjon, må du avslutte bruken og kontakte foreskrivende lege.",
    ),
    L(
      "Any serious adverse reaction occurring when using the catheter should be reported to the manufacturer and your local health authority.",
      "Eventuella allvarliga biverkningar som uppstår vid användning av katetern ska rapporteras till tillverkaren och din lokala hälsovårdsmyndighet.",
      "Kaikki katetrin käyttöön liittyvät vakavat haittavaikutukset tulee ilmoittaa valmistajalle ja paikalliselle terveysviranomaiselle.",
      "Enhver alvorlig bivirkning, der opstår ved brugen af katetret, skal rapporteres til producenten og din lokale sundhedsmyndighed.",
      "Eventuelle alvorlige bivirkninger som oppstår i forbindelse med bruk av katetret, skal rapporteres til produsenten og lokale helsemyndigheter.",
    ),
    L(
      "Contact your prescriber if you experience difficulties.",
      "Kontakta sjukvårdspersonal/förskrivare om du upplever problem.",
      "Jos vaikeuksia ilmenee, ota yhteys hoidon määränneeseen lääkäriin.",
      "Kontakt den ordinerende læge, hvis du oplever problemer.",
      "Kontakt legen din hvis du opplever problemer.",
    ),
  ],
  storage: L(
    "Store in their package in a dry place, at room temperature. Use before expiry date on package.",
    "Förvaras i förpackningen vid rumstemperatur på en torr plats. Använd före utgångsdatumet på förpackningen.",
    "Säilytä tuotteet alkuperäispakkauksessaan, kuivassa paikassa ja huoneenlämmössä. Käytä ennen pakkaukseen merkittyä viimeistä käyttöpäivää.",
    "Opbevares i indpakningen på et tørt sted ved stuetemperatur. Bruges før pakningens udløbsdato.",
    "Oppbevares i emballasjen på et tørt sted ved romtemperatur. Brukes før utløpsdato på emballasjen.",
  ),
};

/** PDF 06 — LoFric Sense. Female salt-activation IFU. */
export const senseIfu: IfuClinical = {
  indications: [
    L(
      "For short and long term bladder management with intermittent urinary catheterization.",
      "För både kort- och långtidsanvändning av intermittent kateterisering.",
      "Lyhyt- ja pitkäaikaiseen virtsarakon omatoimiseen toistokatetrointiin.",
      "Til kort- og langtidsbehandling med intermitterende urinkateterisering.",
      "For kort- og langsiktig blæretømming med intermitterende kateterisering.",
    ),
    L(
      "Female users, adults, adolescents and children.",
      "Kvinnliga användare, vuxna, ungdomar och barn.",
      "Naispuolisille aikuisille, nuorille ja lapsille.",
      "Kvindelige brugere, voksne, unge og børn.",
      "For voksne kvinner, unge jenter og små jenter.",
    ),
  ],
  safety: [
    L(
      "For single use only.",
      "Endast för engångsbruk.",
      "Kertakäyttöinen.",
      "Kun til engangsbrug.",
      "Kun til engangsbruk.",
    ),
    L(
      "Once used the surface coating will deteriorate and is no longer sterile.",
      "Efter användning kommer ytbeläggningen att försämras och katetern är inte längre steril.",
      "Käytetyn tuotteen pinnoite heikkenee, eikä tuote ole enää steriili.",
      "Efter brug er overfladebelægningen ikke længere intakt og ikke længere steril.",
      "Etter bruk vil overflatebelegget forringes og ikke lenger være sterilt.",
    ),
    L(
      "Reuse may lead to discomfort, urethral damage or infection.",
      "Återanvändning kan leda till obehag, skador på urinröret eller infektion.",
      "Uudelleenkäyttö voi aiheuttaa epämukavuutta, virtsaputken vaurioita tai infektioita.",
      "Genbrug kan medføre ubehag, beskadigelse af urinrøret eller infektion.",
      "Gjenbruk kan føre til ubehag, skade eller infeksjon i urinrøret.",
    ),
    L(
      "Do not use a product if the sterile packaging is broken or damaged.",
      "Använd aldrig en produkt om den sterila förpackningen är bruten eller skadad.",
      "Älä käytä tuotetta, jos steriili pakkaus on vahingoittunut.",
      "Brug ikke et produkt, hvis den sterile pakning er brudt eller beskadiget.",
      "Ikke bruk et produkt dersom den sterile emballasjen er brutt eller skadet.",
    ),
    L(
      "Urinary catheterization therapy is associated with an increased risk of urethral bleeding, trauma and/or infection.",
      "Kateterisering är förknippad med en ökad risk för urinrörsblödning, trauma och/eller urinvägsinfektion.",
      "Virtsarakon katetrointiin liittyy virtsaputken verenvuodon, vaurion ja/tai virtsatieinfektion suurentunut riski.",
      "Behandling med urinkateterisering er forbundet med en øget risiko for blødning, skader og/eller infektion i urinrøret.",
      "Behandling med kateterisering er forbundet med økt risiko for blødning, skade og/eller infeksjon i urinrøret.",
    ),
    L(
      "LoFric catheters are for prescription use only.",
      "LoFric-katetrar är endast avsedda för användning efter förskrivning.",
      "LoFric-katetri on saatavilla vain terveydenhuollon ammattilaisen määräyksellä.",
      "LoFric katetre er kun til brug på bevilling.",
      "LoFric katetre er kun for reseptbelagt bruk.",
    ),
    L(
      "Follow instructions and advice from your healthcare professional.",
      "Följ de anvisningar och råd som du har fått av sjukvårdspersonalen.",
      "Noudata terveydenhuollon ammattilaisen antamia ohjeita.",
      "Følg instruktioner og rådgivning fra sundhedspersonalet.",
      "Følg instruksjonene og rådene du har fått av foreskriver og annet helsepersonell.",
    ),
    L(
      "Contact your prescriber if you experience difficulties.",
      "Kontakta sjukvårdspersonal/förskrivare om du upplever problem.",
      "Jos vaikeuksia ilmenee, ota yhteys hoidon määränneeseen lääkäriin.",
      "Kontakt den ordinerende læge eller sygeplejerske, hvis du oplever problemer.",
      "Kontakt legen din hvis du opplever problemer.",
    ),
  ],
  contraindications: [
    L(
      "Do not use a product if the sterile packaging is broken or damaged.",
      "Använd aldrig en produkt om den sterila förpackningen är bruten eller skadad.",
      "Älä käytä tuotetta, jos steriili pakkaus on vahingoittunut.",
      "Brug ikke et produkt, hvis den sterile pakning er brudt eller beskadiget.",
      "Ikke bruk et produkt dersom den sterile emballasjen er brutt eller skadet.",
    ),
    L(
      "For single use only. Once used the surface coating will deteriorate and is no longer sterile. Reuse may lead to discomfort, urethral damage or infection.",
      "Endast för engångsbruk. Efter användning kommer ytbeläggningen att försämras och katetern är inte längre steril. Återanvändning kan leda till obehag, skador på urinröret eller infektion.",
      "Kertakäyttöinen. Käytetyn tuotteen pinnoite heikkenee, eikä tuote ole enää steriili. Uudelleenkäyttö voi aiheuttaa epämukavuutta, virtsaputken vaurioita tai infektioita.",
      "Kun til engangsbrug. Efter brug er overfladebelægningen ikke længere intakt og ikke længere steril. Genbrug kan medføre ubehag, beskadigelse af urinrøret eller infektion.",
      "Kun til engangsbruk. Etter bruk vil overflatebelegget forringes og ikke lenger være sterilt. Gjenbruk kan føre til ubehag, skade eller infeksjon i urinrøret.",
    ),
  ],
  warningSigns: [
    L(
      "Common adverse reactions (>1/100) related to catheterization therapy includes urethral damage and urinary tract infection.",
      "Vanliga biverkningar (> 1/100) förknippade med kateterisering innefattar urinrörsskada och urinvägsinfektion.",
      "Katetrointiin liittyviä tavallisia haittavaikutuksia (> 1/100) ovat virtsaputken vauriot ja virtsatieinfektio.",
      "Almindelige bivirkninger (>1/100), der er relateret til behandling med urinkateterisering, omfatter urinrørsskader og urinvejsinfektion.",
      "Vanlige bivirkninger (> 1/100) relatert til behandling med kateterisering omfatter skade i urinrøret og urinveisinfeksjon.",
    ),
    L(
      "If unexpected discomfort, sign of trauma or infection occurs, discontinue use and consult your prescriber.",
      "Om oväntat obehag, tecken på trauma eller infektion uppstår ska du avbryta användningen och kontakta förskrivaren.",
      "Jos ilmenee odottamatonta epämukavuutta tai vaurion tai infektion merkkejä, lopeta käyttö ja ota yhteys hoidon määränneeseen lääkäriin.",
      "Hvis der opstår uventet ubehag, tegn på skade eller infektion, skal du afbryde engangskateteriseringen og kontakte den ordinerende læge.",
      "Hvis det oppstår uventet ubehag eller tegn på skade eller infeksjon, må du avslutte bruken og kontakte foreskrivende lege.",
    ),
    L(
      "Any serious adverse reaction occurring when using the catheter should be reported to the manufacturer and your local health authority.",
      "Eventuella allvarliga biverkninger som uppstår vid användning av katetern ska rapporteras till tillverkaren och din lokala hälsovårdsmyndighet.",
      "Kaikki katetrin käyttöön liittyvät vakavat haittavaikutukset tulee ilmoittaa valmistajalle ja paikalliselle terveysviranomaiselle.",
      "Enhver alvorlig hændelse, der opstår ved brugen af katetret, skal rapporteres til producenten og din lokale sundhedsmyndighed.",
      "Eventuelle alvorlige bivirkninger som oppstår i forbindelse med bruk av katetret, skal rapporteres til produsenten og lokale helsemyndigheter.",
    ),
    L(
      "Contact your prescriber if you experience difficulties.",
      "Kontakta sjukvårdspersonal/förskrivare om du upplever problem.",
      "Jos vaikeuksia ilmenee, ota yhteys hoidon määränneeseen lääkäriin.",
      "Kontakt den ordinerende læge eller sygeplejerske, hvis du oplever problemer.",
      "Kontakt legen din hvis du opplever problemer.",
    ),
  ],
  storage: L(
    "Store in their package in a dry place, at room temperature. Use before expiry date on package.",
    "Förvaras i förpackningen vid rumstemperatur på en torr plats. Använd före utgångsdatumet på förpackningen.",
    "Säilytä tuotteet alkuperäispakkauksessaan, kuivassa paikassa ja huoneenlämmössä. Käytä ennen pakkaukseen merkittyä viimeistä käyttöpäivää.",
    "Opbevares i indpakningen på et tørt sted ved stuetemperatur. Bruges før pakningens udløbsdato.",
    "Oppbevares i emballasjen på et tørt sted med romtemperatur. Brukes før utløpsdatoen på emballasjen.",
  ),
};

/** PDF 18 — LoFric Primo. Gender-agnostic. Includes infants. Shared by both Primo IDs. */
export const primoIfu: IfuClinical = {
  indications: [
    L(
      "For short and long term bladder management with intermittent urinary catheterization.",
      "För både kort- och långtidsanvändning av intermittent kateterisering.",
      "Lyhyt- ja pitkäaikaiseen virtsarakon omatoimiseen toistokatetrointiin.",
      "Til kort- og langtidsbehandling med intermitterende urinkateterisering.",
      "For kort- og langsiktig blæretømming med intermitterende kateterisering.",
    ),
    L(
      "For adults, adolescents, children and infants.",
      "För vuxna, ungdomar, barn och spädbarn.",
      "Aikuisille, nuorille, lapsille ja vauvoille.",
      "Til voksne, unge, børn og spædbørn.",
      "For voksne, ungdom, barn og spedbarn.",
    ),
  ],
  safety: [
    L(
      "For single use only.",
      "Endast för engångsbruk.",
      "Kertakäyttöinen.",
      "Kun til engangsbrug.",
      "Kun til engangsbruk.",
    ),
    L(
      "Once used the surface coating will deteriorate and is no longer sterile.",
      "Efter användning kommer ytbeläggningen att försämras och katetern är inte längre steril.",
      "Käytetyn tuotteen pinnoite heikkenee, eikä tuote ole enää steriili.",
      "Efter brug er overfladebelægningen ikke længere intakt og ikke længere steril.",
      "Etter bruk vil overflatebelegget forringes og ikke lenger være sterilt.",
    ),
    L(
      "Reuse may lead to discomfort, urethral damage or infection.",
      "Återanvändning kan leda till obehag, skador på urinröret eller infektion.",
      "Uudelleenkäyttö voi aiheuttaa epämukavuutta, virtsaputken vaurioita tai infektioita.",
      "Genbrug kan medføre ubehag, beskadigelse af urinrøret eller infektion.",
      "Gjenbruk kan føre til ubehag, skade eller infeksjon i urinrøret.",
    ),
    L(
      "Do not use a product if the sterile packaging is broken or damaged.",
      "Använd aldrig en produkt om den sterila förpackningen är bruten eller skadad.",
      "Älä käytä tuotetta, jos steriili pakkaus on vahingoittunut.",
      "Brug ikke et produkt, hvis den sterile pakning er brudt eller beskadiget.",
      "Ikke bruk et produkt dersom den sterile emballasjen er brutt eller skadet.",
    ),
    L(
      "Urinary catheterization therapy is associated with an increased risk of urethral bleeding, trauma and/or infection.",
      "Kateterisering är förknippad med en ökad risk för urinrörsblödning, trauma och/eller urinvägsinfektion.",
      "Virtsarakon katetrointiin liittyy virtsaputken verenvuodon, vaurion ja/tai virtsatieinfektion suurentunut riski.",
      "Behandling med urinkateterisering er forbundet med en øget risiko for blødning, skader og/eller infektion i urinrøret.",
      "Behandling med kateterisering er forbundet med økt risiko for blødning, skade og/eller infeksjon i urinrøret.",
    ),
    L(
      "LoFric catheters are for prescription use only. AU: Always consult a health care professional before using LoFric catheters.",
      "LoFric-katetrar är endast avsedda för användning efter förskrivning.",
      "LoFric-katetri on saatavilla vain terveydenhuollon ammattilaisen määräyksellä.",
      "LoFric katetre skal ordineres af en læge.",
      "LoFric katetre er kun for reseptbelagt bruk.",
    ),
    L(
      "Follow instructions and advice from your health care professional.",
      "Följ de anvisningar och råd som du har fått av sjukvårdspersonalen.",
      "Noudata terveydenhuollon ammattilaisen antamia ohjeita.",
      "Følg instruktioner og rådgivning fra sundhedspersonalet.",
      "Følg instruksjonene og rådene du har fått av foreskriver og annet helsepersonell.",
    ),
    L(
      "Contact your prescriber if you experience difficulties.",
      "Kontakta sjukvårdspersonal/förskrivare om du upplever problem.",
      "Jos vaikeuksia ilmenee, ota yhteys hoidon määränneeseen lääkäriin.",
      "Kontakt den ordinerende læge eller sygeplejerske, hvis du oplever problemer.",
      "Kontakt legen din hvis du opplever problemer.",
    ),
  ],
  contraindications: [
    L(
      "Do not use a product if the sterile packaging is broken or damaged.",
      "Använd aldrig en produkt om den sterila förpackningen är bruten eller skadad.",
      "Älä käytä tuotetta, jos steriili pakkaus on vahingoittunut.",
      "Brug ikke et produkt, hvis den sterile pakning er brudt eller beskadiget.",
      "Ikke bruk et produkt dersom den sterile emballasjen er brutt eller skadet.",
    ),
    L(
      "For single use only. Once used the surface coating will deteriorate and is no longer sterile. Reuse may lead to discomfort, urethral damage or infection.",
      "Endast för engångsbruk. Efter användning kommer ytbeläggningen att försämras och katetern är inte längre steril. Återanvändning kan leda till obehag, skador på urinröret eller infektion.",
      "Kertakäyttöinen. Käytetyn tuotteen pinnoite heikkenee, eikä tuote ole enää steriili. Uudelleenkäyttö voi aiheuttaa epämukavuutta, virtsaputken vaurioita tai infektioita.",
      "Kun til engangsbrug. Efter brug er overfladebelægningen ikke længere intakt og ikke længere steril. Genbrug kan medføre ubehag, beskadigelse af urinrøret eller infektion.",
      "Kun til engangsbruk. Etter bruk vil overflatebelegget forringes og ikke lenger være sterilt. Gjenbruk kan føre til ubehag, skade eller infeksjon i urinrøret.",
    ),
  ],
  warningSigns: [
    L(
      "Common adverse reactions (>1/100) related to catheterization therapy includes urethral damage and urinary tract infection.",
      "Vanliga biverkningar (> 1/100) förknippade med kateterisering innefattar urinrörsskada och urinvägsinfektion.",
      "Katetrointiin liittyviä tavallisia haittavaikutuksia (> 1/100) ovat virtsaputken vauriot ja virtsatieinfektio.",
      "Almindelige bivirkninger (>1/100), der er relateret til behandling med urinkateterisering, omfatter urinrørsskader og urinvejsinfektion.",
      "Vanlige bivirkninger (> 1/100) relatert til behandling med kateterisering omfatter skade i urinrøret og urinveisinfeksjon.",
    ),
    L(
      "If unexpected discomfort, sign of trauma or infection occurs, discontinue use and consult your prescriber.",
      "Om oväntat obehag, tecken på trauma eller infektion uppstår ska du avbryta användningen och kontakta förskrivaren.",
      "Jos ilmenee odottamatonta epämukavuutta tai vaurion tai infektion merkkejä, lopeta käyttö ja ota yhteys hoidon määränneeseen lääkäriin.",
      "Hvis der opstår uventet ubehag, tegn på skade eller infektion, skal du afbryde engangskateteriseringen og kontakte den ordinerende læge eller sygeplejerske.",
      "Hvis det oppstår uventet ubehag eller tegn på skade eller infeksjon, må du avslutte bruken og kontakte foreskrivende lege.",
    ),
    L(
      "Any serious adverse reaction occurring when using the catheter should be reported to the manufacturer and your local health authority.",
      "Eventuella allvarliga biverkninger som uppstår vid användning av katetern ska rapporteras till tillverkaren och din lokala hälsovårdsmyndighet.",
      "Kaikki katetrin käyttöön liittyvät vakavat haittavaikutukset tulee ilmoittaa valmistajalle ja paikalliselle terveysviranomaiselle.",
      "Enhver alvorlig hændelse, der opstår ved brugen af katetret, skal rapporteres til producenten og din lokale sundhedsmyndighed.",
      "Eventuelle alvorlige bivirkninger som oppstår i forbindelse med bruk av katetret, skal rapporteres til produsenten og lokale helsemyndigheter.",
    ),
    L(
      "Contact your prescriber if you experience difficulties.",
      "Kontakta sjukvårdspersonal/förskrivare om du upplever problem.",
      "Jos vaikeuksia ilmenee, ota yhteys hoidon määränneeseen lääkäriin.",
      "Kontakt den ordinerende læge eller sygeplejerske, hvis du oplever problemer.",
      "Kontakt legen din hvis du opplever problemer.",
    ),
  ],
  storage: L(
    "Store in their package in a dry place, at room temperature. Use before expiry date on package.",
    "Förvaras i förpackningen vid rumstemperatur på en torr plats. Använd före utgångsdatumet på förpackningen.",
    "Säilytä tuotteet alkuperäispakkauksessaan, kuivassa paikassa ja huoneenlämmössä. Käytä ennen pakkaukseen merkittyä viimeistä käyttöpäivää.",
    "Opbevares i indpakningen på et tørt sted ved stuetemperatur. Bruges før pakningens udløbsdato.",
    "Oppbevares i emballasjen på et tørt sted med romtemperatur. Brukes før utløpsdatoen på emballasjen.",
  ),
};
