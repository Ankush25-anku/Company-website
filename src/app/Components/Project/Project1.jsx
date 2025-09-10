import ProjectCard from "../Card/ProjectCard";

const Project1 = () => {
  return (
    <section className="project-section section-padding fix">
      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-6 col-md-6">
            <ProjectCard
              img="/assets/images/project/construction1234.png"
              title="Construction Project"
              btnname="View Project"
              link="https://www.sribalajillp.in/"
              detailsPage="project-details"
            ></ProjectCard>
          </div>
          <div className="col-xl-6 col-md-6">
            <div className="row gy-4">
              <div className="col-md-6">
                <ProjectCard
                  img="/assets/images/project/screen13.png"
                  title="Working Laptop"
                  btnname="View Project"
                  link="https://www.keerthiandco.in/"
                  detailsPage="project-details1"
                ></ProjectCard>
              </div>
              <div className="col-md-6">
                <ProjectCard
                  img="/assets/images/project/found1.png"
                  title="Working Laptop"
                  btnname="View Project"
                  link="https://www.bhishma.co.in/"
                  detailsPage="project-details2"
                ></ProjectCard>
              </div>
              <div className="col-md-6">
                <ProjectCard
                  img="/assets/images/project/const1.png"
                  title="Working Laptop"
                  btnname="View Project"
                  link="https://www.padmaconstructions.co.in/"
                  detailsPage="project-details3"
                ></ProjectCard>
              </div>
              <div className="col-md-6">
                <ProjectCard
                  img="/assets/images/project/law1.png"
                  title="Working Laptop"
                  btnname="View Project"
                  link="https://lawsmithandco.in/"
                  detailsPage="project-details4"
                ></ProjectCard>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-4 mt-0">
          <div className="col-md-6">
            <div className="row gy-4">
              <div className="col-md-6">
                <ProjectCard
                  img="/assets/images/project/glass1.png"
                  title="Working Laptop"
                  btnname="View Project"
                  link="https://glassgarden.in/"
                  detailsPage="project-details5"
                ></ProjectCard>
              </div>
              <div className="col-md-6">
                <ProjectCard
                  img="/assets/images/project/meta1.png"
                  title="Working Laptop"
                  btnname="View Project"
                  link="https://www.metaservs.com/clients"
                  detailsPage="project-details6"
                ></ProjectCard>
              </div>
              <div className="col-md-6">
                <ProjectCard
                  img="/assets/images/project/projectThumb1_8.jpg"
                  title="Working Laptop"
                  btnname="View Project"
                ></ProjectCard>
              </div>
              <div className="col-md-6">
                <ProjectCard
                  img="/assets/images/project/projectThumb1_9.jpg"
                  title="Working Laptop"
                  btnname="View Project"
                ></ProjectCard>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <ProjectCard
              img="/assets/images/project/projectThumb1_10.jpg"
              title="Working Laptop"
              btnname="View Project"
            ></ProjectCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project1;
