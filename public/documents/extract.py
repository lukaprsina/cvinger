from pathlib import Path
import os
import fitz

os.chdir("public/documents")

Path("output").mkdir(exist_ok=True)
paths = []
urls = []

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
