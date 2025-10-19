// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'cmumme', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ["cmumme", "FingerprintTest"], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        projects: ["XboxWheelCompatibility", "GeigerSat2", "DuinoMine", "matter-bootstrap"],
      }
    },
    external: {
      header: 'My Work',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'The Grand Crossing',
          description:
            'A Roblox roleplay game, focusing on immersive gameplay and community interaction. I worked within the game\'s years-old, codebase performing codebase cleanliness tasks, hot fixes, and implementing new features that required an in-depth understanding of a foreign, complex, and fragmented codebase.',
          imageUrl:
            '/img/tgc-thumbnail.webp',
          link: 'https://www.roblox.com/games/885450884/The-Grand-Crossing-Border-RP',
        },
        {
          title: 'Stargate Horizons',
          description:
            'A Roblox sci-fi adventure game based on the Stargate franchise. As a Senior Developer, I lead the development team in creating new gameplay features, optimizing performance, and ensuring a smooth user experience. My role involves collaborating with designers, artists, and the community to bring the Stargate universe to life within the game.',
          imageUrl:
            '/img/sgh-thumbnail.webp',
          link: 'https://www.roblox.com/games/3901984129/Stargate-Horizons',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Camren M', description: '', imageURL: '' },
  social: {
    linkedin: '',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://info.camrenmum.me',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '',
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'Express',
    'Koa',
    'React.js',
    'Node.js',
    'Next.js',
    'Firebase',
    'Git',
    'Docker',
    'Unity',
    'Roblox',
    'CSS',
    'C#',
    'Rojo'
  ],
  experiences: [
    {
      company: "Stargate Horizons",
      position: "Senior Developer",
      from: "July 2022",
      to: "Present",
      companyLink: "https://discord.gg/KWE9j87YHZ"
    },
    {
      company: "Venture Corporation",
      position: "Programmer",
      from: "August 2024",
      to: "Present",
      companyLink: "https://discord.gg/dBxQyBG"
    }
  ],
  certifications: [],
  educations: [],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
