/**
 * Navina Smart clinical IFU copy (navina-smart only).
 *
 * EN: 15-navina-smart-en.pdf (INSTRUCTIONS FOR USE)
 * SV: 17-navina-smart-sv.pdf (BRUKSANVISNING)
 * FI: 16-navina-smart-fi.pdf (KÄYTTÖOHJEET)
 * DA: 14-navina-smart-da.pdf (BRUGSVEJLEDNING)
 *
 * No Norwegian IFU was supplied. Navina Smart is already unavailable on
 * the Norwegian market. `no` keeps the existing Norwegian contraindication
 * lines and perforation warning. Every other `no` string mirrors Swedish.
 * That mirror is not a Norwegian translation.
 *
 * Clinical sections only. Numbered quick-guide steps, tube-connection, and
 * grip-ring instructions are not included. EMC test tables are not included.
 * Journal footnotes on the perforation statistic are omitted.
 * Storage is the control-unit storage temperature from the technical specification.
 */
type Localized = { en: string; sv: string; fi: string; da: string; no: string };

/**
 * `no` mirrors Swedish when this product has no Norwegian string for that line.
 * Pass `no` to keep an existing Norwegian string. There is no Norwegian Smart IFU.
 */
const L = (en: string, sv: string, fi: string, da: string, no: string = sv): Localized => ({
  en,
  sv,
  fi,
  da,
  no,
});

