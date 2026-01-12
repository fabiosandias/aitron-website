import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./components/ui/button";
import aitronLogo from "./assets/aitron.png";
import { WhatsappIcon } from "./components/whatsapp-icon";

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
        <motion.a
          href='/#home'
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
        </motion.a>

        <nav className='hidden md:flex items-center space-x-8'>
          <a href='/#home' className='text-foreground hover:text-primary transition-colors'>Home</a>
          <a href='/termos' className='text-foreground hover:text-primary transition-colors'>Termos</a>
        </nav>

        <button className='md:hidden text-foreground' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "X" : "Menu"}
        </button>

        {isMenuOpen && (
          <motion.div
            className='absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border md:hidden'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className='flex flex-col space-y-4 p-4'>
              <a href='/#home' className='text-foreground hover:text-primary transition-colors'>Home</a>
              <a href='/termos' className='text-foreground hover:text-primary transition-colors'>Termos</a>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

const Footer = () => {
  return (
    <footer className='bg-background py-12 border-t border-border'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center space-x-3 mb-4'>
          <img src={aitronLogo} alt='Aitron' className='w-10 h-10' />
          <span className='text-2xl font-bold text-gradient'>AI TRON</span>
        </div>
        <div className='text-center border-t border-border pt-8'>
          <p className='text-muted-foreground text-sm mb-2'>© 2026 AI TRON. Todos os direitos reservados.</p>
          <p className='text-muted-foreground text-xs mb-4'>Desenvolvido com tecnologia de ponta para impulsionar seu negócio.</p>
          
          <div className='bg-card/30 p-4 rounded-lg border border-border/50 text-left max-w-2xl mx-auto mb-6 text-xs text-muted-foreground'>
            <p><strong>Razão Social:</strong> FABIO SANTOS DIAS (ME)</p>
            <p><strong>CNPJ:</strong> 12.637.261/0001-67</p>
            <p><strong>Endereço:</strong> R. Serranópolis, nº 09, Letra A, Bairro Caseb, Feira de Santana/BA, CEP 44.052-171</p>
            <p><strong>E-mail:</strong> contato@airtron.com.br</p>
          </div>

          <div className='flex justify-center space-x-4'>
            <a href='/termos' className='text-primary hover:underline'>Termos de Uso</a>
            <a href='/politica-privacidade' className='text-primary hover:underline'>Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

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

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className='fixed bottom-32 md:bottom-24 left-4 right-4 bg-card p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between z-50 border border-border'
    >
      <p className='text-sm text-muted-foreground mb-4 md:mb-0 md:mr-4'>
        Utilizamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossos
        <a href='/termos' className='text-primary underline mx-1'>
          Termos
        </a>
        e nossa
        <a href='/politica-privacidade' className='text-primary underline ml-1'>
          Política de Privacidade
        </a>
        .
      </p>
      <Button onClick={handleAccept} className='whitespace-nowrap'>Aceitar Todos</Button>
    </motion.div>
  );
};

const FloatingWhatsApp = () => (
  <motion.a
    href='https://wa.me/55119962684780?text=Olá, desejo saber mais sobre a segurança de dados na Aitron.'
    target='_blank'
    rel='noopener noreferrer'
    aria-label='Conversar no WhatsApp'
    className='fixed bottom-6 right-6 z-50 flex items-center justify-center whatsapp-button rounded-full w-14 h-14 shadow-xl'
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.6 }}
  >
    <WhatsappIcon className='w-7 h-7' />
  </motion.a>
);

