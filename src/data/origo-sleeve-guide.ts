/**
 * LoFric Origo Sleeve male quick guide (75028-USX-2024-05-17).
 *
 * Swedish, Finnish, Danish, and Norwegian keep this quick-guide wording.
 * English steps in the app come from the 2026 booklet (`sleeveEnPdfSteps`).
 * The English note below is that booklet’s salt-solution warning.
 * The English strings on the steps themselves are not shown.
 *
 * Illustrations are the language-neutral frames from the English guide.
 * Badges keep the sheet’s labels (A, 1–4, 5A, 5B, 6–9).
 */
import type { InstructionStep, LocalizedText } from "@/data/products";

const img = (file: string) => `/images/instructions/lofric-origo-sleeve/${file}`;

const L = (en: string, sv: string, fi: string, da: string, no: string): LocalizedText => ({
  en,
  sv,
  fi,
  da,
  no,
});

const optionalTitle: LocalizedText = {
  en: "OPTIONAL:",
  sv: "Valfritt:",
  fi: "VALINNAINEN:",
  da: "VALGFRIT:",
  no: "VALGFRITT:",
};

export const origoSleeveIntro: LocalizedText = L(
  "",
  "LoFric Origo, hydrofil tappningskateter för engångsbruk med saltlösning för aktivering. För kort- och långvarig blåsskötsel med intermittent kateterisering. Endast efter förskrivning; följ utbildningen från vårdpersonalen; se bruksanvisningen i förpackningen.",
  "LoFric Origo, kertakäyttöinen hydrofiilinen virtsakatetri ja suolaliuos aktivointia varten. Lyhyt- ja pitkäaikaiseen virtsarakon omatoimiseen toistokatetrointiin. Vain terveydenhuollon ammattilaisen määräyksestä; noudata saatua koulutusta; katso pakkauksen käyttöohje.",
  "LoFric Origo, hydrofilt engangskateter med saltvandsopløsning til aktivering. Til kort- og langvarig blærebehandling med intermitterende urinkateterisering. Kun på bevilling; følg sundhedspersonalets oplæring; se brugsanvisningen i pakken.",
  "LoFric Origo, hydrofilt engangskateter med saltløsning for aktivering. For kort- og langsiktig blæretømming med intermitterende kateterisering. Kun på resept; følg opplæringen fra helsepersonell; se bruksanvisningen i pakken.",
);

export const origoSleeveNote: LocalizedText = L(
  "IMPORTANT INFORMATION Use only the salt solution included to wet the catheter. Do not place the catheter on paper or cloth as these materials can absorb the wet coating.",
  "VIKTIG INFORMATION: Använd endast den medföljande saltlösningen för att väta katetern. Lägg inte katetern på papper eller tyg, eftersom dessa material kan absorbera den våta ytbeläggningen.",
  "TÄRKEÄÄ: Käytä katetrin kostuttamiseen vain mukana tulevaa suolaliuosta. Älä aseta katetria paperin tai kankaan päälle, koska nämä materiaalit voivat imeä märän pinnoitteen.",
  "VIGTIG INFORMATION: Brug kun den medfølgende saltvandsopløsning til at væde kateteret. Læg ikke kateteret på papir eller stof, da disse materialer kan absorbere den våde belægning.",
  "VIKTIG INFORMASJON: Bruk kun den medfølgende saltløsningen for å fukte kateteret. Ikke legg kateteret på papir eller tøy, da disse materialene kan absorbere det våte belegget.",
);

