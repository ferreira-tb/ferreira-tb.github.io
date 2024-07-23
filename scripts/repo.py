import json
import os
import subprocess


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
    get("ferreira-tb/eslint-config"),
    get("ferreira-tb/ferreira-tb.github.io"),
    get("ferreira-tb/kotori"),
    get("ferreira-tb/manatsu"),
    get("ferreira-tb/miho"),
    get("ferreira-tb/tauri-plugin-pinia"),
    get("ferreira-tb/tauri-plugin-prevent-default"),
    get("ferreira-tb/template-tauri"),
]

repos.sort(key=lambda repo: repo["stargazerCount"], reverse=True)

path = os.path.join(os.getcwd(), "public/data/repos.json")
with open(path, "w") as file:
    json.dump(repos, file)
