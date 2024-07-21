// ProjectCard.js

import React, { useState } from 'react';
import Modal from 'react-modal';
import './ProjectCard.css';

Modal.setAppElement('#root');

const ProjectCard = ({ project }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = (e) => {
    e.stopPropagation(); // Prevent event propagation
    setModalIsOpen(false);
  };

/*
  const handleVisit = () => {
    window.open(project.link, "_blank"); // Replace with your desired URL
  };*/
  return (
    <div className="project-card" onClick={openModal}>
      <img src={project.image} alt={project.name} className="project-image" />
      <div className="project-info">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Project Details"
        className="project-modal"
        overlayClassName="project-modal-overlay"
      >
        <div onClick={(e) => e.stopPropagation()}> {/* Prevent click propagation */}
          <h2>{project.name}</h2>
          <button onClick={closeModal} className="close-modal-button">Close</button>
          <div className="modal-content">
            <p>{project.details}</p>
          {/* // <h3>Learnings: </h3>
           // <p> <strong>--</strong> {project.learning1}</p>
           // <p> <strong>--</strong> {project.learning2}</p>
            <p> <strong>--</strong> {project.learning3}</p>*/}
          </div>
        </div>
        <button className="visit-button" onClick={()=>{ window.open(project.link, "_blank");}}>Visit</button> {/* Visit button */}
      </Modal>
      
    </div>
  );
};

export default ProjectCard;
