export interface Portfolio {
  _id?: string;

  user?: {
    name: string;
    username: string;
    email: string;
    avatar: string;
  };

  title: string;

  about: string;

  skills: string[];

  projects: {
    title: string;
    description: string;
    github: string;
    liveDemo: string;
  }[];

  education: {
    university: string;
    degree: string;
    graduationYear: number;
  }[];

  experience: {
    company: string;
    role: string;
    duration: string;
    description: string;
  }[];

  socialLinks: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };

  createdAt?: string;
  updatedAt?: string;
}