/**
 * Navina Classic clinical IFU copy (navina-classic only).
 *
 * EN: 10-navina-classic-en.pdf (INSTRUCTIONS FOR USE)
 * SV: 13-navina-classic-sv.pdf (BRUKSANVISNING)
 * FI: 11-navina-classic-fi.pdf (KÄYTTÖOHJEET)
 * DA: 09-navina-classic-da.pdf (BRUGSVEJLEDNING)
 * NO: 12-navina-classic-no.pdf (BRUKERVEILEDNING)
 *
 * Clinical sections only: intended use, indications (with patient population),
 * clinical benefit, contraindications, perforation warning, precautions,
 * usage safeguards, and the serious-adverse-reaction line.
 * Numbered quick-guide steps are not included.
 * These manuals have no package-and-storage section. "Store out of reach of
 * children" is a usage precaution and lives in `safety`. The product keeps
 * its existing English storage line.
 * Journal footnotes on the perforation statistic are omitted.
 */
type Localized = { en: string; sv: string; fi: string; da: string; no: string };

const L = (en: string, sv: string, fi: string, da: string, no: string): Localized => ({
  en,
  sv,
  fi,
  da,
  no,
});

export const navinaClassicIfu = {
  indications: [
    L(
      "The Navina Systems is intended for Transanal Irrigation by instilling water up into the lower part of the colon through a rectal catheter.",
      "Navina Systems är avsett för transanal irrigering genom att vatten tillförs till nedre delen av tjocktarmen med hjälp av en rektalkateter.",
      "Navina-suolihuuhtelujärjestelmä on tarkoitettu suolihuuhteluun, jossa vettä johdetaan paksusuolen alaosaan rektaalikatetrilla.",
      "Navina-systemerne er beregnet til transanal irrigation ved at tilføre vand til tyktarmens nederste del via et rektalkateter.",
      "Navina Systems skal benyttes til transanal irrigasjon ved å instillere vann i den nedre delen av kolon gjennom et rektalkateter.",
    ),
    L(
      "The Navina Systems is indicated to help adults and children from 3 years who suffer from fecal incontinence, chronic constipation and/or time-consuming bowel management. By instilling water up into the lower part of the colon, the peristaltic muscles in the bowel can be triggered and start to evacuate the lower colon and rectum.",
      "Navina Systems är avsedd att hjälpa vuxna och barn från 3 år som lider av avföringsinkontinens, kronisk förstoppning och/eller tidskrävande tarmskötsel. Genom att tillföra vatten till nedre delen av tjocktarmen kan man stimulera de peristaltiska musklerna i tarmen till att tömma den nedre delen av tjocktarmen och ändtarmen.",
      "Navina-suolihuuhtelujärjestelmä on tarkoitettu auttamaan ulosteinkontinenssista, kroonisesta ummetuksesta ja/tai aikaa vievästä suolen toimittamisesta kärsiviä aikuisia ja vähintään 3-vuotiaita lapsia. Kun paksusuolen alaosaan johdetaan vettä, suolen peristalttiset lihakset aktivoituvat alkaen tyhjentää alempaa paksusuolta ja peräsuolta.",
      "Navina-systemer har til formål at hjælpe voksne og børn fra 3-års alderen, der lider af fækal inkontinens, kronisk forstoppelse og/eller tidskrævende tarmpleje. Vand, der tilføres tyktarmens nederste del, kan sætte gang i de peristaltiske muskler i tarmen, så de begynder at tømme den nederste del af tyktarmen og endetarmen.",
      "Navina Systems er indisert for å hjelpe voksne og barn fra 3 år som lider av avføringslekkasje, kronisk forstoppelse og/eller tidkrevende tarmtømming. Ved å instillere vann i nedre del av kolon kan de peristaltiske musklene i tarmen stimuleres til å starte tømming av nedre del av kolon og rektum.",
    ),
    L(
      "The objective of the treatment is to reduce symptoms of constipation and/or episodes of fecal incontinence.",
      "Målet med behandlingen är att minska symtom på förstoppning och/eller episoder av avföringsinkontinens.",
      "Hoidon tavoitteena on vähentää ummetusoireita ja/tai ulosteinkontinenssia.",
      "Formålet med behandlingen er at reducere symptomer på forstoppelse og/eller tilfælde af fækal inkontinens.",
      "Målet med behandlingen er å redusere symptomer på forstoppelse og/eller episoder med avføringslekkasje.",
    ),
  ],
  contraindicationsIntro: L(
    "Do NOT use Navina Systems if you have one or more of the following:",
    "Använd INTE Navina Systems om något eller några av följande tillstånd gäller för dig:",
    "ÄLÄ käytä Navina-suolihuuhtelujärjestelmää, jos sinulla on yksi tai useampi seuraavista vasta-aiheista:",
    "Brug IKKE Navina-systemer, hvis du har en eller flere af følgende lidelser:",
    "IKKE bruk Navina Systems hvis ett eller flere av de følgende alternativene gjelder for deg:",
  ),
  contraindications: [
    L(
      "Known anal or colorectal stenosis",
      "Känd anal eller kolorektal stenos.",
      "Peräaukon tai paksu- ja peräsuolen ahtauma",
      "Kendt anal eller colorektal forsnævring",
      "Kjent anal eller kolorektal stenose",
    ),
    L(
      "Active inflammatory bowel disease",
      "Aktiv inflammatorisk tarmsjukdom.",
      "Aktiivinen tulehduksellinen suolistotauti",
      "Aktiv inflammatorisk tarmsygdom",
      "Aktiv inflammatorisk tarmsykdom",
    ),
    L(
      "Acute diverticulitis",
      "Akut divertikulit.",
      "Akuutti divertikuliitti",
      "Akut divertikulitis",
      "Akutt divertikulitt",
    ),
    L(
      "Colorectal cancer",
      "Kolorektal cancer.",
      "Paksu- ja peräsuolen syöpä",
      "Colorektal cancer",
      "Kolorektal kreft",
    ),
    L(
      "Ischemic colitis",
      "Ischemisk kolit.",
      "Iskeeminen koliitti",
      "Iskæmisk kolitis",
      "Iskemisk kolitt",
    ),
    L(
      "You are within three months of anal or colorectal surgery",
      "Du har genomgått anal eller kolorektal operation för mindre än tre månader sedan.",
      "Aiempi peräaukon tai paksu- ja peräsuolen leikkaus alle 3 kuukautta sitten",
      "Du har fået foretaget anal eller kolorektal kirurgi inden for de seneste tre måneder",
      "Det har gått mindre enn tre måneder siden du fikk utført anal eller kolorektal kirurgi",
    ),
    L(
      "You are within 4 weeks of previous endoscopic polypectomy",
      "Du har genomgått endoskopisk polypektomi för mindre än 4 veckor sedan.",
      "Aiempi tähystyksessä tehty polyypinpoistoleikkaus alle 4 viikkoa sitten",
      "Du har fået foretaget endoskopisk polypektomi inden for de seneste 4 uger",
      "Det har gått mindre enn 4 uker siden du fikk utført endoskopisk polypektomi",
    ),
    L("You are pregnant", "Du är gravid.", "Olet raskaana.", "Du er gravid", "Du er gravid"),
    L(
      "As the list may not be exhaustive, healthcare professionals will always consider individual user factors as well.",
      "Den här listan är inte nödvändigtvis fullständig, och därför tar sjukvårdspersonalen även ställning till användarens individuella omständigheter.",
      "Koska luettelo ei välttämättä ole tyhjentävä, terveydenhuollon ammattilaiset ottavat aina huomioon myös yksilölliset tekijät.",
      "Da listen muligvis ikke er fuldstændig, tager behandlerne også altid individuelle brugerfaktorer i betragtning.",
      "Siden listen ikke nødvendigvis er uttømmende, vil helsepersonell alltid ta hensyn til individuelle faktorer hos brukeren.",
    ),
  ],
  safety: [
    L(
      "These instructions are only a reminder and should be seen as complementary to the instructions given by your healthcare professional. They do not replace the need for training with a healthcare professional. Navina System is for prescription use only.",
      "Följande anvisningar är bara avsedda att vara ett stöd för minnet och ska betraktas som ett komplement till de instruktioner som sjukvårdspersonalen har gett dig. De kan inte ersätta utbildning tillsammans med sjukvårdspersonal. Navina System är endast för användning enligt ordination.",
      "Nämä ohjeet ovat vain muistin avuksi ja täydentävät terveydenhuollon ammattilaisen sinulle antamia ohjeita. Ne eivät korvaa terveydenhuollon ammattilaisen antamaa koulutusta. Navina-suolihuuhtelujärjestelmä on tarkoitettu käytettäväksi vain lääkärin määräyksestä.",
      "Disse instruktioner er kun en påmindelse og skal ses som et supplement til det, sundhedspersonalet har fortalt dig. De erstatter ikke behovet for oplæring hos sundhedspersonale. Navina-systemet må kun bruges på recept.",
      "Disse instruksjonene er kun en oppsummering og kommer i tillegg til instruksjonene fra helsepersonell. De erstatter ikke behovet for opplæring sammen med helsepersonell. Navina System er kun for reseptbelagt bruk.",
    ),
    L(
      "Special care must be taken if you have or have had any of the following:",
      "Du måste vara särskilt försiktig om du har eller har haft något av följande:",
      "Ole erityisen varovainen, jos sinulla on tai on ollut jokin seuraavista:",
      "Særlig forsigtighed skal udvises, hvis du har eller har haft en af følgende lidelser:",
      "Du må være spesielt forsiktig hvis du har eller har hatt noe av følgende:",
    ),
    L(
      "Fecal impaction – If you are heavily constipated an initial clean out of the bowel must be performed before starting the irrigation treatment.",
      "Fekalom – om du har svår förstoppning måste en inledande tömning av tarmen genomföras innan du kan påbörja behandlingen.",
      "Ulosteen pakkautuminen – jos sinulla on vaikea ummetus, on tehtävä alustava suolen tyhjennys ennen suolihuuhteluhoidon aloittamista.",
      "Fækal påvirkning – hvis du er stærkt forstoppet, skal tarmene renses ud først, inden irrigationsbehandlingen påbegyndes.",
      "Obstipasjon – hvis du har alvorlig forstoppelse, må tarmen renses før irrigasjonsbehandlingen kan starte.",
    ),
    L(
      "Painful anorectal conditions – any condition which may cause pain or bleeding, e.g. anal fissure, anal fistula, third or fourth grade of hemorrhoids.",
      "Smärtsamma anorektala tillstånd – alla tillstånd som kan orsaka smärta eller blödning, däribland analfissur, analfistel eller hemorrojder av tredje eller fjärde graden.",
      "Kivuliaat peräaukon ja -suolen vaivat – mikä tahansa vaiva, joka voi aiheuttaa kipua tai verenvuotoa, esim. peräaukon haavauma, peräaukkofisteli, kolmannen tai neljännen asteen peräpukamat.",
      "Smertefulde anorektale lidelser – enhver tilstand, som giver smerte eller blødning, f.eks. anal fissur, anal fistel, 3. eller 4. grads hæmorider",
      "Smertefulle anorektale lidelser – alle typer lidelser som kan forårsake smerte eller blødning, f.eks. analfissur, analfistel eller hemoroider grad 3 eller 4.",
    ),
    L(
      "If you are at risk of autonomic dysreflexia (individuals with spinal cord injury at or above the sixth thoracic vertebra [T6]), supervised first irrigation with close follow-up is mandatory.",
      "Om du löper risk att drabbas av autonom dysreflexi (gäller personer med ryggmärgsskada vid eller ovanför sjätte thorakalkotan (T6)) är det obligatoriskt att utföra den första irrigeringen under tillsyn och med noggrann uppföljning.",
      "Jos sinulla on autonomisen dysrefleksian riski (henkilöt, joilla on selkäydinvamma kuudennen rintanikaman [T6] kohdalla tai sen yläpuolella), ensimmäinen huuhtelu on suoritettava valvotusti ja sitä on seurattava huolellisesti.",
      "Hvis du har risiko for autonom dysrefleksi (personer med rygmarvsskader ved eller over sjette thorakale ryghvirvel [T6]), er det obligatorisk med overvågning under første irrigation og tæt opfølgning.",
      "Hvis du er i risikogruppen for å få autonom dysrefleksi (personer med skade i ryggmargen ved eller over sjette brystvirvel [T6]), må den første irrigasjonen overvåkes, og det er nødvendig med tett oppfølging.",
    ),
    L(
      "Severe diverticulosis or previous diverticular abscess.",
      "Svår divertikulos eller tidigare divertikelabscess.",
      "Vaikea divertikuloosi tai aikaisempi divertikkelin aiheuttama märkäpesäke.",
      "Svær divertikulose eller tidligere byld i udposning på tarm.",
      "Alvorlig divertikulose eller tidligere divertikulær abscess.",
    ),
    L(
      "Irradiation therapy in the abdominal or pelvic region within 3 months or until cessation of proctitis.",
      "Strålbehandling i buk- eller bäckenregionen inom tre månader eller pågående proktit.",
      "Vatsan tai lantion alueen sädehoito 3 kuukauden sisällä tai peräsuolen tulehduksen loppumiseen saakka.",
      "Strålebehandling i mave- eller bækkenregionen inden for 3 måneder eller indtil ophør af proktitis.",
      "Strålebehandling i mage- eller bekkenregionen de siste 3 måneder eller til opphør av proktitt.",
    ),
    L(
      "Previous anal or colorectal surgery, close monitoring is recommended during initiation of therapy.",
      "Tidigare anal eller kolorektal operation, noggrann övervakning rekommenderas under behandlingsstart.",
      "Aiempi peräaukon tai paksu- ja peräsuolen leikkaus, tarkkaa seurantaa suositellaan hoidon aloittamisen aikana.",
      "Tidligere anal eller kolorektal operation – tæt overvågning anbefales under påbegyndelse af behandlingen.",
      "Tidligere anal eller kolorektal kirurgi – tett oppfølging anbefales under behandlingsstart.",
    ),
    L(
      "Previous major pelvic surgery, close monitoring is recommended during initiation of therapy.",
      "Tidigare större bäckenkirurgi, noggrann övervakning rekommenderas under behandlingsstart.",
      "Aiempi suuri lantion alueen leikkaus, tarkkaa seurantaa suositellaan hoidon aloittamisen aikana.",
      "Tidligere større bækkenoperationer – tæt overvågning anbefales under påbegyndelse af behandlingen.",
      "Tidligere større bekkenkirurgi – tett oppfølging anbefales under behandlingsstart.",
    ),
    L(
      "Changed stool pattern such as sudden diarrhea of unknown cause.",
      "Förändrat avföringsmönster, till exempel plötslig diarré av okänd anledning.",
      "Muuttunut ulosteen muoto, kuten tuntemattomasta syystä johtuva äkillinen ripuli.",
      "Ændret afføringsmønster såsom pludselig diarré af ukendt årsag.",
      "Endret avføringsmønster som plutselig diaré av ukjent årsak.",
    ),
    L(
      "Increased risk of haemorrhage or using anticoagulant therapy (not including aspirin or clopidogrel).",
      "Ökad risk för blödning och användning av blodförtunnande medel (omfattar inte acetylsalicylsyra eller klopidogrel).",
      "Suurentunut verenvuotoriski tai antikoagulanttihoidon käyttö (ei koske aspiriinia tai klopidogreeliä).",
      "Øget risiko for blødning eller brug af antikoagulerende lægemidler (dog ikke acetylsalicylsyre eller clopidogrel).",
      "Økt blødningsrisiko eller bruk av antikoagulerende midler (bortsett fra aspirin og klopidogrel).",
    ),
    L(
      "The Navina rectal catheter/cone is a single-use product. If reused, Wellspect cannot guarantee the functionality nor the safety of the product.",
      "Navina-rektalkatetern/-konan är en engångsprodukt. Om den återanvänds kan Wellspect inte garantera produktens funktion eller säkerhet.",
      "Navina-rektaalikatetri tai -kartio on kertakäyttöinen tuote. Jos sitä käytetään uudelleen, Wellspect ei voi taata tuotteen toimivuutta tai turvallisuutta.",
      "Navina-rektalkateteret/-keglen er kun til engangsbrug. Hvis det genbruges, kan Wellspect ikke garantere for produktets funktionalitet eller sikkerhed.",
      "Navina-rektalkateteret/-conen er et engangsprodukt. Hvis produktet brukes flere ganger, kan Wellspect ikke garantere at det kommer til å fungere som det skal, eller at det er trygt å bruke.",
    ),
    L(
      "Careful medical history and a digital rectal examination are mandatory.",
      "Det är obligatoriskt att lämna en detaljerad sjukdomshistoria och genomgå en manuell rektal undersökning.",
      "Sairaushistorian huolellinen selvitys ja tarkka digitaalinen peräsuolen tutkimus ovat pakollisia.",
      "Grundig sygehistorie og en digital rektalundersøgelse er obligatorisk.",
      "En grundig gjennomgang av sykehistorien og en digital rektal undersøkelse er obligatorisk.",
    ),
    L(
      "In the case of previous anal, colorectal or pelvic surgery, an endoscopy or comparable examination should be performed to exclude other additional disorders that would contraindicate the use of TAI.",
      "Om du har genomgått en operation i ändtarmsöppningen, ändtarmen, tjocktarmen eller bäckenet måste du genomgå endoskopi eller motsvarande undersökning så andra ytterligare sjukdomar som kan göra det olämpligt att använda TAI kan uteslutas.",
      "Jos käyttäjälle on aiemmin tehty peräaukon, paksu- ja peräsuolen tai lantion leikkaus, on tehtävä tähystys tai vastaava tutkimus, jotta voidaan sulkea pois muut lisävaivat, jotka voivat olla vasta-aihe suolihuuhtelulle.",
      "I tilfælde af tidligere analt eller kolorektalt indgreb eller bækkenoperation bør der udføres endoskopi eller lignende undersøgelse for at udelukke andre yderligere sygdomme, som vil kontraindicere brugen af TAI.",
      "Ved tidligere kirurgiske inngrep i endetarm / nederst i tykktarmen eller bekkenområdet bør det utføres en endoskopisk eller lignende undersøkelse for å utelukke andre lidelser som kan være en kontraindikasjon for TAI.",
    ),
    L(
      "The first irrigation should be performed under supervision of a healthcare professional.",
      "Den första irrigeringen ska utföras under övervakning av sjukvårdspersonal.",
      "Ensimmäinen huuhtelu on suoritettava terveydenhuollon ammattilaisen valvonnassa.",
      "Den første irrigation skal udføres under sundhedspersonalets overvågning.",
      "Den første irrigasjonen skal foretas under tilsyn av helsepersonell.",
    ),
    L(
      "Children shall be accompanied by an adult caregiver until the caregiver considers the child able to perform the procedure by themselves.",
      "Barn ska ha hjälp av en vuxen vårdgivare tills vårdgivaren anser att barnet klarar att utföra proceduren själv.",
      "Aikuisen henkilön on oltava lapsen vierellä toimenpiteessä, kunnes hän katsoo lapsen kykeneväksi suorittamaan huuhtelun itsenäisesti.",
      "Børn skal ledsages af en voksen omsorgsperson, indtil omsorgspersonen vurderer, at barnet selv er i stand til at udføre proceduren.",
      "Barn må få hjelp av en voksen omsorgsperson frem til omsorgspersonen vurderer at barnet kan utføre prosedyren selv.",
    ),
    L(
      "Only use Navina Irrigation Systems for its intended use, as described in this instruction manual.",
      "Navina Irrigeringssystem får endast användas på avsett sätt, enligt beskrivningen i denna bruksanvisning.",
      "Käytä Navina-suolihuuhtelujärjestelmää vain tässä käyttöoppaassa kuvattuun käyttötarkoitukseen.",
      "Anvend kun Navina-irrigationssystemer som beskrevet i denne brugsvejledning.",
      "Navina irrigasjonssystem må bare brukes til den tiltenkte bruken som beskrevet i denne brukerveiledningen.",
    ),
    L(
      "Navina Irrigation Systems is for a single user and should not be shared with other people.",
      "Navina Irrigeringssystem är endast avsett för en användare och ska inte delas med andra.",
      "Navina-suolihuuhtelujärjestelmä on tarkoitettu yhdelle käyttäjälle, eikä sitä pidä jakaa toisten kanssa.",
      "Navina-irrigationssystemer må kun anvendes af én bruger og bør ikke deles med andre.",
      "Navina irrigasjonssystem skal brukes av én bruker – flere personer må ikke bruke samme system.",
    ),
    L(
      "The Navina Catheter Regular is for adult use only.",
      "Navina-katetern regular är endast avsedd för vuxna.",
      "Regular-koon Navina-katetri on tarkoitettu vain aikuisten käyttöön.",
      "Navina-kateteret i normal størrelse (Regular) må kun anvendes af voksne.",
      "Navina-kateteret i regular størrelse er kun beregnet for voksne.",
    ),
    L(
      "Only use Wellspect’s original accessories. No modification of this system is allowed.",
      "Använd endast originaltillbehör från Wellspect. Ingen modifiering av detta system är tillåten.",
      "Käytä vain Wellspectin alkuperäisiä lisätarvikkeita. Järjestelmään ei saa tehdä muutoksia.",
      "Brug kun originalt tilbehør fra Wellspect. Det er ikke tilladt at foretage ændringer af dette system.",
      "Bruk bare originaltilbehør fra Wellspect. Ingen endring av dette systemet er tillatt.",
    ),
    L(
      "Check all components for wear or damage before usage. Do not use if damaged.",
      "Kontrollera att det inte finns slitage eller skador på någon av komponenterna innan du använder systemet. Skadade komponenter får inte användas.",
      "Tarkista kaikki komponentit kulumisen tai vikojen varalta ennen käyttöä. Niitä ei saa käyttää, jos ne ovat vahingoittuneet.",
      "Kontrollér alle komponenter for slitage og skader inden brug. Må ikke anvendes, hvis noget er beskadiget.",
      "Kontroller at ingen av komponentene er slitte eller skadde før bruk. Skadde komponenter må ikke brukes.",
    ),
    L(
      "There are no user-serviceable parts inside the Navina Classic Control Unit. Do not attempt to repair the Navina Classic Control Unit yourself.",
      "Användaren kan inte utföra service på delarna inuti Navina Classic-kontrollenheten. Försök aldrig reparera Navina Classic-kontrollenheten på egen hand.",
      "Navina Classic ‑ohjausyksikön sisällä ei ole käyttäjän huollettavissa olevia osia. Älä yritä korjata Navina Classic ‑ohjausyksikköä itse.",
      "Navina Classic-betjeningsenheden indeholder ingen dele, der skal serviceres af brugeren. Forsøg ikke selv at reparere Navina Classic-betjeningsenheden.",
      "Ingen deler i Navina Classic-kontrollenheten kan repareres. Du må ikke prøve å reparere Navina Classic-kontrollenheten selv.",
    ),
    L(
      "Store the Navina System out of reach of small children.",
      "Förvara Navina Systems utom räckhåll för småbarn.",
      "Säilytä Navina-suolihuuhtelujärjestelmä poissa pienten lasten ulottuvilta.",
      "Navina-systemet skal opbevares utilgængeligt for små børn.",
      "Navina-systemet må oppbevares utilgjengelig for barn.",
    ),
  ],
  emergencyWarning: L(
    "Seek medical care immediately if you experience severe or sustained abdominal pain, back pain or rectal bleeding during or after anal irrigation. Bowel perforation is a very rare (1 out of 500,000 irrigations or 0.0002%) yet extremely serious complication of TAI. It is a medical emergency and requires immediate medical attention. Symptoms of bowel perforation include severe or sustained abdominal or back pain or significant rectal bleeding (not just smearing of blood on the rectal catheter/cone which is very common and is not a concern).",
    "Sök omedelbart vård om du upplever svår eller ihållande smärta i magen eller ryggen eller rektalblödning under eller efter analirrigering. Tarmperforation är en mycket sällsynt (1 av 500 000 irrigeringar eller 0,0002 %) men oerhört allvarlig komplikation till TAI. Det är ett akut sjukdomstillstånd som kräver omedelbar vård. Symtom på tarmperforation är bland annat svår eller ihållande smärta i magen eller ryggen, alternativt betydande rektal blödning (inte bara spår av blod på rektalkatetern/konan vilket är mycket vanligt och inte en anledning till oro).",
    "Hakeudu lääkärin hoitoon heti, jos koet vaikeaa tai jatkuvaa vatsakipua, selkäkipua tai peräsuolen verenvuotoa anaalihuuhtelun aikana tai sen jälkeen. Suolen puhkeaminen on hyvin harvinainen (yksi 500 000:sta huuhtelusta, eli 0,0002 %) mutta erittäin vakava suolihuuhteluun liittyvä komplikaatio. Se on lääketieteellinen hätätilanne ja edellyttää välitöntä lääkärin hoitoa. Suolen puhkeamisen oireisiin kuuluu vaikea tai jatkuva vatsa- tai selkäkipu tai huomattava verenvuoto peräsuolesta (ei vain verijälkiä rektaalikatetrissa tai -kartiossa, mikä on normaalia, eikä siitä tarvitse huolestua).",
    "Søg omgående lægehjælp, hvis du oplever stærke eller vedvarende mavesmerter, rygsmerter eller rektal blødning under eller efter anal irrigation. Perforering af tarmen er en meget sjælden (1 ud af 500.000 irrigationer eller 0,0002 %), men en meget alvorlig komplikation i forbindelse med TAI. Det er en medicinsk nødsituation, som kræver øjeblikkelig lægehjælp. Symptomer på perforering af tarmen omfatter alvorlige eller vedvarende mave- eller rygsmerter eller betydelig rektal blødning (ikke kun blodpletter på rektalkateteret/keglen, som er meget almindeligt, og som ikke udgør et problem).",
    "Oppsøk lege øyeblikkelig hvis du opplever alvorlige eller vedvarende magesmerter, ryggsmerter eller blødning fra endetarmen under eller etter analirrigasjon. Perforasjon av tarm er en svært sjelden (1 av 500 000 irrigasjoner eller 0,0002 %), men ekstremt alvorlig komplikasjon av TAI. Det er en akuttmedisinsk tilstand og krever akuttmedisinsk tilsyn. Symptomer på perforasjon av tarmen er blant annet kraftige eller vedvarende mage- eller ryggsmerter eller kraftig blødning fra endetarmen (ikke bare blodflekker på rektalkateteret/-conen, som er svært vanlig, og som ikke gir grunn til bekymring).",
  ),
  warningSigns: [
    L(
      "Any serious adverse reaction occurring when using the Navina Irrigation Systems should be reported to the manufacturer and your local health authority.",
      "Eventuella allvarliga biverkningar som uppstår vid användning av Navina Irrigeringssystem ska rapporteras till tillverkaren och din lokala hälsovårdsmyndighet.",
      "Kaikki Navina-suolihuuhtelujärjestelmän käyttöön liittyvät vakavat haittavaikutukset tulee ilmoittaa valmistajalle ja paikalliselle terveysviranomaiselle.",
      "Enhver alvorlig bivirkning, der opstår ved brugen af Navina-irrigationssystemerne, skal rapporteres til producenten og de lokale sundhedsmyndigheder.",
      "Alle alvorlige bivirkninger som oppstår i forbindelse med bruk av Navina irrigasjonssystem, skal rapporteres til produsenten og lokale helsemyndigheter.",
    ),
  ],
};
