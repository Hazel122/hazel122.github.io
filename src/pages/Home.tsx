import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Icon from '../components/Icon';
import ScrollAnimation from '../components/ScrollAnimation';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 0;
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0;
  padding-top: 4rem;
`;

const HeroContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 4.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1.2;
  }

  p {
    font-size: 1.3rem;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    max-width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    p {
      max-width: 100%;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};

  a {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.8rem;
    transition: color ${({ theme }) => theme.transitions.default};

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  margin: 0 auto;
  padding-bottom: 60px; // Space for fun facts
`;

const ProfileImage = styled(motion.div)`
  width: 100%;
  max-width: 450px;
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

const FunFacts = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.background};
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  white-space: nowrap;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateX(-50%) translateY(-5px);
  }
`;

const funFacts = [
  "🏊‍♀️ Former professional swimmer",
  "🍲 Hotpot lover",
  "🐕 Dog person! (but I like cats too)",
];

const Home: React.FC = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
                Hi! You can call me Haizhen ('hi-gen') or Hazel. I am a Computer Science student at the University of Washington, Seattle (expected graduation: August or December 2026). My experience includes internships in software engineering and machine learning, and I enjoy working with Python, C/C++, Java, React, and more. Nice to meet you!
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
            <ProfileImageContainer>
              <ProfileImage
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <img src="/profile.jpg" alt="Hazel Zhou" />
              </ProfileImage>
              <AnimatePresence mode="wait">
                <FunFacts
                  key={currentFactIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.8, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {funFacts[currentFactIndex]}
                </FunFacts>
              </AnimatePresence>
            </ProfileImageContainer>
          </ScrollAnimation>
        </HeroContent>
      </HeroSection>
    </HomeContainer>
  );
};

export default Home; 