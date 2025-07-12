import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { User, Play, ArrowRight, Award, Users, Building, Phone, Mail, Linkedin, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-background.jpg';
import teamCollage from '@/assets/team-collage.jpg';
import news1 from '@/assets/news-1.jpg';
import news2 from '@/assets/news-2.jpg';
import news3 from '@/assets/news-3.jpg';
import odiaLogo from '@/assets/odia-logo.png';
import ceoAustyn from '@/assets/ceo-austyn.png';

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container-max">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img src={odiaLogo} alt="ODIA AI" className="w-8 h-8" />
              <div className="text-2xl font-bold tracking-[4px] text-foreground">
                ODIA
              </div>
            </div>
            
            {/* Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#voice-ai" className="text-foreground hover:text-primary transition-colors">Voice AI</a>
              <a href="#infrastructure" className="text-foreground hover:text-primary transition-colors">Infrastructure</a>
              <a href="#story" className="text-foreground hover:text-primary transition-colors">Our Story</a>
              <a href="#team" className="text-foreground hover:text-primary transition-colors">Team</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#resources" className="text-foreground hover:text-primary transition-colors">Resources</a>
              <a href="#careers" className="text-foreground hover:text-primary transition-colors">Careers</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            
            {/* Client Login */}
            <Link 
              to="/auth"
              className="flex items-center space-x-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Client Portal</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="home"
        className="relative min-h-screen flex items-center justify-center mountain-pattern"
        style={{ 
          backgroundImage: `linear-gradient(rgba(30, 58, 95, 0.8), rgba(30, 58, 95, 0.8)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-max text-center z-10">
          <div className="max-w-4xl mx-auto fade-in-up">
            <p className="text-lg text-secondary mb-4">Originating Ideas and Creating Opportunities</p>
            <h1 className="text-6xl lg:text-8xl font-extralight mb-8 text-foreground leading-tight">
              THE PURSUIT OF<br />
              <span className="text-gradient">AI EXCELLENCE</span>
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
              Nigeria's first voice-based AI infrastructure company. We deploy production-grade AI agents 
              for businesses, universities, and government agencies across Africa.
            </p>
            <Button className="btn-hero text-lg" onClick={() => window.location.href = '/voice-agent'}>
              Try ODIA Live
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="section-padding bg-card/50">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="card-premium p-8 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">TECHCABAL</h3>
              <p className="text-secondary mb-4">ODIA Named as a Top AI Startup in Africa</p>
              <p className="text-sm text-muted-foreground">TechCabal Nigeria 2025</p>
            </Card>
            
            <Card className="card-premium p-8 text-center">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Great Place To Work</h3>
              <p className="text-secondary mb-4">ODIA is a Great Place to Work-Certified™ Company</p>
              <p className="text-sm text-muted-foreground">GPTW Nigeria</p>
            </Card>
          </div>
          
          <p className="text-xs text-muted-foreground text-center mt-8 max-w-4xl mx-auto">
            The awards listed are not an endorsement of any third party to invest with ODIA and are not 
            indicative of future performance.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8">
            {/* News Card 1 */}
            <div className="card-news group">
              <img 
                src={news1} 
                alt="ODIA Recognition" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm text-foreground/80 mb-2">ODIA AI</p>
                <p className="text-xs text-foreground/60 mb-3">January 12, 2025</p>
                <h3 className="text-lg font-semibold text-foreground mb-4 leading-tight">
                  ODIA Recognized as Africa's Leading Voice AI Infrastructure Company
                </h3>
                <div className="inline-flex items-center px-6 py-2 bg-primary text-primary-foreground rounded text-sm font-medium">
                  Read More
                </div>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="card-news group">
              <img 
                src={news2} 
                alt="Government Partnership" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm text-foreground/80 mb-2">ODIA AI</p>
                <p className="text-xs text-foreground/60 mb-3">December 18, 2024</p>
                <h3 className="text-lg font-semibold text-foreground mb-4 leading-tight">
                  ODIA Deploys Emergency AI System for Nigerian Federal Government
                </h3>
                <div className="inline-flex items-center px-6 py-2 bg-primary text-primary-foreground rounded text-sm font-medium">
                  Read More
                </div>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="card-news group">
              <img 
                src={news3} 
                alt="University Partnership" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm text-foreground/80 mb-2">ODIA AI</p>
                <p className="text-xs text-foreground/60 mb-3">November 25, 2024</p>
                <h3 className="text-lg font-semibold text-foreground mb-4 leading-tight">
                  ODIA Partners with Mudiame University for AI-Powered Education
                </h3>
                <div className="inline-flex items-center px-6 py-2 bg-primary text-primary-foreground rounded text-sm font-medium">
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="section-padding bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* CEO Photo */}
            <div className="relative order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={ceoAustyn} 
                  alt="Austyn Eguale - CEO, ODIA AI" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
              </div>
            </div>
            
            {/* CEO Message */}
            <div className="order-1 lg:order-2">
              <p className="text-primary text-sm mb-4 tracking-wider">Message from our CEO</p>
              <h2 className="text-4xl font-extralight mb-8 leading-tight">
                LEADING AFRICA'S<br />
                <span className="text-gradient">AI REVOLUTION</span>
              </h2>
              <blockquote className="text-lg text-secondary leading-relaxed mb-8 italic">
                "At ODIA, we're not just building technology – we're crafting the future of how Africans 
                interact with artificial intelligence. Our vision extends beyond code and algorithms; it's 
                about creating AI that understands our languages, our culture, and our unique challenges. 
                Every voice agent we deploy, every system we build, carries the DNA of Nigerian innovation 
                and the spirit of African excellence."
              </blockquote>
              <div className="border-l-4 border-primary pl-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">Austyn Eguale</h4>
                <p className="text-secondary">Chief Executive Officer & Founder</p>
                <p className="text-sm text-muted-foreground mt-1">ODIA AI Limited</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-card/30">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-primary text-sm mb-4 tracking-wider">Our Team</p>
            <h2 className="text-5xl font-extralight mb-8 leading-tight">
              YOUR BEST INTEREST IS OUR<br />
              <span className="text-gradient">BEST INTEREST</span>
            </h2>
            <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed">
              Engineers, founders, and innovators. We are not just one, we are all, and we have built 
              Nigeria's most advanced voice AI infrastructure. As a 100% Nigerian-owned company, we have 
              the cultural understanding to solve real African problems.
            </p>
          </div>

          <div className="mb-12">
            <img 
              src={teamCollage} 
              alt="ODIA AI Team" 
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          <div className="flex justify-center space-x-6">
            <Button className="btn-outline">
              <Users className="mr-2 w-5 h-5" />
              Meet The Team
            </Button>
            <Button className="btn-outline">
              <Building className="mr-2 w-5 h-5" />
              Our Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary text-sm mb-4 tracking-wider">Aligned Commitment</p>
              <h2 className="text-4xl font-extralight mb-8 leading-tight">
                <span className="text-gradient">TECHNOLOGICAL EXCELLENCE.</span><br />
                CULTURAL CONNECTION.
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                Our difference is defined by the alignment of deep technical research with the cultural 
                understanding side of African business. It is our intellect that drives the pursuit of AI 
                excellence – and equally important is our empathy, which guides us in understanding each 
                client's individual circumstances and aspirations.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-card rounded-lg flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center pulse-gold">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
              <p className="text-center text-sm text-secondary mt-4">About ODIA</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-card/30">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-video bg-card rounded-lg flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center pulse-gold">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
              <p className="text-center text-sm text-secondary mt-4">What We Do</p>
            </div>
            
            <div className="order-1 lg:order-2">
              <p className="text-primary text-sm mb-4 tracking-wider">What We Do</p>
              <h2 className="text-4xl font-extralight mb-8 leading-tight">
                WE ARE YOUR<br />
                <span className="text-gradient">AI INFRASTRUCTURE</span><br />
                PARTNERS
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                We provide end-to-end AI agents that automate support, onboarding, escalation, payments, 
                and lead generation. Our technology is voice-first, multilingual, and always-on. From federal 
                emergency systems to luxury concierge services, we deploy production-grade AI that works for Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Logo */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={odiaLogo} alt="ODIA AI" className="w-8 h-8" />
                <div className="text-2xl font-bold tracking-[4px] text-foreground">
                  ODIA
                </div>
              </div>
              <div className="text-xs text-primary border border-border px-2 py-1 rounded inline-block">
                AI
              </div>
            </div>
            
            {/* Links */}
            <div className="flex justify-center space-x-8">
              <div className="flex flex-col space-y-2">
                <a href="#contact" className="text-secondary hover:text-foreground transition-colors">Contact</a>
                <a href="#careers" className="text-secondary hover:text-foreground transition-colors">Careers</a>
                <a href="#linkedin" className="text-secondary hover:text-foreground transition-colors flex items-center">
                  <Linkedin className="w-4 h-4 mr-1" />
                  LinkedIn
                </a>
              </div>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-col space-y-2 text-right">
              <a href="#privacy" className="text-secondary hover:text-foreground transition-colors text-sm">Privacy Policy</a>
              <a href="#terms" className="text-secondary hover:text-foreground transition-colors text-sm">Terms of Service</a>
              <a href="#legal" className="text-secondary hover:text-foreground transition-colors text-sm">Legal Form</a>
              <a href="#ndpr" className="text-secondary hover:text-foreground transition-colors text-sm">NDPR Compliance</a>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-8">
            <p className="text-xs text-muted-foreground">
              © 2025 ODIA AI LTD. All Rights Reserved. / The content of this website is for general, informational purposes. 
              Nothing contained on this website should be construed as an offer to sell or the solicitation of any offer to 
              buy any AI service or technical product offered or managed by ODIA or any other issuer or company. The provision 
              of this information does not constitute the rendering of investment, consulting, legal, accounting, tax, career 
              or other professional advice or services. This information on this website should not be the basis of or be relied 
              upon for making any business, investment, career or other decisions, nor should it be construed as advice, 
              endorsement or recommendation. Special Notice to Non-Nigerian Residents: Each of the AI products and services 
              referred to on this website is intended to be made available to Nigerian residents. This website shall not be 
              considered a solicitation or offering for any AI product or service to any person in any jurisdiction where such 
              solicitation or offer would be unlawful.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
