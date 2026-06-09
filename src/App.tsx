import { useState } from 'react';
import {
  Header,
  HeaderContent,
  Logo,
  Nav,
  Hero,
  HeroContent,
  CTAButton,
  Container,
  Section,
  SectionTitle,
  GridContainer,
  Card,
  ContentBlock,
  ContactSection,
  ContactForm,
  FormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  SubmitButton,
  Footer,
  WetowinesLink,
} from './styles';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header>
        <HeaderContent>
          <Logo onClick={() => scrollToSection('hero')}>Aveto Oy</Logo>
          <Nav>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('investments')}>Investments</a>
            <a onClick={() => scrollToSection('properties')}>Properties</a>
            <a onClick={() => scrollToSection('consulting')}>Consulting</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </Nav>
        </HeaderContent>
      </Header>

      <Hero id="hero">
        <HeroContent>
          <h1>Reliable Infrastructure & Hosting</h1>
          <p>Enterprise-grade VPS, cloud storage, and infrastructure management for your business</p>
          <CTAButton onClick={() => scrollToSection('contact')}>Get Started</CTAButton>
        </HeroContent>
      </Hero>

      <Section id="about">
        <Container>
          <SectionTitle>About Aveto Oy</SectionTitle>
          <ContentBlock>
            <p>
              Aveto Oy specializes in providing reliable, secure, and scalable infrastructure solutions
              for businesses of all sizes. With years of experience in cloud hosting and infrastructure
              management, we deliver enterprise-grade services with personalized support.
            </p>
            <p>
              Our mission is to make powerful infrastructure accessible, affordable, and easy to manage.
              Whether you need a simple VPS, secure file storage, or complete infrastructure management,
              we have you covered. We pride ourselves on delivering exceptional service and support to
              our clients.
            </p>
            <p>
              Founded with a vision to simplify infrastructure, we combine cutting-edge technology with
              responsive customer support to ensure your business always stays online and performing at
              its best.
            </p>
          </ContentBlock>
        </Container>
      </Section>

      <Section id="investments" className="alternate">
        <Container>
          <SectionTitle>Investment Opportunities</SectionTitle>
          <GridContainer>
            <Card>
              <div className="icon">💰</div>
              <h3>Venture Capital</h3>
              <p>
                Participate in strategic infrastructure investments with attractive returns. We offer
                opportunities for investors to grow their portfolio through our expanding services.
              </p>
            </Card>
            <Card>
              <div className="icon">📈</div>
              <h3>Growth Partnership</h3>
              <p>
                Join us as we scale our infrastructure services globally. Partnership opportunities
                available for qualified investors and strategic partners.
              </p>
            </Card>
            <Card>
              <div className="icon">🤝</div>
              <h3>Revenue Sharing</h3>
              <p>
                Benefit from revenue-sharing agreements as we expand our customer base. Long-term,
                sustainable returns for committed partners.
              </p>
            </Card>
          </GridContainer>
        </Container>
      </Section>

      <Section id="properties">
        <Container>
          <SectionTitle>Our Properties & Infrastructure</SectionTitle>
          <GridContainer>
            <Card>
              <div className="icon">🖥️</div>
              <h3>Data Centers</h3>
              <p>
                State-of-the-art data centers with redundant power, cooling, and network connectivity.
                24/7 monitoring and support for maximum uptime and reliability.
              </p>
            </Card>
            <Card>
              <div className="icon">📁</div>
              <h3>Cloud Storage</h3>
              <p>
                Nextcloud-powered file storage with enterprise-grade security. Unlimited scalability
                and access from anywhere in the world.
              </p>
            </Card>
            <Card>
              <div className="icon">🌐</div>
              <h3>Global Network</h3>
              <p>
                Distributed infrastructure across multiple regions. Low-latency access to your data
                and services, regardless of location.
              </p>
            </Card>
          </GridContainer>
        </Container>
      </Section>

      <Section id="consulting" className="alternate">
        <Container>
          <SectionTitle>Consulting Services</SectionTitle>
          <GridContainer>
            <Card>
              <div className="icon">⚙️</div>
              <h3>Infrastructure Design</h3>
              <p>
                Expert consulting on infrastructure architecture, optimization, and modernization.
                We help you design systems that scale with your business needs.
              </p>
            </Card>
            <Card>
              <div className="icon">🔒</div>
              <h3>Security & Compliance</h3>
              <p>
                Comprehensive security audits and compliance consulting. GDPR, SOC 2, and ISO
                certification support for your operations.
              </p>
            </Card>
            <Card>
              <div className="icon">📊</div>
              <h3>Performance Optimization</h3>
              <p>
                Analyze and optimize your infrastructure for better performance and cost efficiency.
                Real-time monitoring and improvement recommendations.
              </p>
            </Card>
          </GridContainer>
        </Container>
      </Section>

      <ContactSection id="contact">
        <Container>
          <SectionTitle>Get In Touch</SectionTitle>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <SubmitButton type="submit">
              {submitted ? '✓ Message Sent!' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
          <p style={{ marginTop: '2rem', opacity: 0.9 }}>
            contact@aveto.fi | +358 9 XXXX XXXX
          </p>
          <WetowinesLink href="https://www.wetowines.com" target="_blank" rel="noopener noreferrer">
            Visit WetoWines.com →
          </WetowinesLink>
        </Container>
      </ContactSection>

      <Footer>
        <p>&copy; 2026 Aveto Oy. All rights reserved.</p>
      </Footer>
    </>
  );
}