function PrivacyPolicy() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <Header />
      <main className='container mx-auto px-4 pt-40 pb-20 max-w-4xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-4xl md:text-5xl font-bold mb-4 text-gradient'>POLÍTICA DE PRIVACIDADE</h1>
          <p className="text-muted-foreground mb-10">Última atualização: 12/01/2026</p>

          <div className='prose prose-invert max-w-none space-y-12 text-muted-foreground leading-relaxed'>
            <section className="bg-card/30 p-8 rounded-2xl border border-border/50 backdrop-blur-sm">
              <h2 className='text-2xl font-semibold text-primary mb-4'>1. Quem somos (Controlador)</h2>
              <p>A AITRON é o nome fantasia/serviço operado por:</p>
              <p className="mt-4 font-medium text-foreground">
                FABIO SANTOS DIAS (ME)<br/>
                CNPJ: 12.637.261/0001-67<br/>
                Endereço: R. Serranópolis, nº 09, Letra A, Bairro Caseb, Feira de Santana/BA, CEP 44.052-171<br/>
                E-mail de contato (Privacidade): <a href="mailto:contato@airtron.com.br" className="text-primary hover:underline">contato@airtron.com.br</a>
              </p>
            </section>

            <section className="p-8">
              <h2 className='text-2xl font-semibold text-primary mb-4'>2. Escopo desta Política</h2>
              <p>Esta Política descreve como coletamos e tratamos dados pessoais ao acessar o Site, preencher formulários, falar conosco por canais digitais (incluindo WhatsApp) e contratar nossos Serviços.</p>
            </section>

            <section className="bg-card/30 p-8 rounded-2xl border border-border/50 backdrop-blur-sm">
              <h2 className='text-2xl font-semibold text-primary mb-4'>3. Dados pessoais que podemos coletar</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-foreground font-semibold mb-2">3.1. Dados fornecidos pelo Usuário</h3>
                  <p>Nome, e-mail, telefone/WhatsApp, empresa, cargo, cidade/UF e informações em mensagens.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">3.2. Dados de comunicação via WhatsApp</h3>
                  <p>Número de telefone, nome/perfil, conteúdo de mensagens, anexos e metadados básicos. O WhatsApp/Meta trata dados conforme suas próprias políticas.</p>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">3.3. Dados de navegação e logs</h3>
                  <p>Endereço IP, data/hora, páginas visitadas, identificadores de dispositivo e dados de cookies.</p>
                </div>
              </div>
            </section>

            <section className="p-8">
              <h2 className='text-2xl font-semibold text-primary mb-4'>4. Para quais finalidades usamos os dados</h2>
              <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0 font-medium">
                {[
                  "Atender solicitações",
                  "Prestar e operar Serviços",
                  "Comunicar atualizações",
                  "Melhorar o Site",
                  "Cumprir obrigações legais",
                  "Prevenir fraude",
                  "Marketing e relacionamento"
                ].map((item, i) => (
                  <li key={i} className="flex items-center p-3 bg-secondary/30 rounded-lg border border-border/50">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-card/30 p-8 rounded-2xl border border-border/50 backdrop-blur-sm">
              <h2 className='text-2xl font-semibold text-primary mb-4'>5. Bases legais (LGPD)</h2>
              <p>Execução de contrato, consentimento, legítimo interesse, cumprimento de obrigação legal e exercício regular de direitos.</p>
            </section>

            <section className="p-8">
              <h2 className='text-2xl font-semibold text-primary mb-4'>6. Compartilhamento de dados</h2>
              <p>Compartilhamos dados com provedores de infraestrutura, ferramentas de análise, plataformas de comunicação (WhatsApp/Meta) e autoridades quando exigido. <strong>Não vendemos dados pessoais.</strong></p>
            </section>

            <section className="bg-card/30 p-8 rounded-2xl border border-border/50 backdrop-blur-sm">
              <h2 className='text-2xl font-semibold text-primary mb-4'>11. Direitos do titular (LGPD)</h2>
              <p className="mb-4">Você pode solicitar:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Confirmação e acesso",
                  "Correção de dados",
                  "Eliminação (quando aplicável)",
                  "Portabilidade",
                  "Informações de compartilhamento",
                  "Revogação de consentimento"
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-3 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            <section id="data-deletion" className="bg-primary/10 p-8 rounded-2xl border border-primary/30 scroll-mt-32">
              <h2 className='text-2xl font-semibold text-primary mb-4'>12. Instruções de exclusão de dados (Meta/WhatsApp)</h2>
              <p className="mb-6">Se você deseja solicitar a exclusão de dados relacionados ao atendimento/integrações:</p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>Envie um e-mail para <a href="mailto:contato@airtron.com.br" className="text-primary hover:underline font-bold">contato@airtron.com.br</a></li>
                <li>Assunto: <strong>Exclusão de Dados — Meta/WhatsApp</strong></li>
                <li>Informe o número de telefone utilizado e detalhes do atendimento.</li>
              </ol>
              <p className="mt-6 text-sm italic">Retornaremos confirmando a execução ou explicando eventuais retenções obrigatórias.</p>
            </section>

            <div className="flex flex-col items-center pt-10 border-t border-border">
              <p className="text-foreground font-semibold mb-2">Encarregado de Dados (DPO)</p>
              <p className="text-sm mb-6">Fábio Santos Dias</p>
              <a href="mailto:contato@airtron.com.br">
                <Button>Exercer Meus Direitos</Button>
              </a>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieConsent />
    </div>
  );
}

export default PrivacyPolicy;
