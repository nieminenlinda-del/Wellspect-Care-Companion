/**
 * Navina Smart clinical IFU copy (navina-smart only).
 *
 * EN: 15-navina-smart-en.pdf (INSTRUCTIONS FOR USE)
 * SV: 17-navina-smart-sv.pdf (BRUKSANVISNING)
 * DA and FI manuals are not in this drop. Those locales stay empty.
 * Do not import this into products.ts until da and fi are filled from the IFUs.
 * Empty da/fi would blank those markets.
 *
 * No Norwegian IFU was supplied. Navina Smart is already unavailable on
 * the Norwegian market. `no` keeps the existing Norwegian contraindication
 * lines and perforation warning. Every other `no` string mirrors Swedish.
 * That mirror is not a Norwegian translation.
 *
 * Clinical sections only. Numbered quick-guide steps, tube-connection, and
 * grip-ring instructions are not included. EMC test tables are not included.
 * Journal footnotes on the perforation statistic are omitted.
 */
type Localized = { en: string; sv: string; fi: string; da: string; no: string };

const pending = "";

/**
 * `no` mirrors Swedish when this product has no Norwegian string for that line.
 * Pass `no` to keep an existing Norwegian string. There is no Norwegian Smart IFU.
 */
const L = (en: string, sv: string, no: string = sv): Localized => ({
  en,
  sv,
  fi: pending,
  da: pending,
  no,
});

export const navinaSmartIfuReady = false;

