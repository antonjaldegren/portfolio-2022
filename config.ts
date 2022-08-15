import { ProjectType } from './types';

export const SECTIONS = ['home', 'about', 'projects', 'contact'];
export const LINKS = {
  linkedin: 'https://www.linkedin.com/in/anton-jaldegren-3a79a6160/',
  github: 'https://github.com/antonjaldegren',
  facebook: 'https://www.facebook.com/anton.jaldegren',
  email: 'mailto:anton@jaldegren.dev',
  github_repos: 'https://api.github.com/users/antonjaldegren/repos',
  resume: '',
};
export type LinkKey = keyof typeof LINKS;
export const PROJECTS: ProjectType[] = [
  {
    name: 'Signing service',
    company: 'TellusTalk AB',
    description:
      'Web application used to send a document to recipients to make a legally valid signature attached to the document using different methods such as BankID and OTP. I was part of a Frontend team of 10 people. One of my responibilities was to create a custom Rich Text Editor using Slate.js to enable use of hashtags to trigger insertion of message variables to include unique personal data when sending the same message to multiple recipients ("#name" inserts the name of the specific individuals)',
    topics: [
      'React',
      'Vite',
      'React Bootstrap',
      'SASS',
      'Slate.js',
      'React Router',
      'i18next',
      'Bitbucket',
    ],
    img_url:
      'https://raw.githubusercontent.com/antonjaldegren/personal-portfolio/main/assets/exp-detail-1.jpg',
    html_url: '',
    homepage: '',
  },
];
