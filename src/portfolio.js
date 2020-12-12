/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Mayank Monani",
  logo_name: "MayankMonani",
  nickname: "mynk",
  subTitle:
    "A passionate individual who thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/186UF9EdPOKL_2BsMI-rKKxj6sXvW88pH/view?usp=sharing",
  portfolio_repository: "https://github.com/mayankmonani7/mynk_portfolio",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/mayankmonani7",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mayank-monani-5670a81a0/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:mayankmonani7@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

  {
    name: "Facebook",
    link: "https://www.facebook.com/mayank.monani.50/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/oye_mynk/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Completed some data science courses",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React",
        "⚡ Creating application backend in Node and Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/mayankmonani7",
    },

    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/mayankmonani",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National Institute of Technology",
      subtitle: "B.Tech. in Production Engineering",
      logo_path: "High-Resolution-Emblem.png",
      alt_name: "NIT Trichy",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science and Web Development.",
        "⚡ CGPA : 8.7 ( Till 2nd Semester)",
      ],
      website_link: "https://www.nitt.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/7KTMLP3HBZWF",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/AED3HXU24XK6",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Position of Responsibility",
  description:
    "I love organising events and that is why I am also involved with many communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Position of Responsibility",
      experiences: [
        {
          title: "SIGMA - The Business Club of NITT",
          company: "Member of Business Analyst and Case Study Team",
          company_url: "https://www.sigma.nitt.edu",
          logo_path: "sigma.png",
          duration: "Sep 2020 – Present",
          location: "Trichy, TN",
          description:
            "⚡ As a team we participated in many Data Science/Analyst and Case Study competitions by forming teams of 2-4 student. ⚡ Learning Data Science/Analyst by helping others.⚡ I was incharge of smooth handling and participation in events.",
          color: "#4285F4",
        },
        {
          title: "Film Society of NITT",
          company: "Video Editor",
          company_url:
            "https://www.facebook.com/filmsocietynitt/?ref=page_internal",
          logo_path: "fsoc.jpeg",
          duration: "Mar 2020 - Present",
          location: "Trichy, TN",
          description:
            "⚡ As a Video Editor, I had responsibility of editing short films shot by our society. ⚡ Actively approached various actors and directors to have an interview and share a word with us. ⚡Responsibility of smooth handling of online presence.",
          color: "#D83B01",
        },
        {
          title: "NITTFEST",
          company: "Graphic Designer",
          company_url: "https://www.facebook.com/NITTFEST/",
          logo_path: "nittfest.png",
          duration: "Jan 2020 - Present",
          location: "Trichy, TN",
          description:
            "⚡ Responsible for making posters, visual/animated content of NITTFEST. ⚡Worked with a team of 12 students. ⚡ Handled online presence and published content of NITTFEST.",
          color: "#000000",
        },
        {
          title: "TECHNICHE",
          company: "TechRep.",
          company_url: "https://techniche.org/?mode=dark",
          logo_path: "techniche.png",
          duration: "Oct 2019 - Oct 2020",
          location: "IIT, Guwahati",
          description:
            "⚡ Responsibility of publicizing TECHNICHE (Oficial Techfest of IIT,Guwahati) in NIT, Trichy. ⚡ Point of Contact of all the events organized by IIT, Guwahati in NIT, Trichy.",
          color: "#0C9D58",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "Still furnishing the basics.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mynk.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://bucketninjas.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Saraswati Colony No.2, Tq. Georai, Dist.-Beed, Maharashtra- 431127",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/BUSgMVYLsZWV6bN46",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8237733582",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
