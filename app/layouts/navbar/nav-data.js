import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'linkedin',
    url: `${config.linkedin}`,
    icon: 'linkedin',
  },
  {
    label: 'behance',
    url: `${config.behance}`,
    icon: 'behance',
  },
  {
    label: 'Github',
    url: `${config.github}`,
    icon: 'github',
  },
];
