import type { LocaleCode } from "@/lib/locale";

export type ContactInfo = {
  company: string;
  intro: string;
  phoneLabel: string;
  phone: string;
  emailLabel: string;
  email: string;
  hoursLabel: string;
  hours: string;
  addressLabel: string;
  address: string;
  websiteLabel: string;
  website: string;
};

export const contactInfo: Record<LocaleCode, ContactInfo> = {
  en: {
    company: "Wellspect HealthCare",
    intro:
      "Our customer service team can help with product questions, samples and ordering. For medical advice, always contact your healthcare professional.",
    phoneLabel: "Phone",
    phone: "+46 31 376 40 00",
    emailLabel: "Email",
    email: "info@wellspect.com",
    hoursLabel: "Opening hours",
    hours: "Monday–Friday 08:00–16:30 (CET)",
    addressLabel: "Address",
    address: "Wellspect HealthCare, Aminogatan 1, 431 53 Mölndal, Sweden",
    websiteLabel: "Website",
    website: "www.wellspect.com",
  },
  sv: {
    company: "Wellspect HealthCare Sverige",
    intro:
      "Vår kundservice hjälper dig med produktfrågor, prover och beställningar. För medicinska råd, kontakta alltid din vårdgivare.",
    phoneLabel: "Telefon",
    phone: "020-88 55 33",
    emailLabel: "E-post",
    email: "kundservice.se@wellspect.com",
    hoursLabel: "Öppettider",
    hours: "Måndag–fredag 08.00–16.30",
    addressLabel: "Adress",
    address: "Wellspect HealthCare, Aminogatan 1, 431 53 Mölndal",
    websiteLabel: "Webbplats",
    website: "www.wellspect.se",
  },
  fi: {
    company: "Wellspect Oy",
    intro:
      "Asiakaspalvelumme auttaa tuotekysymyksissä, näytteissä ja tilauksissa. Lääketieteellisissä kysymyksissä ota aina yhteys hoitohenkilökuntaan.",
    phoneLabel: "Puhelin",
    phone: "09 867 6160",
    emailLabel: "Sähköposti",
    email: "info.fi@wellspect.com",
    hoursLabel: "Aukioloajat",
    hours: "Maanantai–perjantai 8.00–16.00",
    addressLabel: "Osoite",
    address: "Wellspect Oy, Miestentie 9 C, 02150 Espoo",
    websiteLabel: "Verkkosivut",
    website: "www.wellspect.fi",
  },
  da: {
    company: "Wellspect HealthCare Danmark",
    intro:
      "Vores kundeservice hjælper med produktspørgsmål, prøver og bestillinger. Ved lægelige spørgsmål skal du altid kontakte din behandler.",
    phoneLabel: "Telefon",
    phone: "80 25 25 25",
    emailLabel: "E-mail",
    email: "kundeservice.dk@wellspect.com",
    hoursLabel: "Åbningstider",
    hours: "Mandag–fredag 08.00–16.00",
    addressLabel: "Adresse",
    address: "Wellspect HealthCare, Vandtårnsvej 83A, 2860 Søborg",
    websiteLabel: "Hjemmeside",
    website: "www.wellspect.dk",
  },
  no: {
    company: "Wellspect HealthCare Norge",
    intro:
      "Kundeservice hjelper deg med produktspørsmål, prøver og bestillinger. For medisinske råd, kontakt alltid helsepersonell.",
    phoneLabel: "Telefon",
    phone: "800 33 100",
    emailLabel: "E-post",
    email: "kundeservice.no@wellspect.com",
    hoursLabel: "Åpningstider",
    hours: "Mandag–fredag 08.00–16.00",
    addressLabel: "Adresse",
    address: "Wellspect HealthCare, Postboks 293, 1326 Lysaker",
    websiteLabel: "Nettsted",
    website: "www.wellspect.no",
  },
};
