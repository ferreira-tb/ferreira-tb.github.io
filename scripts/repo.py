import json
import os
import subprocess
from os import path
from subprocess import CalledProcessError


def get(name: str, extra_langs: list[str] = []):
    fields = "name,description,url,languages,primaryLanguage,updatedAt,stargazerCount"
    output = subprocess.run(
        ["gh", "repo", "view", name, "--json", fields],
        capture_output=True,
        check=True,
        text=True,
    )

    info = json.loads(output.stdout)
    info["extraLanguages"] = extra_langs
    print(info)
    return info


repos = [
    get("ferreira-tb/kotori"),
    get("ferreira-tb/miho"),
    get("ferreira-tb/tauri-plugin-prevent-default"),
]

file_path = path.join(os.getcwd(), "public/data/repos.json")
with open(file_path, "w") as file:
    json.dump(repos, file)
    print(f"Updated {file_path}")
