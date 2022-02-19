import React from "react"
import { Typography } from "@mui/material"

import Article from "../components/Article"
import ArticleImage from "../components/ArticleImage"
import Gallery from "../components/Gallery"

import sonda from "/public/images/gradisce/sonda.jpg"
import zid from "/public/images/gradisce/zid.jpg"
import obzidje from "/public/images/gradisce/obzidje.jpg"
import PdfButton from "../components/PdfButton"

const Gradisce = () => {
    return <Gallery>
        <Article title="Prazgodovinsko gradišče">
            <Typography variant="body1" paragraph>
                V vseh obdobjih človekove prisotnosti na naših tleh so osnovne
                komunikacije ter obenem ugoden prostor za poselitev in bivanje
                predstavljale rečne doline. Pritoki in sotočja so bili še
                posebej privlačni, saj so križišča poti točke z največjim
                pretokom ljudi in blaga. Širše območje Dolenjskih Toplic v
                istoimenski občini, ki mu poenostavljeno pravimo Topliška
                dolina, je značilen tovrstni primer. Tu se od poti po dolini
                reke Krke proti jugu odcepi pot po dolini Črmošnjice. Skoraj
                vzporedno z omenjeno poteka tudi pot po dolini Sušice, obe pa po
                najugodnejših naravnih prehodih pripeljeta v Belo krajino in
                naprej na Hrvaško. Obravnavani prostor je zato bogato posejan z
                ostalinami človekove dejavnosti v preteklih obdobjih. Osrednje
                mesto med tukajšnjimi arheološkimi najdišči zaradi številnih
                raziskav in izjemnih najdb pripada arheološkemu najdišču
                Cvinger. Ta se razprostira v osrčju omenjene doline v trikotniku
                med naselji Dolenjske Toplice, Meniška vas in Sela pri
                Dolenjskih Toplicah. Njegov ključni del je utrjeno
                prazgodovinsko naselje oziroma gradišče, h kateremu prištevamo
                še železarsko-talilniško območje južno od naselja, pripadajoče
                gomilno grobišče Branževec nad Seli ter posamezne gomile na
                območju Meniške vasi. Arheološke najdbe z okoliških najdišč nam
                dokazujejo, da je življenje na tem prostoru potekalo vse od
                kamene dobe do zgodnjega srednjega veka.
            </Typography>

            <Typography variant="body1" paragraph>
                Utrjeno prazgodovinsko gradišče dominira na zakraselem in z
                gozdom poraslem kopastem hribu Cvinger z najvišjo točko 265 m
                n.m. Na njegovem severu teče reka Krka, na zahodu in vzhodu ga
                oklepata reka Radeščica in hudourniška Sušica. Južno pobočje
                Cvingerja prehajajo v hribovit hrbet med Radeščico in Sušico. Z
                vrtačami posejan vrh, ki na najvišji točki premore celo kraško
                brezno, obdaja 740 m dolgo sklenjeno obzidje. Njegovi ostanki so
                danes vidni kot kamnit okop, ki se na notranji strani dviguje do
                višine dveh metrov, na zunanji strani pa strmo pada proti
                dolini. Še vidni ostanki obzidja so v preteklosti med ljudmi
                ustvarjali vtis, da je na Cvingerju nekoč stal samostan. Po
                njegovih menihih je namreč v vznožju ležeča Meniška vas dobila
                svoje ime. Novejše raziskave zgodovinarjev kažejo, da so stiški
                menihi tukaj res imeli svojo posest, samostana pa na Cvingerju
                vendarle ni bilo. Osrednji vhod v utrjeno naselje je bil na
                južni strani obzidja. Do tja je iz doline Radeščice mimo gomil
                in železarskega območja vodila prazgodovinska pot, ki so jo v
                zavojih varovale mogočne kamnite zapore.
            </Typography>

            <ArticleImage
                src={sonda}
                caption="Delno zasuta arheološka sonda razkriva sestavo prazgodovinskega obzidja."
            />

            <Typography variant="body1" paragraph>
                V literaturo je arheološko najdišče na Cvingerju vstopilo
                relativno zgodaj. V svoji obsežni knjigi o zgodovini železa na
                Kranjskem, Goriškem in Istri je leta 1909 Alfons Müllner
                zapisal: »Tu med Krko in vodotokoma Radeča in Sušica leži hrib
                Branževci, kjer sem leta 1873 našel prazgodovinsko obzidje. To
                je obsegalo 680 metrov. Zid je sestavljen iz zemlje in kamenja,
                med katerimi se nahaja železova žlindra. V naselju se najdejo
                sledovi koč in odprtega kurišča ter veliko železove žlindre.
                Zunaj Cvingerja se je v gozdu nahajala lepa, na žalost zdaj
                uničena, gomila, ki je merila 2 metra v višino in je obsegala 70
                korakov. Vsebovala je okoli 40 grobov. Najdbe iz te gomile in
                poleg ležečih grobov so bile iz »halštatskega« obdobja VI. in V.
                stoletja.« V naselju je med letoma 1898 in 1899 prvi izkopaval
                vodja antropološko-prazgodovinske zbirke Prirodoslovnega muzeja
                na Dunaju Josef Szombathy. Naselje je obhodil, izmeril ter v
                svojem dnevniku med drugim narisal skico gradišča z legami
                posameznih sond. Njegovo delo štejemo za prvo večje raziskovanje
                kakega prazgodovinskega gradišča na nekdanjem Kranjskem. Po
                ljudskem izročilu naj bi pred prvo svetovno vojno na Cvingerju
                izkopavala tudi vojvodinja Mecklenburška, vendar pisni viri o
                njenem tukajšnjem delovanju niso znani. V tridesetih letih 20.
                stoletja je na zahodnem delu gradišča izkopaval še Walter
                Schmid, žal pa so rezultati njegovega dela izgubljeni. Ohranili
                so se le skromni podatki iz časopisa Jutro, v katerem so
                objavili novico o štirih stavbah, ki jih je našel. Leta 1986 je
                na Cvingerju s sodobnimi raziskavami pričel takratni Zavod za
                varstvo naravne in kulturne dediščine Novo mesto pod vodstvom
                arheologa Boruta Križa. V šestih zaporednih letih je arheološka
                ekipa naredila šest izkopov, ki so zadovoljivo pojasnile videz
                prazgodovinskih obzidij in njihovo časovno sosledje, v njihovi
                notranjosti pa nakazale način gradnje stanovanjskih stavb.
            </Typography>

            <Typography variant="body1" paragraph>
                Najstarejše obzidje, ki je obdajalo Cvinger, je bilo zgrajeno iz
                lesa in zemlje. Med dvojni opaž iz lesenih desk s širino dobrega
                metra so njegovi graditelji nasuli ilovico. Ker je to obzidje
                mestoma uničil požar, se je le-ta prežgala. Ohranila se je kot
                rdeče-oranžno-siva gmota, ki se je pomešala s pooglenelimi
                stenami zrušenega opaža. S pomočjo radiokarbonske analize
                ostankov lesa in nekaj drobnih najdb lončenine lahko to obzidje
                datiramo v čas pozne bronaste dobe oziroma v začetek starejše
                železne dobe (10.–8. stoletje pr. n. št.). Nad ruševine oziroma
                ostanke tega obzidja so nato postavili kamnito obzidje. Zgrajeno
                je bilo tako, da je bilo zunanje in notranje lice zloženo iz
                izbranega kamenja, vmesni prostor pa je bil nasut s kamnitim
                drobirjem in zemljo. Širina tega zidu je znašala okoli dva
                metra. Pred njim je bila na zunanji strani urejena klančina, ki
                se je po nekaj metrih strmega spusta zaključila z manjšo škarpo
                in jarkom. Kamniti zid so dodatno utrjevala pokončna bruna
                (stojke), ki so segala pod nivo zidu. Raziskave so ob tem
                prinesle zanesljive ugotovitve, da je bilo to obzidje na več
                mestih popravljeno.
            </Typography>

            <ArticleImage
                src={zid}
                caption="Idealiziran prikaz kamnitega obzidja, ki je obdajalo gradišče."
            />

            <Typography variant="body1" paragraph>
                Na notranji strani so tik ob obzidju stale stavbe. Zgrajene so
                bile iz brun, ki so bila premazana z glinenim ometom. Stavbe,
                narejene na način predalčja ali kot brunarice, so bile
                postavljene na izravnana tla. V nekaterih primerih so imele
                temelje, grajene iz vodoravno položenih kamnov. Številne so
                imele luknje za stebre, ki so nosili ostenje in ostrešje. Ti so
                bili v luknjah pogosto obloženi s kamenjem, kar je služilo kot
                zagozda za pokončno postavljena bruna. Stavbe so običajno imele
                shrambne jame, ki so bile vkopane v tla ali so bile celo
                vklesane v kamnito osnovo znotraj objekta.
            </Typography>

            <ArticleImage
                src={obzidje}
                caption="Pojasnjevalni tabli pri delno rekonstruiranem obzidju iz leta 1990."
            />

            <Typography variant="body1" paragraph>
                Drobne najdbe iz notranjosti naselja so bili predvsem predmeti,
                povezani z vsakdanjim življenjem: odlomki keramičnih posod,
                prežgan stenski omet, keramična vretenca kot uteži in vztrajniki
                pri preslici za predenje, keramične piramidalne uteži za tkalske
                statve, keramični svitki za kuho, ostanki mesne prehrane
                (živalske kosti) ter železova žlindra kot ostanek kovaške
                obdelave železa. Analiza živalskih kosti in ostankov prehrane
                prazgodovinskih prebivalcev kažeta na veliko prevlado domačih
                (rejenih) živali (krave, prašiči, koze, ovce) in le na manjšo
                količino divjih (lovnih) živali. Bogato rastlinsko prehrano so
                sestavljali proso, pšenica, ječmen, lan, bezeg, robide, križnice
                (koleraba, repa) in presenetljivo velike količine gorčice.
            </Typography>

            <PdfButton
                href="Informativna_tabla_prazgodovinsko_gradišče.pdf"
                text="Informativna tabla prazgodovinsko gradišče"
            />
        </Article>
    </Gallery>
}

export default Gradisce
