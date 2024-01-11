interface PrimaryLanguage {
  name: string;
}

interface Repository {
  description: string;
  name: string;
  primaryLanguage: PrimaryLanguage;
  updatedAt: string;
  url: string;
}
