// src/components/ProjectsSection.jsx
import React, { useState, useMemo } from "react";
import projectsData from "../../utils/ProjectData";

// --- Project Card (Updated to support in-page video embed and tag removal) ---
const ProjectCard = ({ project }) => {
  const [isPlaying, setIsPlaying] = useState(false); // New state to control embed
  const accentColor = "#2563EB";
  const isVideo = project.category === "Video";

  // Creates the embed link with autoplay and clean player parameters
  const embedLink = `${project.link}?autoplay=1&modestbranding=1&rel=0&showinfo=0&fs=1`;

  if (isVideo) {
    // Renders the Video Card with Play state toggle
    return (
      <div
        className={`relative overflow-hidden rounded-2xl shadow-md border cursor-pointer hover:shadow-xl transition-all duration-500 ${
          isPlaying
            ? "bg-black border-gray-800"
            : "bg-gray-900 border-gray-800"
        }`}
        // The onClick sets isPlaying to true, replacing the thumbnail with the iframe
        onClick={() => setIsPlaying(true)}
      >
        <div className="relative w-full mx-auto aspect-[9/16] max-h-[550px] rounded-2xl overflow-hidden">
          {isPlaying ? (
            // --- IFRAME EMBED (Playing State) ---
            <iframe
              src={embedLink}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          ) : (
            // --- THUMBNAIL PREVIEW (Default State) ---
            <div className="absolute inset-0 flex flex-col justify-between group">
              {/* Video Preview */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 transition-opacity group-hover:bg-opacity-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-white opacity-90 transition-opacity group-hover:scale-110"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Footer Overlay */}
              <div className="p-4 pt-6 bg-gradient-to-t from-black/80 to-transparent absolute inset-x-0 bottom-0">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full uppercase"
                    style={{ backgroundColor: accentColor, color: "white" }}
                  >
                    {project.category}
                  </span>
                </div>
                {/* Tags removed as requested */}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    // Renders the Website Card (Preserves external link functionality)
    return (
      <a
        href={project.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <div
          className={`relative overflow-hidden rounded-2xl shadow-md border hover:shadow-xl transition-all duration-500 bg-white border-gray-100`}
        >
          {/* Website Card Content */}
          <>
            <div className="aspect-w-4 aspect-h-3 bg-gray-100 overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full uppercase ml-4 flex-shrink-0"
                  style={{ backgroundColor: accentColor, color: "white" }}
                >
                  {project.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {/* Tags removed as requested */}
              </div>
            </div>
          </>
        </div>
      </a>
    );
  }
};

// --- Main Section (No functional changes, but included for completeness) ---
const ProjectsSection = () => {
  const [filter, setFilter] = useState("Website");
  const accentColor = "#2563EB";
  const categories = ["Website", "Video"];
  // const MAX_FEATURED_VIDEOS = 12; // Removed as it was unused

  // 1. Filter all projects based on the current category
  const allFilteredProjects = useMemo(() => {
    return projectsData.filter((p) => p.category === filter);
  }, [filter]);

  // 2. Separate video projects into "Featured" and "Other"
  const { featuredProjects, otherDomainProjects } = useMemo(() => {
    if (filter === "Video") {
      const featured = allFilteredProjects.filter(
        (p) => p.subcategory === "Doctor"
      );
      const other = allFilteredProjects.filter((p) => p.subcategory === "Other");
      return { featuredProjects: featured, otherDomainProjects: other };
    }
    return { featuredProjects: allFilteredProjects, otherDomainProjects: [] };
  }, [filter, allFilteredProjects]);

  // Determine which list to display in the main grid
  const projectsToDisplay =
    filter === "Video" ? featuredProjects : allFilteredProjects;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4">
            Our Creative Work
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore some of our most impactful <strong>Web</strong> and{" "}
            <strong>Video</strong> projects crafted for brands we’ve collaborated
            with.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm md:text-base font-medium py-2 px-6 rounded-full transition-all duration-300 ${
                filter === cat
                  ? "text-white shadow-md"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
              }`}
              style={filter === cat ? { backgroundColor: accentColor } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- Primary Project Grid (Featured/Doctor Client Videos) --- */}
        {filter === "Video" && (
          <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-8 text-center">
            Featured Doctor Client Videos
          </h3>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToDisplay.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* --- Separator for Second Section --- */}
        {filter === "Video" && otherDomainProjects.length > 0 && (
          <div className="my-24">
            <hr className="border-gray-300" />
          </div>
        )}

        {/* --- Secondary Project Grid (Other Domain Videos) --- */}
        {filter === "Video" && otherDomainProjects.length > 0 && (
          <div>
            <h3 className="text-3xl font-bold text-gray-900 tracking-tight mb-8 text-center">
              Other Domain Videos
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherDomainProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
