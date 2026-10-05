import type { InstructionStep, LocalizedText } from "@/data/products";

/**
 * Navina Mini quick-guide tabs. Picture rows follow the IFU
 * (PD-00097825): Without is steps 1, 2, 4, 5, 6–7, 9, 12, 13, 14.
 * With adds extension-tube steps 3, 4 (cone on the tube), and 10/11.
 * Illustrations are the AID0056458–6480 frames matched to those rows.
 * Step 8 (withdraw the cone) is not on the picture rows.
 */

export const miniWithoutTubeLabel: LocalizedText = {
  en: "Without extension tube",
  sv: "Utan förlängningsslang",
  fi: "Ilman jatkoletkua",
  da: "Uden forlængerslange",
  no: "Uten forlengelsesslange",
};

export const miniWithTubeLabel: LocalizedText = {
  en: "With extension tube",
  sv: "Med förlängningsslang",
  fi: "Jatkoletkun kanssa",
  da: "Med forlængerslange",
  no: "Med forlengelsesslange",
};

const aid = (id: string) => `/images/instructions/navina-mini/${id}.png`;

const preparation: LocalizedText = {
  en: "Preparation",
  sv: "Förberedelser",
  fi: "Valmistelu",
  da: "Forberedelse",
  no: "Forberedelser",
};

const instillation: LocalizedText = {
  en: "Instillation",
  sv: "Tillförsel av vatten",
  fi: "Veden johtaminen",
  da: "Indføring",
  no: "Instillasjon",
};

const cleaning: LocalizedText = {
  en: "Disassembling and cleaning",
  sv: "Isärtagning och rengöring",
  fi: "Purkaminen ja puhdistaminen",
  da: "Demontering og rengøring",
  no: "Demontering og rengjøring",
};

const fill: InstructionStep = {
  title: preparation,
  text: {
    en: "Open the lid and fill the entire water container with lukewarm (36–38 °C) tap water.",
    sv: "Öppna locket och fyll hela vattenbehållaren med kroppsvarmt (36–38 °C) kranvatten.",
    fi: "Avaa kansi ja täytä koko vesisäiliö haalealla (36–38 °C) vesijohtovedellä.",
    da: "Åbn låget, og fyld hele vandbeholderen med lunkent (36–38 °C) postevand.",
    no: "Åpne lokket og fyll hele vannbeholderen med lunkent vann (36–38 °C) fra springen.",
  },
  image: aid("AID0056480"),
};

const closeLid: InstructionStep = {
  text: {
    en: "Close the lid.",
    sv: "Stäng locket.",
    fi: "Sulje kansi.",
    da: "Luk låget.",
    no: "Lukk lokket.",
  },
  image: aid("AID0056479"),
};

const wetCone: InstructionStep = {
  text: {
    en: "Activate the slippery coating of the cone to its base by wetting it with tap water.",
    sv: "Aktivera konans hala ytbeläggning till dess bas genom att blöta den med kranvatten.",
    fi: "Aktivoi kartion liukas pinnoite kostuttamalla se vesijohtovedellä.",
    da: "Aktiver keglens glatte belægning til bunden ved at fugte den med postevand.",
    no: "Aktiver det glatte belegget på conen fra topp til bunn ved å fukte den med vann fra springen.",
  },
  image: aid("AID0056475"),
};

const instillWithout = {
  title: instillation,
  text: {
    en: "Sit on or stand over the toilet and insert the cone into the rectum carefully. When the cone is in place, gently squeeze the water container to instill the water. Make sure you only insert the pointed section of the cone and stop when you reach the wider base.",
    sv: "Sitt på eller över toaletten och för försiktigt in konan i ändtarmen. När konan är på plats, tryck försiktigt på vattenbehållaren för att instillera vattnet. Se till att du bara sätter in den spetsiga delen av konan och stannar när du når den bredare basen.",
    fi: "Istu wc-istuimella tai sen yläpuolella ja aseta kartio varovasti peräsuoleen. Kun kartio on paikoillaan, purista vesisäiliötä varovasti, jotta sieltä tulee vettä. Aseta kartion kärki peräaukon sisään, leveämpi osa jää ulkopuolelle.",
    da: "Sæt dig på eller over toilettet, og indsæt forsigtigt keglen i endetarmen. Når keglen er på plads, skal du forsigtigt klemme vandbeholderen for at indføre vandet. Sørg for, at du kun indsætter den spidse del af keglen og stopper, når du når den bredere bund.",
    no: "Sitt på eller over toalettet og før conen forsiktig inn i endetarmen. Når conen er på plass, klemmer du forsiktig på vannbeholderen for å sprøyte inn vannet. Pass på at du bare setter inn den spisse delen av conen, og stopper når du når den bredere bunnen.",
  },
  image: aid("AID0056459"),
} satisfies InstructionStep;

const instillWith: InstructionStep = {
  title: instillation,
  text: instillWithout.text,
  image: aid("AID0056458"),
};

