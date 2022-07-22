import React from "react"
import { Typography } from "@mui/material"

import Article from "../components/Article"
import ArticleImage from "../components/ArticleImage"

import vhod from "/public/images/vhod/vhod.jpg"
import fotoskica from "/public/images/vhod/fotoskica.jpg"
import tloris from "/public/images/vhod/tloris.jpg"
import PdfButton from "../components/PdfButton"

function Vhod() {
    return <Article title="Utrjen vhod">
        <Typography paragraph>
            Gradišče je imelo dva vhoda, severnega in južnega, vsi drugi
            današnji prehodi skozi okop so nastali kasneje. Glavno vlogo je
            imel južni vhod, pred katerim je bilo na rezultatih zračnega
            laserskega skeniranja prvič mogoče prepoznati dostopno pot, ki
            je po svojem načinu izgradnje edinstvena v širšem prostoru. Gre
            za pot dolžine okoli 180 m in širine 4–5 m, ki se začne pri
            železarsko-talilniškem območju na Branževcu in vodi do vhoda v
            naselje. Pot na tej razdalji večkrat zavije, na obeh straneh je
            utrjena in ob tem dvakrat dopolnjena s prečnima okopoma. Z
            izkopavanjem tistega bližje naselbini so arheologi ugotovili, da
            gre za ostanke kamnitega zidu, ki je bil širok pribl. 4 m. Kljub
            slabše ohranjenim ostalinam je bilo jasno prepoznavno njegovo
            zunanje in notranje lice, grajeno iz večjih kamnov. Zid je imel
            še dve liniji večjih kamnov v notranjosti. Vmesni prostori so
            bili, podobno kot je bilo to pri obzidju okoli gradišča,
            zapolnjeni z manjšimi kamni in drobirjem.
        </Typography>

        <ArticleImage
            src={vhod}
            caption="Delno rekonstruiran (2020) skoraj 4 m širok dvojni zid ob dohodni poti."
        />

        <ArticleImage
            src={fotoskica}
            caption="Digitalni model ostalin več kot 3 m širokega prečnega utrdbenega zidu."
        />

        <Typography paragraph>
            Utrjena pot je prebivalcem Cvingerja zagotavljala dodatno
            varnost in nadzor nad prišleki. Treba jo je razumeti skupaj z
            drugimi deli najdišča, ki je premišljeno organizirano. Šele z
            zračnim laserskim snemanjem je bilo namreč mogoče prepoznati
            tudi ugreznjene poti, ki se družijo v koridor premikanja in jih
            razumemo kot ostanke nekdanjih poti. Te vodijo najprej mimo
            gomilnega grobišča na Branževcu, mimo talilniškega območja in
            nato skozi utrjen dostop do naselja. Takšna ureditev prostora v
            okolici gradišča ni edinstvena, a nam predstavlja doslej slabo
            poznan vidik železnodobne družbe, ki si ga poskušamo razložiti.
            Obiskovalec, ki je prihajal na Cvinger, je naprej šel skozi
            nekropolo (svet mrtvih), kjer je spoznal slavo preteklih rodov.
            Nadaljeval je mimo talilnic, ki so zagotavljale blagostanje
            tukajšnje skupnosti. Nato je v zadnjih metrih moral prestati še
            preverjanje ob utrjenih prehodih na dostopni poti, da je lahko
            vstopil v naselbino. Morda boste o tem razmišljali tudi vi,
            današnji obiskovalci Cvingerja, ko boste naslednjič hodili po
            naši arheološki poti.
        </Typography>

        <ArticleImage
            src={tloris}
            caption="Zračni posnetek, iz katerega je razviden potek dvojnega zidu."
        />

        <PdfButton
            href="Informativna_tabla_utrjen_vhod.pdf"
            text="Informativna tabla utrjen vhod"
        />
    </Article>
}

export default Vhod
