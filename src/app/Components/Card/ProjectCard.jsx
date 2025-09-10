import Link from "next/link";

const ProjectCard = ({ img, title, btnname, link, detailsPage }) => {
  return (
    <div className="project-card style1">
      <div className="project-thumb">
        {/* Image opens hosted project link */}
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={img} alt={title} />
        </a>
      </div>
      <div className="project-content">
        <h3>
          {/* Title also opens hosted project link */}
          <a href={link} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>

        {/* Show only one View Project button, based on prop */}
        <Link href={`/project/${detailsPage}`} className="text">
          {btnname}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
