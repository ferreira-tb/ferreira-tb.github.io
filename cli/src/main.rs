mod repository;

use anyhow::Result;
use clap::Parser;

#[derive(Debug, Parser)]
#[command(name = "tbdev")]
#[command(version, about, long_about = None)]
enum Cli {
  Repo,
}

fn main() -> Result<()> {
  let cli = Cli::parse();

  match cli {
    Cli::Repo => repository::update(),
  }
}
