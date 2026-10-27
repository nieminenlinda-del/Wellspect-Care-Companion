import type { InstructionStep, LocalizedText } from "@/data/products";

/**
 * Step copy and pictures from the downloadable step-by-step guide PDFs.
 * Headings and sentences are the PDF text. Pictures are cropped from the
 * same booklets. Origo step 2 is one numbered step with three pictures,
 * so it is shown as 2A, 2B and 2C.
 */

export const ellePdfSteps: InstructionStep[] = [
  {
    title: {
      en: "Step 1: Wash Your Hands and Prepare",
      sv: "Steg 1: Tvätta händerna",
      fi: "Vaihe 1: Pese kätesi ja valmistaudu",
      da: "Trin 1: Vask dine hænder og gør dig klar.",
      no: "Steg 1: Vask hendene dine og gjør deg klar",
    },
    text: {
      en: "Wash your hands with soap and water, or a cleansing wipe, before and after catheterization.",
      sv: "Tvätta händerna med tvål och vatten innan och efter kateteriseringen.",
      fi: "Pese kätesi saippualla ja vedellä tai käytä puhdistuspyyhettä ennen katetrointia ja sen jälkeen.",
      da: "Vask dine hænder grundigt med vand og sæbe både før og efter kateteriseringen.",
      no: "Vask hendene dine med såpe og vann før og etter kateterisering.",
    },
    image: "/images/instructions/lofric-elle/guide/step-1.png",
  },
  {
    title: {
      en: "Step 2: Find the Urethra",
      sv: "Steg 2: Hitta urinrörsöppningen",
      fi: "Vaihe 2: Etsi virtsaputki",
      da: "Trin 2: Find urinrøret.",
      no: "Steg 2: Finn urinrørsåpningen",
    },
    text: {
      en: "Use a mirror if needed. Gently spread the labia with your non-dominant hand and lift slightly to locate the urethra.",
      sv: "Använd en spegel om det behövs. Sära försiktigt på blygdläpparna med din icke dominanta hand och lyft lite uppåt för att hitta urinrörsöppningen.",
      fi: "Käytä tarvittaessa peiliä. Levitä häpyhuulet varovasti ei-dominoivalla kädelläsi ja nosta hieman löytääksesi virtsaputken.",
      da: "Brug et spejl, hvis det er nødvendigt. Adskil kønslæberne med din ikke dominerende hånd, løft lidt opad, og lokalisér urinrørsåbningen.",
      no: "Bruk et speil om nødvendig. Spre kjønnsleppene forsiktig med din ikke dominante hånd og dra litt opp mot magen for å finne urinrøret.",
    },
    image: "/images/instructions/lofric-elle/guide/step-2.png",
  },
  {
    title: {
      en: "Step 3: Open the LoFric Elle Catheter and create the handle",
      sv: "Steg 3: Öppna LoFric Elle-katetern och fäst handtaget",
      fi: "Vaihe 3: Avaa LoFric Elle -katetri ja muodosta kahva",
      da: "Trin 3: Åben LoFric Elle kateteret og sæt håndtaget på.",
      no: "Steg 3: Åpne LoFric Elle og fest håndtaket",
    },
    text: {
      en: "Open the upper lid. Hold the catheter in one hand and gently bend the upper part to open. Pull the catheter out. Connect the case to the catheter with a gentle twist, make sure the arrow on the case points down.",
      sv: "Öppna det övre locket. Greppa katetern och böj försiktigt den övre delen för att öppna. Drag ut katetern ur behållaren. Fäst handtaget på katetern med en lätt vridning, kontrollera att pilen på handtaget pekar mot katetern.",
      fi: "Avaa korkki. Käytä molempia käsiä ja taivuta avataksesi. Vedä katetri ulos. Kierrä nestesäiliö kiinni katetriin umpinainen pohja alaspäin varmista, että nuoli osoittaa alaspäin.",
      da: "Bryd den øvre åbning. Frigør forsigtigt kateteret fra beholderen, bøj det let for at åbne. Sæt håndtaget på kateteret, sørg for at pilen på håndtaget peger mod kateteret. Drej forsigtigt til der høres et lille klik.",
      no: "Åpne det øvre lokket. Hold kateteret og bøy forsiktig den øvre delen for å åpne det. Trekk kateteret ut. Koble håndtaket til kateteret med en lett vridning, kontroller at pilen peker ned.",
    },
    image: "/images/instructions/lofric-elle/guide/step-3.png",
  },
  {
    title: {
      en: "Step 4: Insert the Catheter",
      sv: "Steg 4: För in katetern",
      fi: "Vaihe 4: Aloita katetrointi",
      da: "Trin 4: Indsæt kateteret.",
      no: "Steg 4: Før inn kateteret",
    },
    text: {
      en: "Tilt your pelvis upwards and spread your labia. Hold the handle with your dominant hand. Gently and slowly guide the catheter into the urethra.",
      sv: "Tippa ditt bäcken framåt, sära på blygdläpparna. Håll handtaget med din dominanta hand. För långsamt och försiktigt in katetern i urinröret.",
      fi: "Kallista lantiota hieman ylöspäin ja levitä häpyhuulet. Pidä kahvasta kiinni dominoivalla kädelläsi. Ohjaa katetri virtsaputkeen.",
      da: "Vip bækkenet lidt frem og skil kønslæberne. Hold i håndtaget med din dominerende hånd. Før forsigtigt kateteret ind i urinrøret.",
      no: "Tilt bekkenet oppover og spre kjønnsleppene. Hold i håndtaket med din dominante hånd. Før kateteret forsiktig og sakte inn i urinrøret.",
    },
    image: "/images/instructions/lofric-elle/guide/step-4.png",
  },
  {
    title: {
      en: "Step 5: Wait for Urine to Flow",
      sv: "Steg 5: Vänta tills urinen börjar rinna",
      fi: "Vaihe 5: Virtsarakon tyhjentäminen",
      da: "Trin 5: Vent på at urinen løber",
      no: "Steg 5: Vent til urinen begynner å renne",
    },
    text: {
      en: "Once urine starts to flow, the catheter is in the right place. Gently insert a little further to ensure it’s fully in your bladder.",
      sv: "När urinen börjar rinna är katetern på rätt plats. För försiktigt in katetern ytterligare någon cm för att säkerställa att den är tillräckligt långt in i urinblåsan.",
      fi: "Kun virtsa alkaa virrata, katetri on virtsarakossa. Vie katetria varovasti hieman syvemmälle varmistaaksesi, että molemmat virtsankeruuaukot ovat virtsarakossa.",
      da: "Så snart urinen løber, så er kateteret det rigtige sted. Skub gerne kateteret lidt længere op, for at sikre, at det er helt inde i blæren.",
      no: "Når urinen starter å renne, er kateteret på riktig plass. Før kateteret litt lenger inn for å sikre at det er langt nok inne i blæren.",
    },
    image: "/images/instructions/lofric-elle/guide/step-5.png",
  },
  {
    title: {
      en: "Step 6: Remove the Catheter",
      sv: "Steg 6: Dra ut katetern",
      fi: "Vaihe 6: Katetrin poistaminen",
      da: "Trin 6: Fjern kateteret",
      no: "Steg 6: Fjern kateteret",
    },
    text: {
      en: "When urine stops, slowly pull the catheter out. If more urine flows, pause and wait before continuing, so the bladder is fully empty.",
      sv: "När urinen slutar rinna, dra ut katetern långsamt. Om urin börjar rinna igen, vänta tills urinflödet upphör, för att säkerställa fullständig tömning.",
      fi: "Kun virtsantulo loppuu, vedä katetri hitaasti ulos. Jos virtsaa alkaa virrata uudelleen, odota, kunnes virtsantulo lakkaa kokonaan, jotta virtsarakko tyhjenee kokonaan. Poista katetri.",
      da: "Når der ikke kommer mere urin, trækkes kateteret forsigtigt ud. Hvis der kommer lidt mere urin, så vent til der ikke kommer mere, for at sikre, at blæren er helt tom.",
      no: "Når urinen stopper å renne, dra kateteret sakte ut. Om det kommer mer urin, vent litt før du fortsetter, så er du sikker på at blæren er helt tom.",
    },
    image: "/images/instructions/lofric-elle/guide/step-6.png",
  },
  {
    title: {
      en: "Step 7: Dispose or Recycle",
      sv: "Steg 7: Kasta eller återvinn",
      fi: "Vaihe 7: Katetrin hävittäminen",
      da: "Trin 7: Bortskaf eller genbrug.",
      no: "Steg 7: Kast eller gjenvinn",
    },
    text: {
      en: "Put the catheter back inside the container. Dispose, or carry it in your bag until disposal. Please note! The lower container is recyclable.",
      sv: "Sätt tillbaka katetern i den nedre behållaren. Kassera eller förvara den i din väska tills du kan slänga den. Vänligen notera! Behållaren är återvinningsbar som plastförpackning.",
      fi: "Laita katetri takaisin säiliöön. Hävitä se asianmukaisesti tai kuljeta mukanasi, kunnes voit hävittää sen.",
      da: "Læg kateteret tilbage i beholderen. Bortskaf det, eller tag det med dig. OBS! etuiet kan sorteres som hård plastik.",
      no: "Sett katetret tilbake i hylsen. Kast hele katetret eller putt det i vesken til du kan kaste det. Vær oppmerksom på at hylsen er resirkulerbar.",
    },
    image: "/images/instructions/lofric-elle/guide/step-7.png",
  },
];

