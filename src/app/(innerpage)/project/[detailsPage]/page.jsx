import BreadCumb from "@/app/Components/Common/BreadCumb";
import ProjectDetails from "@/app/Components/ProjectDetails/ProjectDetails";
import ProjectDetails1 from "@/app/Components/ProjectDetails1/ProjectDetails1";
import ProjectDetails2 from "@/app/Components/ProjectDetails2/ProjectDetails2";
import ProjectDetails3 from "@/app/Components/ProjectDetails3/ProjectDetails3";
import ProjectDetails4 from "@/app/Components/ProjectDetails4/ProjectDetails4";
import ProjectDetails5 from "@/app/Components/ProjectDetails5/ProjectDetails5";
import ProjectDetails6 from "@/app/Components/ProjectDetails6/Projectdetails6";

export default function ProjectPage({ params }) {
  const { detailsPage } = params; // ✅ comes from URL

  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Project Details"
      />

      {detailsPage === "project-details" && <ProjectDetails />}
      {detailsPage === "project-details1" && <ProjectDetails1 />}
      {detailsPage === "project-details2" && <ProjectDetails2 />}
      {detailsPage === "project-details3" && <ProjectDetails3 />}
      {detailsPage === "project-details4" && <ProjectDetails4 />}
      {detailsPage === "project-details5" && <ProjectDetails5 />}
      {detailsPage === "project-details6" && <ProjectDetails6 />}
    </div>
  );
}
