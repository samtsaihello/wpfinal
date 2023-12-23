export type User = {
  id: string;
  username: string;
  email: string;
  provider: "github" | "credentials";
};

export type Document = {
  id: string;
  title: string;
  content: string;
};

export type Books = {
  id: string;
  title: string;
  description: string;
  language: string;
  publicize: boolean;
  popularity: number;
};

export type BooksCreate = Omit<Books, "id" | "popularity">;

export type BooksUpdate = Partial<Omit<Books, "id">>;

export type Words = {
  id: string;
  content: string;
  meaning: string;
  familarity: number;
};

export type WordsCreate = Omit<Words, "id" | "familarity">;

export type WordsUpdate = Partial<Omit<Words, "id">>;
