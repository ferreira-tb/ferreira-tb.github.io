interface Language {
  node: LanguageNode;
  size: number;
}

interface LanguageNode {
  name: string;
}

interface Repository {
  description: string;
  languages: Language[];
  name: string;
  primaryLanguage: LanguageNode;
  updatedAt: string;
  url: string;
}
