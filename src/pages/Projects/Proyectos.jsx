import React, { useState } from "react";
import { projects } from "../../Api/projects";
import ItemModal from "./ItemModal";


const Proyectos = () => {
  const [projectB, setProjectB] = useState(projects);
  const [showModal, setModalShow] = useState(false);

  function handleModalHide() {
    return () => {
      let  projects  = projectB;
      projects = projectB.map((project) => ({
        ...project,
        showModal
      }));
      setProjectB({ projects });
    };
  }

  function handleModalShow() {
    return (e) => {
      e.preventDefault();

      setModalShow(true);
    };
  }

  function handleEditItem(selectedItem) {
    return (e) => {
      e.preventDefault();
      let { items } = this.state;
      items = items.map((item) => ({
        ...item,
        showModal: selectedItem.id === item.id
      }));
      this.setState({ items });
    };
  }

  function handleEditItem(selectedItem) {
    return (e) => {
      e.preventDefault();
      let  projects  = projectB;
      projects = projectB.map((project) => ({
        ...project,
        showModal: selectedItem.id === project.id
      }));
      setModalShow({ projects });
    };
  }

  function handleItemChange(itemId) {
    return (e) => {
      let { projects } = projectB;
      projects = projects.map((project) => {
        if (project.id === itemId) {
            project[e.target.name] = e.target.value;
        }
        return project;
      });
      this.setState({ projects });
    };
  }
  return (
<>
<div>
        <table className="table ">
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{project.project_name}</td>
                <td>{project.desc}</td>
                <td>
                  <img src={project.src} href={project.href} alt={project.alt} />
                </td>
                <td>
                  <a
                    className="btn btn-primary"
                    onClick={handleEditItem(project)}
                    href="https://github.com/OzkrMebasser"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {projects.map((project, index) => (
          <ItemModal
            key={project.id}
            show={showModal}
            onHide={handleModalHide()}
            onItemChange={handleItemChange()}
            project={project}
            {...project}
          />
        ))}
      </div>
  </>
  )
  
};

export default Proyectos;
