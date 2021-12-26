import React from "react"
import { Typography } from "@mui/material"

import Article from "../components/Article"
import ArticleImage from "../components/ArticleImage"
import Gallery from "../components/Gallery"

import vzorci from "/public/images/talilnice/vzorci.jpg"
import talilnik from "/public/images/talilnice/talilnik.jpg"
import raziskave from "/public/images/talilnice/raziskave.jpg"

const Talilnice = () => {
    return <Gallery>
        <Article title="Talilniško območje">
            <Typography variant="body1" paragraph>
                Med najpomembnejše dejavnosti tukajšnjih prazgodovinskih
                prebivalcev štejemo taljenje železa in kovaštvo. Sledovi teh
                dejavnosti so prisotni tako znotraj naselja, kjer lahko na tleh
                najdemo kovaško žlindro, predvsem pa na južnem pobočju
                Cvingerja. Nekje na polovici poti med naseljem in gomilnim
                grobiščem Branževec so leta 1988 strokovnjaki med terenskimi
                pregledi na površini našli večje količine železove žlindre. Ker
                so bili vmes tudi koščki prežgane ilovice, je vse kazalo na to,
                da se pod gozdnim humusom skrivajo ostanki železnodobnih
                talilnih peči.
            </Typography>

            <Typography variant="body1" paragraph>
                Domnevo so takrat preverili z manjšim izkopom (3 × 4 m) na
                sredini prostora, kjer je bila koncentracija najdb na površini
                največja. Sondiranje je domneve potrdilo, saj se je tik pod
                površjem nahajala večja količina železove žlindre in prežgane
                ilovice, ki je ležala raztresena po vsej površini izkopa. Na
                nivoju oranžno-rdeče ilovice (50‒60 cm pod površjem) so se
                pokazali jasni obrisi dvanajstih železarskih talilnih peči.
                Ležale so tesno skupaj, dve sta se celo dotikali. Nadaljnji
                izkop je pokazal, da gre za jame, vkopane v ilovnata tla.
                Njihova notranjost je bila večinoma močno ožgana in zapolnjena s
                temnejšo zemljo, kosi železove žlindre, lesnim ogljem in ponekod
                tudi prežganim kamenjem. Ohranili so se le spodnji deli peči z
                ostenjem, ki je bilo izdelano iz gline. V tlorisu so bile peči
                povečini okroglih oblik s premerom od 40 do 70 cm, le ena je
                merila 80 × 100 cm.
            </Typography>

            <ArticleImage
                src={vzorci}
                caption="Oblikovni in utežnostni prikaz različnih oblik železa."
            />

            <Typography variant="body1" paragraph>
                Arheološko sondiranje na Branževcu je torej potrdilo domnevo, da
                je tu v železni dobi stal talilniški obrat. Sledile so prve
                nedestruktivne geofizikalne raziskave (magnetna metoda, 1997),
                ki so pokazale, da se je ta raztezal na približno 0,6 ha velikem
                prostoru, na katerem so nekdaj postavili več sto talilnih peči.
                Pridobivanje železa je v tistem času torej potekalo izven
                naselja, pridobljeno surovo železo (volk) pa so predelovali in
                kovali tudi znotraj naselja.
            </Typography>

            <ArticleImage
                src={talilnik}
                caption="Prerez skozi naloženo in dogorelo jaškasto talilno peč z jamo za žlindro."
            />

            <Typography variant="body1" paragraph>
                Od leta 2013 do 2018 so na Branževcu potekale dodatne arheološke
                raziskave, kjer so bile uporabljene najsodobnejše geofizikalne
                metode. Na podlagi njihovih rezultatov je bila narejen še en
                arheološki izkop, ki je ponovno pokazal na gosto razporeditev
                talinih peči. Nadalje je pokazal, da so bile nekatere peči
                uporabljene večkrat. Ko je stara peč postala neuporabna, so jo
                včasih celo delno pre-uporabili za postavitev nove peči, ali pa
                so to sezidali v njeni neposredni bližini.
            </Typography>

            <ArticleImage
                src={raziskave}
                caption="Raziskave v arheološkem izkopu (sondi) na talilniškem območju. Foto Matija Črešnar."
            />

            <Typography variant="body1" paragraph>
                Ena od peči je bila ob tem uspešno datirana z magnetno
                datacijsko metodo (prvič uporabljena pri nas). Njen rezultat je
                v skladu z arheološkimi dokazi in kaže na zadnjo uporabo peči v
                času 640–370 pr. n. št. Uspešna datacija je pomembna, saj na
                območju taljenja ni bilo odkritih za datiranje uporabnih
                keramičnih ali kovinskih najdb, radiokarbonsko datiranje oglja
                pa je za čas starejše železne dobe uporabno le omejeno.
            </Typography>
        </Article>
    </Gallery>
}

export default Talilnice
