import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./components/ui/button";
import aitronLogo from "./assets/aitron.png";
import { WhatsappIcon } from "./components/whatsapp-icon";

const Header = () => {
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
          <img src={aitronLogo} alt='Aitron' className='w-10 h-10' />
          <span className='text-2xl font-bold text-gradient'>AITRON</span>
        </motion.a>
        <nav className='hidden md:flex items-center space-x-8'>
          <a href='/#home' className='text-foreground hover:text-primary transition-colors'>Home</a>
          <a href='/termos' className='text-foreground hover:text-primary transition-colors'>Termos</a>
          <a href='/politica-privacidade' className='text-foreground hover:text-primary transition-colors'>Privacidade</a>
        </nav>
      </div>
    </motion.header>
  );
};

const Footer = () => (
  <footer className='bg-background py-12 border-t border-border mt-20'>
    <div className='container mx-auto px-4 text-center'>
      <div className='flex items-center justify-center space-x-3 mb-4'>
        <img src={aitronLogo} alt='Aitron' className='w-10 h-10' />
        <span className='text-2xl font-bold text-gradient'>AI TRON</span>
      </div>
      <p className='text-muted-foreground text-sm mb-4'>© 2026 AI TRON. Todos os direitos reservados.</p>
      <div className='flex justify-center space-x-4 text-sm'>
        <a href='/termos' className='text-primary hover:underline'>Termos de Uso</a>
        <a href='/politica-privacidade' className='text-primary hover:underline'>Política de Privacidade</a>
      </div>
    </div>
  </footer>
);

function DataDeletion() {
  return (
    <div className='min-h-screen bg-background text-foreground'>
      <Header />
      <main className='container mx-auto px-4 pt-40 pb-20 max-w-2xl text-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-card/30 p-10 rounded-3xl border border-border/50 backdrop-blur-lg"
        >
          <h1 className='text-3xl font-bold mb-6 text-gradient'>Exclusão de Dados (Meta)</h1>
          <p className='text-muted-foreground mb-8 text-lg'>
            Para solicitar a exclusão definitiva dos seus dados coletados através de nossas integrações com <strong>WhatsApp</strong> e <strong>Meta</strong>, siga as instruções abaixo:
          </p>
          
          <div className='bg-background/50 p-6 rounded-2xl border border-border text-left mb-8'>
            <p className='mb-4 italic'>Envie um e-mail para o nosso Encarregado de Dados:</p>
            <p className='text-primary font-bold text-xl mb-4'>suporte@aitron.com.br</p>
            <ul className='space-y-2 text-sm text-muted-foreground'>
              <li>• Assunto: <strong>Exclusão de Dados — Meta/WhatsApp</strong></li>
              <li>• Informe seu <strong>número de WhatsApp</strong> (com DDD)</li>
              <li>• Informe seu nome ou empresa citada no atendimento</li>
            </ul>
          </div>

          <p className='text-sm text-muted-foreground mb-10'>
            Nosso prazo de resposta e execução é de até <strong>5 dias úteis</strong>. Confirmaremos via e-mail assim que o processo for concluído em nossos bancos de dados.
          </p>

          <a href="mailto:suporte@aitron.com.br">
            <Button size="lg" className="w-full sm:w-auto">Solicitar Exclusão Agora</Button>
          </a>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default DataDeletion;
