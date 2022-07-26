import { StaticImageData } from "next/image"
import img0 from "/public/documents/output/Archäologisches Korrespondenzblatt 35, 2005, 191-204.jpg"
import img1 from "/public/documents/output/Arheo 34, 2017, 79-93.jpg"
import img2 from "/public/documents/output/Arheo 35, 2018.jpg"
import img3 from "/public/documents/output/Arheološka najdišča Dolenjske, Arheo, posebna številka, 1990, 23-26.jpg"
import img4 from "/public/documents/output/Arheološki pregled 29, 1988, 88-89.jpg"
import img5 from "/public/documents/output/Arheološki vestnik 27, 1976, 317‒536.jpg"
import img6 from "/public/documents/output/Arheološki vestnik 49, 1998, 157−186.jpg"
import img7 from "/public/documents/output/Arheološki vestnik 55, 2004, 207–250.jpg"
import img8 from "/public/documents/output/Arheološki vestnik 71, 529‒554.jpg"
import img9 from "/public/documents/output/Cvinger in železnodobno železarstvo, Vitrina meseca 7, april 2018.jpg"
import img10 from "/public/documents/output/Dolenjski kras 7, 2017, 105‒117.jpg"
import img11 from "/public/documents/output/Dular, J. 2003, Halštatske nekropole Dolenjske.jpg"
import img12 from "/public/documents/output/Izvestja muzejskega društva za Kranjsko 14, 1904.jpg"
import img13 from "/public/documents/output/Izvestja muzejskega društva za Kranjsko 8, 1898.jpg"
import img14 from "/public/documents/output/Izvestja Muzejskega društva za Kranjsko 9, 1899.jpg"
import img15 from "/public/documents/output/Jutro, ponedeljska izdaja, 2. sept. 1935, št. 202a, 2.jpg"
import img16 from "/public/documents/output/Mlekuž. D., Črešnar M. 2019, Early Iron Age cultural landscapes, str. 221-240.jpg"
import img17 from "/public/documents/output/Muellner, A. 1909, Geschichte des Eisens, str. 71.jpg"
import img18 from "/public/documents/output/Naše jame 33, 1991.jpg"
import img19 from "/public/documents/output/Varstvo spomenikov 23, 1981.jpg"
import img20 from "/public/documents/output/Varstvo spomenikov 29, 1987.jpg"
import img21 from "/public/documents/output/Varstvo spomenikov 30, 1988.jpg"
import img22 from "/public/documents/output/Varstvo spomenikov 31, 1989.jpg"
import img23 from "/public/documents/output/Varstvo spomenikov 32, 1990.jpg"
import img24 from "/public/documents/output/Varstvo spomenikov 33, 1991.jpg"
import img25 from "/public/documents/output/Varstvo spomenikov 34, 1992.jpg"
import img26 from "/public/documents/output/Zhuber, P. 1900, Zdravišče Toplice na Kranjskem.jpg"

export type DataProps = {
    file: string,
    ignore?: boolean,
    type?: number,
    authors?: string,
    full_authors?: string,
    day?: string,
    month?: string,
    year: number,
    quarter?: string,
    name?: string,
    secondary_author?: string,
    translation?: string,
    publication?: string,
    number?: string,
    part?: number[],
    book?: string,
    place?: string,
    page?: string[],
    output: string,
    path: string,
    image: StaticImageData,
    size: string
}

