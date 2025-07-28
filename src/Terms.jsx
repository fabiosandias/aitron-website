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

        <nav className='hidden md:flex items-center space-x-8'>
          <a href='/' className='text-foreground hover:text-primary transition-colors'>Home</a>
        </nav>

        <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
              <a href='/' className='text-foreground hover:text-primary transition-colors'>Home</a>
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
          <p className='text-muted-foreground text-sm mb-2'>© 2024 AI TRON. Todos os direitos reservados.</p>
          <p className='text-muted-foreground text-xs'>Desenvolvido com tecnologia de ponta para impulsionar seu negócio.</p>
          <p className='mt-2'>
            <a href='/termos' className='text-blue-500 hover:underline'>Termos e Condições</a>
          </p>
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

  if (!isVisible) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      className='fixed bottom-32 md:bottom-24 left-4 right-4 bg-card p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between z-50'
    >
      <p className='text-sm text-muted-foreground mb-4 md:mb-0 md:mr-4'>
        Utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site. Ao continuar, você concorda com nossa <a href='/termos' className='text-blue-500 underline'>política de privacidade e termos</a>.
      </p>
      <Button onClick={handleAccept} className='whitespace-nowrap'>Aceitar Todos</Button>
    </motion.div>
  );
};

const FloatingWhatsApp = () => (
  <a
    href='https://wa.me/5511919235181?text=Gostaria%20de%20fazer%20um%20orcamento.'
    target='_blank'
    rel='noopener noreferrer'
    aria-label='Conversar no WhatsApp'
    className='fixed bottom-6 right-6 z-50 flex items-center justify-center whatsapp-button rounded-full w-14 h-14 shadow-xl'
  >
    <WhatsappIcon className='w-7 h-7' />
  </a>
);

