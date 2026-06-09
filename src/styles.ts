import styled from 'styled-components';

export const GlobalStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
  }
`;

export const Header = styled.header`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Logo = styled.a`
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }

  a {
    color: white;
    text-decoration: none;
    transition: opacity 0.3s;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Hero = styled.section`
  background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
`;

export const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    opacity: 0.95;
  }
`;

export const CTAButton = styled.button`
  display: inline-block;
  background: white;
  color: #1e3a8a;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Section = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.alternate {
    background: #f8f9fa;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #1e3a8a;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

export const Card = styled.div`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #1e3a8a;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: #666;
    line-height: 1.8;
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

export const ContentBlock = styled.div`
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  color: #555;

  p {
    margin-bottom: 1.5rem;
  }

  a {
    color: #3b82f6;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ContactSection = styled(Section)`
  background: #1e3a8a;
  color: white;

  ${SectionTitle} {
    color: white;
  }
`;

export const ContactForm = styled.form`
  max-width: 500px;
  margin: 2rem auto;
  width: 100%;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  text-align: left;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: white;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
`;

export const SubmitButton = styled.button`
  background: white;
  color: #1e3a8a;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s;
  width: 100%;
  font-size: 1rem;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const Footer = styled.footer`
  background: #0f172a;
  color: white;
  text-align: center;
  padding: 2rem;

  p {
    opacity: 0.8;
  }
`;

export const WetowinesLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  background: #3b82f6;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background 0.3s;

  &:hover {
    background: #1e40af;
  }
`;
