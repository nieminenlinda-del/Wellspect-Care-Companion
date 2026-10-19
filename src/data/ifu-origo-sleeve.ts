/**
 * Clinical copy from LoFric Origo Sleeve IFU multilanguage PD-5500302-C
 * (published 2024-06-14).
 * https://ifu.wellspect.com/en/IFU/119081d2-29f5-4cf7-86a6-f73dfa271a13/LoFric%20Origo%20Sleeve%20IFU%20multilanguage%20PD-5500302-C.pdf
 *
 * Patient population is adults and adolescents. The insertion-grip Origo IFU
 * also includes children, so this sheet is not reused from `origoIfu`.
 */
import type { IfuClinical } from "@/data/ifu-copy";

type Localized = { en: string; sv: string; fi: string; da: string; no: string };

const L = (en: string, sv: string, fi: string, da: string, no: string): Localized => ({
  en,
  sv,
  fi,
  da,
  no,
});

export const origoSleeveIfu: IfuClinical = {
  indications: [
    L(
      "For short and long term bladder management with intermittent urinary catheterization.",
      "För både kort- och långvarig intermittent kateterisering.",
      "Lyhyt- ja pitkäaikaiseen virtsarakon omatoimiseen toistokatetrointiin.",
      "Til kort- og langvarig blærebehandling med intermitterende urinkateterisering.",
      "For kort- og langsiktig blæretømming med intermitterende kateterisering.",
    ),
    L(
      "For adults, adolescents.",
      "För vuxna och ungdomar.",
      "Aikuisille ja nuorille.",
      "Til voksne og unge.",
      "For voksne og ungdom.",
    ),
  ],
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
  ],
  storage: L(
    "Store in their package in a dry place, at room temperature. Use before expiry date on package.",
    "Förvaras i förpackningen vid rumstemperatur på en torr plats. Använd före utgångsdatumet på förpackningen.",
    "Säilytä tuotteet alkuperäispakkauksessaan, kuivassa paikassa ja huoneenlämmössä. Käytä ennen pakkaukseen merkittyä viimeistä käyttöpäivää.",
    "Opbevares i indpakningen på et tørt sted ved stuetemperatur. Bruges før pakningens udløbsdato.",
    "Oppbevares i emballasjen på et tørt sted ved romtemperatur. Brukes før utløpsdato på emballasjen.",
  ),
};
