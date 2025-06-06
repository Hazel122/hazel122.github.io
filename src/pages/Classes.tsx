import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';

const ClassesContainer = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  padding-top: calc(80px + ${({ theme }) => theme.spacing.xl});
`;

const ClassesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ClassCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  cursor: pointer;
  transition: transform ${({ theme }) => theme.transitions.default};
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ClassTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ClassDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ClassDetails = styled(motion.div)`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.accent}40;
`;

const ClassDetail = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.primary};
`;

const classes = [
  {
    id: 1,
    title: 'CSE 311: Foundations of Computing I',
    description: 'Mathematical foundations of computer science, including logic, set theory, and proof techniques.',
    semester: '',
    instructor: '',
    skills: ['Logic', 'Proofs', 'Set Theory'],
  },
  {
    id: 2,
    title: 'CSE 312: Foundations of Computing II',
    description: 'Probability, statistics, and their applications in computer science.',
    semester: '',
    instructor: '',
    skills: ['Probability', 'Statistics'],
  },
  {
    id: 3,
    title: 'CSE 332: Data Structures & Parallelism',
    description: 'Advanced data structures, algorithms, and parallel computing concepts.',
    semester: '',
    instructor: '',
    skills: ['Data Structures', 'Parallelism', 'Algorithms'],
  },
  {
    id: 4,
    title: 'CSE 333: Systems Programming',
    description: 'Systems programming in C/C++, including memory management, processes, and system calls.',
    semester: '',
    instructor: '',
    skills: ['C', 'C++', 'Systems Programming'],
  },
  {
    id: 5,
    title: 'CSE 351: Hardware/Software Interface',
    description: 'How software controls hardware, including assembly, machine code, and computer architecture.',
    semester: '',
    instructor: '',
    skills: ['Assembly', 'Computer Architecture'],
  },
  {
    id: 6,
    title: 'CSE 391: Software Tools',
    description: 'Practical software tools for development, debugging, and collaboration.',
    semester: '',
    instructor: '',
    skills: ['Software Tools', 'Debugging'],
  },
  {
    id: 7,
    title: 'CSE 451: Operating Systems',
    description: 'Principles of operating systems. Process management, memory management, auxiliary storage management, resource allocation.',
    semester: '',
    instructor: '',
    skills: ['Operating Systems', 'Concurrency', 'File Systems'],
  },
  {
    id: 8,
    title: 'CSE 461: Computer Networks',
    description: 'Fundamentals of computer networking, protocols, and architectures.',
    semester: '',
    instructor: '',
    skills: ['Networking', 'Protocols'],
  },
];

const Classes: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <ClassesContainer id="classes">
      <ScrollAnimation>
        <PageTitle>My Classes</PageTitle>
      </ScrollAnimation>
      <ClassesGrid>
        {classes.map((classItem, index) => (
          <ScrollAnimation
            key={classItem.id}
            delay={index * 0.1}
            direction={index % 2 === 0 ? 'left' : 'right'}
          >
            <ClassCard
              onClick={() => setExpandedId(expandedId === classItem.id ? null : classItem.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ClassTitle>{classItem.title}</ClassTitle>
              <ClassDescription>{classItem.description}</ClassDescription>
              <AnimatePresence>
                {expandedId === classItem.id && (
                  <ClassDetails
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ClassDetail>
                      <strong>Semester:</strong> {classItem.semester}
                    </ClassDetail>
                    <ClassDetail>
                      <strong>Instructor:</strong> {classItem.instructor}
                    </ClassDetail>
                    <ClassDetail>
                      <strong>Skills:</strong> {classItem.skills.join(', ')}
                    </ClassDetail>
                  </ClassDetails>
                )}
              </AnimatePresence>
            </ClassCard>
          </ScrollAnimation>
        ))}
      </ClassesGrid>
    </ClassesContainer>
  );
};

export default Classes; 