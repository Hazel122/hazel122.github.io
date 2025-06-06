import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';
import Icon from '../components/Icon';
import ScrollAnimation from '../components/ScrollAnimation';

const ResumeContainer = styled.div`
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  padding-top: calc(80px + ${({ theme }) => theme.spacing.xl});
`;

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.primary};
`;

const TimelineContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const TimelineItem = styled(motion.div)<{ isLeft: boolean }>`
  width: 50%;
  padding: ${({ theme }) => theme.spacing.lg};
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  margin-left: ${({ isLeft }) => (isLeft ? '0' : '50%')};

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    ${({ isLeft }) => (isLeft ? 'right: -10px' : 'left: -10px')};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    margin-left: 0;
    padding-left: ${({ theme }) => theme.spacing.xl};

    &::before {
      left: -10px;
    }
  }
`;

const TimelineContent = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const TimelineTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  svg {
    font-size: 1.2em;
  }
`;

const TimelineDate = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 0.9rem;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TimelineDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  line-height: 1.6;
`;

const SkillsSection = styled.div`
  max-width: 1000px;
  margin: ${({ theme }) => theme.spacing.xl} auto;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const SkillItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const timelineData = [
  {
    id: 1,
    title: 'Bachelor of Science in Computer Science',
    date: 'Expected: December 2026',
    description: 'University of Washington, Seattle',
    icon: <Icon icon={FaGraduationCap} />,
    isLeft: true,
  },
  {
    id: 5,
    title: 'Software Engineer Intern',
    date: 'June 2025 - September 2025',
    description: 'Oracle (Seattle, WA)',
    icon: <Icon icon={FaBriefcase} />,
    isLeft: false,
  },
  {
    id: 2,
    title: 'Software Engineer Intern',
    date: 'Nov 2024 – Apr 2025',
    description: 'London ESG Analytics (Remote, New York, NY)\n• Built a data pipeline using Python for k-means clustering on ESG reports.\n• Developed a data visualization website using React and Chart.js.\n• Architected a relational PostgreSQL database for large-scale ESG data.',
    icon: <Icon icon={FaBriefcase} />,
    isLeft: true,
  },
  {
    id: 3,
    title: 'Machine Learning Intern',
    date: 'Jul 2024 – Aug 2024',
    description: 'Waglens (Shanghai, China)\n• Optimized auto-labeling for distracted driver detection using AWS SageMaker API.\n• Developed Python scripts for perceptual hashing, reducing processing time by 98%.\n• Built a classification model on AWS S3, achieving 98% accuracy.\n• Initiated auto-labeling with Roboflow, reducing labeling time by 50%.',
    icon: <Icon icon={FaBriefcase} />,
    isLeft: false,
  },
  {
    id: 4,
    title: 'Computer Vision Trainee',
    date: 'June 2023',
    description: 'AI Camp (Online)\n• Trained a YOLOv8 model for ASL letter detection (93.4% accuracy).\n• Created a dataset with 6700+ labeled data, used data augmentation.\n• Deployed model using Huggingface space API.',
    icon: <Icon icon={FaCode} />,
    isLeft: true,
  },
];

const skills = [
  { name: 'Python', icon: <Icon icon={FaCode} /> },
  { name: 'Java', icon: <Icon icon={FaCode} /> },
  { name: 'C', icon: <Icon icon={FaCode} /> },
  { name: 'C++', icon: <Icon icon={FaCode} /> },
  { name: 'JavaScript', icon: <Icon icon={FaCode} /> },
  { name: 'SQL', icon: <Icon icon={FaCode} /> },
  { name: 'HTML/CSS', icon: <Icon icon={FaCode} /> },
  { name: 'React', icon: <Icon icon={FaCode} /> },
  { name: 'Pandas', icon: <Icon icon={FaCode} /> },
  { name: 'Matplotlib', icon: <Icon icon={FaCode} /> },
  { name: 'PyTorch', icon: <Icon icon={FaCode} /> },
  { name: 'NumPy', icon: <Icon icon={FaCode} /> },
  { name: 'TensorFlow', icon: <Icon icon={FaCode} /> },
  { name: 'Git', icon: <Icon icon={FaCode} /> },
  { name: 'Linux', icon: <Icon icon={FaCode} /> },
  { name: 'AWS', icon: <Icon icon={FaCode} /> },
  { name: 'PostgreSQL', icon: <Icon icon={FaCode} /> },
];

const Resume: React.FC = () => {
  return (
    <ResumeContainer id="resume">
      <ScrollAnimation>
        <PageTitle>Resume</PageTitle>
      </ScrollAnimation>
      <TimelineContainer>
        {timelineData.map((item, index) => (
          <ScrollAnimation
            key={item.id}
            delay={index * 0.1}
            direction={index % 2 === 0 ? 'left' : 'right'}
          >
            <TimelineItem
              isLeft={item.isLeft}
              initial={{ opacity: 0, x: item.isLeft ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <TimelineContent>
                <TimelineTitle>
                  {item.icon}
                  {item.title}
                </TimelineTitle>
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </ScrollAnimation>
        ))}
      </TimelineContainer>
      <SkillsSection>
        <h2>Skills</h2>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <ScrollAnimation
              key={skill.name}
              delay={index * 0.1}
              direction="up"
            >
              <SkillItem>
                {skill.icon}
                {skill.name}
              </SkillItem>
            </ScrollAnimation>
          ))}
        </SkillsGrid>
      </SkillsSection>
    </ResumeContainer>
  );
};

export default Resume; 