const data: DataProps[] = [
    {
        "file": "Archäologisches Korrespondenzblatt 35, 2005, 191-204",
        "authors": "Egg, M., A. Eibner",
        "year": 2005,
        "name": "Einige Anmerkungen zur figural verzierten Bronzesitula aus Dolenjske Toplice in Slowenien",
        "publication": "Archäologisches Korrespondenzblatt",
        "number": "35",
        "page": [
            "191",
            "204"
        ],
        "output": "/public/documents/output/Archäologisches Korrespondenzblatt 35, 2005, 191-204.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Archäologisches Korrespondenzblatt 35, 2005, 191-204.pdf",
        "image": img0,
        "size": "PDF, 6 MB"
    },
    {
        "file": "Arheo 34, 2017, 79-93",
        "authors": "Črešnar, M., J. Burja, M. Vinazza",
        "year": 2017,
        "name": "Nove arheološke raziskave na Cvingerju pri Dolenjskih Toplicah in njihov doprinos k poznavanju železarstva v jugovzhodni Sloveniji v starejši železni dobi",
        "publication": "Arheo",
        "number": "34",
        "page": [
            "79",
            "93"
        ],
        "output": "/public/documents/output/Arheo 34, 2017, 79-93.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Arheo 34, 2017, 79-93.pdf",
        "image": img1,
        "size": "PDF, 8 MB"
    },
    {
        "file": "Arheo 35, 2018",
        "authors": "Horn et al.",
        "full_authors": "Horn, B., B. Mušič, M. Črešnar, P. Basar",
        "year": 2018,
        "name": "Geofizikalne raziskave v kraškem okolju: rezultati električne upornostne tomografije in nizkofrekvenčne elektromagnetne metode na primeru utrjene naselbine Gradišnica pri Dolenjem Gradišču",
        "publication": "Arheo",
        "number": "35",
        "page": [
            "7",
            "31"
        ],
        "output": "/public/documents/output/Arheo 35, 2018.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Arheo 35, 2018.pdf",
        "image": img2,
        "size": "PDF, 28 MB"
    },
    {
        "file": "Arheološka najdišča Dolenjske, Arheo, posebna številka, 1990, 23-26",
        "authors": "Križ, B.",
        "year": 1990,
        "quarter": "a",
        "name": "Cvinger ali Branževec pri Dol. Toplicah",
        "publication": "Arheološka najdišča Dolenjske",
        "book": "Arheo, posebna številka",
        "page": [
            "23",
            "26"
        ],
        "output": "/public/documents/output/Arheološka najdišča Dolenjske, Arheo, posebna številka, 1990, 23-26.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Arheološka najdišča Dolenjske, Arheo, posebna številka, 1990, 23-26.pdf",
        "image": img3,
        "size": "PDF, 1 MB"
    },
    {
        "file": "Arheološki pregled 29, 1988, 88-89",
        "authors": "Križ, B.",
        "year": 1988,
        "quarter": "a",
        "name": "Cvinger pri Dolenjskih Toplicah",
        "publication": "Arheološki pregled",
        "number": "29",
        "page": [
            "88",
            "89"
        ],
        "output": "/public/documents/output/Arheološki pregled 29, 1988, 88-89.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Arheološki pregled 29, 1988, 88-89.pdf",
        "image": img4,
        "size": "PDF, 1 MB"
    },
    {
        "file": "Arheološki vestnik 27, 1976, 317‒536",
        "authors": "Teržan, B.",
        "year": 1976,
        "name": "Certoška fibula / Die Certosafibel",
        "publication": "Arheološki vestnik",
        "number": "27",
        "page": [
            "317",
            "536"
        ],
        "output": "/public/documents/output/Arheološki vestnik 27, 1976, 317‒536.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Arheološki vestnik 27, 1976, 317‒536.pdf",
        "image": img5,
        "size": "PDF, 32 MB"
    },
    {
        "file": "Arheološki vestnik 49, 1998, 157−186",
        "authors": "Mušič, B., L. Orengo",
        "year": 1998,
        "name": "Magnetometrične raziskave železnodobnega talilnega kompleksa na Cvingerju pri Meniški vasi / Magnetic Investigation of the Iron Age Iron‒Smelting Complex at Cvinger near Meniška vas",
        "publication": "Arheološki vestnik",
        "number": "49",
        "page": [
            "157",
            "186"
        ],
        "output": "/public/documents/output/Arheološki vestnik 49, 1998, 157−186.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Arheološki vestnik 49, 1998, 157−186.pdf",
        "image": img6,
        "size": "PDF, 6 MB"
    },
    {
        "file": "Arheološki vestnik 55, 2004, 207–250",
        "authors": "Dular, J., B. Križ",
        "year": 2004,
        "name": "Železnodobno naselje na Cvingerju pri Dolenjskih Toplicah / Eisenzeitliche Siedlung auf dem Cvinger bei Dolenjske Toplice",
        "publication": "Arheološki vestnik",
        "number": "55",
        "page": [
            "207",
            "255"
        ],
        "output": "/public/documents/output/Arheološki vestnik 55, 2004, 207–250.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Arheološki vestnik 55, 2004, 207–250.pdf",
        "image": img7,
        "size": "PDF, 13 MB"
    },
    {
        "file": "Arheološki vestnik 71, 529‒554",
        "authors": "Črešnar, M. et al.",
        "full_authors": "Črešnar, M., B. Mušič, B. Horn, M. Vinazza, T. Leskovar, Samuel E. Harris, Catherine M. Batt, N. Dolinar",
        "year": 2020,
        "name": "Interdisciplinary research of the Early Iron Age iron production centre Cvinger near Dolenjske Toplice (Slovenia) / Interdisciplinarne raziskave železarskega središča Cvinger pri Dolenjskih Toplicah iz starejše železne dobe",
        "publication": "Arheološki vestnik",
        "number": "71",
        "page": [
            "529",
            "554"
        ],
        "output": "/public/documents/output/Arheološki vestnik 71, 529‒554.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Arheološki vestnik 71, 529‒554.pdf",
        "image": img8,
        "size": "PDF, 17 MB"
    },
    {
        "file": "Cvinger in železnodobno železarstvo, Vitrina meseca 7, april 2018",
        "type": 2,
        "authors": "Basar, P. et al.",
        "month": "april",
        "year": 2018,
        "name": "katalog razstave. Projekt Vitrina meseca 7",
        "publication": "Cvinger in železnodobno železarstvo",
        "place": "Univerza v Ljubljani, Filozofska fakulteta, Knjižnica oddelka za arheologijo",
        "output": "/public/documents/output/Cvinger in železnodobno železarstvo, Vitrina meseca 7, april 2018.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Cvinger in železnodobno železarstvo, Vitrina meseca 7, april 2018.pdf",
        "image": img9,
        "size": "PDF, 8 MB"
    },
    {
        "file": "Dolenjski kras 7, 2017, 105‒117",
        "authors": "Pršina, M.",
        "year": 2017,
        "name": "Razkrita skrivnost jame na Cvingerju",
        "publication": "Dolenjski kras",
        "number": "7",
        "page": [
            "105",
            "117"
        ],
        "output": "/public/documents/output/Dolenjski kras 7, 2017, 105‒117.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Dolenjski kras 7, 2017, 105‒117.pdf",
        "image": img10,
        "size": "PDF, 1 MB"
    },
    {
        "file": "Dular, J. 2003, Halštatske nekropole Dolenjske",
        "authors": "Dular, J.",
        "year": 2003,
        "name": "Halštatske nekropole Dolenjske",
        "translation": "Die hallstattzeitlichen Nekropolen in Dolenjsko",
        "publication": "Opera Instituti archaeologici Sloveniae",
        "number": "6",
        "output": "/public/documents/output/Dular, J. 2003, Halštatske nekropole Dolenjske.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Dular, J. 2003, Halštatske nekropole Dolenjske.pdf",
        "image": img11,
        "size": "PDF, 48 MB"
    },
    {
        "file": "Izvestja muzejskega društva za Kranjsko 14, 1904",
        "authors": "Pečnik, J.",
        "year": 1904,
        "name": "Prazgodovinska najdišča na Kranjskem",
        "publication": "Izvestja Muzejskega društva za Kranjsko",
        "number": "14",
        "part": [
            1,
            2
        ],
        "page": [
            "34",
            "35"
        ],
        "output": "/public/documents/output/Izvestja muzejskega društva za Kranjsko 14, 1904.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Izvestja muzejskega društva za Kranjsko 14, 1904.pdf",
        "image": img12,
        "size": "PDF, 5 MB"
    },
    {
        "file": "Izvestja muzejskega društva za Kranjsko 8, 1898",
        "authors": "Rutar, S.",
        "year": 1898,
        "name": "Prazgodovinske izkopine pri Toplicah na Dolenjskem",
        "publication": "Izvestja Muzejskega društva za Kranjsko",
        "number": "8, 3",
        "page": [
            "102",
            "103"
        ],
        "output": "/public/documents/output/Izvestja muzejskega društva za Kranjsko 8, 1898.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Izvestja muzejskega društva za Kranjsko 8, 1898.pdf",
        "image": img13,
        "size": "PDF, 3 MB"
    },
    {
        "file": "Izvestja Muzejskega društva za Kranjsko 9, 1899",
        "authors": "Rutar, S.",
        "year": 1899,
        "name": "Prazgodovinske izkopine na Dolenjskem",
        "publication": "Izvestja Muzejskega društva za Kranjsko",
        "number": "9, 1",
        "page": [
            "36"
        ],
        "output": "/public/documents/output/Izvestja Muzejskega društva za Kranjsko 9, 1899.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Izvestja Muzejskega društva za Kranjsko 9, 1899.pdf",
        "image": img14,
        "size": "PDF, 4 MB"
    },
    {
        "file": "Jutro, ponedeljska izdaja, 2. sept. 1935, št. 202a, 2",
        "type": 1,
        "day": "2.",
        "month": "sept.",
        "year": 1935,
        "name": "Jutro, ponedeljska izdaja",
        "number": "št. 202a",
        "page": [
            "2"
        ],
        "output": "/public/documents/output/Jutro, ponedeljska izdaja, 2. sept. 1935, št. 202a, 2.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Jutro, ponedeljska izdaja, 2. sept. 1935, št. 202a, 2.pdf",
        "image": img15,
        "size": "PDF, 5 MB"
    },
    {
        "file": "Mlekuž. D., Črešnar M. 2019, Early Iron Age cultural landscapes, str. 221-240",
        "authors": "Mlekuž, D., M. Črešnar",
        "year": 2019,
        "name": "Early Iron Age cultural landscapes: case studies from the Poštela and Cvinger (Eastern Slovenia)",
        "secondary_author": "V: M. Črešnar, M. Mele (ur.)",
        "publication": "Early Iron Age landscapes of the Danube region",
        "place": "Archaeolingua, Budapest, Graz",
        "page": [
            "221",
            "240"
        ],
        "output": "/public/documents/output/Mlekuž. D., Črešnar M. 2019, Early Iron Age cultural landscapes, str. 221-240.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Mlekuž. D., Črešnar M. 2019, Early Iron Age cultural landscapes, str. 221-240.pdf",
        "image": img16,
        "size": "PDF, 1 MB"
    },
    {
        "file": "Muellner, A. 1909, Geschichte des Eisens, str. 71",
        "authors": "Müllner, A.",
        "year": 1909,
        "publication": "Geschichte des Eisens in Krain, Görz und Istrien",
        "page": [
            "str. 71"
        ],
        "output": "/public/documents/output/Muellner, A. 1909, Geschichte des Eisens, str. 71.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Muellner, A. 1909, Geschichte des Eisens, str. 71.pdf",
        "image": img17,
        "size": "PDF, 15 MB"
    },
    {
        "file": "Naše jame 33, 1991",
        "authors": "Hudoklin, A.",
        "year": 1991,
        "name": "Skrivnost jame na Cvingerju",
        "publication": "Naše jame",
        "number": "33",
        "page": [
            "108",
            "109"
        ],
        "output": "/public/documents/output/Naše jame 33, 1991.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Naše jame 33, 1991.pdf",
        "image": img18,
        "size": "PDF, 8 MB"
    },
    {
        "file": "Varstvo spomenikov 23, 1981",
        "authors": "Breščak, D.",
        "year": 1981,
        "name": "Meniška vas",
        "publication": "Varstvo spomenikov",
        "number": "23",
        "page": [
            "214"
        ],
        "output": "/public/documents/output/Varstvo spomenikov 23, 1981.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Varstvo spomenikov 23, 1981.pdf",
        "image": img19,
        "size": "PDF, 52 MB"
    },
    {
        "file": "Varstvo spomenikov 29, 1987",
        "authors": "Križ, B.",
        "year": 1987,
        "name": "Cvinger",
        "publication": "Varstvo spomenikov",
        "number": "29",
        "page": [
            "240",
            "241"
        ],
        "output": "/public/documents/output/Varstvo spomenikov 29, 1987.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Varstvo spomenikov 29, 1987.pdf",
        "image": img20,
        "size": "PDF, 70 MB"
    },
    {
        "file": "Varstvo spomenikov 30, 1988",
        "authors": "Križ, B.",
        "year": 1988,
        "quarter": "b",
        "name": "Cvinger pri Dol. Toplicah",
        "publication": "Varstvo spomenikov",
        "number": "30",
        "page": [
            "211",
            "213"
        ],
        "output": "/public/documents/output/Varstvo spomenikov 30, 1988.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Varstvo spomenikov 30, 1988.pdf",
        "image": img21,
        "size": "PDF, 70 MB"
    },
    {
        "file": "Varstvo spomenikov 31, 1989",
        "authors": "Križ, B.",
        "year": 1989,
        "name": "Cvinger pri Dol. Toplicah",
        "publication": "Varstvo spomenikov",
        "number": "31",
        "page": [
            "210"
        ],
        "output": "/public/documents/output/Varstvo spomenikov 31, 1989.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Varstvo spomenikov 31, 1989.pdf",
        "image": img22,
        "size": "PDF, 61 MB"
    },
    {
        "file": "Varstvo spomenikov 32, 1990",
        "authors": "Križ, B.",
        "year": 1990,
        "quarter": "b",
        "name": "Cvinger pri Dolenjskih Toplicah",
        "publication": "Varstvo spomenikov",
        "number": "32",
        "page": [
            "152"
        ],
        "output": "/public/documents/output/Varstvo spomenikov 32, 1990.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Varstvo spomenikov 32, 1990.pdf",
        "image": img23,
        "size": "PDF, 50 MB"
    },
    {
        "file": "Varstvo spomenikov 33, 1991",
        "authors": "Križ, B.",
        "year": 1991,
        "name": "Cvinger – Dolenjske Toplice",
        "publication": "Varstvo spomenikov",
        "number": "33",
        "page": [
            "204",
            "205"
        ],
        "output": "/public/documents/output/Varstvo spomenikov 33, 1991.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Varstvo spomenikov 33, 1991.pdf",
        "image": img24,
        "size": "PDF, 61 MB"
    },
    {
        "file": "Varstvo spomenikov 34, 1992",
        "authors": "Križ, B.",
        "year": 1992,
        "name": "Arheološko območje Cvinger",
        "publication": "Varstvo spomenikov",
        "number": "34",
        "page": [
            "81",
            "90"
        ],
        "output": "/public/documents/output/Varstvo spomenikov 34, 1992.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Varstvo spomenikov 34, 1992.pdf",
        "image": img25,
        "size": "PDF, 63 MB"
    },
    {
        "file": "Zhuber, P. 1900, Zdravišče Toplice na Kranjskem",
        "authors": "Zhuber Pl. Okrog, P.",
        "year": 1900,
        "publication": "Zdravišče Toplice na Kranjskem. Kranjski Gaštajn. Gorke in grezne kopeli",
        "page": [
            "str. 8"
        ],
        "output": "/public/documents/output/Zhuber, P. 1900, Zdravišče Toplice na Kranjskem.jpg",
        "path": "https://lukaprsina.github.io/cvinger.net/documents/literatura/Zhuber, P. 1900, Zdravišče Toplice na Kranjskem.pdf",
        "image": img26,
        "size": "PDF, 3 MB"
    }
]
export default data