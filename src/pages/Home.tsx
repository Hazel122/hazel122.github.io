import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Icon from '../components/Icon';
import ScrollAnimation from '../components/ScrollAnimation';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 4rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    font-size: 1.2rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};

  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    transition: color ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ProfileImage = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadows.large};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Home: React.FC = () => {
  return (
    <HomeContainer id="home">
      <HeroSection>
        <HeroContent>
          <HeroText>
            <ScrollAnimation>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Haizhen (Hazel) Zhou
              </motion.h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.2}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Hi! I am a Computer Science student at the University of Washington, Seattle (expected graduation: August - December 2026). I am passionate about software engineering, machine learning, and building impactful web applications. My experience includes internships in software engineering and machine learning, and I enjoy working with Python, JavaScript, React, and more. Explore my site to learn about my classes, projects, and professional journey!
              </motion.p>
            </ScrollAnimation>
            <ScrollAnimation delay={0.4}>
              <SocialLinks>
                <motion.a
                  href="https://github.com/Hazel122"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon icon={FaGithub} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/haizhen-zhou/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon icon={FaLinkedin} />
                </motion.a>
              </SocialLinks>
            </ScrollAnimation>
          </HeroText>
          <ScrollAnimation direction="right" delay={0.4}>
            <ProfileImage
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <img src="/profile.jpg" alt="Hazel Zhou" />
            </ProfileImage>
          </ScrollAnimation>
        </HeroContent>
      </HeroSection>
    </HomeContainer>
  );
};

export default Home; 