export const elleProPdfSteps: InstructionStep[] = [
  {
    title: {
      en: "Step 1: Wash Your Hands and Prepare",
      sv: "Steg 1: Tvätta händerna",
      fi: "Vaihe 1: Pese kätesi ja valmistaudu",
      da: "Trin 1: Vask dine hænder og gør dig klar.",
      no: "Steg 1: Vask hendene dine og gjør deg klar",
    },
    text: {
      en: "Wash your hands with soap and water, or a cleansing wipe, before and after catheterization.",
      sv: "Tvätta händerna med tvål och vatten innan och efter kateteriseringen.",
      fi: "Pese kätesi saippualla ja vedellä tai käytä puhdistuspyyhettä ennen katetrointia ja sen jälkeen.",
      da: "Vask dine hænder grundigt med vand og sæbe både før og efter kateteriseringen.",
      no: "Vask hendene dine med såpe og vann før og etter kateterisering.",
    },
    image: "/images/instructions/lofric-elle-pro/guide/step-1.png",
  },
  {
    title: {
      en: "Step 2: Find the Urethra",
      sv: "Steg 2: Hitta urinrörsöppningen",
      fi: "Vaihe 2: Etsi virtsaputki",
      da: "Trin 2: Find urinrøret.",
      no: "Steg 2: Finn urinrørsåpningen",
    },
    text: {
      en: "Use a mirror if needed. Gently spread the labia with your non-dominant hand and lift slightly to locate the urethra.",
      sv: "Använd en spegel om det behövs. Sära försiktigt på blygdläpparna med din icke dominanta hand och lyft lite uppåt för att hitta urinrörsöppningen.",
      fi: "Käytä tarvittaessa peiliä. Levitä häpyhuulet varovasti ei-dominoivalla kädelläsi ja nosta hieman löytääksesi virtsaputken.",
      da: "Brug et spejl, hvis det er nødvendigt. Adskil kønslæberne med din ikke dominerende hånd, løft lidt opad, og lokalisér urinrørsåbningen.",
      no: "Bruk et speil om nødvendig. Spre kjønnsleppene forsiktig med din ikke dominante hånd og dra litt opp mot magen for å finne urinrøret.",
    },
    image: "/images/instructions/lofric-elle-pro/guide/step-2.png",
  },
  {
    title: {
      en: "Step 3: Open the LoFric Elle Pro Catheter and create the handle",
      sv: "Steg 3: Öppna LoFric Elle-katetern och fäst handtaget",
      fi: "Vaihe 3: Avaa LoFric Elle Pro -katetri ja muodosta kahva",
      da: "Trin 3: Åben LoFric Elle kateteret og sæt håndtaget på.",
      no: "Steg 3: Åpne LoFric Elle og fest håndtaket",
    },
    text: {
      en: "Open the upper lid. Hold the catheter in your hand and gently bend the upper part to open. Pull the catheter out. Connect the container to the catheter with a gentle twist, make sure the arrow on the container points down.",
      sv: "Öppna det övre locket. Greppa katetern och böj försiktigt den övre delen för att öppna. Drag ut katetern ur behållaren. Fäst handtaget på katetern med en lätt vridning, kontrollera att pilen på handtaget pekar mot katetern.",
      fi: "Avaa korkki. Käytä molempia käsiä ja taivuta avataksesi. Vedä katetri ulos. Kierrä nestesäiliö kiinni katetriin umpinainen pohja alaspäin varmista, että nuoli osoittaa alaspäin.",
      da: "Bryd den øvre åbning. Frigør forsigtigt kateteret fra beholderen, bøj det let for at åbne. Sæt håndtaget på kateteret, sørg for at pilen på håndtaget peger mod kateteret. Drej forsigtigt til der høres et lille klik.",
      no: "Åpne det øvre lokket. Hold kateteret og bøy forsiktig den øvre delen for å åpne det. Trekk kateteret ut. Koble håndtaket til kateteret med en lett vridning, kontroller at pilen peker ned.",
    },
    image: "/images/instructions/lofric-elle-pro/guide/step-3.png",
  },
  {
    title: {
      en: "Step 4: Insert the Catheter",
      sv: "Steg 4: För in katetern",
      fi: "Vaihe 4: Aloita katetrointi",
      da: "Trin 4: Indsæt kateteret.",
      no: "Steg 4: Før inn kateteret",
    },
    text: {
      en: "Tilt your pelvis upwards and spread your labia. Hold the handle with your dominant hand. Gently and slowly guide the catheter into the urethral opening.",
      sv: "Tippa ditt bäcken framåt, sära på blygdläpparna. Håll handtaget med din dominanta hand. För långsamt och försiktigt in katetern i urinröret.",
      fi: "Kallista lantiota hieman ylöspäin ja levitä häpyhuulet. Pidä kahvasta kiinni dominoivalla kädelläsi. Ohjaa katetri virtsaputkeen.",
      da: "Vip bækkenet lidt frem og skil kønslæberne. Hold i håndtaget med din dominerende hånd. Før forsigtigt kateteret ind i urinrøret.",
      no: "Tilt bekkenet oppover og spre kjønnsleppene. Hold i håndtaket med din dominante hånd. Før kateteret forsiktig og sakte inn i urinrøret.",
    },
    image: "/images/instructions/lofric-elle-pro/guide/step-4.png",
  },
  {
    title: {
      en: "Step 5: Wait for Urine to Flow",
      sv: "Steg 5: Vänta tills urinen börjar rinna",
      fi: "Step 5: Virtsarakon tyhjentäminen",
      da: "Trin 5: Vent på at urinen løber",
      no: "Steg 5: Vent til urinen begynner å renne",
    },
    text: {
      en: "Once urine starts to flow, insert slightly more to ensure a steady stream.",
      sv: "När urinen börjar rinna är katetern på rätt plats. För försiktigt in katetern ytterligare någon cm för att säkerställa att den är tillräckligt långt in i urinblåsan.",
      fi: "Kun virtsa alkaa virrata, työnnä hieman lisää varmistaaksesi tasaisen virtauksen.",
      da: "Så snart urinen løber, så er kateteret det rigtige sted. Skub gerne kateteret lidt længere op, for at sikre, at det er helt inde i blæren.",
      no: "Når urinen starter å renne, er kateteret på riktig plass. Før kateteret litt lenger inn for å sikre at det er langt nok inne i blæren.",
    },
    image: "/images/instructions/lofric-elle-pro/guide/step-5.png",
  },
  {
    title: {
      en: "Step 6: Remove the Catheter",
      sv: "Steg 6: Dra ut katetern",
      fi: "Vaihe 6: Katetrin poistaminen",
      da: "Trin 6: Fjern kateteret",
      no: "Steg 6: Fjern kateteret",
    },
    text: {
      en: "Wait until urine flow stops, then slowly withdraw the catheter.",
      sv: "När urinen slutar rinna, dra ut katetern långsamt.",
      fi: "Odota, kunnes virtsan virtaus loppuu ja vedä sitten katetri hitaasti ulos.",
      da: "Når der ikke kommer mere urin, trækkes kateteret forsigtigt ud.",
      no: "Når urinen stopper å renne, dra kateteret sakte ut.",
    },
    image: "/images/instructions/lofric-elle-pro/guide/step-6.png",
  },
  {
    title: {
      en: "Step 7: Dispose or Recycle",
      sv: "Steg 7: Kasta eller återvinn",
      fi: "Vaihe 7: Katetrin hävittäminen",
      da: "Trin 7: Bortskaf eller genbrug.",
      no: "Steg 7: Kast eller gjenvinn",
    },
    text: {
      en: "Put the catheter back inside the container. Dispose, or carry it in your bag until disposal. Please note! The lower container is recyclable.",
      sv: "Sätt tillbaka katetern i den nedre behållaren. Kassera eller förvara den i din väska tills du kan slänga den. Vänligen notera! Behållaren är återvinningsbar som plastförpackning.",
      fi: "Laita katetri takaisin säiliöön. Hävitä se asianmukaisesti tai kuljeta mukanasi, kunnes voit hävittää sen.",
      da: "Læg kateteret tilbage i beholderen. Bortskaf det, eller tag det med dig. OBS! etuiet kan sorteres som hård plastik.",
      no: "Sett katetret tilbake i hylsen. Kast hele katetret eller putt det i vesken til du kan kaste det. Vær oppmerksom på at hylsen er resirkulerbar.",
    },
    image: "/images/instructions/lofric-elle-pro/guide/step-7.png",
  },
];

