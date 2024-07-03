import json
import os
import subprocess
from os import path
from subprocess import CalledProcessError


def get_info(name: str, extra_langs: list[str] = []):
    fields = "name,description,url,languages,primaryLanguage,updatedAt"

    try:
        output = subprocess.run(
            ["gh", "repo", "view", name, "--json", fields],
            capture_output=True,
            check=True,
            text=True,
        )
    except CalledProcessError as err:
        print(err.stderr)
        raise

    info = json.loads(output.stdout)
    info["extraLanguages"] = extra_langs
    print(info)
    return info


repos = [
    get_info("ferreira-tb/kotori"),
    get_info("ferreira-tb/miho"),
    get_info("ferreira-tb/tauri-plugin-prevent-default"),
]

file_path = path.join(os.getcwd(), "public/data/repos.json")
with open(file_path, "w") as file:
    json.dump(repos, file)
    print(f"Updated {file_path}")
