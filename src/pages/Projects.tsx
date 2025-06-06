import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Icon from '../components/Icon';
import ScrollAnimation from '../components/ScrollAnimation';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  padding-top: calc(80px + ${({ theme }) => theme.spacing.xl});
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.primary};
`;

const ProjectsGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  cursor: pointer;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.accent}40;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ${({ theme }) => theme.transitions.default};
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};

  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.2rem;
    transition: color ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ProjectModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.md};
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const projects = [
  {
    id: 1,
    title: 'Mini-Google Search Engine & Web Server',
    description: 'Implemented core data structures in C, including a doubly-linked list and chained hash table. Built a file system crawler and in-memory inverted index, developed C++ modules for parsing and querying, and fixed web server security vulnerabilities. Applied modular design and C/C++ idioms.',
    image: '/project1.jpg',
    tags: ['C', 'C++', 'Data Structures', 'Web Server'],
    github: 'https://github.com/Hazel122/mini-google',
    demo: '',
  },
  {
    id: 2,
    title: 'RPG Adventure Game',
    description: 'Developed a single-player RPG-style game where the goal is to defeat dragons, using JavaScript, HTML, and CSS. Implemented game mechanics, character progression, and dynamic UI updates. Incorporated randomization for replayability.',
    image: '/project2.jpg',
    tags: ['JavaScript', 'HTML', 'CSS', 'Game'],
    github: 'https://github.com/Hazel122/rpg-adventure',
    demo: '',
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <ProjectsContainer id="projects">
      <ScrollAnimation>
        <PageTitle>Projects</PageTitle>
      </ScrollAnimation>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ScrollAnimation
            key={project.id}
            delay={index * 0.1}
            direction={index % 2 === 0 ? 'left' : 'right'}
          >
            <ProjectCard
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icon icon={FaGithub} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Icon icon={FaExternalLinkAlt} />
                    </a>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          </ScrollAnimation>
        ))}
      </ProjectsGrid>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <ProjectImage>
                <img src={selectedProject.image} alt={selectedProject.title} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{selectedProject.title}</ProjectTitle>
                <ProjectDescription>{selectedProject.description}</ProjectDescription>
                <ProjectTags>
                  {selectedProject.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon={FaGithub} /> View on GitHub
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon icon={FaExternalLinkAlt} /> Live Demo
                  </a>
                </ProjectLinks>
              </ProjectContent>
            </ModalContent>
          </ProjectModal>
        )}
      </AnimatePresence>
    </ProjectsContainer>
  );
};

export default Projects; 