import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Delon Satria Wongsodirejo — Tarumanagara University",
  author: "Delon Satria Wongsodirejo",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/Delon pic.jpg",
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
      company: "Dewan Perwakilan Mahasiswa FTI",
      position: "Several Work Program Divisions",
      startDate: "July 2024",
      endDate: "July 2025",
      summary: [
        "Legislative Training (leadership training) - as a participant.",
        "Forlema (student organization forum) - as part of publication and documentation.",
        "Rakerma (student work meeting) - as equipment division.",
        "FTI Open House (opening party for faculty) - as part of publication and documentation.",
        "Legislative Training (leadership training) - as part of publication and documentation.",
        "Forkam (student communication forum) - as a treasurer.",
        "Studi Banding (come to another campus) - as publication and documentation’s coordinator.",
      ],
    },
  ],
  projects: [
    {
      name: "Menulis Esai",
      summary: "Masuk dalam 10 karya esai terfavorit se Jabodetabek.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/Sertifikat-Esai.jpeg",
    },
    {
      name: "Proker Legislative Training",
      summary: "Menjadi anggota divisi publikasi dan dokumentasi.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/Legislative-Training.png",
    },
    {
      name: "Membuat Aplikasi Reservasi",
      summary: "Membuat projek aplikasi reservasi layanan dan produk API kecantikan",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      Delon Satria Wongsodirejo is an Information Systems student at Tarumanagara University with a strong focus on data analytics, application development, and information technology. He enjoys learning new things, especially those related to data processing, information visualization, and the use of technology to support decision-making. 

      Delon is actively developing his skills in programming, database management, and project management. Motivated and adaptable, he is eager to continue learning and contributing to the evolving world of technology.
    `,
    image: "/Delon pic.jpg",
  },
};

// #5755ff
