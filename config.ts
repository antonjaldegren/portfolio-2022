export const SECTIONS = ['home', 'about', 'projects', 'contact'];
export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/anton-jaldegren-3a79a6160/',
  github: 'https://github.com/antonjaldegren',
  facebook: 'https://www.facebook.com/anton.jaldegren',
  email: 'mailto:anton@jaldegren.dev',
  github_repos: 'https://api.github.com/users/antonjaldegren/repos',
  resume: 'https://drive.google.com/file/d/1Ck78DVMeICxWOJKpQuIKexwd4G1QVBKu/view?usp=sharing',
};
export type LinkKey = keyof typeof LINKS;
export type ProjectType = {
  name: string;
  company?: string;
  description: string;
  topics: string[];
  img_url: string;
  html_url: string;
  homepage: string;
};
