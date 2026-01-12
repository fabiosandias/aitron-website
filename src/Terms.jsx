import React, { useState } from "react";
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
          <a href='/politica-privacidade' className='text-foreground hover:text-primary transition-colors'>Privacidade</a>
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
              <a href='/politica-privacidade' className='text-foreground hover:text-primary transition-colors'>Privacidade</a>
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

const FloatingWhatsApp = () => (
  <motion.a
    href='https://wa.me/55119962684780?text=Olá, desejo saber mais sobre as soluções de IA da Aitron.'
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
    <div className='relative flex items-center justify-center'>
      <WhatsappIcon className='w-7 h-7' />
    </div>
  </motion.a>
);

function Terms() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <Header />
      <main className='container mx-auto px-4 pt-40 pb-20 max-w-4xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='text-4xl md:text-5xl font-bold mb-4 text-gradient'>TERMOS DE USO</h1>
          <p className="text-muted-foreground mb-10">Última atualização: 12/01/2026</p>

          <div className='prose prose-invert max-w-none space-y-12 text-muted-foreground leading-relaxed'>
            <section className="bg-card/30 p-8 rounded-2xl border border-border/50 backdrop-blur-sm">
              <h2 className='text-2xl font-semibold text-primary mb-4'>1. Identificação do Responsável</h2>
              <p>Este site e os serviços disponibilizados por meio dele (“Serviços”) são operados por:</p>
              <p className="mt-4 font-medium text-foreground">
                FABIO SANTOS DIAS (ME), inscrita no CNPJ nº 12.637.261/0001-67, com sede na R. Serranópolis, nº 09, Letra A, Bairro Caseb, Feira de Santana/BA, CEP 44.052-171 (“AITRON”, “nós”).<br/>
                Contato: <a href="mailto:contato@airtron.com.br" className="text-primary hover:underline">contato@airtron.com.br</a>
              </p>
            </section>

            <section className="p-8">
              <h2 className='text-2xl font-semibold text-primary mb-4'>2. Aceitação dos Termos</h2>
              <p>Ao acessar, navegar ou utilizar este site e/ou quaisquer Serviços, você (“Usuário”) declara que leu, compreendeu e concorda com estes Termos de Uso e com a Política de Privacidade. Se você não concordar com estes Termos, por favor, não utilize o site nem os Serviços.</p>
            </section>

            <section className="bg-card/30 p-8 rounded-2xl border border-border/50 backdrop-blur-sm">
              <h2 className='text-2xl font-semibold text-primary mb-4'>3. Definições</h2>
              <ul className="list-none space-y-4">
                <li><strong>Site:</strong> páginas e conteúdos hospedados sob o domínio/ambiente oficial da AITRON.</li>
                <li><strong>Serviços:</strong> consultoria, automações, chatbots, agentes de IA, integrações, suporte e demais soluções descritas no Site.</li>
                <li><strong>Conteúdo:</strong> textos, marcas, layouts, imagens, vídeos, códigos, materiais e informações disponibilizados pela AITRON.</li>
              </ul>
            </section>

            <section className="p-8">
              <h2 className='text-2xl font-semibold text-primary mb-4'>4. Elegibilidade e Uso do Site</h2>
              <p>O Usuário declara ter capacidade civil para aceitar estes Termos e utilizar o Site conforme a legislação aplicável. O uso do Site deve ocorrer apenas para finalidades lícitas e de acordo com estes Termos.</p>
            </section>

            <section className="bg-card/30 p-8 rounded-2xl border border-border/50 backdrop-blur-sm">
              <h2 className='text-2xl font-semibold text-primary mb-4'>5. Descrição dos Serviços e Propostas</h2>
              <p>Os conteúdos do Site possuem caráter informativo e podem apresentar exemplos, estimativas, demonstrações e descrições gerais. Propostas comerciais, prazos, escopo, valores e entregas serão definidos em documento próprio (ex.: proposta/contrato), quando aplicável.</p>
            </section>

            <section className="p-8 border-l-4 border-primary bg-primary/5 rounded-r-2xl">
              <h2 className='text-2xl font-semibold text-primary mb-4'>6. Comunicação e Contato</h2>
              <p>Ao preencher formulários, solicitar orçamento ou entrar em contato (incluindo via WhatsApp), o Usuário autoriza o recebimento de comunicações relacionadas ao atendimento da solicitação, conforme descrito na Política de Privacidade. O Usuário pode solicitar a interrupção de comunicações promocionais a qualquer momento.</p>
            </section>

            <section className="bg-card/30 p-8 rounded-2xl border border-border/50 backdrop-blur-sm">
              <h2 className='text-2xl font-semibold text-primary mb-4'>7. Regras de Uso e Condutas Proibidas</h2>
              <p className="mb-4">É vedado ao Usuário:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violar leis, regulamentos e direitos de terceiros;</li>
                <li>Inserir conteúdo ilegal, ofensivo, difamatório, discriminatório ou que viole direitos autorais/marca;</li>
                <li>Tentar acessar áreas restritas, contornar medidas de segurança, introduzir malware, explorar falhas, realizar engenharia reversa indevida;</li>
                <li>Utilizar o Site para enviar spam ou coletar dados de terceiros sem base legal.</li>
              </ul>
            </section>

            <section className="p-8">
              <h2 className='text-2xl font-semibold text-primary mb-4'>8. Propriedade Intelectual</h2>
              <p>Todo o Conteúdo do Site (incluindo marca, identidade visual, textos, layout, materiais e códigos) é de propriedade da AITRON ou licensed a ela, sendo protegido por legislação aplicável. É proibida a reprodução, distribuição, modificação ou uso comercial do Conteúdo sem autorização prévia e expressa.</p>
            </section>

            <section className="bg-card/30 p-8 rounded-2xl border border-border/50 backdrop-blur-sm">
              <h2 className='text-2xl font-semibold text-primary mb-4'>9. Conteúdo Enviado pelo Usuário</h2>
              <p>Ao enviar informações por formulários, e-mails ou canais de contato, o Usuário declara possuir os direitos necessários e ser responsável pela veracidade do conteúdo. O Usuário concorda em não enviar informações de terceiros sem autorização e/ou sem base legal adequada.</p>
            </section>

            <section className="p-8">
              <h2 className='text-2xl font-semibold text-primary mb-4'>10. Links e Serviços de Terceiros</h2>
              <p>O Site pode conter links ou integrações com serviços de terceiros (ex.: WhatsApp, Meta, ferramentas de analytics, hospedagem). A AITRON não se responsabiliza por políticas, práticas, conteúdo ou funcionamento desses terceiros. O uso estará sujeito aos termos e políticas deles.</p>
            </section>

            <section className="bg-card/30 p-8 rounded-2xl border border-border/50 backdrop-blur-sm">
              <h2 className='text-2xl font-semibold text-primary mb-4'>11. Isenção de Garantias</h2>
              <p>A AITRON envida esforços para manter o Site seguro, estável e atualizado, porém não garante que o Site funcionará sem interrupções, erros ou falhas; o conteúdo será sempre completo ou atualizado em tempo real; ou que a navegação estará livre de ataques ou incidentes inevitáveis.</p>
            </section>

            <section className="p-8">
              <h2 className='text-2xl font-semibold text-primary mb-4'>12. Limitação de Responsabilidade</h2>
              <p>Na máxima extensão permitida pela lei, a AITRON não será responsável por danos indiretos, lucros cessantes, perda de oportunidades ou prejuízos decorrentes do uso/indisponibilidade do Site; falhas decorrentes de terceiros, provedores, internet, integrações externas ou caso fortuito/força maior.</p>
            </section>

            <section className="bg-card/30 p-8 rounded-2xl border border-border/50 backdrop-blur-sm text-center">
              <h2 className='text-2xl font-semibold text-primary mb-4'>16. Lei Aplicável e Foro</h2>
              <p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de <strong>Feira de Santana/BA</strong>, com renúncia a qualquer outro, por mais privilegiado que seja.</p>
            </section>

            <div className="flex flex-col items-center pt-10 border-t border-border">
              <p className="text-foreground font-semibold mb-4">Dúvidas sobre estes Termos?</p>
              <a href="mailto:contato@airtron.com.br">
                <Button variant="outline">contato@airtron.com.br</Button>
              </a>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default Terms;