const disposeWithout = {
  title: cleaning,
  text: {
    en: "Put the cone back in the bag and dispose of it in the household waste.",
    sv: "Lägg tillbaka konan i påsen och släng i hushållsavfallet.",
    fi: "Aseta kartio takaisin pussiin ja hävitä se kotitalousjätteen mukana.",
    da: "Læg keglen tilbage i posen, og smid den i restaffald.",
    no: "Legg conen tilbake i posen og kast den i restavfallet.",
  },
  image: aid("AID0056467"),
} satisfies InstructionStep;

const disposeWith: InstructionStep = {
  title: cleaning,
  text: disposeWithout.text,
  image: aid("AID0056466"),
};

const emptyContainer: InstructionStep = {
  text: {
    en: "Open the lid of the water container and empty the remaining water.",
    sv: "Öppna locket på vattenbehållaren och töm ut överblivet vatten.",
    fi: "Avaa vesisäiliön kansi ja tyhjennä jäljellä oleva vesi.",
    da: "Åbn låget på vandbeholderen, og tøm den for resterende vand.",
    no: "Åpne lokket på vannbeholderen og tøm ut gjenværende vann.",
  },
  image: aid("AID0056474"),
};

const cleanContainer: InstructionStep = {
  text: {
    en: "Gently clean the water container after each use with soapy lukewarm water only. Let dry.",
    sv: "Rengör vattenbehållaren försiktigt efter varje användning med enbart ljummet tvålvatten. Låt torka.",
    fi: "Puhdista vesisäiliö jokaisen käyttökerran jälkeen saippuavedellä. Anna kuivua.",
    da: "Rengør forsigtigt vandbeholderen med lunkent sæbevand efter hvert brug. Lad den tørre.",
    no: "Rengjør vannbeholderen forsiktig etter hver bruk med lunkent såpevann, ingenting annet. La den tørke.",
  },
  image: aid("AID0056460"),
};

const washHands: InstructionStep = {
  text: {
    en: "Wash your hands.",
    sv: "Tvätta händerna.",
    fi: "Pese kätesi.",
    da: "Vask dine hænder.",
    no: "Vask hendene.",
  },
  image: aid("AID0056470"),
};

/** IFU picture row without the extension tube. */
export const navinaMiniWithoutTube: InstructionStep[] = [
  fill,
  closeLid,
  {
    text: {
      en: "Open the bag and assemble the cone to the water container.",
      sv: "Öppna påsen och sätt ihop konan och vattenbehållaren.",
      fi: "Avaa pussi ja kiinnitä kartio vesisäiliöön.",
      da: "Åbn posen, og sæt keglen sammen med vandbeholderen.",
      no: "Åpne posen og monter conen på vannbeholderen.",
    },
    image: aid("AID0056478"),
  },
  wetCone,
  instillWithout,
  disposeWithout,
  emptyContainer,
  cleanContainer,
  washHands,
];

/** IFU picture row with the extension tube. Steps 3 and 10/11 are extension-only. */
export const navinaMiniWithTube: InstructionStep[] = [
  fill,
  closeLid,
  {
    text: {
      en: "If an extension tube is used: Assemble the extension tube with the water container.",
      sv: "Om en förlängningsslang används: Montera ihop förlängningsslangen med vattenbehållaren.",
      fi: "Jatkoletkua käytettäessä: Kiinnitä jatkoletku vesisäiliöön.",
      da: "Hvis en forlængerslange anvendes: Sæt forlængerslangen sammen med vandbeholderen.",
      no: "Hvis forlengelsesslange brukes: Monter forlengelsesslangen på vannbeholderen.",
    },
    image: aid("AID0056476"),
  },
  {
    text: {
      en: "Open the bag and assemble the cone to the water container or, if used, the extension tube.",
      sv: "Öppna påsen och sätt ihop konan och vattenbehållaren eller förlängningsslangen, om den används.",
      fi: "Avaa pussi ja kiinnitä kartio vesisäiliöön tai mahdolliseen jatkoletkuun.",
      da: "Åbn posen, og sæt keglen sammen med vandbeholderen eller forlængerslangen, hvis den anvendes.",
      no: "Åpne posen og monter conen på vannbeholderen eller forlengelsesslangen, hvis den brukes.",
    },
    image: aid("AID0056477"),
  },
  wetCone,
  instillWith,
  disposeWith,
  {
    text: {
      en: "If an extension tube is used: Disassemble the extension tube and water container. Clean the extension tube by rinsing with soapy lukewarm water only and let dry.",
      sv: "Om en förlängningsslang används: Montera isär förlängningsslangen och vattenbehållaren. Rengör förlängningsslangen genom att skölja med enbart ljummet tvålvatten och låt torka.",
      fi: "Jatkoletkua käytettäessä: Irrota jatkoletku vesisäiliöstä. Puhdista jatkoletku huuhtelemalla se vain haalealla saippuavedellä ja anna kuivua.",
      da: "Hvis en forlængerslange anvendes: Skil forlængerslangen og vandbeholderen ad. Rengør forlængerslangen ved at skylle den med lunkent sæbevand og lad den tørre.",
      no: "Hvis forlengelsesslange brukes: Demonter forlengelsesslangen og vannbeholderen. Rengjør forlengelsesslangen ved å skylle kun med lunkent såpevann, og la den tørke.",
    },
    image: aid("AID0056468"),
  },
  emptyContainer,
  cleanContainer,
  washHands,
];