export const origoSleeveSteps: InstructionStep[] = [
  {
    label: "A",
    text: L(
      "Tips for storing before use: Foldable to pocket size. Use the slit to keep the catheter folded.",
      "Tips på förvaring innan användning. Vikbar till fickformat. Använd skåran för att hålla katetern vikt.",
      "Vinkkejä säilytykseen ennen käyttöä. Taitettavissa taskukokoon. Käytä lovea pitämään katetri taiteltuna.",
      "Gode råd til opbevaring før brug. Kan foldes sammen til lommestørrelse. Brug slidsen til at holde katetret foldet.",
      "Tips til oppbevaring før bruk. Kan brettes til lommestørrelse. Bruk splitten til å folde sammen katetret.",
    ),
    image: img("step-a.png"),
  },
  {
    label: "1",
    text: L(
      "Wash your hands thoroughly with soap and water.",
      "Tvätta händerna ordentligt med tvål och vatten.",
      "Pese kätesi huolellisesti vedellä ja saippualla.",
      "Vask hænderne grundigt med vand og sæbe.",
      "Vask hendene godt med såpe og vann.",
    ),
    image: img("step-1.png"),
  },
  {
    label: "2",
    text: L(
      "Squeeze to release the salt solution and the catheter is ready to use.",
      "Kläm för att frigöra saltlösningen, så är katetern klar att användas.",
      "Purista suolaliuos esiin, niin katetri on käyttövalmis.",
      "Klem for at frigøre saltvandsopløsningen, og kateteret er klar til brug.",
      "Klem for å frigjøre saltløsningen, så er kateteret klart til bruk.",
    ),
    image: img("step-2.png"),
  },
  {
    label: "3",
    text: L(
      "Use the loop to pull down and open.",
      "Använd öglan för att dra ner och öppna.",
      "Käytä lenkkiä vetääksesi auki.",
      "Brug løkken til at trække ned og åbne.",
      "Bruk løkken til å trekke ned og åpne.",
    ),
    image: img("step-3.png"),
  },
  {
    label: "4",
    title: optionalTitle,
    text: L(
      "Use the adhesive tab on the reverse side to attach the product to a dry, clean surface.",
      "Använd klisterfliken på baksidan för att fästa produkten på en torr och ren yta.",
      "Kiinnitä tuote kuivalle ja puhtaalle pinnalle pakkauksen takaosassa olevalla tarralapulla.",
      "Brug den selvklæbende strimmel på bagsiden for at fastgøre produktet på en tør, ren overflade.",
      "Bruk den selvklebende fliken på baksiden for å feste produktet til en tørr, ren overflade.",
    ),
    image: img("step-4.png"),
  },
  {
    label: "5A",
    text: L(
      "After opening, gently pinch and hold the sleeve grip to automatically pull down the protective sleeve when taking out the catheter. Use the protective sleeve to control insertion without having to touch the catheter tube.",
      "Efter öppning, nyp försiktigt och håll i hylsgreppet för att automatiskt dra ner skyddshylsan när katetern tas ut. Använd skyddshylsan för att kontrollera införandet utan att behöva röra katetern.",
      "Avaamisen jälkeen purista ja pidä varovasti hygieniasuojan otteesta, jotta suojus laskeutuu automaattisesti, kun otat katetrin ulos. Ohjaa katetri hygieniasuojan avulla ilman, että katetrin letkuosaan tarvitsee koskea.",
      "Efter åbning skal du forsigtigt klemme og holde i hylstergrebet, så beskyttelseshylsteret automatisk trækkes ned, når kateteret tages ud. Brug beskyttelseshylsteret til at styre indføringen uden at røre ved kateterslangen.",
      "Etter åpning, klyp forsiktig og hold i hylsegrepet slik at beskyttelseshylsen automatisk trekkes ned når kateteret tas ut. Bruk beskyttelseshylsen til å styre innføringen uten å måtte berøre kateterslangen.",
    ),
    image: img("step-5a.png"),
  },
  {
    label: "5B",
    title: optionalTitle,
    text: L(
      "Take out the catheter. Pull the sleeve grip down to cover the catheter tube. Use the protective sleeve to control insertion without having to touch the catheter tube.",
      "Ta ut katetern. Dra ner hylsgreppet för att täcka katetern. Använd skyddshylsan för att kontrollera införandet utan att behöva röra katetern.",
      "Ota katetri ulos. Vedä hygieniasuojan ote alas, jotta se peittää katetrin letkun. Ohjaa katetri hygieniasuojan avulla ilman, että katetrin letkuosaan tarvitsee koskea.",
      "Tag kateteret ud. Træk hylstergrebet ned, så det dækker kateterslangen. Brug beskyttelseshylsteret til at styre indføringen uden at røre ved kateterslangen.",
      "Ta ut kateteret. Trekk hylsegrepet ned slik at det dekker kateterslangen. Bruk beskyttelseshylsen til å kontrollere innføringen uten å måtte berøre kateterslangen.",
    ),
    image: img("step-5b.png"),
  },
  {
    label: "6",
    text: L(
      "Lift the penis towards the stomach to straighten the urethra. Slowly insert the catheter into the urethra. When urine begins to flow, insert the catheter slightly more to ensure both eyelets are inside the bladder.",
      "Lyft penis mot magen för att räta ut urinröret. För långsamt in katetern i urinröret. När urinen börjar rinna, för in katetern något längre för att säkerställa att båda kateterögonen är inne i urinblåsan.",
      "Nosta penis vatsaa kohti virtsaputken suoristamiseksi. Vie katetri hitaasti virtsaputkeen. Kun virtsaa alkaa valua, työnnä katetria vielä hiukan pidemmälle varmistaaksesi, että katetrin molemmat silmäaukot ovat sisällä virtsarakossa.",
      "Løft penis op mod maven for at rette urinrøret ud. Før langsomt kateteret ind i urinrøret. Når urinen begynder at løbe, føres kateteret en smule længere ind for at sikre, at begge kateterhuller er inde i blæren.",
      "Trekk penis mot magen for å rette ut urinrøret. Før kateteret sakte inn i urinrøret. Når urinen begynner å renne, før kateteret litt lenger inn slik at begge øynene er inne i blæren.",
    ),
    image: img("step-6.png"),
  },
  {
    label: "7",
    text: L(
      "Angle the penis down as urine begins to flow through the catheter.",
      "Vinkla penis nedåt när urinen börjar rinna genom katetern.",
      "Laske penis normaaliasentoon, kun virtsaa alkaa valua katetrin kautta.",
      "Vend penis nedad, når urinen begynder at løbe gennem kateteret.",
      "La penis peke ned når urinen begynner å strømme gjennom katetret.",
    ),
    image: img("step-7.png"),
  },
  {
    label: "8",
    text: L(
      "When the urine flow stops, slowly withdraw the catheter a little bit. If urine starts to flow again, wait until it has stopped to ensure complete bladder emptying. Then remove the catheter completely.",
      "När urinflödet upphör, dra ut katetern långsamt en liten bit. Om urinen börjar rinna igen, vänta tills den har slutat så att blåsan töms helt. Ta sedan bort katetern helt.",
      "Kun virtsaa ei enää valu katetrista, vedä katetria hitaasti hiukan ulospäin. Jos virtsa alkaa valua uudelleen, odota virtsan tulon loppumista, jotta varmistat virtsarakon täydellisen tyhjenemisen. Poista sitten katetri kokonaan.",
      "Når urinen stopper med at løbe, trækkes kateteret langsomt en lille smule ud. Hvis urinen begynder at løbe igen, skal du vente, indtil den er stoppet, for at sikre fuldstændig blæretømning. Tag derefter kateteret helt ud.",
      "Når urinstrømmen stopper, trekker du katetret sakte et lite stykke ut. Hvis urinen begynner å renne igjen, vent til det har stoppet for å sikre fullstendig tømming av blæren. Trekk deretter katetret helt ut.",
    ),
    image: img("step-8.png"),
  },
  {
    label: "9",
    text: L(
      "Put the catheter back in the package and dispose appropriately (local regulations may vary).",
      "Lägg tillbaka katetern i förpackningen och kassera på lämpligt sätt (lokala bestämmelser kan variera).",
      "Aseta katetri takaisin pakkaukseen ja hävitä se asianmukaisesti (paikalliset määräykset voivat vaihdella).",
      "Læg kateteret tilbage i emballagen, og bortskaf det korrekt (lokale regler kan variere).",
      "Legg kateteret tilbake i pakningen og kasser det på egnet måte (lokale regler kan variere).",
    ),
    image: img("step-9.png"),
  },
];
