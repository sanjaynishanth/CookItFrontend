// utils/ProjectData.js
import kadamban from "../assets/kadamban.png"
import KV from "../assets/kvmedia.png"
import botfolio from "../assets/botfolio.png"
import Homyz from "../assets/RealEstate.png"
import { Link } from "react-scroll";

const projectsData = [
    // --- WEBSITE PROJECTS ---
    {
        id: 1,
        title: "Kadamban",
        category: "Website",
        tags: ["UI/UX", "Real Estate"],
        image: kadamban,
        description: "An elegant real estate website showcasing premium properties with a seamless browsing experience.",
        link: "https://kadambangroup.com/"
    },
    {
        id: 3,
        title: "KV Media Works",
        category: "Website",
        tags: ["React","UI/UX"],
        image:KV,
        description:"A sleek portfolio site for a media agency, crafted with precision to highlight creativity and brand identity.",
        link: "https://kvmediaworks.me/"
    },
    {
        id: 6,
        title: "Botfolio",
        category: "Website",
        tags: ["React", "Node.js", "DataBase"],
        image: botfolio,
        description:  "A modern developer portfolio platform and design to showcase technical expertise",
        link: "https://botfolio.dev/"
    },
    {
        id: 17,
        title: "Homyz",
        category: "Website",
        tags: ["UI/UX"],
        image: Homyz,
        description: "A minimalistic real estate web app delivering a smooth, responsive experience for property discovery.",
        link: "https://homyz-react.netlify.app/"
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
   

    // --- OTHER DOMAIN VIDEO PROJECTS (Projects 13+) ---
    {
        id: 16,
        title: "Software Explainer - Onboarding",
        category: "Video",
        tags: ["SaaS", "Tutorial", "Screen Recording"],
        image: "https://placehold.co/400x600/0A0A0A/E5E7EB?text=SAAS+ONBOARDING",
        description: "Step-by-step guide for new users on how to set up their software account."
    },
    {
        id: 18,
        title: "Fashion Brand Lookbook",
        category: "Video",
        tags: ["Commercial", "Style", "Music Video"],
        image: "https://placehold.co/400x600/0A0A0A/E5E7EB?text=FASHION+LOOKBOOK",
        description: "A dynamic video showcasing the new season's collection."
    },
    {
        id: 19,
        title: "Real Estate Property Tour",
        category: "Video",
        tags: ["4K", "Drone Shots", "Luxury"],
        image: "https://placehold.co/400x600/0A0A0A/E5E7EB?text=REAL+ESTATE+TOUR",
        description: "A high-quality cinematic tour of a luxury home for marketing purposes."
    },
    {
        id: 20,
        title: "Fitness App Workout Demo",
        category: "Video",
        tags: ["Fitness", "Instructional"],
        image: "https://placehold.co/400x600/0A0A0A/E5E7EB?text=FITNESS+DEMO",
        description: "A professional demo of a full-body workout routine for the client's app."
    },
];

export default projectsData;
