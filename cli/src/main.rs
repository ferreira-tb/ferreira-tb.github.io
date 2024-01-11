use anyhow::{bail, Result};
use clap::Parser;
use miho::gh;
use std::env;
use std::fs;

const REPOSITORIES: [&str; 2] = ["manatsujs/manatsu", "ferreira-tb/miho"];

#[derive(Debug, Parser)]
#[command(name = "tbdev")]
#[command(version, about, long_about = None)]
enum Cli {
  Repo,
}

fn main() -> Result<()> {
  let cli = Cli::parse();

  match cli {
    Cli::Repo => {
      let mut repos = String::from("[");
      for repo in REPOSITORIES {
        let info = get_repo_info(repo)?;
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
  }
}

fn get_repo_info(name: &str) -> Result<String> {
  let fields = "name,description,url,languages,primaryLanguage,updatedAt";
  let args = vec!["repo", "view", name, "--json", fields];
  let output = gh!(args)?;

  if !output.status.success() {
    eprintln!("{}", String::from_utf8(output.stderr)?);
    bail!("Failed to get repo info");
  }

  let stdout = String::from_utf8(output.stdout)?;
  Ok(stdout)
}
