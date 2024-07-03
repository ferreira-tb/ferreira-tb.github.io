import { icons } from '@/lib/icons';

export async function getRepositories() {
  const response = await fetch('/data/repos.json');
  const repositories: Repository[] = await response.json();

  for (const repository of repositories) {
    repository.languages = repository.languages.filter((lang) => {
      const icon = icons[parseLanguageName(lang.node.name)];
      return Boolean(icon);
    });

    repository.languages.sort((a, b) => b.size - a.size);
  }

  return repositories;
}

export function parseLanguageName(name: string) {
  let lang = name.trim().toLowerCase();
  if (lang === 'scss') lang = 'sass';
  return lang;
}
