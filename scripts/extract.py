from pathlib import Path
import os
import fitz
import re
import json

save_pdf = False

os.chdir("public/documents")
Path("output").mkdir(exist_ok=True)

data = {}

with open("names.json", "r", encoding="utf-8") as f:
    data = json.load(f)

typescript = """export type DataProps = {
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
"""

counter = 0
with open("Data.tsx", "w", encoding="utf-8") as f:
    for entry in data:
        path = Path("literatura/" + entry["file"] + ".pdf")
        path_in_str = str(path)
        output = Path("output/" + entry["file"] + ".jpg")

        print("Working on " + path_in_str)

        if not path.exists():
            print(f"File {path} not found")
            continue

        size_in_bytes = round(path.stat().st_size / 1024 / 1024)

        entry["output"] = "/public/documents/output/" + entry["file"] + ".jpg"
        entry["path"] = "https://lukaprsina.github.io/cvinger.net/documents/literatura/" + \
            entry["file"] + ".pdf"
        entry["image"] = f"img{counter}"
        entry["size"] = f"PDF, {size_in_bytes} MB"

        if save_pdf:
            doc = fitz.open(path_in_str)
            page = doc.loadPage(0)  # number of page
            pix = page.get_pixmap()
            pix.save(output)

        f.write(f"import img{counter} from \"" + entry["output"] + "\"\n")
        counter += 1

    f.write("\n" + typescript + "\nconst data: DataProps[] = ")
    json.dump(data, f, ensure_ascii=False, indent=4)
    f.write("\nexport default data")
