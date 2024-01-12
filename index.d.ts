interface LanguageNode {
  name: string;
}

interface Language {
  node: LanguageNode;
  size: number;
}

interface Repository {
  description: string;
  languages: Language[];
  name: string;
  primaryLanguage?: LanguageNode;
  updatedAt: string;
  url: string;
}
