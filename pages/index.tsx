import React from "react"
import Article from "../components/Article"
import ArticleImage from "../components/ArticleImage"
import HomeNavbar from "../components/HomeNavbar"

import { Typography } from "@mui/material"

import panorama from "/public/images/home/panorama.jpg"
import pot1 from "/public/images/home/pot1.jpg"

function Home() {
    return (
        <Article noNavbar>
            <HomeNavbar />
            <Typography variant="body1" paragraph>
                Cvinger pri Dolenjskih Toplicah je eno najpomembnejših
                starejšeželeznodobnih središč v Sloveniji in širšem jugovzhodnem
                predalpskem prostoru. Najdišče, ki leži na odlični strateški
                lokaciji, je v naravi predstavljeno kot arheološki park. Njegove
                najpomembnejše gradnike povezuje arheološka pot, s čimer
                prazgodovinsko dediščino predstavlja v izvirnem okolju.
                Arheološko najdišče Cvinger sestavlja več arheoloških območij,
                ki jih moramo razumeti kot neločljivo povezano celoto. Osrednji
                del je prazgodovinsko gradišče, ki je obdano z nekoč mogočnim
                obzidjem in je v krajšem segmentu delno rekonstruirano. Na
                njegovem južnem pobočju se razteza talilniško območje, na
                katerem so staroselci v več sto talilnih pečeh pridobivali
                železo. Tega so nato s kovanjem predelovali v orodje, orožje in
                nakit ter druge uporabne izdelke, s katerimi so trgovali v
                širšem prostoru. Vsebinsko celoto najdišča zaključujejo gomilna
                grobišča, kjer so v številnih zemljenih gomilah skupaj z
                grobnimi pridatki pokopani nekdanji pripadniki tukajšnje
                dolenjske prazgodovinske skupnosti.
            </Typography>

            <ArticleImage
                src={panorama}
                caption="Cvinger s prazgodovinskim gradiščem (v sredini) se dviguje nad sotočjem Krke in Radeščice."
            />

            <Typography variant="body1" paragraph>
                Najstarejši deli najdišča sodijo v pozno bronasto dobo oziroma v
                začetek starejše železne dobe (10.–8. stoletje pr. n. št.). Njej
                sledi prekinitev poselitve, ki je trajala več stoletij vse do
                mladohalštatskega obdobja (6.–4. stoletje pr. n. št.), ko je
                Cvinger dosegel višek svoje moči. Ohranjeni materialni ostanki
                in izjemne arheološke najdbe nam zgovorno pričajo o pomenu in
                gospodarski moči skupnosti, ki je pred poltretjim tisočletjem
                sooblikovala evropski kulturni prostor in neizbrisno obogatila
                zakladnico evropske kulturne dediščine.
            </Typography>

            <ArticleImage
                src={pot1}
                caption="Steze, po katerih poteka arheološka pot, se vijejo po mešanem gozdu."
            />

            <Typography variant="body1" paragraph>
                Najdišče je kot enota kulturne dediščine Dolenjske Toplice ‒
                Arheološko najdišče Cvinger (EŠD 110) vpisano v register
                kulturne dediščine. Status kulturnega spomenika je z občinskim
                odlokom pridobilo že leta 1992. Današnjo pravno zaščito temu
                kulturnemu spomeniku zagotavlja Odlok o razglasitvi nepremičnih
                kulturnih spomenikov lokalnega pomena na območju Občine
                Dolenjske Toplice iz leta 2018.
            </Typography>

            <Typography variant="body1" paragraph>
                Zaradi svojega regionalnega pomena je bil Cvinger kot železarsko
                središče vključen v več mednarodnih raziskovalnih in
                promocijskih projektov. V sklopu projekta Iron Age Danube je
                bila tako med drugimi obnovljena tudi pričujoča arheološka pot,
                ki jo je moč skupaj s še nekaterimi potmi v okolici obiskati
                tudi s pomočjo spletnega vodiča (Guide@Hand). Ob tem je Cvinger
                tudi eno pomembnejših najdišč Železnodobne poti po Podonavju
                (Iron Age Danube Route), ki povezuje najpomembnejša najdišča iz
                tega obdobja v širši podonavski regiji.
            </Typography>
        </Article>
    )
}

export default Home
