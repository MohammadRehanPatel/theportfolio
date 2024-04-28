import React from "react";
import ProjectCard from "../sub/ProjectCard";
import ecommerce from "../../assets/images/ecommerce.png";
import quizapp from "../../assets/images/quiz-app.png";
import cardimg3 from "../../assets/images/SpaceWebsite.png";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src={ecommerce}
          title={"E-Commerce Website"}
          description={"A Full Stack E-Commerce Website With Enrich Features"}
        />
        <ProjectCard
          src={quizapp}
          title={"Quiz Application"}
          description={
            "Quiz Application where we can create quizzes and  take part in them."
          }
        />
        <ProjectCard
          src={cardimg3}
          title={"Portfolio Website"}
          description={"Interactive Portfolio"}
        />
      </div>
    </div>
  );
};

export default Projects;
