import React from "react"
import { Typography } from "@mui/material"

import Article from "../components/Article"
import ArticleImage from "../components/ArticleImage"
import HomeNavbar from "../components/HomeNavbar"

import panorama from "/public/images/home/panorama.jpg"
import pot1 from "/public/images/home/pot1.jpg"

function Home() {
    return <Article noNavbar>
        <HomeNavbar />
        <Typography paragraph>
            Cvinger pri Dolenjskih Toplicah je eno najpomembnejših
            starejšeželeznodobnih središč v Sloveniji in širšem jugovzhodnem
            predalpskem prostoru. Najdišče, ki leži na odlični strateški
            lokaciji, je v naravi predstavljeno kot arheološki park. Njegove
            najpomembnejše gradnike povezuje arheološka pot, s čimer
            prazgodovinsko dediščino predstavlja v izvirnem okolju.
            Arheološko najdišče Cvinger sestavlja več arheoloških območij,
            ki jih moramo razumeti kot neločljivo povezano celoto. Osrednji
            del je <b>prazgodovinsko gradišče</b>, ki je obdano z nekoč mogočnim
            obzidjem in je v krajšem segmentu delno rekonstruirano. Na
            njegovem južnem pobočju se razteza <b>talilniško območje</b>, na
            katerem so staroselci v več sto talilnih pečeh pridobivali
            železo. Tega so nato s kovanjem predelovali v orodje, orožje in
            nakit ter druge uporabne izdelke, s katerimi so trgovali v
            širšem prostoru. Vsebinsko celoto najdišča zaključujejo <b>gomilna
                grobišča</b>, kjer so v številnih zemljenih gomilah skupaj z
            grobnimi pridatki pokopani nekdanji pripadniki tukajšnje
            dolenjske prazgodovinske skupnosti.
        </Typography>

        <ArticleImage
            src={panorama}
            caption="Cvinger s prazgodovinskim gradiščem (v sredini) se dviguje nad sotočjem Krke in Radeščice."
        />

        <Typography paragraph>
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

        <Typography paragraph>
            Najdišče je kot enota kulturne dediščine Dolenjske Toplice ‒
            Arheološko najdišče Cvinger (EŠD 110) vpisano v{' '}
            <a
                target="_blank"
                href="https://gisportal.gov.si/portal/apps/webappviewer/index.html?id=df5b0c8a300145fda417eda6b0c2b52b&extent=503151.3467%2C67099.7664%2C504812.9333%2C68802.3636%2C3912"
                rel="noopener noreferrer"
            >
                register kulturne dediščine
            </a>
            . Status kulturnega spomenika je z občinskim
            odlokom pridobilo že leta 1992. Današnjo pravno zaščito temu
            kulturnemu spomeniku zagotavlja{' '}
            <a
                target="_blank"
                href="documents/Odlok o razglasitvi kulturnih spomenikov Dolenjske Toplice.pdf"
                rel="noopener noreferrer"
            >
                Odlok o razglasitvi
            </a> nepremičnih
            kulturnih spomenikov lokalnega pomena na območju Občine
            Dolenjske Toplice iz leta 2018.
        </Typography>

        <Typography>
            Zaradi svojega regionalnega pomena je bil Cvinger kot železarsko
            središče vključen v več mednarodnih raziskovalnih in
            promocijskih projektov. V sklopu projekta{' '}
            <a
                target="_blank"
                href="https://www.iron-age-danube.eu/"
                rel="noopener noreferrer"
            >
                Iron Age Danube
            </a> je
            bila tako med drugimi obnovljena tudi pričujoča arheološka pot,
            ki jo je moč skupaj s še nekaterimi potmi v okolici obiskati
            tudi s pomočjo spletnega vodiča (
            <a
                target="_blank"
                href="https://www.iron-age-danube.eu/"
                rel="noopener noreferrer"
            >
                Guide@Hand
            </a>
            ). Ob tem je Cvinger
            tudi eno pomembnejših najdišč Železnodobne poti po Podonavju
            (
            <a
                target="_blank"
                href="https://www.iron-age-danube.eu/"
                rel="noopener noreferrer"
            >
                Iron Age Danube Route
            </a>
            ), ki povezuje najpomembnejša najdišča iz
            tega obdobja v širši podonavski regiji.
        </Typography>
    </Article>
}

export default Home
