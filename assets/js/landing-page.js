'use strict';

function selectPerfil(value) {
    let texto = document.getElementById("inicio-texto")
    switch (value) {
        case "cliente-radio":
            texto.innerHTML = inicioTextoCliente;
            
        case "servidor-radio":
            texto.innerHTML = inicioTextoServidor;
            
        case "projetista-radio":
            texto.innerHTML = inicioTextoProjetista;
            
        case "construtora-radio":
            texto.innerHTML = inicioTextoConstrutora;
            
        case "fiscal-radio":
            texto.innerHTML = inicioTextoFiscal;
    }

}

const inicioTextoCliente = "✔ Identifique necessidades e objetivos <br>" +

    "✔ Armazene toda a documentação em um ambiente seguro e rastreável <br>" +

    "✔ Garanta o mesmo padrão de linguagem para todos os agentes do processo <br>" +

    "✔ Desenvolva conhecimentos sobre projetos focados em BIM e ESG <br>" +

    "✔ Aprenda a gerenciar projetos com metodologias ágeis <br>" +

    "✔ Receba e registre propostas de construtoras em um ambiente integrado <br>";

const inicioTextoServidor = "Identifique necessidades e objetivos <br> " +

    "Armazene toda a documentação em um ambiente seguro e rastreável <br> " +

    "Garanta o mesmo padrão de linguagem para todos os agentes do processo <br> " +

    "Desenvolva conhecimentos sobre projetos focados em BIM e ESG <br> " +

    "Aprenda a gerenciar projetos com metodologias ágeis <br> " +

    "Contrate equipes adequadas ao termo de referência (TR) <br> " +

    "Garanta a conformidade do projeto com documentos oficiais <br> " +

    "Receba e registre propostas de construtoras em um ambiente integrado";

const inicioTextoProjetista = "Acesse toda a documentação do projeto a qualquer momento <br>" +

    "Garanta a adequação ao  mesmo padrão de linguagem para todos os agentes do projeto <br>" +

    "Desenvolva conhecimentos sobre projetos focados em BIM e ESG <br>" +

    "Implemente o projeto por meio de metodologias ágeis";


const inicioTextoConstrutora = "Acesse toda a documentação do projeto a qualquer momento <br>" +

    "Garanta a adequação ao  mesmo padrão de linguagem para todos os agentes do projeto <br>" +

    "Desenvolva conhecimentos sobre projetos focados em BIM e ESG  <br>" +

    "Implemente o projeto por meio de metodologias ágeis <br>" +

    "Contrate equipes especializadas para a condução da obra <br>";


const inicioTextoFiscal = "Acesse toda a documentação e histórico do projeto <br>" +

    "Obtenha um projeto com linguagem padrão e sem conflitos";


const planejamentoTextoCiente = "Simule diferentes cenários antes da construção <br>" +

    "Gere documentação técnica de forma rápida e prática <br>" +

    "Recrute equipes especializadas de levantamento de campo com o uso de tecnologias BIM <br>" +

    "Acesse ferramentas de modelagem  BIM";

const planejamentoTextoServidor = "Simule diferentes cenários antes da construção <br>" +

    "Gere documentação técnica de forma rápida e prática <br>" +

    "Recrute equipes especializadas de levantamento de campo com o uso de tecnologias BIM <br>" +

    "Acesse ferramentas de modelagem  BIM"

const planejamentoTextoProjetista = "Elabore o modelo BIM por meio das melhores ferramentas do mercado <br>" +

    "Preveja cronograma de atividades geral e por etapas <br>" +

    "Contrate equipes e ferramentas para o planejamento e modelagem do projeto <br>" +

    "Simule diferentes cenários antes de iniciar a construção <br>" +

    "Verifique e resolva conflitos diretos, 'clash' entre disciplinas <br>" +

    "Tenha acesso a sistemas tridimensionais <br>" +

    "Gere desenhos como, plantas, cortes, elevações  <br>" +

    "Gere documentação técnica de forma rápida e prática";

const planejamentoTextoConstrutora = "Levantamento de campo com o uso de tecnologias compatíveis com o BIM <br>" +

    "Tenha acesso a projetos tridimensionais detalhados <br>" +

    "Use as melhores ferramentas do mercado para planejar a construção, incluindo logística, cronograma e coordenação do projeto";

const planejamentoTextoFiscal = "Acesse a projeção da obra de forma rápida e prática";


const execucaoTextoCiente = "Contrate equipe de obras <br>" +

    "Centralize o controle logístico do projeto e garanta o registro do processo <br>" +

    "Treine os colaboradores da obra sobre metodologia BIM";

const execucaooTextoServidor = "Contrate equipe de obras <br>" +

    "Centralize o controle logístico do projeto e garanta o registro do processo <br>" +

    "Treine os colaboradores da obra sobre metodologia BIM";

const execucaoTextoProjetista = "Centralize o controle logístico do projeto e garanta o registro do processo <br>" +

    "Obtenha relatórios de atividades, impacto <br>" +

    "Modele condições existentes/interferências";

const execucaoTextoConstrutora = "Garanta o andamento fluído das tarefas e acompanhe em tempo real <br>" +

    "Centralize o controle logístico do projeto e garanta o registro do processo <br>" +

    "Garanta a visão 360° do projeto a qualquer momento <br>" +

    "Treine os colaboradores da obra sobre metodologia BIM e ESG";

const execucaoTextoFiscal = "Tenha acesso ao controle logístico online <br>" +

    "Obtenha relatórios de atividades, impacto <br>" +

    "Verifique a existência de interferências digitalmente"


const monitoramentoTextoCiente = "Acompanhe e controle a execução do planejamento por meio de ferramentas digitais ao vivo <br>" +

    "Capture a realidade por meio de drones, laser Scanning e visualização 360°";

const monitoramentoTextoServidor = "Acompanhe e controle a execução do planejamento por meio de ferramentas digitais ao vivo <br>" +

    "Capture a realidade por meio de drones, laser Scanning e visualização 360°";

const monitoramentoProjetista = "Receba relatórios da execução da obra em tempo real <br>" +

    "Capture a realidade por meio de drones, laser Scanning e visualização 360°";

const monitoramentoConstrutora = "Capture a realidade por meio de drones, laser Scanning e visualização 360°"

const monitoramentoFiscal = "Acompanhe e controle a execução do planejamento por meio de ferramentas digitais ao vivo <br>" +

    "Capture a realidade por meio de drones, laser Scanning e visualização 360° <br>" +

    "Registre as atualizações em um ambiente integrado";


const posTextoCiente = "Tenha uma versão simplificada e visual do seu plano para facilitar a compreensão <br>" +

    "Elabore relatórios com máxima transparência";

const posTextoServidor = "Tenha uma versão simplificada e visual do seu plano para facilitar a compreensão <br>" +

    "Elabore relatórios com máxima transparência";

const posProjetista = "Tenha uma versão simplificada e visual do seu plano para facilitar a compreensão";

const posConstrutora = "Conte com histórico de projeto para gerar relatórios e registrar processos na obra";

const posFiscal = "Conte com histórico de projeto para gerar relatórios e registrar processos na obra";