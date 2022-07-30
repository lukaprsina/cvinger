import React from "react"
import { Typography } from "@mui/material"

import Article, { getCookieLang, Lang } from "../components/Article"
import ArticleImage from "../components/ArticleImage"
import HomeNavbar from "../components/HomeNavbar"

import panorama from "/public/images/home/panorama.jpg"
import pot1 from "/public/images/home/pot1.jpg"
import { useCookies } from "react-cookie"

function Home() {
    const [cookies, setCookie] = useCookies(["lang"]);
    let lang = getCookieLang(cookies)
    console.log(lang)

    return <Article noNavbar>
        <HomeNavbar />
        <Typography paragraph>
            {(lang == Lang.Si) ? <>
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
            </> : <>
                Cvinger near Dolenjske Toplice is the site of one of the most prominent Early Iron centres in
                Slovenia and wider in the south-eastern Alpine area. It is a site of an excellent strategic location
                that is presented to the public as an archaeological trail, connected its main features and
                displaying the prehistoric heritage in its original setting. The site comprises several archaeological
                areas. The central component is the <b>prehistoric hillfort</b> enclosed within a once mighty rampart,
                partially reconstructed in a short section. Extending on the south slope of the hill is the iron-
                <b>smelting area</b>, where the ancient inhabitants built several hundreds of smelting furnaces to
                produce iron. The metal would then be forged into tools, weapons, jewellery and other products
                to supply their own community, but also trade them across wide areas. The hillfort is associated
                with burial grounds, in this case <b>barrow cemeteries</b> consisting of burial mounds where the local
                prehistoric community buried their dead with a wealth of grave goods.
            </>}
        </Typography>

        <ArticleImage
            src={panorama}
            caption={(lang == Lang.Si) ?
                "Cvinger s prazgodovinskim gradiščem (v sredini) se dviguje nad sotočjem Krke in Radeščice." :
                "Cvinger with its prehistoric hillfort (centre) rises above the confluence of the Krka river and Radeščica stream."
            }
        />

        <Typography paragraph>
            {(lang == Lang.Si) ? <>
                Najstarejši deli najdišča sodijo v pozno bronasto dobo oziroma v
                začetek starejše železne dobe (10.–8. stoletje pr. n. št.). Njej
                sledi prekinitev poselitve, ki je trajala več stoletij vse do
                mladohalštatskega obdobja (6.–4. stoletje pr. n. št.), ko je
                Cvinger dosegel višek svoje moči. Ohranjeni materialni ostanki
                in izjemne arheološke najdbe nam zgovorno pričajo o pomenu in
                gospodarski moči skupnosti, ki je pred poltretjim tisočletjem
                sooblikovala evropski kulturni prostor in neizbrisno obogatila
                zakladnico evropske kulturne dediščine.
            </> : <>
                The earliest archaeological remains at the site date back to the Late Bronze Age and possibly the
                beginning of the Early Iron Age (10 th –8 th century BC). After an interruption in human habitation,
                which lasted several centuries, Cvinger reached the peak of its power in the Late Hallstatt period
                (6 th –4 th century BC). The surviving material remains that include exceptional archaeological finds
                reveal the importance and economic strength of the local community that actively participated in
                shaping the European cultural landscape some two and a half millennia ago.
            </>}
        </Typography>

        <ArticleImage
            src={pot1}
            caption={(lang == Lang.Si) ?
                "Steze, po katerih poteka arheološka pot, se vijejo po mešanem gozdu." :
                "The archaeological trail winds through a mixed forest."
            }
        />

        <Typography paragraph>
            {(lang == Lang.Si) ?
                "Najdišče je kot enota kulturne dediščine Dolenjske Toplice ‒ Arheološko najdišče Cvinger (EŠD 110) vpisano v" :
                "Dolenjske Toplice ‒ the Cvinger Archaeological Site is scheduled in the"}
            {' '}
            <a
                target="_blank"
                href="https://gisportal.gov.si/portal/apps/webappviewer/index.html?id=df5b0c8a300145fda417eda6b0c2b52b&extent=503151.3467%2C67099.7664%2C504812.9333%2C68802.3636%2C3912"
                rel="noopener noreferrer"
            >
                {(lang == Lang.Si) ?
                    "register kulturne dediščine" :
                    "Cultural Heritage Register"
                }
            </a>
            {(lang == Lang.Si) ?
                ". Status kulturnega spomenika je z občinskim odlokom pridobilo že leta 1992. Današnjo pravno zaščito temu kulturnemu spomeniku zagotavlja " :
                " as a unit of cultural heritage under EŠD 110. By municipal ordinance, it was given the status of a cultural monument already in 1992. The monument is now             protected by the Ordinance designating the immovable cultural monuments of local importance in the Dolenjske Toplice Municipality ("
            }
            <a
                target="_blank"
                href="https://lukaprsina.github.io/cvinger.net/documents/Odlok o razglasitvi kulturnih spomenikov Dolenjske Toplice.pdf"
                rel="noopener noreferrer"
            >
                Odlok o razglasitvi
            </a>
            {(lang == Lang.Si) ?
                " nepremičnih kulturnih spomenikov lokalnega pomena na območju Občine Dolenjske Toplice iz leta 2018." :
                "), issued in 2018."
            }
        </Typography>

        <Typography>
            {(lang == Lang.Si) ?
                "Zaradi svojega regionalnega pomena je bil Cvinger kot železarsko središče vključen v več mednarodnih raziskovalnih in promocijskih projektov. V sklopu projekta" :
                ""
            }
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
