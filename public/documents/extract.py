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

typescript = """type DataProps = {
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
        image: StaticImageData
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

        entry["output"] = "/public/documents/output/" + entry["file"] + ".jpg"
        entry["path"] = "/documents/literatura/" + entry["file"] + ".pdf"
        entry["image"] = f"img{counter}"

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

'''
raise Exception("Stopped")

pathlist = Path("literatura").rglob('*.pdf')
for path in pathlist:
    path_in_str = str(path)
    print("Working on " + path_in_str)

    doc = fitz.open(path_in_str)
    page = doc.loadPage(0)  # number of page
    pix = page.get_pixmap()
    output = path.stem + ".jpg"
    pix.save(Path("output") / output)
    paths.append(output)
    urls.append(path_in_str)

paths.sort()
print("Writing paths.txt")
i = 0
# save paths to a text file
with open("paths.txt", "w", encoding="utf-8") as f:
    for path in paths:
        try:
            f.write(f"import img{i} from \"/public/documents/output/" +
                    path.replace("\\", "/") + "\"\n")
            i += 1

        except:
            f.write("// missing\n")
            print("Could not write to file")

    max = i
    f.write("\n" * 3)

    for i in range(0, max):
        f.write("{image: img" + str(i) +
                ", text: \"" + str(paths[i]) +
                "\", path: \"/documents/" + str(urls[i]).replace("\\", "/") + "\"},\n")
'''


'''
    {
        "file": "Odlok o razglasitvi kulturnih spomenikov Dolenjske Toplice",
        "ignore": true
    },
'''
