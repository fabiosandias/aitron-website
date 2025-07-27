import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import {
  Brain,
  Zap,
  Users,
  Shield,
  Target,
  Rocket,
  Bot,
  Settings,
  HeadphonesIcon,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Lightbulb, // Adicionado para a seção Sobre
  Award, // Adicionado para a seção Sobre
  Mail, // Adicionado para o rodapé
  MessageCircle,
} from "lucide-react";
import aitronLogo from "./assets/aitron.png";
import "./App.css";

// Componente de partículas animadas
const AnimatedParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className='absolute w-2 h-2 bg-primary/30 rounded-full'
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
};

// Componente do Header
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 10]);

  return (
    <motion.header
      className='fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border'
      style={{
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur}px)`,
      }}
    >
      <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <motion.div
          className='flex items-center space-x-3'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={aitronLogo}
            alt='Aitron'
            className='w-10 h-10'
            width='40'
            height='40'
            fetchpriority='high'
          />
          <span className='text-2xl font-bold text-gradient'>AITRON</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-8'>
          <a
            href='/#sobre'
            className='text-foreground hover:text-primary transition-colors'
          >
            Sobre
          </a>
          <a
            href='/#solucoes'
            className='text-foreground hover:text-primary transition-colors'
          >
            Soluções
          </a>
          <a
            href='/#beneficios'
            className='text-foreground hover:text-primary transition-colors'
          >
            Benefícios
          </a>
          <a href='/#revolucao'>
            <Button>Solicitar Orçamento</Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className='absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border md:hidden'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className='flex flex-col space-y-4 p-4'>
              <a
                href='/#sobre'
                className='text-foreground hover:text-primary transition-colors'
              >
                Sobre
              </a>
              <a
                href='/#solucoes'
                className='text-foreground hover:text-primary transition-colors'
              >
                Soluções
              </a>
              <a
                href='/#beneficios'
                className='text-foreground hover:text-primary transition-colors'
              >
                Benefícios
              </a>
              <a href='/#revolucao'>
                <Button className='w-full'>Solicitar Orçamento</Button>
              </a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

// Componente Hero Section
const HeroSection = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className='relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden'>
      <AnimatedParticles />

      <motion.div
        className='container mx-auto px-4 text-center z-10'
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-8'
        >
          <img
            src={aitronLogo}
            alt='Aitron Logo'
            className='w-32 h-32 mx-auto mb-8 float-animation'
            width='128'
            height='128'
            fetchpriority='high'
          />
        </motion.div>

        <motion.h1
          className='text-5xl md:text-7xl font-bold mb-6 text-gradient'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Revolucione Seu Negócio
          <br />
          com Inteligência Artificial
        </motion.h1>

        <motion.p
          className='text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Transformamos desafios em oportunidades com soluções de IA
          personalizadas, impulsionando sua eficiência e resultados.
        </motion.p>

        <motion.div
          className='flex flex-col sm:flex-row gap-4 justify-center'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href='/#solucoes'>
            <Button size='lg'>
              Descubra Nossas Soluções
              <ArrowRight className='ml-2 w-5 h-5' />
            </Button>
          </a>
          <a href='/#revolucao'>
            <Button size='lg' variant='outline'>
              Fale com um Especialista
            </Button>
          </a>
        </motion.div>

        {/* Indicadores de soluções */}
        <motion.div
          className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className='text-center'>
            <Bot className='w-12 h-12 mx-auto mb-4 text-primary' />
            <h3 className='text-xl font-semibold mb-2'>
              Chatbots Inteligentes
            </h3>
            <p className='text-muted-foreground'>
              IA treinada para seu negócio
            </p>
          </div>
          <div className='text-center'>
            <Zap className='w-12 h-12 mx-auto mb-4 text-primary' />
            <h3 className='text-xl font-semibold mb-2'>
              Automação de Processos
            </h3>
            <p className='text-muted-foreground'>
              Eficiência máxima e redução de custos
            </p>
          </div>
          <div className='text-center'>
            <Users className='w-12 h-12 mx-auto mb-4 text-primary' />
            <h3 className='text-xl font-semibold mb-2'>
              Consultoria Especializada
            </h3>
            <p className='text-muted-foreground'>
              Suporte contínuo e personalizado
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Componente da Seção Sobre
const AboutSection = () => {
  return (
    <section id='sobre' className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gradient'>
            Aitron: Pioneirismo e Inovação em Inteligência Artificial
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Nossa missão é impulsionar o futuro dos negócios através de soluções
            de IA que geram valor real e sustentável.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className='text-3xl font-bold mb-4'>
              Nossa História e Propósito
            </h3>
            <p className='text-lg text-muted-foreground mb-4'>
              A Aitron nasceu da visão de transformar o cenário empresarial
              através do poder da Inteligência Artificial. Desde nossa fundação,
              temos nos dedicado a desenvolver soluções inovadoras que resolvem
              problemas complexos e criam novas oportunidades para nossos
              clientes.
            </p>
            <p className='text-lg text-muted-foreground'>
              Acreditamos que a IA não é apenas uma ferramenta, mas um parceiro
              estratégico capaz de impulsionar a eficiência, otimizar processos
              e revolucionar a forma como as empresas operam e interagem com
              seus clientes.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <div className='flex items-start space-x-4'>
              <Lightbulb className='w-10 h-10 text-primary flex-shrink-0' />
              <div>
                <h4 className='text-xl font-semibold'>Inovação Constante</h4>
                <p className='text-muted-foreground'>
                  Estamos sempre à frente, pesquisando e aplicando as mais
                  recentes tecnologias de IA para oferecer soluções de ponta.
                </p>
              </div>
            </div>
            <div className='flex items-start space-x-4'>
              <Award className='w-10 h-10 text-primary flex-shrink-0' />
              <div>
                <h4 className='text-xl font-semibold'>
                  Excelência e Compromisso
                </h4>
                <p className='text-muted-foreground'>
                  Nosso time de especialistas é dedicado a entregar resultados
                  excepcionais, com foco na qualidade e na satisfação do
                  cliente.
                </p>
              </div>
            </div>
            <div className='flex items-start space-x-4'>
              <Users className='w-10 h-10 text-primary flex-shrink-0' />
              <div>
                <h4 className='text-xl font-semibold'>Parceria Estratégica</h4>
                <p className='text-muted-foreground'>
                  Trabalhamos lado a lado com nossos clientes, entendendo suas
                  necessidades para construir soluções que gerem valor real e
                  duradouro.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Componente de Benefícios
const BenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Automação Inteligente",
      description:
        "Sistemas que aprendem e se adaptam às necessidades do seu negócio, otimizando processos e garantindo máxima eficiência.",
    },
    {
      icon: HeadphonesIcon,
      title: "Atendimento Aprimorado",
      description:
        "Suporte instantâneo e personalizado 24/7, elevando a satisfação do cliente e convertendo mais oportunidades de negócio.",
    },
    {
      icon: Shield,
      title: "Segurança e Confiabilidade",
      description:
        "Proteção de dados com criptografia avançada e conformidade com regulamentações, garantindo a integridade e a privacidade das suas informações.",
    },
    {
      icon: Target,
      title: "Precisão e Assertividade",
      description:
        "IA treinada especificamente para o seu contexto, fornecendo respostas e insights precisos para decisões estratégicas e resultados assertivos.",
    },
    {
      icon: Rocket,
      title: "Implementação Ágil",
      description:
        "Deploy rápido e sem interrupções, integrando-se perfeitamente aos seus processos existentes para resultados visíveis em dias.",
    },
    {
      icon: CheckCircle,
      title: "Experiência Premium",
      description:
        "Atendimento personalizado e suporte contínuo que superam expectativas, construindo relacionamentos duradouros e de sucesso.",
    },
  ];

  return (
    <section id='beneficios' className='py-20'>
      <div className='container mx-auto px-4'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gradient'>
            Resultados Reais: O Impacto da IA da Aitron
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Veja como nossas soluções transformam desafios em vantagens
            competitivas, impulsionando o crescimento e a inovação.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className='h-full hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm'>
                <CardHeader>
                  <benefit.icon className='w-12 h-12 text-primary mb-4' />
                  <CardTitle className='text-xl'>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-base'>
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de Soluções
const SolutionsSection = () => {
  const solutions = [
    {
      title: "Chatbots Inteligentes",
      subtitle: "Atendimento 24/7 Personalizado",
      description:
        "IA treinada especificamente para o seu negócio, oferecendo suporte instantâneo e personalizado em qualquer canal, a qualquer hora.",
      features: [
        "Chatbots para WhatsApp e sites",
        "IA treinada com seu negócio",
        "Fluxos de conversa inteligentes",
        "Disponível 24/7",
      ],
      icon: Bot,
    },
    {
      title: "Automação de Processos",
      subtitle: "Eficiência Máxima e Redução de Custos",
      description:
        "Otimize fluxos de trabalho, elimine tarefas repetitivas e integre sistemas com soluções de IA que aprendem e se adaptam.",
      features: [
        "Fluxos para vendas e suporte",
        "Integração com Bling e Notion",
        "Automação com n8n e Zapier",
        "Redução de erros operacionais",
      ],
      icon: Settings,
    },
    {
      title: "Consultoria Especializada",
      subtitle: "Sua Jornada de IA Acelerada",
      description:
        "Conte com o suporte de nossos especialistas para diagnosticar necessidades, implementar soluções e garantir a evolução contínua da sua estratégia de IA.",
      features: [
        "Diagnóstico personalizado",
        "Implementação por projeto",
        "Suporte contínuo",
        "Evolução das automações",
      ],
      icon: Users,
    },
  ];

  return (
    <section id='solucoes' className='py-20 gradient-bg'>
      <div className='container mx-auto px-4'>
        <motion.div
          className='text-center mb-16'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gradient'>
            Soluções Aitron: Inteligência Artificial Adaptada ao Seu Desafio
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
            Explore nosso portfólio completo de soluções de IA, projetadas para
            otimizar cada aspecto do seu negócio.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className='h-full hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card/80 backdrop-blur-sm'>
                <CardHeader>
                  <solution.icon className='w-16 h-16 text-primary mb-4' />
                  <CardTitle className='text-2xl mb-2'>
                    {solution.title}
                  </CardTitle>
                  <CardDescription className='text-lg font-semibold text-primary'>
                    {solution.subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-muted-foreground mb-6'>
                    {solution.description}
                  </p>
                  <ul className='space-y-2 mb-6'>
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className='flex items-center'>
                        <CheckCircle className='w-5 h-5 text-primary mr-2' />
                        <span className='text-sm'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href='/#revolucao'>
                    <Button className='w-full'>
                      Solicite uma Proposta
                      <ArrowRight className='ml-2 w-4 h-4' />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente Footer
const Footer = () => {
  return (
    <footer className='bg-background py-12 border-t border-border'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          <div>
            <div className='flex items-center space-x-3 mb-4'>
              <img src={aitronLogo} alt='Aitron' className='w-10 h-10' />
              <span className='text-2xl font-bold text-gradient'>AI TRON</span>
            </div>
            <p className='text-muted-foreground text-sm mb-4'>
              Transformamos negócios através da inteligência artificial. Criamos
              soluções personalizadas para automatizar processos, otimizar
              atendimento e acelerar resultados.
            </p>
            <p className='text-muted-foreground text-sm flex items-center space-x-2'>
              <Mail className='w-4 h-4' />
              <span>contato@aitron.com.br</span>
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-foreground mb-4'>
              Soluções Principais
            </h3>
            <ul className='space-y-2 text-muted-foreground text-sm'>
              <li>Automação de Fluxos</li>
              <li>Automação de Tarefas Repetitivas</li>
              <li>Agendamento Automático</li>
              <li>Secretaria Eletrônica</li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-foreground mb-4'>
              Segmentos Atendidos
            </h3>
            <ul className='space-y-2 text-muted-foreground text-sm'>
              <li>Corretoras</li>
              <li>Pousadas e Hotéis</li>
              <li>Escritórios de Advocacia</li>
              <li>Imobiliárias</li>
              <li>Consultórios</li>
            </ul>
          </div>
        </div>

        <div className='text-center border-t border-border pt-8'>
          <p className='text-muted-foreground text-sm mb-2'>
            © 2024 AI TRON. Todos os direitos reservados.
          </p>
          <p className='text-muted-foreground text-xs'>
            Desenvolvido com tecnologia de ponta para impulsionar seu negócio.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Componente principal App
function App() {
  return (
    <div className='min-h-screen text-foreground'>
      <Header />
      <HeroSection />
      <AboutSection /> {/* Adicionado a seção Sobre */}
      <BenefitsSection />
      <SolutionsSection />
      <PartnersSection />
      <GrowthSection />
      <RevolutionSection />
      <Footer />
      <FloatingWhatsApp />
      <CookieConsent />
    </div>
  );
}

export default App;

// Componente de Parceiros
const PartnersSection = () => {
  const partners = [
    { name: "Grupo Realize", logo: "/assets/partners/grupo-realize.png" },
    { name: "Alfa Look's", logo: "/assets/partners/Alfa-looks.png" },
    {
      name: "Evolution Barber",
      logo: "/assets/partners/evolutionn-barber.png",
    },
    {
      name: "Pousada do Golfinho",
      logo: "/assets/partners/pousada-golfinho.png",
    },
  ];

  return (
    <section id='parceiros' className='py-20'>
      <div className='container mx-auto px-4 text-center'>
        <motion.p
          className='text-primary text-lg font-semibold mb-4'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Empresas que confiam em nosso trabalho
        </motion.p>
        <motion.h2
          className='text-4xl md:text-5xl font-bold mb-8 text-foreground'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Algumas empresas já transformaram seus resultados
        </motion.h2>
        <motion.p
          className='text-xl text-muted-foreground max-w-3xl mx-auto mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          De startups a grandes corporações, nossos clientes alcançam resultados
          excepcionais
        </motion.p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className='bg-card p-6 rounded-lg shadow-lg flex flex-col items-center justify-center h-48 transition-transform'
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className='max-h-24 object-contain mb-4'
                loading='lazy'
              />
              <p className='text-lg font-semibold text-foreground'>
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de Crescimento (Impulsione o crescimento sem adicionar funcionários)
const GrowthSection = () => {
  return (
    <section id='crescimento' className='py-20 gradient-bg'>
      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <motion.div
          className='mb-8 md:mb-0'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className='text-primary text-lg font-semibold mb-4'>
            Algumas das nossas soluções
          </p>
          <h2 className='text-4xl md:text-5xl font-bold mb-10 text-gradient text-left'>
            Impulsione o crescimento
            <br />
            sem adicionar funcionários
          </h2>

          <div className='space-y-8'>
              <div className='flex items-start space-x-4'>
                <ArrowRight className='w-8 h-8 text-primary flex-shrink-0 mt-1' />
                <div>
                  <h3 className='text-2xl font-semibold mb-2'>
                    Múltiplos Agentes IA
                  </h3>
                  <p className='text-muted-foreground'>
                    Tenha um time de agentes especializados em cada etapa do seu
                    negócio, interagindo entre si para alcançar resultados
                    extraordinários. Cada agente pode ter seu próprio modelo,
                    aprendendo continuamente e operando os seus softwares.
                  </p>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <Zap className='w-8 h-8 text-primary flex-shrink-0 mt-1' />
                <div>
                  <h3 className='text-2xl font-semibold mb-2'>
                    Agentes Copilot
                  </h3>
                  <p className='text-muted-foreground'>
                    Suporte inteligente imediato.
                  </p>
                </div>
              </div>
              <div className='flex items-start space-x-4'>
                <Brain className='w-8 h-8 text-primary flex-shrink-0 mt-1' />
                <div>
                  <h3 className='text-2xl font-semibold mb-2'>
                    Sua IA localmente
                  </h3>
                  <p className='text-muted-foreground'>
                    Rodando IA com total controle.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='flex justify-center items-center'
          >
            {/* Placeholder para a imagem/animação */}
            <div className='w-full max-w-xl h-[32rem] bg-card/50 rounded-2xl overflow-hidden shadow-xl'>
              <img
                src='/ia.png'
                alt='IA'
                className='w-full h-full object-cover'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Componente "Pronto para revolucionar seu negócio?"
const RevolutionSection = () => {
  return (
    <section id='revolucao' className='py-20'>
      <div className='container mx-auto px-4 text-center'>
        <motion.p
          className='text-primary text-lg font-semibold mb-4'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Fale Conosco Agora
        </motion.p>
        <motion.h2
          className='text-4xl md:text-5xl font-bold mb-8 text-foreground'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Pronto para <span className='text-gradient'>revolucionar</span> seu
          negócio?
        </motion.h2>
        <motion.p
          className='text-xl text-muted-foreground max-w-3xl mx-auto mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Converse diretamente com nossos especialistas e descubra como a IA
          pode transformar seus resultados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className='mb-12'
        >
          <a
            href='https://wa.me/5511919235181'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button
              size='lg'
              className='h-14 px-12 text-lg hover:scale-105 transition-transform'
            >
              <MessageCircle className='w-6 h-6' />
              Solicitar uma proposta
            </Button>
          </a>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className='flex items-center space-x-3 bg-card/50 p-4 rounded-lg'
          >
            <CheckCircle className='w-6 h-6 text-primary flex-shrink-0' />
            <p className='text-foreground text-left'>Resposta em até 2 horas</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className='flex items-center space-x-3 bg-card/50 p-4 rounded-lg'
          >
            <CheckCircle className='w-6 h-6 text-primary flex-shrink-0' />
            <p className='text-foreground text-left'>
              Análise gratuita das suas necessidades
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className='flex items-center space-x-3 bg-card/50 p-4 rounded-lg'
          >
            <CheckCircle className='w-6 h-6 text-primary flex-shrink-0' />
            <p className='text-foreground text-left'>Proposta personalizada</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className='flex items-center space-x-3 bg-card/50 p-4 rounded-lg'
          >
            <CheckCircle className='w-6 h-6 text-primary flex-shrink-0' />
            <p className='text-foreground text-left'>Suporte especializado</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
          className='bg-card/50 p-6 rounded-lg max-w-3xl mx-auto flex items-center justify-center space-x-3'
        >
          <Zap className='w-6 h-6 text-primary flex-shrink-0' />
          <p className='text-foreground text-lg'>
            Vamos entender sua necessidade e criar uma{" "}
            <span className='text-primary font-semibold'>
              solução de IA personalizada
            </span>{" "}
            para sua empresa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

// Componente de Consentimento de Cookies
const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className='fixed bottom-4 left-4 right-4 bg-card p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between z-50'
    >
      <p className='text-sm text-muted-foreground mb-4 md:mb-0 md:mr-4'>
        Utilizamos cookies para melhorar sua experiência de navegação e analisar
        o tráfego do site. Ao continuar, você concorda com nossa política de
        privacidade.
      </p>
      <Button onClick={handleAccept} className='whitespace-nowrap'>
        Aceitar Cookies
      </Button>
    </motion.div>
  );
};

// Botão flutuante do WhatsApp
const FloatingWhatsApp = () => (
  <a
    href='https://wa.me/5511919235181'
    target='_blank'
    rel='noopener noreferrer'
    className='fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:bg-green-600 transition-colors'
  >
    <MessageCircle className='w-6 h-6' />
  </a>
);