export const origoProPdfSteps: InstructionStep[] = [
  {
    label: "1",
    title: {
      en: "Step 1 – Wash your hands and prepare",
      sv: "Steg 1 – Tvätta händerna",
      fi: "Vaihe 1 – Pese kätesi ja valmistaudu",
      da: "Trin 1 – Vask dine hænder og gør dig klar",
      no: "Trinn 1 – Vask hendene og forbered deg",
    },
    text: {
      en: "Wash your hands thoroughly with soap and water.",
      sv: "Tvätta händerna ordentligt med tvål och vatten.",
      fi: "Pese kätesi huolellisesti saippualla ja vedellä.",
      da: "Vask dine hænder grundigt med vand og sæbe.",
      no: "Vask hendene grundig med såpe og vann.",
    },
    image: "/images/instructions/lofric-origo-pro/guide/step-1.png",
  },
  {
    label: "2A",
    title: {
      en: "Step 2 – Prepare the catheter",
      sv: "Steg 2 – Förbered katetern",
      fi: "Vaihe 2 – Valmistele katetri",
      da: "Trin 2 – Forbered kateteret",
      no: "Trinn 2 – Forbered kateteret",
    },
    text: {
      en: "A. Squeeze to release the salt solution and the catheter is ready to use.",
      sv: "A. Kläm på påsen med saltlösningen så att vattnet rinner ut. Sedan är katetern redo att användas.",
      fi: "A. Purista vapauttaaksesi suolaliuos ja katetri on käyttövalmis.",
      da: "A. Klem på kateteret for at aktivere saltopløsningen, og kateteret er klar til brug.",
      no: "A. Klem for å frigjøre saltløsningen og kateteret er klar til bruk.",
    },
    image: "/images/instructions/lofric-origo-pro/guide/step-2a.png",
  },
  {
    label: "2B",
    text: {
      en: "B. Use the loop to pull down and open. Optional: Use the adhesive tab on the reverse side to attach the product to a dry, clean surface.",
      sv: "B. Använd öglan för att dra ner och öppna. Valfritt: Använd klisterfliken på baksidan för att fästa produkten på en torr ren yta.",
      fi: "B. Avaa vetämällä avausliuskan lenkin avulla alaspäin. Valinnaista: Voit ripustaa katetripakkauksen takaosan tarralapun avulla kuivalle ja puhtaalle pinnalle.",
      da: "B. Træk ned i løkken for at åbne. Valgfrit: Anvend den selvklæbende tape på bagsiden for at hænge produktet på en tør og ren overflade.",
      no: "B. Bruk løkken til å trekke ned og åpne. Valgfritt: Bruk den selvklebende fliken på baksiden til å feste produktet på en tørr og ren overflate.",
    },
    image: "/images/instructions/lofric-origo-pro/guide/step-2b.png",
  },
  {
    label: "2C",
    text: {
      en: "C. After opening, pinch and hold the sleeve grip while removing the catheter to automatically pull down the protective sleeve. If needed, pull the sleeve grip down fully to cover the catheter tube.",
      sv: "C. Efter öppning, nyp försiktigt och håll i hylsgreppet för att automatiskt dra ner skyddshylsan när katetern tas ut. Vid behov, dra ner hylsgreppet för att täcka katetern.",
      fi: "C. Avaamisen jälkeen purista varovasti ja pidä kiinni hygieniasuojassa olevasta asettimesta, jolloin hygieniasuoja automaattisesti asettuu katetrin letkuosan ympärille, kun otat katetrin pois pakkauksesta. Vaihtoehtoisesti voit nostaa katetrin pois pakkauksesta ja sen jälkeen vetää hygieniasuojan alas asti, niin että se asettuu katetrin letkuosan ympärille.",
      da: "C. Efter åbning, klem og hold forsigtigt på det fleksible greb for automatisk at trække beskyttelseshylsteret ned, når kateteret tages op. Træk om nødvendigt i hylsteret. Træk helt ned for at dække hele kateteret.",
      no: "C. Etter åpning, klem og hold øverst på hylsen imens du drar kateteret ut av pakken. Hylsen vil da automatisk dekke. Trekk i hylsen hvis nødvendig og juster den for å dekke hele kateterrøret.",
    },
    image: "/images/instructions/lofric-origo-pro/guide/step-2c.png",
  },
  {
    label: "3",
    title: {
      en: "Step 3 – Insert the catheter",
      sv: "Steg 3 – För in katetern",
      fi: "Vaihe 3 – Katetrin asettaminen",
      da: "Trin 3 – Indsæt kateteret",
      no: "Trinn 3 – Sett inn kateteret",
    },
    text: {
      en: "Lift the penis towards the stomach to straighten the urethra. Slowly insert the catheter into the urethra until urine starts to flow.",
      sv: "Lyft penis mot magen för att räta ut urinröret. För långsamt in katetern i urinröret.",
      fi: "Nosta penis yläviistoon virtsaputken suoristamiseksi. Vie katetri hitaasti virtsaputkeen, kunnes virtsa alkaa valua.",
      da: "Løft penis op mod maven for at rette urinrøret ud. Indsæt langsomt kateteret i urinrøret, indtil urinen begynder at strømme.",
      no: "Løft penis mot magen for å rette ut urinrøret. Sett kateteret sakte inn i urinrøret til urinen begynner å renne.",
    },
    image: "/images/instructions/lofric-origo-pro/guide/step-3.png",
  },
  {
    label: "4",
    title: {
      en: "Step 4 – Drain the urine",
      sv: "Steg 4 – Töm urinen",
      fi: "Vaihe 4 – Virtsarakon tyhjentäminen",
      da: "Trin 4 – Tømme blæren",
      no: "Trinn 4 – Tøm urinen",
    },
    text: {
      en: "Angle the penis down to empty the bladder of urine.",
      sv: "Vinkla penis nedåt när urinen börjar rinna genom katetern.",
      fi: "Suuntaa penis alaspäin virtsarakon tyhjentämiseksi.",
      da: "Hold penis nedad for at tømme blæren tom for urin.",
      no: "Pek penis nedover for å tømme blæren for urin.",
    },
    image: "/images/instructions/lofric-origo-pro/guide/step-4.png",
  },
  {
    label: "5",
    title: {
      en: "Step 5 – Remove the catheter",
      sv: "Steg 5 – Ta bort katetern",
      fi: "Vaihe 5 – Poista katetri",
      da: "Trin 5 – Fjern kateteret",
      no: "Trinn 5 – Fjern kateteret",
    },
    text: {
      en: "Wait until urine flow stops, then slowly withdraw the catheter.",
      sv: "Vänta tills urinflödet upphör och dra sedan långsamt ut katetern.",
      fi: "Odota, kunnes virtsan virtaus loppuu ja vedä sitten katetri hitaasti ulos.",
      da: "Vent til urinstrømmen stopper, og træk derefter langsomt kateteret ud.",
      no: "Vent til urinstrømmen stopper, trekk deretter kateteret sakte ut.",
    },
    image: "/images/instructions/lofric-origo-pro/guide/step-5.png",
  },
  {
    label: "6",
    title: {
      en: "Step 6 – Disposal",
      sv: "Steg 6 – Kassering",
      fi: "Vaihe 6 – Katetrin hävittäminen",
      da: "Trin 6 – Bortskaffelse",
      no: "Trinn 6 – Kassering",
    },
    text: {
      en: "Put the catheter back in the package and dispose appropriately (local regulations may vary).",
      sv: "Sätt tillbaka katetern i förpackningen och kassera den på lämpligt sätt (lokala bestämmelser kan variera).",
      fi: "Laita katetri takaisin pakkaukseen ja hävitä se asianmukaisesti (paikalliset määräykset voivat vaihdella).",
      da: "Læg kateteret tilbage i pakningen og bortskaf som almindeligt husholdningsaffald. (lokale regler kan variere).",
      no: "Putt kateteret tilbake i pakken og kast det i restavfallet (lokale forskrifter kan variere).",
    },
    image: "/images/instructions/lofric-origo-pro/guide/step-6.png",
  },
];

