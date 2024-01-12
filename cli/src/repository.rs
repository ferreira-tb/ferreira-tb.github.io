use anyhow::{bail, Result};
use miho::gh;
use serde::{Deserialize, Serialize};
use std::env;
use std::fs;

const REPOSITORIES: [&str; 2] = ["manatsujs/manatsu", "ferreira-tb/miho"];

#[derive(Deserialize, Serialize)]
#[serde(rename_all(serialize = "snake_case", deserialize = "camelCase"))]
struct LanguageNode {
  name: String,
}

#[derive(Deserialize, Serialize)]
#[serde(rename_all(serialize = "snake_case", deserialize = "camelCase"))]
struct Language {
  size: usize,
  node: LanguageNode,
}

#[derive(Deserialize, Serialize)]
#[serde(rename_all(serialize = "snake_case", deserialize = "camelCase"))]
struct RepositoryInfo {
  name: String,
  description: String,
  updated_at: String,
  url: String,
  languages: Vec<Language>,
  primary_language: Option<LanguageNode>,
}

fn get_info(name: &str) -> Result<String> {
  let fields = "name,description,url,languages,primaryLanguage,updatedAt";
  let args = vec!["repo", "view", name, "--json", fields];
  let output = gh!(args)?;

  if !output.status.success() {
    eprintln!("{}", String::from_utf8(output.stderr)?);
    bail!("Failed to get repo info");
  }

  let stdout = String::from_utf8(output.stdout)?;
  let info: RepositoryInfo = serde_json::from_str(&stdout)?;
  Ok(serde_json::to_string(&info)?)
}

pub fn update() -> Result<()> {
  let mut repos = String::from("[");
  for repo in REPOSITORIES {
    let info = get_info(repo)?;
    repos.push_str(&info);

    if matches!(REPOSITORIES.last(), Some(last) if last == &repo) {
      repos.push_str("]");
    } else {
      repos.push_str(",");
    }
  }

  let public = env::current_dir()?.join("public");
  let path = public.join("data").join("repos.json");
  fs::write(path, repos)?;
  Ok(())
}