export const navinaSmartIfu = {
  indications: [
    L(
      "The Navina Systems is intended for Transanal Irrigation by instilling water up into the lower part of the colon through a rectal catheter.",
      "Navina Systems är avsett för transanal irrigering genom att vatten tillförs till nedre delen av tjocktarmen med hjälp av en rektalkateter.",
    ),
    L(
      "The Navina Systems is indicated to help adults and children from 3 years who suffer from fecal incontinence, chronic constipation and/or time-consuming bowel management. By instilling water up into the lower part of the colon, the peristaltic muscles in the bowel can be triggered and start to evacuate the content of the lower colon and rectum.",
      "Navina Systems är avsedd att hjälpa vuxna och barn från 3 år som lider av avföringsinkontinens, kronisk förstoppning och/eller tidskrävande tarmskötsel. Genom att tillföra vatten till nedre delen av tjocktarmen kan man stimulera de peristaltiska musklerna i tarmen till att tömma innehållet i nedre delen av tjocktarmen och ändtarmen.",
    ),
    L(
      "The objective of the treatment is to reduce symptoms of constipation and/or episodes of fecal incontinence.",
      "Målet med behandlingen är att minska symtom på förstoppning och/eller episoder av avföringsinkontinens.",
    ),
  ],
  contraindicationsIntro: L(
    "Do NOT use Navina Systems if you have one or more of the following:",
    "Använd INTE Navina Systems om något eller några av följande tillstånd gäller för dig:",
    "IKKE bruk Navina-systemer hvis du har en eller flere av følgende:",
  ),
  contraindications: [
    L(
      "Known anal or colorectal stenosis",
      "Känd anal eller kolorektal stenos.",
      "Kjent anal eller kolorektal stenose",
    ),
    L(
      "Active inflammatory bowel disease",
      "Aktiv inflammatorisk tarmsjukdom.",
      "Aktiv inflammatorisk tarmsykdom",
    ),
    L("Acute diverticulitis", "Akut divertikulit.", "Akutt divertikulitt"),
    L("Colorectal cancer", "Kolorektal cancer.", "Kolorektal kreft"),
    L("Ischemic colitis", "Ischemisk kolit.", "Iskemisk kolitt"),
    L(
      "You are within three months of anal or colorectal surgery",
      "Du har genomgått anal eller kolorektal operation för mindre än tre månader sedan.",
      "Det har gått mindre enn tre måneder siden anal eller kolorektal kirurgi",
    ),
    L(
      "You are within 4 weeks of previous endoscopic polypectomy",
      "Du har genomgått endoskopisk polypektomi för mindre än 4 veckor sedan.",
      "Det har gått mindre enn 4 uker siden endoskopisk polypektomi",
    ),
    L("You are pregnant", "Du är gravid.", "Du er gravid"),
    L(
      "As the list may not be exhaustive, healthcare professionals will always consider individual user factors as well.",
      "Den här listan är inte nödvändigtvis fullständig, och därför tar sjukvårdspersonalen även ställning till användarens individuella omständigheter.",
    ),
  ],
  safety: [
    L(
      "These instructions are only a reminder and should be seen as complementary to the instructions given by your healthcare professional. They do not replace the need for training with a healthcare professional. Keep this instruction for further reference. Navina Irrigation Systems is for prescription use only.",
      "Följande anvisningar är bara avsedda att vara ett stöd för minnet och ska betraktas som ett komplement till de instruktioner som sjukvårdspersonalen har gett dig. De kan inte ersätta utbildning tillsammans med sjukvårdspersonal. Behåll den här bruksanvisningen som referens. Navina Irrigeringssystem är endast för användning enligt ordination.",
    ),
    L(
      "Special care must be taken if you have or have had any of the following:",
      "Du måste vara särskilt försiktig om du har eller har haft något av följande:",
    ),
    L(
      "Fecal impaction – If you are heavily constipated an initial clean out of the bowel must be performed before starting the irrigation treatment.",
      "Fekalom – om du har svår förstoppning måste en inledande tömning av tarmen genomföras innan du kan påbörja behandlingen.",
    ),
    L(
      "Painful anorectal conditions – any condition which may cause pain or bleeding, e.g. anal fissure, anal fistula, third or fourth grade of hemorrhoids.",
      "Smärtsamma anorektala tillstånd – alla tillstånd som kan orsaka smärta eller blödning, däribland analfissur, analfistel eller hemorrojder av tredje eller fjärde graden.",
    ),
    L(
      "If you are at risk of autonomic dysreflexia (individuals with spinal cord injury at or above the sixth thoracic vertebra [T6]), supervised first irrigation with close follow-up is mandatory.",
      "Om du löper risk att drabbas av autonom dysreflexi (gäller personer med ryggmärgsskada vid eller ovanför sjätte thorakalkotan (T6)) är det obligatoriskt att utföra den första irrigeringen under tillsyn och med noggrann uppföljning.",
    ),
    L(
      "Severe diverticulosis or previous diverticular abscess.",
      "Svår divertikulos eller tidigare divertikelabscess.",
    ),
    L(
      "Irradiation therapy in the abdominal or pelvic region within 3 months or until cessation of proctitis.",
      "Strålbehandling i buk- eller bäckenregionen inom tre månader eller pågående proktit.",
    ),
    L(
      "Previous anal or colorectal surgery, close monitoring is recommended during initiation of therapy.",
      "Tidigare anal eller kolorektal operation, noggrann övervakning rekommenderas under behandlingsstart.",
    ),
    L(
      "Previous major pelvic surgery, close monitoring is recommended during initiation of therapy.",
      "Tidigare större bäckenkirurgi, noggrann övervakning rekommenderas under behandlingsstart.",
    ),
    L(
      "Changed stool pattern such as sudden diarrhea of unknown cause.",
      "Förändrat avföringsmönster, till exempel plötslig diarré av okänd anledning.",
    ),
    L(
      "Increased risk of hemorrhage or using anticoagulant therapy (not including aspirin or clopidogrel).",
      "Ökad risk för blödning och användning av blodförtunnande medel (omfattar inte acetylsalicylsyra eller klopidogrel).",
    ),
    L(
      "The Navina rectal catheter/cone is a single use product. If reused, Wellspect cannot guarantee the functionality nor the safety of the product.",
      "Navina-rektalkatetern/-konan är en engångsprodukt. Om den återanvänds kan Wellspect inte garantera produktens funktion eller säkerhet.",
    ),
    L(
      "Careful medical history and a digital rectal examination are mandatory.",
      "Det är obligatoriskt att lämna en detaljerad sjukdomshistoria och genomgå en manuell rektal undersökning.",
    ),
    L(
      "In the case of previous anal, colorectal or pelvic surgery, an endoscopy or comparable examination should be performed to exclude other additional disorders that would contraindicate the use of TAI.",
      "Om du har genomgått en operation i ändtarmsöppningen, ändtarmen, tjocktarmen eller bäckenet måste du genomgå endoskopi eller motsvarande undersökning så andra ytterligare sjukdomar som kan göra det olämpligt att använda TAI kan uteslutas.",
    ),
    L(
      "The first irrigation should be performed under supervision of a healthcare professional.",
      "Den första irrigeringen ska utföras under övervakning av sjukvårdspersonal.",
    ),
    L(
      "Children shall be accompanied by an adult caregiver until the caregiver considers the child able to perform the procedure by themselves.",
      "Barn ska ha hjälp av en vuxen vårdgivare tills vårdgivaren anser att barnet klarar att utföra proceduren själv.",
    ),
    L(
      "Only use Navina Irrigation Systems for its intended use, as described in this instruction manual.",
      "Navina Irrigeringssystem får endast användas på avsett sätt, enligt beskrivningen i denna bruksanvisning.",
    ),
    L(
      "Navina Irrigation Systems is for a single user and should not be shared with other people.",
      "Navina Irrigeringssystem är endast avsett för en användare och ska inte delas med andra.",
    ),
    L(
      "The Navina Catheter Regular is for adult use only.",
      "Navina-katetern regular är endast avsedd för vuxna.",
    ),
    L(
      "Only use Wellspect’s original accessories. No modification of this system is allowed.",
      "Använd endast originaltillbehör från Wellspect. Ingen modifiering av detta system är tillåten.",
    ),
    L(
      "Check all components for wear or damage before usage. Do not use if damaged.",
      "Kontrollera att det inte finns slitage eller skador på någon av komponenterna innan du använder systemet. Skadade komponenter får inte användas.",
    ),
    L(
      "There are no user-serviceable parts inside the Navina Smart Control Unit. Do not attempt to repair the Navina Smart Control Unit yourself.",
      "Användaren kan inte utföra service på delarna inuti Navina Smart-kontrollenheten. Försök aldrig reparera Navina Smart-kontrollenheten på egen hand.",
    ),
    L(
      "Store the Navina Irrigation System out of reach of small children.",
      "Förvara Navina Irrigation System utom räckhåll för småbarn.",
    ),
    L(
      "Do not store the Navina Smart Control Unit in direct sunlight.",
      "Komponenterna i Navina Smart-kontrollenheten får inte förvaras i direkt solljus.",
    ),
    L(
      "Do not turn off the Navina Smart Control Unit during irrigation. The Navina Smart Control Unit should not be turned off until all tubes are disconnected from the control unit.",
      "Stäng aldrig av Navina Smart-kontrollenheten under pågående irrigering. Navina Smart-kontrollenheten får inte stängas av förrän alla slangar är bortkopplade från kontrollenheten.",
    ),
    L(
      "When using electrical devices, basic safety precautions should always be followed:",
      "Följande grundläggande säkerhetsåtgärder ska alltid vidtas vid användning av elektriska apparater:",
    ),
    L(
      "Make sure to start using the Navina Smart Control Unit by the latest date indicated on the package label.",
      "Se till att börja använda Navina Smart-kontrollenheten senast på det datum som står på etiketten på förpackningen.",
    ),
    L(
      "Make sure the voltage of the power adapter is compatible with the power source.",
      "Kontrollera att strömadapterns volttal är kompatibelt med strömkällan.",
    ),
    L(
      "Always unplug electrical devices immediately after use.",
      "Dra alltid ur sladden till elektriska apparater så snart du är färdig med dem.",
    ),
    L(
      "Keep the power adapter and the cable away from heated surfaces.",
      "Strömadaptern får inte förvaras i närheten av varma ytor.",
    ),
    L(
      "Never operate an electrical device if any part of it is damaged, if it is not working properly or has been dropped into water.",
      "Använd aldrig en elektrisk apparat om någon del av den är skadad, om den inte fungerar som den ska eller om den har tappats i vatten.",
    ),
    L(
      "Do not spray or pour liquid onto the power adapter.",
      "Vatten får inte sprutas eller hällas på strömadaptern.",
    ),
    L("Do not use the power adapter outdoors.", "Strömadaptern får inte användas utomhus."),
    L(
      "Do not use the power adapter in the bathroom.",
      "Strömadaptern får inte användas i badrummet.",
    ),
    L(
      "Do not connect the Navina Smart Control Unit to any other equipment than the supplied power adapter.",
      "Anslut inte Navina Smart-kontrollenheten till någon annan utrustning än den medföljande strömadaptern.",
    ),
    L(
      "Use only the accompanying power adapter and cable to charge the Navina Smart Control Unit.",
      "Använd endast den medföljande strömadaptern och kabeln för att ladda ned Navina Smart-kontrollenheten.",
    ),
    L(
      "No modification of this equipment is allowed.",
      "Ingen modifiering av denna utrustning är tillåten.",
    ),
    L(
      "Portable radio frequency communications equipment (including peripherals such as antenna cables and external antennas) should be used no closer than 30 cm (12 inches) to any part of the Navina Smart Control Unit, including cables specified by the manufacturer, when using Navina Smart. Otherwise, it could result in degradation of the performance of this equipment.",
      "Bärbar radiofrekvenskommunikationsutrustning (även kringutrustning som antennkablar och externa antenner) ska placeras minst 30 cm från alla delar av Navina Smart-kontrollenheten, inklusive de kablar som specificeras av tillverkaren, när du använder Navina Smart. Om inte detta görs kan utrustningens prestanda försämras.",
    ),
    L(
      "Use of any other power adaptor or cable other than those provided could result in damages to the product, increased electromagnetic emissions or decreased electromagnetic immunity of this equipment and result in improper operation.",
      "Användning av någon annan typ av strömadapter eller kabel som inte medföljer kan leda till skador på produkten, ökad elektromagnetisk strålning eller minskad elektromagnetisk immunitet för utrustningen, vilket i sin tur kan leda till driftfel.",
    ),
    L(
      "After transportation/storage, allow the Navina Smart Control Unit to reach the operating temperature before use. This can take up to 60 minutes.",
      "Efter transport/förvaring ska Navina Smart-kontrollenheten ges tid att nå driftstemperatur före användning. Detta kan ta upp till 60 minuter.",
    ),
    L(
      "Use of this equipment adjacent to or stacked with other equipment should be avoided because it could result in improper operation. If such use is necessary, this equipment and the other equipment should be observed to verify that they are operating normally.",
      "Undvik att använda eller förvara denna utrustning tillsammans med annan utrustning eftersom det kan leda till driftfel. Om det är nödvändigt att använda utrustningen tillsammans med annan utrustning ska både denna och den andra utrustningen observeras med avseende på normal drift.",
    ),
    L(
      "If the warnings above are not honored, the following malfunctions can occur: The balloon might get too large. Air can be pumped into the colon. The balloon might not be able to fully deflate.",
      "Om ovanstående varningar inte följs kan följande driftfel uppstå: Ballongen kan bli för stor. Luft kan pumpas in i tjocktarmen. Det kanske inte går att tömma ballongen helt.",
    ),
  ],
  emergencyWarning: L(
    "Seek medical care immediately if you experience severe or sustained abdominal pain, back pain or rectal bleeding during or after anal irrigation. Bowel perforation is a very rare (1 out of 500,000 irrigations or 0.0002%) yet extremely serious complication of TAI. It is a medical emergency and requires immediate medical attention. Symptoms of bowel perforation include severe or sustained abdominal or back pain or significant rectal bleeding (not just smearing of blood on the rectal catheter/cone which is very common and is not a concern).",
    "Sök omedelbart vård om du upplever svår eller ihållande smärta i magen eller ryggen eller rektalblödning under eller efter analirrigering. Tarmperforation är en mycket sällsynt (1 av 500 000 irrigeringar eller 0,0002 %) men oerhört allvarlig komplikation till TAI. Det är ett akut sjukdomstillstånd som kräver omedelbar läkarvård. Symtom på tarmperforation är bland annat svår eller ihållande smärta i magen eller ryggen, alternativt betydande rektal blödning (inte bara spår av blod på rektalkatetern/konan vilket är mycket vanligt och inte en anledning till oro).",
    "Oppsøk lege umiddelbart hvis du får sterke eller vedvarende magesmerter, ryggsmerter eller blødning fra endetarmen under eller etter anal irrigasjon. Tarmperforasjon er en svært sjelden (1 av 500 000 irrigasjoner eller 0,0002 %), men ekstremt alvorlig komplikasjon ved TAI. Det er en medisinsk nødsituasjon og krever umiddelbar legehjelp. Symptomer på tarmperforasjon er sterke eller vedvarende mage- eller ryggsmerter eller betydelig blødning fra endetarmen (ikke bare litt blod på rektalkateteret/konusen, som er svært vanlig og ikke gir grunn til bekymring).",
  ),
  warningSigns: [
    L(
      "Any serious adverse reaction occurring when using the Navina Irrigation Systems should be reported to the manufacturer and your local health authority.",
      "Eventuella allvarliga biverkningar som uppstår vid användning av Navina Irrigeringssystem ska rapporteras till tillverkaren och din lokala hälsovårdsmyndighet.",
    ),
  ],
  storage: L(
    "Store in a dry place at room temperature (+15 to +25 °C)",
    "Förvaras på en torr plats i rumstemperatur (+15 till +25 °C)",
  ),
};