function Terms() {
  return (
    <div className='min-h-screen text-foreground overflow-x-hidden'>
      <Header />
      <main className='container mx-auto px-4 pt-32 pb-20 space-y-6'>
        <h1 className='text-3xl font-bold mb-6'>Termos e Condições</h1>
        <div className='prose max-w-none'>
          <p><strong>Termos de Uso do Site AI TRON</strong></p>
          <p><strong>1. Aceitação</strong><br />Ao acessar ou utilizar o site https://aitron.com.br/ (o “Site”), você declara que leu, compreendeu e concorda com estes Termos de Uso e com a Política de Privacidade. Se você não concorda com estes termos, não utilize o Site.</p>
          <p><strong>2. Definições</strong><br />AI TRON ou Empresa: AI TRON, pessoa jurídica proprietária do Site.<br />Usuário(s): qualquer pessoa que acesse ou utilize o Site.<br />Conteúdo: todo material disponibilizado no Site, incluindo textos, imagens, vídeos, gráficos e software.</p>
          <p><strong>3. Uso do Site</strong><br />3.1. O Usuário compromete-se a utilizar o Site apenas para fins lícitos e de acordo com estes Termos.<br />3.2. É vedado ao Usuário:<br />(a) publicar, transmitir ou disseminar conteúdo ilegal, ofensivo, difamatório ou que viole direitos de terceiros;<br />(b) tentar obter acesso não autorizado a sistemas ou áreas restritas do Site;<br />(c) utilizar o Site para enviar spam ou mensagens não solicitadas.</p>
          <p><strong>4. Propriedade Intelectual</strong><br />Todo o Conteúdo do Site é de propriedade da AI TRON ou de terceiros licenciantes. O uso do Conteúdo é permitido apenas para fins pessoais e informativos. A reprodução, distribuição ou modificação do Conteúdo sem autorização prévia é proibida.</p>
          <p><strong>5. Responsabilidades do Usuário</strong><br />O Usuário é responsável por:<br />garantir a veracidade das informações fornecidas;<br />manter a confidencialidade de suas credenciais de acesso (quando aplicável);<br />não causar danos ao Site ou a sistemas relacionados.</p>
          <p><strong>6. Links de Terceiros</strong><br />O Site pode conter links para sites de terceiros. A AI TRON não se responsabiliza pelo conteúdo ou pelas práticas desses sites.</p>
          <p><strong>7. Privacidade e Proteção de Dados</strong><br />A coleta, o uso e o armazenamento de dados pessoais são regidos pela Política de Privacidade. O Usuário declara estar ciente de que a AI TRON poderá coletar dados pessoais e usar cookies, conforme descrito na política.</p>
          <p><strong>8. Isenção de Garantias</strong><br />O Site e seu Conteúdo são fornecidos “como estão”. A AI TRON não garante que o Site funcionará de forma ininterrupta ou livre de erros, nem que seu conteúdo seja totalmente atualizado ou livre de falhas.</p>
          <p><strong>9. Limitação de Responsabilidade</strong><br />Na máxima extensão permitida pela legislação aplicável, a AI TRON não será responsável por danos indiretos, incidentais ou consequentes decorrentes do uso ou da impossibilidade de uso do Site.</p>
          <p><strong>10. Alterações</strong><br />A AI TRON poderá alterar estes Termos de Uso a qualquer momento. O Usuário será notificado sobre mudanças significativas e deverá revisar o documento periodicamente.</p>
          <p><strong>11. Lei Aplicável e Foro</strong><br />Estes Termos são regidos pelas leis da República Federativa do Brasil. Qualquer controvérsia será submetida ao foro da comarca de Guarulhos/SP, com renúncia a qualquer outro.</p>
          <p><strong>12. Contato</strong><br />Em caso de dúvidas sobre estes Termos, entre em contato pelo e-mail privacidade@aitron.com.br (ou outro canal indicado pela empresa).</p>
          <p><strong>Política de Privacidade e Cookies da AI TRON</strong></p>
          <p><strong>1. Introdução</strong><br />A AI TRON se compromete a proteger a privacidade dos Usuários e a cumprir a Lei Geral de Proteção de Dados (LGPD) – Lei nº 13.709/2018. Esta política descreve quais dados pessoais são coletados, como são utilizados e quais são os direitos dos titulares.</p>
          <p><strong>2. Definições (LGPD)</strong><br />De acordo com o art. 5º da LGPD:<br />Dados pessoais são informações relacionadas a pessoa natural identificada ou identificável.<br />Dados pessoais sensíveis incluem dados sobre origem racial/étnica, convicção religiosa, opinião política, saúde, vida sexual, dados genéticos/biométricos.<br />Controlador é a pessoa ou empresa que toma as decisões sobre o tratamento de dados.<br />Operador é quem realiza o tratamento em nome do controlador.<br />Titular é a pessoa a quem se referem os dados.<br />Tratamento é toda operação com dados pessoais, como coleta, armazenamento, uso, transferência ou eliminação.<br />Consentimento é a manifestação livre, informada e inequívoca pela qual o titular concorda com o tratamento de seus dados para uma finalidade determinada.</p>
          <p><strong>3. Dados que Coletamos</strong><br />Dados fornecidos voluntariamente: nome, e-mail, telefone, empresa e outras informações inseridas em formulários de contato ou orçamentos.<br />Dados coletados automaticamente: endereço IP, tipo de navegador, dispositivo, páginas acessadas e tempo de visita.<br />Dados de cookies e tecnologias semelhantes, que registram preferências de navegação, desempenho e publicidade.</p>
          <p><strong>4. Formas de Coleta</strong><br />Formulários no Site: quando o Usuário preenche campos para solicitar um orçamento, inscrever-se em newsletters ou enviar mensagens.<br />Cookies e ferramentas analíticas: utilizados para melhorar a experiência de navegação, medir audiência e personalizar conteúdos (ver seção 8).</p>
          <p><strong>5. Finalidades de Uso</strong><br />Os dados coletados poderão ser utilizados para:<br />Responder a solicitações e prestar serviços;<br />Personalizar a experiência do Usuário e enviar conteúdos relevantes;<br />Analisar estatísticas de acesso e melhorar o Site;<br />Enviar comunicações de marketing, desde que o Usuário tenha consentido;<br />Cumprir obrigações legais ou regulatórias.</p>
          <p><strong>6. Bases Legais</strong><br />O tratamento de dados pessoais ocorrerá conforme as hipóteses do art. 7º da LGPD, em especial:<br />Consentimento do titular (art. 7º, I) – para envio de marketing e uso de cookies não essenciais;<br />Legítimo interesse (art. 7º, IX) – para cookies essenciais e melhorias do Site;<br />Execução de contrato (art. 7º, V) – para comunicação com clientes que solicitam orçamento.</p>
          <p><strong>7. Compartilhamento de Dados</strong><br />Os dados poderão ser compartilhados com:<br />Prestadores de serviços (hospedagem, sistemas de CRM, parceiros de publicidade e análise) que atuam como operadores e seguem nossas instruções;<br />Terceiros autorizados, quando necessário para cumprimento de obrigações legais ou ordens judiciais;<br />Parceiros de publicidade, como Google e outras redes, para veiculação de anúncios personalizados.</p>
          <p><strong>8. Cookies</strong></p>
          <p><strong>8.1 O que são cookies?</strong><br />Cookies são pequenos arquivos de texto armazenados no dispositivo do Usuário quando ele visita um site. Eles registram informações sobre a interação do Usuário com o site, permitindo lembrar preferências, personalizar conteúdo e analisar tráfego.</p>
          <p><strong>8.2 Por que utilizamos cookies?</strong><br />Os cookies são usados para otimizar a experiência de navegação e melhorar a funcionalidade do Site. Eles ajudam a entender como os Usuários utilizam o site, identificando padrões e permitindo ajustes. O Usuário pode gerenciar ou bloquear cookies a qualquer momento nas configurações do navegador.</p>
          <p><strong>8.3 Tipos de cookies utilizados</strong><br />Essenciais: necessários para o funcionamento do Site, como autenticação em áreas restritas. Base legal: art. 7º, IX, da LGPD.<br />Analíticos: permitem analisar o desempenho do Site e identificar páginas mais visitadas. Utilizados apenas para estatísticas sem coletar informações pessoais.<br />Funcionalidade: armazenam preferências do Usuário para proporcionar experiência personalizada (ex.: lembrar login).<br />Terceiros: cookies de serviços externos que medem a eficácia de aplicativos e publicidade.<br />Publicidade: direcionam anúncios de acordo com os interesses do Usuário e limitam o número de vezes que um anúncio é exibido.</p>
          <p><strong>8.4 Cookies de terceiros e Google</strong><br />Conforme as diretrizes do Google, informamos que terceiros, incluindo o Google, utilizam cookies para exibir anúncios baseados em visitas anteriores ao nosso site. O uso desses cookies permite que o Google e seus parceiros exibam anúncios com base nas visitas feitas pelos Usuários. O Usuário pode optar por não receber publicidade personalizada acessando Configurações de anúncios do Google ou visitando a página aboutads.info para optar por não receber cookies de outros fornecedores.</p>
          <p><strong>8.5 Banner de cookies e consentimento</strong><br />De acordo com a orientação da ANPD, implementaremos:<br />Banner de nível 1: exibido na primeira visita, permitindo ao Usuário aceitar ou rejeitar os cookies não essenciais. O botão de aceitação não será mais destacado do que o de rejeição, e haverá link para um painel de preferências.<br />Painel de preferências (banner de nível 2): possibilitará ao Usuário aprovar ou rejeitar cada categoria de cookies não essenciais. Os cookies não essenciais serão rejeitados por padrão.<br />O Usuário poderá alterar suas preferências a qualquer momento e retirar o consentimento de forma fácil.</p>
          <p><strong>9. Direitos dos Titulares</strong><br />Os titulares de dados pessoais têm, dentre outros, os direitos previstos no art. 18 da LGPD:<br />Confirmação e acesso: saber se seus dados são tratados e acessar os dados coletados;<br />Correção: solicitar correção de dados incompletos, inexatos ou desatualizados;<br />Anonimização, bloqueio ou eliminação: requerer anonimização ou eliminação de dados desnecessários ou excessivos;<br />Portabilidade: solicitar portabilidade dos dados a outro fornecedor, observados segredos comercial e industrial;<br />Eliminação: pedir a eliminação dos dados pessoais tratados com consentimento;<br />Informação de compartilhamento: obter informações das entidades públicas e privadas com as quais o controlador compartilhou dados;<br />Revogação do consentimento: revogar o consentimento a qualquer momento;<br />Informação sobre as consequências da recusa em consentir.</p>
          <p>Para exercer esses direitos, o titular deve enviar solicitação para privacidade@aitron.com.br (ou outro canal indicado pela empresa), sendo que poderemos solicitar comprovação de identidade para evitar fraudes.</p>
          <p><strong>10. Segurança dos Dados</strong><br />A AI TRON adota medidas técnicas e administrativas para proteger os dados pessoais contra acessos não autorizados, perda, alteração ou divulgação indevida, em conformidade com os princípios de segurança e prevenção previstos na LGPD.</p>
          <p><strong>11. Retenção de Dados</strong><br />Os dados pessoais são armazenados somente pelo tempo necessário ao cumprimento das finalidades descritas ou conforme exigido por lei. Após atingida a finalidade, os dados serão eliminados ou anonimizados, salvo obrigação legal de retenção.</p>
          <p><strong>12. Transferências Internacionais</strong><br />Os dados podem ser processados ou armazenados em servidores fora do Brasil. Nesses casos, adotamos medidas para garantir que a transferência observe os requisitos da LGPD, incluindo a garantia de um nível adequado de proteção de dados.</p>
          <p><strong>13. Atualizações desta Política</strong><br />Esta Política poderá ser atualizada para refletir mudanças na legislação ou na forma como tratamos dados pessoais. Notificaremos os Usuários sobre alterações significativas por meio do Site.</p>
          <p><strong>14. Contato</strong><br />Para esclarecer dúvidas, exercer direitos ou fazer solicitações relacionadas a esta Política, entre em contato com o encarregado de dados da AI TRON:<br />E-mail: privacidade@aitron.com.br<br />Endereço: residente à Rua Serranópolis, nº 09, Letra A, Bairro Caseb, Feira de Santana/BA, CEP 44052-171, e-mail: suporte@aitron.com.br, telefone: .<br />Telefone: (11) 91923-5181.</p>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieConsent />
    </div>
  );
}

export default Terms;
