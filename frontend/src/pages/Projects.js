import { useEffect, useState } from "react";
import Card from "../components/Card";

const projects = [
  {
    name: "Clean Water for Every Child",
    type: "Community Development",
    description:
      "This project aims to provide clean and safe drinking water to children in remote villages. We install water filtration systems, educate communities on hygiene practices, and empower women to take on leadership roles in water management.",
    date: "Ongoing",
  },
  {
    name: "Empowering Women Through Education",
    type: "Education & Gender Equality",
    description:
      "This project provides educational opportunities for girls and women in marginalized communities. We offer literacy classes, vocational training, and leadership workshops to help them break the cycle of poverty and discrimination",
    date: "Started in 2020",
  },
  {
    name: "Protecting Endangered Species",
    type: "Environmental Conservation",
    description:
      "This project focuses on protecting endangered animals and their habitats. We work with local communities to establish protected areas, monitor wildlife populations, and combat poaching.",
    date: "Started in 2015",
  },
  {
    name: "Clean Water for Every Child",
    type: "Community Development",
    description:
      "This project aims to provide clean and safe drinking water to children in remote villages. We install water filtration systems, educate communities on hygiene practices, and empower women to take on leadership roles in water management.",
    date: "Ongoing",
  },
  {
    name: "Empowering Women Through Education",
    type: "Education & Gender Equality",
    description:
      "This project provides educational opportunities for girls and women in marginalized communities. We offer literacy classes, vocational training, and leadership workshops to help them break the cycle of poverty and discrimination",
    date: "Started in 2020",
  },
  {
    name: "Protecting Endangered Species",
    type: "Environmental Conservation",
    description:
      "This project focuses on protecting endangered animals and their habitats. We work with local communities to establish protected areas, monitor wildlife populations, and combat poaching.",
    date: "Started in 2015",
  },
];

function Projects() {
  const [showProjects, setShowProjects] = useState(projects);
  const [statusFilters, setStatusFilters] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState([]);

  useEffect(() => {
    async function func() {
      if (statusFilters.length === 0) {
        setShowProjects(projects);
      } else {
        const newArray = projects.filter((project) =>
          statusFilters.includes(project.date)
        );
        setShowProjects(() => newArray);
      }
    }
    func();
  }, [statusFilters]);

  useEffect(() => {
    async function func() {
      if (categoryFilters.length === 0) {
        setShowProjects(projects);
        return;
      }
      setShowProjects(() =>
        projects.filter((project) => categoryFilters.includes(project.type))
      );
    }
    func();
  }, [categoryFilters]);

  function handleCategoryClick(e) {
    if (e.target.checked) {
      if (!categoryFilters.includes(e.target.name)) {
        setCategoryFilters([...categoryFilters, e.target.name]);
      }
    } else {
      if (categoryFilters.includes(e.target.name)) {
        setCategoryFilters(() =>
          categoryFilters.filter((filter) => filter !== e.target.name)
        );
      }
    }
  }

  function handleStatusClick(e) {
    console.log(e.target.name);
    console.log(e.target.checked);
    if (e.target.checked) {
      if (!statusFilters.includes(e.target.name)) {
        setStatusFilters([...statusFilters, e.target.name]);
        console.log(statusFilters);
      }
    } else {
      console.log("inside");
      if (statusFilters.includes(e.target.name)) {
        setStatusFilters(() =>
          statusFilters.filter((filter) => filter !== e.target.name)
        );
        console.log(statusFilters);
      }
    }
  }
  return (
    <div>
      <div className="text-3xl text-blue-900 font-extrabold text-center">
        Projects
      </div>
      <div className=" p-3 md:flex text-center">
        <div className="md:w-1/6 border-r-4">
          <div className="text-2xl text-center">Filters</div>
          <div className="text-xl text-center p-2"></div>
          <div className="">
            <p>Status</p>
            <div className="text-left">
              <input
                type="checkbox"
                name="Ongoing"
                onClick={(e) => handleStatusClick(e)}
              ></input>
              <label> Ongoing</label>
              <br />
              <input
                type="checkbox"
                name="Completed"
                onClick={(e) => handleStatusClick(e)}
              ></input>
              <label> Completed</label>
            </div>
            <br />
            <p>Category</p>
            <div className="text-left">
              <input
                type="checkbox"
                name="Community Development"
                onClick={(e) => handleCategoryClick(e)}
              ></input>
              <label> Community Development</label>
              <br />
              <input
                type="checkbox"
                name="Education & Gender Equality"
                onClick={(e) => handleCategoryClick(e)}
              ></input>
              <label> Education & Gender Equality</label>
              <br />
              <input
                type="checkbox"
                name="Environmental Conservation"
                onClick={(e) => handleCategoryClick(e)}
              ></input>
              <label> Environmental Conservation</label>
            </div>
          </div>
        </div>
        <div className="md:w-5/6">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-3">
            {showProjects &&
              showProjects.map((project) => {
                const subhead = project.description.slice(0, 50) + "...";
                return (
                  <Card
                    src="./images/nature.jpeg"
                    heading={project.name}
                    subheading={subhead}
                    headingsize="text-lg font-bold"
                    subheadingsize="text-lg"
                    date={project.date}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