/** Salt-solution warning printed beside the Origo Pro steps. */
export const origoProPdfNote: LocalizedText = {
  en: "IMPORTANT INFORMATION Use only the salt solution included to wet the catheter. Do not place the catheter on paper or cloth as these materials can absorb the wet coating.",
  sv: "VIKTIG INFORMATION Använd enbart saltlösningen i förpackningen för att aktivera katetern. Placera inte katetern på papper eller tyg då dessa material kan absorbera den våta beläggningen.",
  fi: "TÄRKEÄÄ TIETOA Käytä katetrin kostuttamiseen vain pakkauksen mukana olevaa suolaliuosta. Älä aseta katetria paperin tai kankaan päälle, koska nämä materiaalit voivat imeä kostean pinnoitteen.",
  da: "VIGTIG INFORMATION Brug saltvandsopløsningen i posen til at aktivere kateterets overflade. Læg ikke kateteret på papir eller tekstiler, da disse materialer kan absorbere den glatte overfladebelægning.",
  no: "VIKTIG INFORMASJON Bruk bare den inkluderte saltløsningen til å fukte kateteret. Ikke plasser kateteret på papir eller klut da disse materialene kan absorbere det våte belegget.",
};

/** English Origo Sleeve steps from CID72641-USX-en-06-18-2026-B. */
export const sleeveEnPdfSteps: InstructionStep[] = [
  {
    label: "1",
    title: "Step 1 – Wash your hands and prepare",
    text: "Wash your hands thoroughly with soap and water.",
    image: "/images/instructions/lofric-origo-sleeve/guide/step-1.png",
  },
  {
    label: "2A",
    title: "Step 2 – Prepare the catheter",
    text: "A. Squeeze to release the salt solution and the catheter is ready to use.",
    image: "/images/instructions/lofric-origo-sleeve/guide/step-2a.png",
  },
  {
    label: "2B",
    text: "B. Use the loop to pull down and open. Optional: Use the adhesive tab on the reverse side to attach the product to a dry, clean surface.",
    image: "/images/instructions/lofric-origo-sleeve/guide/step-2b.png",
  },
  {
    label: "2C",
    text: "C. After opening, pinch and hold the sleeve grip while removing the catheter to automatically pull down the protective sleeve. If needed, pull the sleeve grip down fully to cover the catheter tube.",
    image: "/images/instructions/lofric-origo-sleeve/guide/step-2c.png",
  },
  {
    label: "3",
    title: "Step 3 – Insert the catheter",
    text: "Lift the penis towards the stomach to straighten the urethra. Slowly insert the catheter into the urethra until urine starts to flow.",
    image: "/images/instructions/lofric-origo-sleeve/guide/step-3.png",
  },
  {
    label: "4",
    title: "Step 4 – Drain the urine",
    text: "Angle the penis down to empty the bladder of urine.",
    image: "/images/instructions/lofric-origo-sleeve/guide/step-4.png",
  },
  {
    label: "5",
    title: "Step 5 – Remove the catheter",
    text: "Wait until urine flow stops, then slowly withdraw the catheter. If urine starts to flow again, wait until it has stopped to ensure complete bladder emptying. Then remove the catheter completely.",
    image: "/images/instructions/lofric-origo-sleeve/guide/step-5.png",
  },
  {
    label: "6",
    title: "Step 6 – Disposal",
    text: "Put the catheter back in the package and dispose appropriately (local regulations may vary).",
    image: "/images/instructions/lofric-origo-sleeve/guide/step-6.png",
  },
];
