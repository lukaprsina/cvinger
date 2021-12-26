import React from "react"
import { Typography } from "@mui/material"

import Article from "../components/Article"
import ArticleImage from "../components/ArticleImage"
import Gallery from "../components/Gallery"

import pot2 from "/public/images/pot/pot2.jpg"
import smerokaz from "/public/images/pot/smerokaz.jpg"
import enote from "/public/images/pot/enote.jpg"

const Pot = () => {
    return <Gallery>
        <Article title="Arheološka pot">
            <Typography variant="body1" paragraph>
                Prve raziskovalce je Cvinger pritegnil že v sedemdesetih letih
                19. stoletja, prva izkopavanja na gomilnem grobišču in tudi v
                naselju pa so potekala zadnja leta navedenega stoletja. Sledila
                so izkopavanja v zahodnem delu gradišča v tridesetih letih 20.
                stoletja. Prve povojne raziskave Cvingerja so potekale med
                letoma 1986 in 1991. Arheologi so v tem obdobju naredili šest
                izkopov, s katerimi so želeli ugotoviti časovni razpon gradišča,
                način gradnje obzidja in morebitne ostanke stavb v notranjosti
                naselja. V sklopu arheoloških raziskav so s sodelovanjem
                jamarjev in domačinov delno očistili mlajše nasutje v Cvingerski
                jami, na gradišču delno rekonstruirali odsek prazgodovinskega
                obzidja, postavili prve informativne table ter z markacijami
                označili krožno pešpot. Njena vzpostavitev leta 1990 je bila
                pionirsko delo, saj je to najstarejša arheološka tematska pot v
                Sloveniji.
            </Typography>

            <ArticleImage
                src={pot2}
                caption="Pojasnjevalni tabli pri gomilnem grobišču."
            />

            <ArticleImage
                src={smerokaz}
                caption="Pot je označena z markacijo stilizirane situle in smerokazi."
            />

            <Typography variant="body1" paragraph>
                Izhodišča pešpoti so v gozdu blizu osnovne šole (na križišču pri
                odcepu ceste za Dolenje Polje), ob parkirišču v bližini
                topliškega pokopališča ter sredi Meniške vasi. Speljana je po
                gozdnih stezah in poteh ter označena z markacijo stilizirane
                situle. Celovito je opremljena z uvodnimi pojasnjevalnimi
                tablami na izhodiščih ter vmesnimi tablami na treh vstopih v
                gradišče. Vsebinska razširitev z informativnimi tablami
                pohodnika pričaka na ključnih postajah ob poti: pri delno
                rekonstruiranem obzidju, Cvingerski jami, utrjeni dohodni poti,
                železarsko-talilniškem območju ter gomilnem grobišču. Za lažjo
                orientacijo v naravi so na križiščih postavljene usmerjevalne
                table. Pot na Cvinger (265 m n.m.), ki je dolga 2,5 km, ni
                zahtevna – treba je le premagati višinsko razliko 60 m. Vabimo
                vas, da se sprehodite med ohranjenimi pomniki topliške
                prazgodovine. Priporočamo vam terensko obutev in … srečno pot!
            </Typography>

            <ArticleImage
                src={enote}
                caption="Najpomembnejši gradniki arheološke poti na posnetku zračnega laserskega skeniranja."
            />
        </Article>
    </Gallery>
}

export default Pot
