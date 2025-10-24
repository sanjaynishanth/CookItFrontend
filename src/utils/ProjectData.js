// utils/ProjectData.js
import kadamban from "../assets/kadamban.png";
import KV from "../assets/kvmedia.png";
import botfolio from "../assets/botfolio.png";
import Homyz from "../assets/RealEstate.png";

const projectsData = [
  // --- 🌐 WEBSITE PROJECTS ---
  {
    id: 1,
    title: "Kadamban",
    category: "Website",
    tags: ["UI/UX", "Real Estate"],
    image: kadamban,
    description:
      "An elegant real estate website showcasing premium properties with a seamless browsing experience.",
    link: "https://kadambangroup.com/",
  },
  {
    id: 2,
    title: "KV Media Works",
    category: "Website",
    tags: ["React", "UI/UX"],
    image: KV,
    description:
      "A sleek portfolio site for a media agency, crafted with precision to highlight creativity and brand identity.",
    link: "https://kvmediaworks.me/",
  },
  {
    id: 3,
    title: "Botfolio",
    category: "Website",
    tags: ["React", "Node.js", "Database"],
    image: botfolio,
    description:
      "A modern developer portfolio platform designed to showcase technical expertise.",
    link: "https://botfolio.dev/",
  },
  {
    id: 4,
    title: "Homyz",
    category: "Website",
    tags: ["UI/UX"],
    image: Homyz,
    description:
      "A minimalistic real estate web app delivering a smooth, responsive experience for property discovery.",
    link: "https://homyz-react.netlify.app/",
  },

  // --- 🎥 DOCTOR CLIENT VIDEOS ---
  {
    id: 5,
    title: "Doctor Shorts 1",
    category: "Video",
    subcategory: "Doctor",
    tags: ["Health", "Reel", "Shorts"],
    image: "https://img.youtube.com/vi/tC-kzU13EAQ/hqdefault.jpg",
    link: "https://youtube.com/shorts/tC-kzU13EAQ?feature=share",
  },
  {
    id: 6,
    title: "Doctor Shorts 2",
    category: "Video",
    subcategory: "Doctor",
    tags: ["Medical", "Social Media"],
    image: "https://img.youtube.com/vi/unOfxfiSPeg/hqdefault.jpg",
    link: "https://youtube.com/shorts/unOfxfiSPeg?feature=share",
  },
  {
    id: 7,
    title: "Doctor Shorts 3",
    category: "Video",
    subcategory: "Doctor",
    tags: ["Awareness", "Short-form"],
    image: "https://img.youtube.com/vi/3Hxsrtt7WYw/hqdefault.jpg",
    link: "https://youtube.com/shorts/3Hxsrtt7WYw?feature=share",
  },
  {
    id: 8,
    title: "Doctor Shorts 4",
    category: "Video",
    subcategory: "Doctor",
    tags: ["Clinic", "Health"],
    image: "https://img.youtube.com/vi/8l3dvadDxeA/hqdefault.jpg",
    link: "https://youtube.com/shorts/8l3dvadDxeA?feature=share",
  },
  {
    id: 9,
    title: "Doctor Shorts 5",
    category: "Video",
    subcategory: "Doctor",
    tags: ["Reel", "Doctor"],
    image: "https://img.youtube.com/vi/8RAIWtcgeXk/hqdefault.jpg",
    link: "https://youtube.com/shorts/8RAIWtcgeXk?feature=share",
  },
  {
    id: 10,
    title: "Doctor Shorts 6",
    category: "Video",
    subcategory: "Doctor",
    tags: ["Health", "Tips"],
    image: "https://img.youtube.com/vi/fUqfDoYaJwc/hqdefault.jpg",
    link: "https://youtube.com/shorts/fUqfDoYaJwc?feature=share",
  },
  {
    id: 11,
    title: "Doctor Shorts 7",
    category: "Video",
    subcategory: "Doctor",
    tags: ["Doctor", "Awareness"],
    image: "https://img.youtube.com/vi/l_8zUejsRSM/hqdefault.jpg",
    link: "https://youtube.com/shorts/l_8zUejsRSM?feature=share",
  },
  {
    id: 12,
    title: "Doctor Shorts 8",
    category: "Video",
    subcategory: "Doctor",
    tags: ["Clinic", "Social Media"],
    image: "https://img.youtube.com/vi/Qv0wBiVCovs/hqdefault.jpg",
    link: "https://youtube.com/shorts/Qv0wBiVCovs?feature=share",
  },
  {
    id: 13,
    title: "Doctor Shorts 9",
    category: "Video",
    subcategory: "Doctor",
    tags: ["Healthcare", "Reel"],
    image: "https://img.youtube.com/vi/m8wiClGXXco/hqdefault.jpg",
    link: "https://youtube.com/shorts/m8wiClGXXco?feature=share",
  },

  // --- 🎬 OTHER DOMAIN VIDEOS ---
  {
    id: 14,
    title: "Product Launch Short",
    category: "Video",
    subcategory: "Other",
    tags: ["Commercial", "Brand"],
    image: "https://img.youtube.com/vi/-_qW-CYaJSs/hqdefault.jpg",
    link: "https://youtube.com/shorts/-_qW-CYaJSs?feature=share",
  },
  {
    id: 15,
    title: "Event Highlight Reel",
    category: "Video",
    subcategory: "Other",
    tags: ["Event", "Promo"],
    image: "https://img.youtube.com/vi/HhFQOmu5UBM/hqdefault.jpg",
    link: "https://youtube.com/shorts/HhFQOmu5UBM?feature=share",
  },
  {
    id: 16,
    title: "Travel Vlog Teaser",
    category: "Video",
    subcategory: "Other",
    tags: ["Travel", "Cinematic"],
    image: "https://img.youtube.com/vi/HYSrpkh-H4M/hqdefault.jpg",
    link: "https://youtube.com/shorts/HYSrpkh-H4M?feature=share",
  },
  {
    id: 17,
    title: "Tech Product Ad",
    category: "Video",
    subcategory: "Other",
    tags: ["Technology", "Ad"],
    image: "https://img.youtube.com/vi/0UOaIE39fQY/hqdefault.jpg",
    link: "https://youtube.com/shorts/0UOaIE39fQY?feature=share",
  },
  {
    id: 18,
    title: "Cultural Promo Clip",
    category: "Video",
    subcategory: "Other",
    tags: ["Culture", "Shorts"],
    image: "https://img.youtube.com/vi/bDkpuahX7LU/hqdefault.jpg",
    link: "https://youtube.com/shorts/bDkpuahX7LU?feature=share",
  },
  {
    id: 19,
    title: "Startup Ad Reel",
    category: "Video",
    subcategory: "Other",
    tags: ["Startup", "Branding"],
    image: "https://img.youtube.com/vi/L0l6SIIvRW0/hqdefault.jpg",
    link: "https://youtube.com/shorts/L0l6SIIvRW0?feature=share",
  },
];

export default projectsData;
