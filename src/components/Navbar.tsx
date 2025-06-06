import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import Icon from './Icon';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.md};
  z-index: 1000;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  cursor: pointer;
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 70%;
    background-color: ${({ theme }) => theme.colors.background};
    flex-direction: column;
    padding: ${({ theme }) => theme.spacing.xl};
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
    transition: transform ${({ theme }) => theme.transitions.default};
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const NavLink = styled.a<{ isActive: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.text};
  text-decoration: none;
  font-weight: ${({ isActive }) => (isActive ? '600' : '400')};
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.default};
  }

  &:hover::after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'classes', 'resume', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Classes', sectionId: 'classes' },
    { label: 'Resume', sectionId: 'resume' },
    { label: 'Projects', sectionId: 'projects' },
    { label: 'Contact', sectionId: 'contact' },
  ];

  return (
    <Nav>
      <NavContainer>
        <Logo onClick={() => scrollToSection('home')}>Hazel Zhou</Logo>
        <MenuButton onClick={toggleMenu}>
          {isOpen ? <Icon icon={FaTimes} /> : <Icon icon={FaBars} />}
        </MenuButton>
        <NavLinks isOpen={isOpen}>
          {navItems.map((item) => (
            <NavLink
              key={item.sectionId}
              onClick={() => scrollToSection(item.sectionId)}
              isActive={activeSection === item.sectionId}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 