export const navinaSmartIfu = {
  indications: [
    L(
      "The Navina Systems is intended for Transanal Irrigation by instilling water up into the lower part of the colon through a rectal catheter.",
      "Navina Systems är avsett för transanal irrigering genom att vatten tillförs till nedre delen av tjocktarmen med hjälp av en rektalkateter.",
      "Navina Systems on tarkoitettu suolihuuhteluun, jossa vettä johdetaan paksusuolen alaosaan rektaalikatetrilla.",
      "Navina-systemerne er beregnet til transanal irrigation ved at tilføre vand til tyktarmens nederste del via et rektalkateter.",
    ),
    L(
      "The Navina Systems is indicated to help adults and children from 3 years who suffer from fecal incontinence, chronic constipation and/or time-consuming bowel management. By instilling water up into the lower part of the colon, the peristaltic muscles in the bowel can be triggered and start to evacuate the content of the lower colon and rectum.",
      "Navina Systems är avsedd att hjälpa vuxna och barn från 3 år som lider av avföringsinkontinens, kronisk förstoppning och/eller tidskrävande tarmskötsel. Genom att tillföra vatten till nedre delen av tjocktarmen kan man stimulera de peristaltiska musklerna i tarmen till att tömma innehållet i nedre delen av tjocktarmen och ändtarmen.",
      "Navina-suolihuuhtelujärjestelmä on tarkoitettu auttamaan ulosteinkontinenssista, kroonisesta ummetuksesta ja/tai aikaa vievästä suolen toimittamisesta kärsiviä aikuisia ja vähintään 3-vuotiaita lapsia. Kun paksusuolen alaosaan johdetaan vettä, suolen peristalttiset lihakset aktivoituvat ja alkavat tyhjentää paksusuolta ja peräsuolta.",
      "Navina-systemer har til formål at hjælpe voksne og børn fra 3-års alderen, der lider af fækal inkontinens, kronisk forstoppelse og/eller tidskrævende tarmpleje. Vand, der tilføres tyktarmens nederste del, kan sætte gang i de peristaltiske muskler i tarmen, så de begynder at tømme indholdet i den nederste del af tyktarmen og endetarmen.",
    ),
    L(
      "The objective of the treatment is to reduce symptoms of constipation and/or episodes of fecal incontinence.",
      "Målet med behandlingen är att minska symtom på förstoppning och/eller episoder av avföringsinkontinens.",
      "Hoidon tavoitteena on vähentää ummetusoireita ja/tai ulosteinkontinenssia.",
      "Formålet med behandlingen er at reducere symptomer på forstoppelse og/eller tilfælde af fækal inkontinens.",
    ),
  ],
  contraindicationsIntro: L(
    "Do NOT use Navina Systems if you have one or more of the following:",
    "Använd INTE Navina Systems om något eller några av följande tillstånd gäller för dig:",
    "ÄLÄ käytä Navina-suolihuuhtelujärjestelmää, jos sinulla on yksi tai useampi seuraavista vasta-aiheista:",
    "Brug IKKE Navina-systemer, hvis du har en eller flere af følgende lidelser:",
    "IKKE bruk Navina-systemer hvis du har en eller flere av følgende:",
  ),
  contraindications: [
    L(
      "Known anal or colorectal stenosis",
      "Känd anal eller kolorektal stenos.",
      "peräaukon tai paksu- ja peräsuolen ahtauma",
      "Kendt anal eller colorektal forsnævring",
      "Kjent anal eller kolorektal stenose",
    ),
    L(
      "Active inflammatory bowel disease",
      "Aktiv inflammatorisk tarmsjukdom.",
      "aktiivinen tulehduksellinen suolistotauti",
      "Aktiv inflammatorisk tarmsygdom",
      "Aktiv inflammatorisk tarmsykdom",
    ),
    L(
      "Acute diverticulitis",
      "Akut divertikulit.",
      "akuutti divertikuliitti",
      "Akut divertikulitis",
      "Akutt divertikulitt",
    ),
    L(
      "Colorectal cancer",
      "Kolorektal cancer.",
      "paksu- ja peräsuolen syöpä",
      "Colorektal cancer",
      "Kolorektal kreft",
    ),
    L(
      "Ischemic colitis",
      "Ischemisk kolit.",
      "iskeeminen koliitti",
      "Iskæmisk kolitis",
      "Iskemisk kolitt",
    ),
    L(
      "You are within three months of anal or colorectal surgery",
      "Du har genomgått anal eller kolorektal operation för mindre än tre månader sedan.",
      "aiempi peräaukon tai paksu- ja peräsuolen leikkaus alle 3 kuukautta sitten",
      "Du har fået foretaget anal eller kolorektal kirurgi inden for de seneste tre måneder",
      "Det har gått mindre enn tre måneder siden anal eller kolorektal kirurgi",
    ),
    L(
      "You are within 4 weeks of previous endoscopic polypectomy",
      "Du har genomgått endoskopisk polypektomi för mindre än 4 veckor sedan.",
      "aiempi tähystyksessä tehty polyypinpoistoleikkaus alle 4 viikkoa sitten",
      "Du har fået foretaget endoskopisk polypektomi inden for de seneste 4 uger",
      "Det har gått mindre enn 4 uker siden endoskopisk polypektomi",
    ),
    L("You are pregnant", "Du är gravid.", "olet raskaana.", "Du er gravid", "Du er gravid"),
    L(
      "As the list may not be exhaustive, healthcare professionals will always consider individual user factors as well.",
      "Den här listan är inte nödvändigtvis fullständig, och därför tar sjukvårdspersonalen även ställning till användarens individuella omständigheter.",
      "Koska luettelo ei välttämättä ole tyhjentävä, terveydenhuollon ammattilaiset ottavat aina huomioon myös yksilölliset tekijät.",
      "Da listen muligvis ikke er fuldstændig, tager behandlerne også altid individuelle brugerfaktorer i betragtning.",
    ),
  ],
  safety: [
    L(
      "These instructions are only a reminder and should be seen as complementary to the instructions given by your healthcare professional. They do not replace the need for training with a healthcare professional. Keep this instruction for further reference. Navina Irrigation Systems is for prescription use only.",
      "Följande anvisningar är bara avsedda att vara ett stöd för minnet och ska betraktas som ett komplement till de instruktioner som sjukvårdspersonalen har gett dig. De kan inte ersätta utbildning tillsammans med sjukvårdspersonal. Behåll den här bruksanvisningen som referens. Navina Irrigeringssystem är endast för användning enligt ordination.",
      "Nämä ohjeet ovat vain muistin avuksi ja täydentävät terveydenhuollon ammattilaisen sinulle antamia ohjeita. Ne eivät korvaa terveydenhuollon ammattilaisen antamaa koulutusta. Säilytä nämä ohjeet myöhempää käyttöä varten. Navina-huuhtelujärjestelmä on tarkoitettu käytettäväksi vain lääkärin määräyksestä.",
      "Disse instruktioner er kun en påmindelse og skal ses som et supplement til det, sundhedspersonalet har fortalt dig. De erstatter ikke behovet for oplæring hos sundhedspersonale. Opbevar denne brugsvejledning til senere brug. Navina-irrigationssystemer må kun bruges på recept.",
    ),
    L(
      "Special care must be taken if you have or have had any of the following:",
      "Du måste vara särskilt försiktig om du har eller har haft något av följande:",
      "Ole erityisen varovainen, jos sinulla on tai on ollut jokin seuraavista:",
      "Særlig forsigtighed skal udvises, hvis du har eller har haft en af følgende lidelser:",
    ),
    L(
      "Fecal impaction – If you are heavily constipated an initial clean out of the bowel must be performed before starting the irrigation treatment.",
      "Fekalom – om du har svår förstoppning måste en inledande tömning av tarmen genomföras innan du kan påbörja behandlingen.",
      "ulosteen pakkautuminen – jos sinulla on vaikea ummetus, on tehtävä alustava suolen tyhjennys ennen suolihuuhteluhoidon aloittamista",
      "Fækal påvirkning – hvis du er stærkt forstoppet, skal tarmene renses ud først, inden irrigationsbehandlingen påbegyndes.",
    ),
    L(
      "Painful anorectal conditions – any condition which may cause pain or bleeding, e.g. anal fissure, anal fistula, third or fourth grade of hemorrhoids.",
      "Smärtsamma anorektala tillstånd – alla tillstånd som kan orsaka smärta eller blödning, däribland analfissur, analfistel eller hemorrojder av tredje eller fjärde graden.",
      "kivuliaat peräaukon ja -suolen vaivat – mikä tahansa vaiva, joka voi aiheuttaa kipua tai verenvuotoa, esim. peräaukon haavauma, peräaukkofisteli, kolmannen tai neljännen asteen peräpukamat",
      "Smertefulde anorektale lidelser – enhver tilstand, som giver smerte eller blødning, f.eks. anal fissur, anal fistel, 3. eller 4. grads hæmorider",
    ),
    L(
      "If you are at risk of autonomic dysreflexia (individuals with spinal cord injury at or above the sixth thoracic vertebra [T6]), supervised first irrigation with close follow-up is mandatory.",
      "Om du löper risk att drabbas av autonom dysreflexi (gäller personer med ryggmärgsskada vid eller ovanför sjätte thorakalkotan (T6)) är det obligatoriskt att utföra den första irrigeringen under tillsyn och med noggrann uppföljning.",
      "Jos sinulla on autonomisen dysrefleksian riski (henkilöt, joilla on selkäydinvamma kuudennen rintanikaman [T6] kohdalla tai sen yläpuolella), ensimmäinen huuhtelu on suoritettava valvotusti ja sitä on seurattava huolellisesti.",
      "Hvis du har risiko for autonom dysrefleksi (personer med rygmarvsskader ved eller over sjette thorakale ryghvirvel [T6]), er det obligatorisk med overvågning under første irrigation og tæt opfølgning.",
    ),
    L(
      "Severe diverticulosis or previous diverticular abscess.",
      "Svår divertikulos eller tidigare divertikelabscess.",
      "vaikea divertikuloosi tai aikaisempi divertikkelin aiheuttama märkäpesäke",
      "Svær divertikulose eller tidligere byld i udposning på tarm.",
    ),
    L(
      "Irradiation therapy in the abdominal or pelvic region within 3 months or until cessation of proctitis.",
      "Strålbehandling i buk- eller bäckenregionen inom tre månader eller pågående proktit.",
      "vatsan tai lantion alueen sädehoito 3 kuukauden sisällä tai peräsuolen tulehduksen loppumiseen saakka",
      "Strålebehandling i mave- eller bækkenregionen inden for 3 måneder eller indtil ophør af proktitis.",
    ),
    L(
      "Previous anal or colorectal surgery, close monitoring is recommended during initiation of therapy.",
      "Tidigare anal eller kolorektal operation, noggrann övervakning rekommenderas under behandlingsstart.",
      "aiempi peräaukon tai paksu- ja peräsuolen leikkaus, tarkkaa seurantaa suositellaan hoidon aloittamisen aikana",
      "Tidligere anal eller kolorektal operation – tæt overvågning anbefales under påbegyndelse af behandlingen.",
    ),
    L(
      "Previous major pelvic surgery, close monitoring is recommended during initiation of therapy.",
      "Tidigare större bäckenkirurgi, noggrann övervakning rekommenderas under behandlingsstart.",
      "aiempi suuri lantion alueen leikkaus, tarkkaa seurantaa suositellaan hoidon aloittamisen aikana",
      "Tidligere større bækkenoperationer – tæt overvågning anbefales under påbegyndelse af behandlingen.",
    ),
    L(
      "Changed stool pattern such as sudden diarrhea of unknown cause.",
      "Förändrat avföringsmönster, till exempel plötslig diarré av okänd anledning.",
      "muuttunut ulosteen muoto, kuten tuntemattomasta syystä johtuva äkillinen ripuli",
      "Ændret afføringsmønster såsom pludselig diarré af ukendt årsag.",
    ),
    L(
      "Increased risk of hemorrhage or using anticoagulant therapy (not including aspirin or clopidogrel).",
      "Ökad risk för blödning och användning av blodförtunnande medel (omfattar inte acetylsalicylsyra eller klopidogrel).",
      "suurentunut verenvuotoriski tai antikoagulanttihoidon käyttö (ei koske aspiriinia tai klopidogreeliä).",
      "Øget risiko for blødning eller brug af antikoagulerende lægemidler (dog ikke acetylsalicylsyre eller clopidogrel).",
    ),
    L(
      "The Navina rectal catheter/cone is a single use product. If reused, Wellspect cannot guarantee the functionality nor the safety of the product.",
      "Navina-rektalkatetern/-konan är en engångsprodukt. Om den återanvänds kan Wellspect inte garantera produktens funktion eller säkerhet.",
      "Navina-rektaalikatetri tai -kartio on kertakäyttöinen tuote. Jos sitä käytetään uudelleen, Wellspect ei voi taata tuotteen toimivuutta tai turvallisuutta.",
      "Navina-rektalkateteret/-keglen er kun til engangsbrug. Hvis det genbruges, kan Wellspect ikke garantere for produktets funktionalitet eller sikkerhed.",
    ),
    L(
      "Careful medical history and a digital rectal examination are mandatory.",
      "Det är obligatoriskt att lämna en detaljerad sjukdomshistoria och genomgå en manuell rektal undersökning.",
      "Sairaushistorian huolellinen selvitys ja tarkka digitaalinen peräsuolen tutkimus ovat pakollisia.",
      "Grundig sygehistorie og en digital rektalundersøgelse er obligatorisk.",
    ),
    L(
      "In the case of previous anal, colorectal or pelvic surgery, an endoscopy or comparable examination should be performed to exclude other additional disorders that would contraindicate the use of TAI.",
      "Om du har genomgått en operation i ändtarmsöppningen, ändtarmen, tjocktarmen eller bäckenet måste du genomgå endoskopi eller motsvarande undersökning så andra ytterligare sjukdomar som kan göra det olämpligt att använda TAI kan uteslutas.",
      "Jos käyttäjälle on aiemmin tehty peräaukon, paksu- ja peräsuolen tai lantion leikkaus, on tehtävä tähystys tai vastaava tutkimus, jotta voidaan sulkea pois muut lisävaivat, jotka voivat olla vasta-aihe suolihuuhtelulle.",
      "I tilfælde af tidligere analt eller kolorektalt indgreb eller bækkenoperation bør der udføres endoskopi eller lignende undersøgelse for at udelukke andre yderligere sygdomme, som vil kontraindicere brugen af TAI.",
    ),
    L(
      "The first irrigation should be performed under supervision of a healthcare professional.",
      "Den första irrigeringen ska utföras under övervakning av sjukvårdspersonal.",
      "Ensimmäinen huuhtelu on suoritettava terveydenhuollon ammattilaisen valvonnassa.",
      "Den første irrigation skal udføres under sundhedspersonalets overvågning.",
    ),
    L(
      "Children shall be accompanied by an adult caregiver until the caregiver considers the child able to perform the procedure by themselves.",
      "Barn ska ha hjälp av en vuxen vårdgivare tills vårdgivaren anser att barnet klarar att utföra proceduren själv.",
      "Aikuisen henkilön on oltava lapsen vierellä toimenpiteessä, kunnes hän katsoo lapsen kykeneväksi suorittamaan huuhtelun itsenäisesti.",
      "Børn skal ledsages af en voksen omsorgsperson, indtil omsorgspersonen vurderer, at barnet selv er i stand til at udføre proceduren.",
    ),
    L(
      "Only use Navina Irrigation Systems for its intended use, as described in this instruction manual.",
      "Navina Irrigeringssystem får endast användas på avsett sätt, enligt beskrivningen i denna bruksanvisning.",
      "Käytä Navina-suolihuuhtelujärjestelmää vain tässä käyttöoppaassa kuvattuun käyttötarkoitukseen.",
      "Anvend kun Navina-irrigationssystemer som beskrevet i denne brugsvejledning.",
    ),
    L(
      "Navina Irrigation Systems is for a single user and should not be shared with other people.",
      "Navina Irrigeringssystem är endast avsett för en användare och ska inte delas med andra.",
      "Navina-suolihuuhtelujärjestelmä on tarkoitettu yhdelle käyttäjälle, eikä sitä pidä jakaa toisten kanssa.",
      "Navina-irrigationssystemer må kun anvendes af én bruger og bør ikke deles med andre.",
    ),
    L(
      "The Navina Catheter Regular is for adult use only.",
      "Navina-katetern regular är endast avsedd för vuxna.",
      "Regular-koon Navina-katetri on tarkoitettu vain aikuisten käyttöön.",
      "Navina-kateteret i normal størrelse (Regular) må kun anvendes af voksne.",
    ),
    L(
      "Only use Wellspect’s original accessories. No modification of this system is allowed.",
      "Använd endast originaltillbehör från Wellspect. Ingen modifiering av detta system är tillåten.",
      "Käytä vain Wellspectin alkuperäisiä lisätarvikkeita. Järjestelmään ei saa tehdä muutoksia.",
      "Brug kun originalt tilbehør fra Wellspect. Det er ikke tilladt at foretage ændringer af dette system.",
    ),
    L(
      "Check all components for wear or damage before usage. Do not use if damaged.",
      "Kontrollera att det inte finns slitage eller skador på någon av komponenterna innan du använder systemet. Skadade komponenter får inte användas.",
      "Tarkista kaikki komponentit kulumisen tai vikojen varalta ennen käyttöä. Niitä ei saa käyttää, jos ne ovat vahingoittuneet.",
      "Kontrollér alle komponenter for slitage og skader inden brug. Må ikke anvendes, hvis noget er beskadiget.",
    ),
    L(
      "There are no user-serviceable parts inside the Navina Smart Control Unit. Do not attempt to repair the Navina Smart Control Unit yourself.",
      "Användaren kan inte utföra service på delarna inuti Navina Smart-kontrollenheten. Försök aldrig reparera Navina Smart-kontrollenheten på egen hand.",
      "Navina Smart -ohjausyksikön sisällä ei ole käyttäjän huollettavissa olevia osia. Älä yritä korjata Navina Smart -ohjausyksikköä itse.",
      "Navina Smart-betjeningsenheden indeholder ingen dele, der skal serviceres af brugeren. Forsøg ikke selv at reparere Navina Smart-betjeningsenheden.",
    ),
    L(
      "Store the Navina Irrigation System out of reach of small children.",
      "Förvara Navina Irrigation System utom räckhåll för småbarn.",
      "Säilytä Navina-huuhtelujärjestelmä poissa pienten lasten ulottuvilta.",
      "Navina-irrigationssystemet skal opbevares utilgængeligt for små børn.",
    ),
    L(
      "Do not store the Navina Smart Control Unit in direct sunlight.",
      "Komponenterna i Navina Smart-kontrollenheten får inte förvaras i direkt solljus.",
      "Älä säilytä Navina Smart -ohjausyksikköä suorassa auringonvalossa.",
      "Navina Smart-betjeningsenheden må ikke opbevares i direkte sollys.",
    ),
    L(
      "Do not turn off the Navina Smart Control Unit during irrigation. The Navina Smart Control Unit should not be turned off until all tubes are disconnected from the control unit.",
      "Stäng aldrig av Navina Smart-kontrollenheten under pågående irrigering. Navina Smart-kontrollenheten får inte stängas av förrän alla slangar är bortkopplade från kontrollenheten.",
      "Älä katkaise Navina Smart -ohjausyksikön virtaa huuhtelun aikana. Navina Smart -ohjausyksikön virtaa ei pidä katkaista, ennen kuin kaikki letkut on irrotettu ohjausyksiköstä.",
      "Sluk ikke for Navina Smart-betjeningsenheden under irrigation. Navina Smart-betjeningsenheden må først slukkes, når alle slanger er afmonteret fra betjeningsenheden.",
    ),
    L(
      "When using electrical devices, basic safety precautions should always be followed:",
      "Följande grundläggande säkerhetsåtgärder ska alltid vidtas vid användning av elektriska apparater:",
      "Sähkölaitteita käytettäessä on aina noudatettava turvallisuuteen liittyviä perusvarotoimia:",
      "Ved brug af elektrisk udstyr skal de grundlæggende sikkerhedsregler altid følges:",
    ),
    L(
      "Make sure to start using the Navina Smart Control Unit by the latest date indicated on the package label.",
      "Se till att börja använda Navina Smart-kontrollenheten senast på det datum som står på etiketten på förpackningen.",
      "Muista aloittaa Navina-ohjausyksikön käyttäminen pakkauksen etiketissä ilmoitettuun viimeiseen päivämäärään mennessä.",
      "Sørg for at tage Navina Smart-betjeningsenheden i brug senest på den dato, der er angivet på pakkens etiket.",
    ),
    L(
      "Make sure the voltage of the power adapter is compatible with the power source.",
      "Kontrollera att strömadapterns volttal är kompatibelt med strömkällan.",
      "Varmista, että virtasovittimen jännite on yhteensopiva virtalähteen kanssa.",
      "Sørg for, at strømadapterens spænding er kompatibel med strømkilden.",
    ),
    L(
      "Always unplug electrical devices immediately after use.",
      "Dra alltid ur sladden till elektriska apparater så snart du är färdig med dem.",
      "Irrota sähkölaitteet virtalähteestä aina välittömästi käytön jälkeen.",
      "Træk altid stikket til elektrisk udstyr ud umiddelbart efter brug.",
    ),
    L(
      "Keep the power adapter and the cable away from heated surfaces.",
      "Strömadaptern får inte förvaras i närheten av varma ytor.",
      "Pidä virtasovitin ja kaapeli pois kuumien pintojen lähettyviltä.",
      "Læg ikke strømadapteren og kablet på opvarmede flader.",
    ),
    L(
      "Never operate an electrical device if any part of it is damaged, if it is not working properly or has been dropped into water.",
      "Använd aldrig en elektrisk apparat om någon del av den är skadad, om den inte fungerar som den ska eller om den har tappats i vatten.",
      "Älä käytä sähkölaitetta, jos jokin sen osa on vaurioitunut, jos se ei toimi kunnolla tai jos se on pudonnut veteen.",
      "Brug aldrig elektrisk udstyr, hvis nogen del af det er beskadiget, hvis det ikke fungerer korrekt, eller hvis det er blevet tabt ned i vand.",
    ),
    L(
      "Do not spray or pour liquid onto the power adapter.",
      "Vatten får inte sprutas eller hällas på strömadaptern.",
      "Älä suihkuta tai kaada nestettä virtasovittimeen.",
      "Sprøjt eller hæld ikke væske på strømadapteren.",
    ),
    L(
      "Do not use the power adapter outdoors.",
      "Strömadaptern får inte användas utomhus.",
      "Älä käytä virtasovitinta ulkotiloissa.",
      "Brug ikke strømadapteren udendørs.",
    ),
    L(
      "Do not use the power adapter in the bathroom.",
      "Strömadaptern får inte användas i badrummet.",
      "Älä käytä virtasovitinta kylpyhuoneessa.",
      "Brug ikke strømadapteren på badeværelset.",
    ),
    L(
      "Do not connect the Navina Smart Control Unit to any other equipment than the supplied power adapter.",
      "Anslut inte Navina Smart-kontrollenheten till någon annan utrustning än den medföljande strömadaptern.",
      "Älä yhdistä Navina Smart \u2011ohjausyksikköä muuhun laitteeseen kuin toimitettuun virtasovittimeen.",
      "Navina Smart-betjeningsenheden må ikke sluttes til andet udstyr end den medfølgende strømadapter.",
    ),
    L(
      "Use only the accompanying power adapter and cable to charge the Navina Smart Control Unit.",
      "Använd endast den medföljande strömadaptern och kabeln för att ladda ned Navina Smart-kontrollenheten.",
      "Käytä vain mukana toimitettua virtasovitinta ja kaapelia Navina Smart \u2011ohjausyksikön lataamiseen.",
      "Brug kun den medfølgende strømadapter og det medfølgende kabel til at oplade Navina Smart-betjeningsenheden.",
    ),
    L(
      "No modification of this equipment is allowed.",
      "Ingen modifiering av denna utrustning är tillåten.",
      "Laitteeseen ei saa tehdä muutoksia.",
      "Det er ikke tilladt at foretage ændringer af dette udstyr.",
    ),
    L(
      "Portable radio frequency communications equipment (including peripherals such as antenna cables and external antennas) should be used no closer than 30 cm (12 inches) to any part of the Navina Smart Control Unit, including cables specified by the manufacturer, when using Navina Smart. Otherwise, it could result in degradation of the performance of this equipment.",
      "Bärbar radiofrekvenskommunikationsutrustning (även kringutrustning som antennkablar och externa antenner) ska placeras minst 30 cm från alla delar av Navina Smart-kontrollenheten, inklusive de kablar som specificeras av tillverkaren, när du använder Navina Smart. Om inte detta görs kan utrustningens prestanda försämras.",
      "Kannettavia radiotaajuusviestintälaitteita (mukaan lukien oheislaitteet, kuten antennikaapelit ja ulkoiset antenni) ei saa käyttää alle 30 cm:n (12 tuuman) päässä mistään Navina Smart \u2011ohjausyksikön osasta tai valmistajan määräämistä kaapeleista, kun Navina Smartia käytetään. Muussa tapauksessa seurauksena voi olla tämän laitteen toimintakyvyn lasku.",
      "Bærbart radiofrekvenskommunikationsudstyr (herunder perifere enheder som antennekabler og eksterne antenner) må ikke anvendes nærmere end 30 cm (12 tommer) på Navina Smart-betjeningsenheden og dens dele, herunder kabler specificeret af producenten, når Navina Smart er i brug. Ellers kan det medføre, at dette udstyrs ydeevne bliver forringet.",
    ),
    L(
      "Use of any other power adaptor or cable other than those provided could result in damages to the product, increased electromagnetic emissions or decreased electromagnetic immunity of this equipment and result in improper operation.",
      "Användning av någon annan typ av strömadapter eller kabel som inte medföljer kan leda till skador på produkten, ökad elektromagnetisk strålning eller minskad elektromagnetisk immunitet för utrustningen, vilket i sin tur kan leda till driftfel.",
      "Muun kuin valmistajan toimittaman virtasovittimen tai kaapelin käyttö voi aiheuttaa laitteen vikaantumisen, sähkömagneettisten häiriöiden lisääntymisen tai tämän laitteen sähkömagneettisen suojauksen huononemisen ja johtaa virheelliseen toimintaan.",
      "Brug af en anden strømadapter eller et andet kabel end de medfølgende kan medføre skader på produktet, øget elektromagnetisk emission eller nedsat elektromagnetisk immunitet for dette udstyr og medføre forkert betjening.",
    ),
    L(
      "After transportation/storage, allow the Navina Smart Control Unit to reach the operating temperature before use. This can take up to 60 minutes.",
      "Efter transport/förvaring ska Navina Smart-kontrollenheten ges tid att nå driftstemperatur före användning. Detta kan ta upp till 60 minuter.",
      "Anna Navina Smart -ohjausyksikön saavuttaa käyttölämpötila ennen sen käyttämistä kuljetuksen/säilytyksen jälkeen. Tämä voi kestää enintään 60 minuuttia.",
      "Efter transport/opbevaring skal Navina Smart-betjeningsenheden nå driftstemperatur, inden den bruges. Dette kan tage op til 60 minutter.",
    ),
    L(
      "Use of this equipment adjacent to or stacked with other equipment should be avoided because it could result in improper operation. If such use is necessary, this equipment and the other equipment should be observed to verify that they are operating normally.",
      "Undvik att använda eller förvara denna utrustning tillsammans med annan utrustning eftersom det kan leda till driftfel. Om det är nödvändigt att använda utrustningen tillsammans med annan utrustning ska både denna och den andra utrustningen observeras med avseende på normal drift.",
      "Tämän laitteen käyttöä muiden laitteiden vieressä tai päällekkäin muiden laitteiden kanssa on vältettävä, sillä se voi johtaa virheelliseen toimintaan. Jos tällainen käyttö on välttämätöntä, tätä laitetta ja muita laitteita on tarkkailtava, jotta niiden normaali toiminta voidaan varmistaa.",
      "Brug af dette udstyr ved siden af eller stablet sammen med andet udstyr bør undgås, da det kan medføre fejlfunktion. Hvis en sådan brug er nødvendig, skal dette udstyr og det andet udstyr overvåges for at kontrollere, at begge dele fungerer normalt.",
    ),
    L(
      "If the warnings above are not honored, the following malfunctions can occur: The balloon might get too large. Air can be pumped into the colon. The balloon might not be able to fully deflate.",
      "Om ovanstående varningar inte följs kan följande driftfel uppstå: Ballongen kan bli för stor. Luft kan pumpas in i tjocktarmen. Det kanske inte går att tömma ballongen helt.",
      "Jos edellä annettuja varoituksia ei noudateta, voi ilmetä seuraavia toimintahäiriöitä: Ballonki voi kasvaa liian suureksi. Saatat pumpata ilmaa paksusuoleen. Ballonki ei ehkä pääse täyttymään täysin.",
      "Hvis ovenstående advarsler ikke efterkommes, kan følgende fejlfunktioner forekomme: Ballonen kan blive for stor. Der kan blive pumpet luft ind i tyktarmen. Ballonen kan muligvis ikke tømmes helt for luft.",
    ),
  ],
  emergencyWarning: L(
    "Seek medical care immediately if you experience severe or sustained abdominal pain, back pain or rectal bleeding during or after anal irrigation. Bowel perforation is a very rare (1 out of 500,000 irrigations or 0.0002%) yet extremely serious complication of TAI. It is a medical emergency and requires immediate medical attention. Symptoms of bowel perforation include severe or sustained abdominal or back pain or significant rectal bleeding (not just smearing of blood on the rectal catheter/cone which is very common and is not a concern).",
    "Sök omedelbart vård om du upplever svår eller ihållande smärta i magen eller ryggen eller rektalblödning under eller efter analirrigering. Tarmperforation är en mycket sällsynt (1 av 500 000 irrigeringar eller 0,0002 %) men oerhört allvarlig komplikation till TAI. Det är ett akut sjukdomstillstånd som kräver omedelbar läkarvård. Symtom på tarmperforation är bland annat svår eller ihållande smärta i magen eller ryggen, alternativt betydande rektal blödning (inte bara spår av blod på rektalkatetern/konan vilket är mycket vanligt och inte en anledning till oro).",
    "Hakeudu lääkärin hoitoon heti, jos koet vaikeaa tai jatkuvaa vatsakipua, selkäkipua tai peräsuolen verenvuotoa anaalihuuhtelun aikana tai sen jälkeen. Suolen puhkeaminen on hyvin harvinainen (yksi 500 000:sta huuhtelusta, eli 0,0002 %) mutta erittäin vakava suolihuuhteluun liittyvä komplikaatio. Se on lääketieteellinen hätätilanne ja edellyttää välitöntä lääkärin hoitoa. Suolen puhkeamisen oireisiin kuuluu vaikea tai jatkuva vatsa- tai selkäkipu tai huomattava verenvuoto peräsuolesta (ei vain verijälkiä rektaalikatetrissa tai -kartiossa, mikä on normaalia, eikä siitä tarvitse huolestua).",
    "Søg omgående lægehjælp, hvis du oplever stærke eller vedvarende mavesmerter, rygsmerter eller rektal blødning under eller efter anal irrigation. Perforering af tarmen er en meget sjælden (1 ud af 500.000 irrigationer eller 0,0002 %), men en meget alvorlig komplikation i forbindelse med TAI. Det er en medicinsk nødsituation, som kræver øjeblikkelig lægehjælp. Symptomer på perforering af tarmen omfatter alvorlige eller vedvarende mave- eller rygsmerter eller betydelig rektal blødning (ikke kun blodpletter på rektalkateteret/keglen, som er meget almindeligt, og som ikke udgør et problem).",
    "Oppsøk lege umiddelbart hvis du får sterke eller vedvarende magesmerter, ryggsmerter eller blødning fra endetarmen under eller etter anal irrigasjon. Tarmperforasjon er en svært sjelden (1 av 500 000 irrigasjoner eller 0,0002 %), men ekstremt alvorlig komplikasjon ved TAI. Det er en medisinsk nødsituasjon og krever umiddelbar legehjelp. Symptomer på tarmperforasjon er sterke eller vedvarende mage- eller ryggsmerter eller betydelig blødning fra endetarmen (ikke bare litt blod på rektalkateteret/konusen, som er svært vanlig og ikke gir grunn til bekymring).",
  ),
  warningSigns: [
    L(
      "Any serious adverse reaction occurring when using the Navina Irrigation Systems should be reported to the manufacturer and your local health authority.",
      "Eventuella allvarliga biverkningar som uppstår vid användning av Navina Irrigeringssystem ska rapporteras till tillverkaren och din lokala hälsovårdsmyndighet.",
      "Kaikki Navina-suolihuuhtelujärjestelmän käyttöön liittyvät vakavat haittavaikutukset tulee ilmoittaa valmistajalle ja paikalliselle terveysviranomaiselle.",
      "Enhver alvorlig bivirkning, der opstår ved brugen af Navina-irrigationssystemerne, skal rapporteres til producenten og de lokale sundhedsmyndigheder.",
    ),
  ],
  storage: L(
    "Store in a dry place at room temperature (+15 to +25 °C)",
    "Förvaras på en torr plats i rumstemperatur (+15 till +25 °C)",
    "Säilytetään kuivassa paikassa huoneenlämmössä (+15–25 °C).",
    "Opbevares på et tørt sted ved stuetemperatur (+15 til +25 °C).",
  ),
};
