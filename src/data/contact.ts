import type { LocaleCode } from "@/lib/locale";

/** Nordic desk shown inside the English contact section. Not a UI language. */
export type ContactCountry = Exclude<LocaleCode, "en">;

/** Separate from `wellspect-locale`, so choosing a desk does not change language. */
export const CONTACT_COUNTRY_STORAGE_KEY = "wellspect-contact-country";

/** Shown until the visitor picks another desk, and when stored data is missing. */
export const defaultContactCountry: ContactCountry = "sv";

export const contactCountryOptions: { code: ContactCountry; label: string }[] = [
  { code: "sv", label: "Sweden" },
  { code: "fi", label: "Finland" },
  { code: "da", label: "Denmark" },
  { code: "no", label: "Norway" },
];

export const englishNordicContactIntro =
  "English-speaking customers in the Nordics should choose their country. The phone, email, hours, address and website below are for that local desk. For medical advice, always contact your healthcare professional.";

export function isContactCountry(value: string | null): value is ContactCountry {
  return contactCountryOptions.some((option) => option.code === value);
}

/** English field labels with the selected Nordic desk’s details. */
export function englishContactFor(country: ContactCountry): ContactInfo {
  const desk = contactInfo[country];
  const labels = contactInfo.en;
  return {
    company: desk.company,
    intro: englishNordicContactIntro,
    phoneLabel: labels.phoneLabel,
    phone: desk.phone,
    emailLabel: labels.emailLabel,
    email: desk.email,
    hoursLabel: labels.hoursLabel,
    hours: desk.hours,
    addressLabel: labels.addressLabel,
    address: desk.address,
    websiteLabel: labels.websiteLabel,
    website: desk.website,
  };
}

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
  // English labels live here. The English contact screen does not show this
  // headquarters phone, email, or hours; it shows a Nordic desk instead.
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
    phone: "031 376 40 20",
    emailLabel: "E-post",
    email: "info.se@wellspect.com",
    hoursLabel: "Öppettider",
    hours: "Vardagar kl. 09.00-16.00",
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
    company: "Wellspect ApS",
    intro:
      "Vores kundeservice hjælper med produktspørgsmål, prøver og bestillinger. Ved lægelige spørgsmål skal du altid kontakte din behandler.",
    phoneLabel: "Telefon",
    phone: "43 62 43 32",
    emailLabel: "E-mail",
    email: "info.dk@wellspect.com",
    hoursLabel: "Åbningstider",
    hours: "Mandag–fredag kl. 9–11.30 og 12–15",
    addressLabel: "Adresse",
    address: "Maglebergvej 10, 2800 Kongens Lyngby",
    websiteLabel: "Hjemmeside",
    website: "www.wellspect.dk",
  },
  no: {
    company: "Wellspect AS",
    intro:
      "Kundeservice hjelper deg med produktspørsmål, prøver og bestillinger. For medisinske råd, kontakt alltid helsepersonell.",
    phoneLabel: "Telefon",
    phone: "815 59 118",
    emailLabel: "E-post",
    email: "info.no@wellspect.com",
    hoursLabel: "Åpningstider",
    hours: "Mandag–fredag kl. 9–15",
    addressLabel: "Adresse",
    address: "Karihaugveien 89, 1086 Oslo",
    websiteLabel: "Nettsted",
    website: "www.wellspect.no",
  },
};
