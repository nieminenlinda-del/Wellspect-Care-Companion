import type { LocaleCode } from "@/lib/locale";

export type EcolabelContent = {
  name: string;
  cardTitle: string;
  cardSubtitle: string;
  badge: string;
  intro: string;
  points: { title: string; text: string }[];
  footnote: string;
  close: string;
};

export const ecolabelContent: Record<LocaleCode, EcolabelContent> = {
  en: {
    name: "Nordic Swan Ecolabel",
    cardTitle: "Sustainability & Nordic Ecolabel",
    cardSubtitle: "Why the Swan matters in healthcare",
    badge: "Nordic Swan Ecolabel certified",
    intro:
      "The Nordic Swan Ecolabel is the official environmental label of the Nordic countries and one of the strictest environmental certifications in the world. Only products that meet demanding requirements are allowed to carry the Swan.",
    points: [
      {
        title: "Strict requirements across the lifecycle",
        text: "Raw materials, chemicals, production, use and waste are all reviewed. Requirements are tightened over time, so certification has to be earned again and again.",
      },
      {
        title: "Careful chemistry",
        text: "Substances of concern are limited or excluded, which supports safe daily use for people who catheterise or irrigate several times a day.",
      },
      {
        title: "Responsible materials and packaging",
        text: "Eco-conscious materials and recyclable packaging are prioritised, with less material used per product wherever possible.",
      },
      {
        title: "Clinical safety comes first",
        text: "Environmental improvements are never made at the expense of product performance, hygiene or patient safety.",
      },
    ],
    footnote:
      "Certification applies to specific products and sizes. Check the packaging or ask your healthcare professional if you are unsure.",
    close: "Close",
  },
  sv: {
    name: "Svanenmärkt",
    cardTitle: "Hållbarhet och Svanenmärkning",
    cardSubtitle: "Därför spelar Svanen roll inom vården",
    badge: "Svanenmärkt produkt",
    intro:
      "Svanen är Nordens officiella miljömärkning och en av världens strängaste miljöcertifieringar. Endast produkter som klarar hårda krav får bära Svanen.",
    points: [
      {
        title: "Stränga krav genom hela livscykeln",
        text: "Råvaror, kemikalier, tillverkning, användning och avfall granskas. Kraven skärps över tid, så märkningen måste förtjänas på nytt.",
      },
      {
        title: "Noggrant vald kemi",
        text: "Ämnen med oönskade egenskaper begränsas eller utesluts, vilket stödjer säker daglig användning för den som katetriserar eller irrigerar flera gånger om dagen.",
      },
      {
        title: "Ansvarsfulla material och förpackningar",
        text: "Miljömedvetna material och återvinningsbara förpackningar prioriteras, med mindre material per produkt där det är möjligt.",
      },
      {
        title: "Klinisk säkerhet först",
        text: "Miljöförbättringar görs aldrig på bekostnad av funktion, hygien eller patientsäkerhet.",
      },
    ],
    footnote:
      "Märkningen gäller specifika produkter och storlekar. Kontrollera förpackningen eller fråga din vårdpersonal om du är osäker.",
    close: "Stäng",
  },
  fi: {
    name: "Joutsenmerkki",
    cardTitle: "Kestävyys ja Joutsenmerkki",
    cardSubtitle: "Miksi Joutsenmerkki on tärkeä terveydenhuollolle",
    badge: "Joutsenmerkitty tuote",
    intro:
      "Joutsenmerkki on Pohjoismaiden virallinen ympäristömerkki ja yksi maailman tiukimmista ympäristösertifikaateista. Vain vaativat kriteerit täyttävät tuotteet saavat merkin.",
    points: [
      {
        title: "Tiukat vaatimukset koko elinkaaren ajan",
        text: "Raaka-aineet, kemikaalit, valmistus, käyttö ja jäte arvioidaan. Vaatimukset kiristyvät ajan myötä, joten merkki on ansaittava yhä uudelleen.",
      },
      {
        title: "Harkittu kemia",
        text: "Haitallisia aineita rajoitetaan tai vältetään, mikä tukee turvallista päivittäistä käyttöä useita kertoja päivässä katetroivilla tai huuhtelevilla.",
      },
      {
        title: "Vastuulliset materiaalit ja pakkaukset",
        text: "Ympäristöystävälliset materiaalit ja kierrätettävät pakkaukset ovat etusijalla, ja materiaalia käytetään mahdollisimman vähän.",
      },
      {
        title: "Kliininen turvallisuus on etusijalla",
        text: "Ympäristöparannuksia ei koskaan tehdä toimivuuden, hygienian tai potilasturvallisuuden kustannuksella.",
      },
    ],
    footnote:
      "Merkintä koskee tiettyjä tuotteita ja kokoja. Tarkista pakkaus tai kysy hoitohenkilökunnalta, jos olet epävarma.",
    close: "Sulje",
  },
  da: {
    name: "Svanemærket",
    cardTitle: "Bæredygtighed og Svanemærket",
    cardSubtitle: "Derfor betyder Svanen noget i sundhedsplejen",
    badge: "Svanemærket produkt",
    intro:
      "Svanemærket er Nordens officielle miljømærke og en af verdens strengeste miljøcertificeringer. Kun produkter, der lever op til skrappe krav, må bære Svanen.",
    points: [
      {
        title: "Strenge krav i hele livscyklussen",
        text: "Råvarer, kemikalier, produktion, brug og affald vurderes. Kravene skærpes over tid, så mærket skal fortjenes igen og igen.",
      },
      {
        title: "Omhyggelig kemi",
        text: "Problematiske stoffer begrænses eller udelukkes, hvilket understøtter sikker daglig brug for dem, der kateteriserer eller irrigerer flere gange dagligt.",
      },
      {
        title: "Ansvarlige materialer og emballage",
        text: "Miljøbevidste materialer og genanvendelig emballage prioriteres, med mindre materiale pr. produkt hvor det er muligt.",
      },
      {
        title: "Klinisk sikkerhed først",
        text: "Miljøforbedringer sker aldrig på bekostning af funktion, hygiejne eller patientsikkerhed.",
      },
    ],
    footnote:
      "Mærkningen gælder specifikke produkter og størrelser. Tjek emballagen, eller spørg din sundhedsprofessionelle, hvis du er i tvivl.",
    close: "Luk",
  },
  no: {
    name: "Svanemerket",
    cardTitle: "Bærekraft og Svanemerket",
    cardSubtitle: "Derfor betyr Svanen noe i helsetjenesten",
    badge: "Svanemerket produkt",
    intro:
      "Svanemerket er Nordens offisielle miljømerke og en av verdens strengeste miljøsertifiseringer. Bare produkter som oppfyller strenge krav får bære Svanen.",
    points: [
      {
        title: "Strenge krav gjennom hele livsløpet",
        text: "Råvarer, kjemikalier, produksjon, bruk og avfall vurderes. Kravene skjerpes over tid, så merket må fortjenes på nytt.",
      },
      {
        title: "Nøye vurdert kjemi",
        text: "Uønskede stoffer begrenses eller utelukkes, noe som støtter trygg daglig bruk for dem som kateteriserer eller irrigerer flere ganger om dagen.",
      },
      {
        title: "Ansvarlige materialer og emballasje",
        text: "Miljøbevisste materialer og resirkulerbar emballasje prioriteres, med mindre materialbruk per produkt der det er mulig.",
      },
      {
        title: "Klinisk sikkerhet først",
        text: "Miljøforbedringer går aldri på bekostning av funksjon, hygiene eller pasientsikkerhet.",
      },
    ],
    footnote:
      "Merkingen gjelder bestemte produkter og størrelser. Sjekk emballasjen eller spør helsepersonell hvis du er usikker.",
    close: "Lukk",
  },
};
