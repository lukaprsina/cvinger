import React, { useEffect, useState } from "react"
import { Container, Tab, Tabs, Typography } from "@mui/material"

import Article from "../components/Article"
import ArticleImage from "../components/ArticleImage"
import Gallery from "../components/Gallery"

import ograja from "/public/images/jama/ograja.jpg"
import nacrt from "/public/images/jama/nacrt.jpg"
import jamar from "/public/images/jama/jamar.jpg"
import first from "/public/images/jama/1987.jpg"
import second from "/public/images/jama/2017.jpg"
import TabPanel from "../components/TabPanel"
import { Box } from "@mui/system"
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Image from "next/image"
import PdfButton from "../components/PdfButton"

const Jama = () => {
    const [tab, setTab] = React.useState(0);
    const [sketchfabHeight, setSketchfabHeight] = useState(600)

    useEffect(() => {
        setSketchfabHeight(window.innerHeight * 0.7)
    }, [setSketchfabHeight])

    return <Gallery>
        <Article title="Cvingerska jama">
            <Typography variant="body1" paragraph>
                Dolenjski griči in hribi so na široko posejani s
                prazgodovinskimi gradišči. Cvingersko med vsemi izstopa po tem,
                da se na najvišji točki, ki je skorajda v središču gradišča,
                nahaja kraško brezno Cvingerska (tudi Keltska) jama. Ali je bila
                znana že v halštatski dobi, ali se je morda odprla pozneje, pa
                je uganka, ki so jo med večletnimi raziskavami poskušali družno
                razrešiti arheologi in novomeški jamarji.
            </Typography>

            <ArticleImage
                src={ograja}
                caption="Zaščitna ograja okoli vhodnega brezna Cvingerske jame."
            />

            <Typography variant="body1" paragraph>
                Verjetno je prav lega jame v bližini obljudenih krajev
                spodbudila domišljijo nekaterih piscev iz začetka 20. stoletja,
                da so jami namenili vsak po nekaj vrstic. Najstarejši znani
                zapis o njej najdemo v drobni knjižici Zdravišče Toplice, ki jo
                je leta 1900 spisal Pavel Zhuber pl. Okrog. V poglavju Okolica
                zdravišča je navedel: »Takoj za parkom vzdiguje se polagoma že
                prej imenovani hrib Tabor. Od ceste peljejo lepe gozdne poti in
                stezice med gostimi, visokimi smrekami proti vrhu k nekdanji
                keltiški naselbini. Prav na vrhu je nad 20 metrov globoka
                navpična jama. Zaradi nevarnega vhoda do sedaj nihče še ni
                preiskal te jame, vendar pa se sodi, da so s to navpično jamo v
                zvezi še druge vodoravne votline. V tej jami so prav lepi
                kapniki.« Slabo desetletje pozneje (1909) je že omenjeni Alfons
                Müllner objavil knjigo o zgodovini železa, v kateri je na kratko
                opisal svoj obisk (1873) prazgodovinskega obzidja in gomil, ter
                jo opremil z risbama – na prvi je označil zemljepisno lego
                Cvingerja, na drugi je risbi obzidja dodal še prerez naselja,
                sredi katerega je dobro vidno brezno. Na naslednjo pisno
                obravnavo je jama čakala vse do leta 1991, ko je domačin Andrej
                Hudoklin v prispevku za Naše jame objavil kratek pregled do
                tedaj znanega dogajanja z obravnavano jamo. Ena izmed njegovih
                ugotovitev je bila, da je nasutje v jami nastalo po drugi
                svetovni vojni, kar so potrdili tudi ostanki eksplodiranih
                minskih teles. Ob tem je zabeležil tudi pripovedi, ki so o jami
                in njenih skrivnostih krožile med domačini.
            </Typography>

            <Box>
                <Tabs
                    value={tab}
                    onChange={(e, newValue) => setTab(newValue)}
                    scrollButtons="auto"
                    variant="scrollable"
                >
                    <Tab label="Model jame pred raziskavami" />
                    <Tab label="Vhod jame" />
                    <Tab label="Notranjost jame" />
                </Tabs>
            </Box>
            <Container
                sx={{
                    overflow: "hidden",
                    border: "1px solid black",
                    width: "100%",
                    height: `${sketchfabHeight}px`,
                    padding: "0px!important",
                }}
            >
                <TabPanel value={tab} index={0}>
                    <iframe
                        width="100%"
                        height={sketchfabHeight}
                        title="Model jame pred raziskavami"
                        src="https://sketchfab.com/models/c31f716e4e404254a9a0de31b5131fcd/embed?ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
                        frameBorder="0"
                        allow="autoplay; fullscreen; vr"
                    ></iframe>
                </TabPanel>
                <TabPanel value={tab} index={1}>
                    <iframe
                        width="100%"
                        height={sketchfabHeight}
                        title="Vhod jame"
                        src="https://sketchfab.com/models/371c41e033ab45c88be6f5da1660f163/embed?ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
                        frameBorder="0"
                        allow="autoplay; fullscreen; vr"
                    ></iframe>
                </TabPanel>
                <TabPanel value={tab} index={2}>
                    <iframe
                        width="100%"
                        height={sketchfabHeight}
                        title="Notranjost jame"
                        src="https://sketchfab.com/models/259166b8a4dd4eda9f7176d5fdb4f6d6/embed?ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1"
                        frameBorder="0"
                        allow="autoplay; fullscreen; vr"
                    ></iframe>
                </TabPanel>
            </Container>

            <Typography variant="body1" paragraph>
                Cvingersko jamo so uradno prvi obiskali topliški jamarji, sicer
                člani Jamarskega kluba Novo mesto (1982). Za trikotnim vhodom (2
                × 2,5 m) so izmerili 6 m globoko in 10 m dolgo vhodno brezno, v
                katerem pa zaradi očitnega nasutja z vrha ni bilo nadaljevanja.
                Ker je bila njena bližnja in širša okolica več stoletij
                obljudena, bi lahko v jamo po naključju (ali namerno) padli tudi
                razni predmeti iz različnih zgodovinskih obdobij. Zaradi svoje
                specifične lege je bil jami torej pripisan visok arheološki
                potencial. Med letoma 1986 in 1987 so se zato tudi jamarji
                vključili v arheološke raziskave, ki jih je takrat na Cvingerju
                vodil Borut Križ. V teh dveh poletnih sezonah so odkopavali
                nasutje, ki je domnevno prekrivalo arheološke plasti in ki je
                hkrati zapiralo prehod v nižje dele jame. Iz jame so s pomočjo
                vrvne tehnike izvlekli okoli 10 m3 materiala (zemlja, kamenje,
                komunalni odpadki), s čimer so jamo poglobili za več metrov. Ker
                so večje skale, ki jih niso mogli izvleči, začele groziti s
                podorom, so s kopanjem v jami prenehali. Prehod v morebitno
                jamsko nadaljevanje ali dostop do arheoloških plasti je zato
                tudi po zaključenih raziskavah ostal neznanka.
            </Typography>
            <ReactCompareSlider
                itemOne={(
                    <Image
                        src={first}
                        alt="Cvingerska jama"
                    />
                )}
                itemTwo={(
                    <Image
                        src={second}
                        alt="Cvingerska jama"
                    />
                )}
            />
            <Typography variant="body1" paragraph>
                Delo v jami je zastalo za natanko tri desetletja, dokler niso
                jamarji dobili vnovičnega povabila arheološke raziskovalne ekipe
                pod vodstvom dr. Matije Črešnarja (Oddelek za arheologijo,
                Filozofska fakulteta, UL), da bi s čiščenjem nasipnega stožca
                pod jamskim vhodom nadaljevali. Kopači v jami so nasutje
                nalagali v plastične sode, od koder so jih z električnim vitlom
                dvigovali ter po horizontalni žičnici odvlekli na petnajst
                metrov oddaljeno deponijo za arheološki pregled. Na več akcijah
                v letih 2016 in 2017 so izvlekli novih 10 m3 materiala in jamo
                poglobili do te mere, da se je ob jamski steni na dveh mestih
                odprlo nadaljevanje. Jamarske raziskave so nato pokazale, da se
                brezno med razvejanimi korozijskimi razpokami in manjšimi
                dvoranami v več stopnjah nadaljuje. Največji notranji prostor je
                Dvorana balvanov, ki je visoka 15 m. Na njenem dnu je splet
                stranskih rovov in prehodov, ki se vsi po vrsti zaprejo z
                neprehodnimi ožinami. Novoodkriti deli se zaključijo v jašku
                dobrih 10 m pod podornimi bloki omenjene dvorane na globini 51
                m.
            </Typography>

            <ArticleImage
                src={nacrt}
                caption="Načrt Cvingerske jame. Načrt Tomaž Grdin."
                center
                maxHeight={1000}
            />

            <Typography variant="body1" paragraph>
                Po zaključenih raziskavah se je pokazalo, da v arheološkem
                pogledu jama ni izpolnila pričakovanj. Med izkopanim nasutjem je
                v množici novodobnih predmetov izstopal le zajeten kos
                prazgodovinske keramike, ki je bil nekoč del ostenja posode za
                kuhanje na ognju. Kulturnih plasti v novoodkritih delih jame ni
                bilo, saj so bili doslej človeku očito nedostopni. Odsotnost
                najdb si strokovnjaki razlagajo s tem, da je bil vhod v jamo v
                času poselitve gradišča zakrit oziroma zadelan. Enako verjetna
                je razlaga, da se je z zrušenjem jamskega stropa odprl šele po
                tem, ko je prazgodovinska skupnost naselje že opustila.
            </Typography>

            <ArticleImage
                src={jamar}
                caption="Jamarsko prodiranje skozi ožino v Meniški dvoranici."
            />

            <PdfButton
                href="Informativna_tabla_Cvingerska_jama.pdf"
                text="Informativna tabla Cvingerska jama"
            />
        </Article>
    </Gallery>
}

export default Jama
