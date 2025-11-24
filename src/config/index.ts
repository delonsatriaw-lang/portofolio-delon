import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Delon Satria Wongsodirejo — Tarumanagara University",
  author: "Alejandro Múnez Cuntez",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/Delon Pic.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Delon Satria Wongsodirejo",
    specialty: "Tarumanagara University",
    summary:
      "Im Information System student in Tarumanagara University. I specialize in Web Development and UI/UX Design..",
    email: "delonsatriaw@gmail.com",
  },
  experience: [
    {
      company: "Dewan Perwakilan Mahasiswa FTI",
      position: "Public Relation Member",
      startDate: "July 2024",
      endDate: "July 2025",
      summary: [
        "Managed and maintained communication between the student body and the Faculty of Information Technology through social media platforms.",
        "Created and edited digital design materials for organizational events and announcements.",
        "Collaborated with other departments to coordinate faculty events and student engagement programs.",
        "Assisted in developing creative content strategies to enhance the organization’s online presence.",
      ],
    },
    {
      company: "Bankit",
      position: "Mobile Developer",
      startDate: "Feb 2017",
      endDate: "May 2018",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Driveer",
      position: "Frontend Developer",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "Spotifu Music",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      I'm an Information Systems student with a strong interest in data analytics, application development, and information technology. I enjoy learning new things, especially those related to data processing, information visualization, and the use of technology to support decision-making. 

      I am also developing my skills in programming, database management, and project management through academic coursework and personal projects. Motivated and adaptable, I am eager to keep learning and contribute to the continuously evolving world of technology.
    `,
    image: "/Delon Pic.jpg",
  },
};

// #5755ff
