// utils/ProjectData.js

const projectsData = [
    // --- WEBSITE PROJECTS ---
    {
        id: 1,
        title: "CookIT Platform Redesign",
        category: "Website",
        tags: ["UI/UX", "Branding", "SaaS"],
        image: "https://placehold.co/800x600/F8FAFC/2563EB?text=CookIT+Redesign",
        description: "A complete overhaul of the CookIT interface, designed for simplicity and engagement."
    },
    {
        id: 3,
        title: "Global E-Commerce Platform",
        category: "Website",
        tags: ["Next.js", "API", "Performance"],
        image: "https://placehold.co/800x600/F8FAFC/2563EB?text=E-Commerce+Platform",
        description: "Built a scalable e-commerce website optimized for speed, security, and responsiveness."
    },
    {
        id: 6,
        title: "Startup CRM Dashboard",
        category: "Website",
        tags: ["React", "Data Viz", "PWA"],
        image: "https://placehold.co/800x600/F8FAFC/2563EB?text=CRM+Dashboard",
        description: "Developed a progressive web app for tracking client relations and sales pipelines."
    },
    {
        id: 17,
        title: "Art Gallery Portfolio",
        category: "Website",
        tags: ["Design", "CMS", "SEO"],
        image: "https://placehold.co/800x600/F8FAFC/2563EB?text=Art+Portfolio",
        description: "A beautiful, minimalistic site to showcase an artist's collection with integrated CMS."
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
    {
        id: 13,
        title: "Physical Therapy Exercise Demo 1",
        category: "Video",
        tags: ["Tutorial", "Instructional"],
        image: "https://placehold.co/400x600/44403C/F8FAFC?text=PT+DEMO+1",
        description: "Instructional video on at-home exercises for knee rehabilitation."
    },
    {
        id: 14,
        title: "Oncology Department Overview",
        category: "Video",
        tags: ["Hospital", "Information"],
        image: "https://placehold.co/400x600/44403C/F8FAFC?text=ONCOLOGY+OVERVIEW",
        description: "A sensitive and informative overview of the oncology services provided."
    },
    {
        id: 15,
        title: "Sleep Specialist PSA",
        category: "Video",
        tags: ["Public Service", "Health"],
        image: "https://placehold.co/400x600/44403C/F8FAFC?text=SLEEP+PSA",
        description: "A public awareness video on the importance of quality sleep by a specialist."
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