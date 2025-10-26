// src/components/ProjectsSection.jsx
import React, { useState, useMemo } from "react";
import projectsData from "../../utils/ProjectData";

const ProjectCard = ({ project }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const accentColor = "#2563EB";
  const isVideo = project.category === "Video";

  const embedLink = `${project.link}?autoplay=1&modestbranding=1&rel=0&showinfo=0&fs=1`;

  const handleVideoClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPlaying(true);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-md border hover:shadow-xl transition-all duration-500 ${
        isVideo ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"
      }`}
    >
      {isVideo ? (
        <div className="relative w-full mx-auto aspect-[9/16] max-h-[550px] rounded-2xl overflow-hidden bg-black">
          {isPlaying ? (
            <iframe
              src={embedLink}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          ) : (
            <div
              className="w-full h-full relative group cursor-pointer"
              onClick={handleVideoClick}
            >
              {/* ✅ Fixed: Ensure thumbnail loads & fills area */}
              <img
                src={
                  project.image ||
                  `https://img.youtube.com/vi/${extractYouTubeID(
                    project.link
                  )}/maxresdefault.jpg`
                }
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/600x900/000000/FFFFFF?text=No+Thumbnail";
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-between z-10">
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-14 text-white opacity-90 group-hover:scale-110 transition-transform"
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

                {/* Footer Text */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex justify-between items-end">
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full uppercase"
                      style={{
                        backgroundColor: accentColor,
                        color: "white",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        // --- WEBSITE CARD ---
        <a
          href={project.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="aspect-w-4 aspect-h-3 bg-gray-100 overflow-hidden rounded-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-semibold text-gray-900">
                {project.title}
              </h3>
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
          </div>
        </a>
      )}
    </div>
  );
};

// ✅ Helper Function: Extract YouTube Video ID safely
function extractYouTubeID(url) {
  const match = url.match(
    /(?:youtube\.com\/(?:.*v=|.*\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : "";
}

const ProjectsSection = () => {
  const [filter, setFilter] = useState("Website");
  const accentColor = "#2563EB";
  const categories = ["Website", "Video"];

  const allFilteredProjects = useMemo(
    () => projectsData.filter((p) => p.category === filter),
    [filter]
  );

  const { featuredProjects, otherDomainProjects } = useMemo(() => {
    if (filter === "Video") {
      const featured = allFilteredProjects.filter(
        (p) => p.subcategory === "Doctor"
      );
      const other = allFilteredProjects.filter(
        (p) => p.subcategory === "Other"
      );
      return { featuredProjects: featured, otherDomainProjects: other };
    }
    return { featuredProjects: allFilteredProjects, otherDomainProjects: [] };
  }, [filter, allFilteredProjects]);

  const projectsToDisplay =
    filter === "Video" ? featuredProjects : allFilteredProjects;

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
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

        {/* Doctor Videos */}
        {filter === "Video" && (
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Doctor Client Videos
          </h3>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToDisplay.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Separator */}
        {filter === "Video" && otherDomainProjects.length > 0 && (
          <div className="my-24">
            <hr className="border-gray-300" />
          </div>
        )}

        {/* Other Domain */}
        {filter === "Video" && otherDomainProjects.length > 0 && (
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
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
