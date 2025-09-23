interface Repository {
  description: string;
  extraLanguages?: string[];
  languages: Language[];
  name: string;
  primaryLanguage?: LanguageNode;
  updatedAt: string;
  url: string;
}

interface Language {
  node: LanguageNode;
  size: number;
}

interface LanguageNode {
  name: string;
}
