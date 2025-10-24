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
    // --- FEATURED VIDEO PROJECTS (Doctor Clients - First 12) ---
    {
        id: 2,
        title: "Pediatric Clinic Intro",
        category: "Video",
        tags: ["Client Testimonial", "30-Sec Ad"],
        image: "https://placehold.co/400x600/44403C/F8FAFC?text=PEDS+CLINIC",
        description: "A welcoming video to introduce a new local pediatric practice."
    },
    {
        id: 4,
        title: "Orthopedic Surgery Explainer",
        category: "Video",
        tags: ["Animation", "Medical", "Explainer"],
        image: "https://placehold.co/400x600/44403C/F8FAFC?text=SURGERY+EXPLAINER",
        description: "Detailed animation explaining a common orthopedic procedure to patients."
    },
    {
        id: 5,
        title: "Dental Practice - Office Tour",
        category: "Video",
        tags: ["Office Tour", "Patient Care"],
        image: "https://placehold.co/400x600/44403C/F8FAFC?text=DENTAL+TOUR",
        description: "A modern, engaging tour of a newly renovated family dental clinic."
    },
    {
        id: 7,
        title: "Cardiologist's Health Tips",
        category: "Video",
        tags: ["Short-form", "Social Media"],
        image: "https://placehold.co/400x600/44403C/F8FAFC?text=CARDIOLOGY+TIPS",
        description: "A series of quick health tips for social media, presented by the doctor."
    },
    {
        id: 8,
        title: "Rehab Center Success Story",
        category: "Video",
        tags: ["Success Story", "Interview"],
        image: "https://placehold.co/400x600/44403C/F8FAFC?text=REHAB+STORY",
        description: "An emotional patient interview showcasing the center's successful recovery program."
    },
    {
        id: 9,
        title: "Dermatology Q&A Reel",
        category: "Video",
        tags: ["Instagram", "Vertical"],
        image: "https://placehold.co/400x600/44403C/F8FAFC?text=DERMA+Q%26A",
        description: "Fast-paced Q&A video answering frequently asked questions about skin health."
    },
    {
        id: 10,
        title: "Veterinary Hospital Grand Opening",
        category: "Video",
        tags: ["Event Coverage", "Branding"],
        image: "https://placehold.co/400x600/44403C/F8FAFC?text=VET+OPENING",
        description: "Coverage of the ribbon-cutting and community event for a new vet hospital."
    },
    {
        id: 11,
        title: "Plastic Surgeon Consultation Ad",
        category: "Video",
        tags: ["Before/After", "Marketing"],
        image: "https://placehold.co/400x600/44403C/F8FAFC?text=SURGEON+CONSULT",
        description: "A professional advertisement promoting personalized consultation services."
    },
    {
        id: 12,
        title: "General Practitioner - Why Choose Us?",
        category: "Video",
        tags: ["Mission", "Staff Intro"],
        image: "https://placehold.co/400x600/44403C/F8FAFC?text=GP+INTRO",
        description: "Video introducing the family doctors and the practice's patient-first philosophy."
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
