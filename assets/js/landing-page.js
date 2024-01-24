'use strict';



function selectPerfil(value) {

    
    let inicioTexto = document.getElementById("inicio-texto")
    let planejamentoTexto = document.getElementById("planejamento-texto")
    let execucaoTexto = document.getElementById("execucao-texto")
    let monitoriamentoTexto = document.getElementById("monitoramento-texto")
    let posTexto = document.getElementById("pos-obra-texto")

    inicioTexto.classList.remove("d-none");
    planejamentoTexto.classList.remove("d-none");
    execucaoTexto.classList.remove("d-none");
    monitoriamentoTexto.classList.remove("d-none");
    posTexto.classList.remove("d-none");


    switch (value) {
        case "cliente-radio":
            inicioTexto.innerHTML = inicioTextoCliente;
            planejamentoTexto.innerHTML = planejamentoTextoCliente;
            execucaoTexto.innerHTML = execucaoTextoCliente;
            monitoriamentoTexto.innerHTML = monitoramentoTextoCliente;
            posTexto.innerHTML = posTextoCliente;
            break
        case "servidor-radio":
            inicioTexto.innerHTML = inicioTextoServidor;
            planejamentoTexto.innerHTML = planejamentoTextoServidor;
            execucaoTexto.innerHTML = execucaoTextoServidor;
            monitoriamentoTexto.innerHTML = monitoramentoTextoServidor;
            posTexto.innerHTML = posTextoServidor;
            break
        case "projetista-radio":
            inicioTexto.innerHTML = inicioTextoProjetista;
            planejamentoTexto.innerHTML = planejamentoTextoProjetista;
            execucaoTexto.innerHTML = execucaoTextoProjetista;
            monitoriamentoTexto.innerHTML = monitoramentoTextoProjetista;
            posTexto.innerHTML = posTextoProjetista;
            break
        case "construtora-radio":
            inicioTexto.innerHTML = inicioTextoConstrutora;
            planejamentoTexto.innerHTML = planejamentoTextoConstrutora;
            execucaoTexto.innerHTML = execucaoTextoConstrutora;
            monitoriamentoTexto.innerHTML = monitoramentoTextoConstrutora;
            posTexto.innerHTML = posTextoConstrutorae;
            break
        case "fiscal-radio":
            inicioTexto.innerHTML = inicioTextoFiscal;
            planejamentoTexto.innerHTML = planejamentoTextoFiscal;
            execucaoTexto.innerHTML = execucaoTextoFiscal;
            monitoriamentoTexto.innerHTML = monitoramentoTextoFiscal;
            posTexto.innerHTML = posTextoFiscal;
            break
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


const planejamentoTextoCliente = "Simule diferentes cenários antes da construção <br>" +

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


const execucaoTextoCliente = "Contrate equipe de obras <br>" +

    "Centralize o controle logístico do projeto e garanta o registro do processo <br>" +

    "Treine os colaboradores da obra sobre metodologia BIM";

const execucaoTextoServidor = "Contrate equipe de obras <br>" +

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


const monitoramentoTextoCliente = "Acompanhe e controle a execução do planejamento por meio de ferramentas digitais ao vivo <br>" +

    "Capture a realidade por meio de drones, laser Scanning e visualização 360°";

const monitoramentoTextoServidor = "Acompanhe e controle a execução do planejamento por meio de ferramentas digitais ao vivo <br>" +

    "Capture a realidade por meio de drones, laser Scanning e visualização 360°";

const monitoramentoTextoProjetista = "Receba relatórios da execução da obra em tempo real <br>" +

    "Capture a realidade por meio de drones, laser Scanning e visualização 360°";

const monitoramentoTextoConstrutora = "Capture a realidade por meio de drones, laser Scanning e visualização 360°"

const monitoramentoTextoFiscal = "Acompanhe e controle a execução do planejamento por meio de ferramentas digitais ao vivo <br>" +

    "Capture a realidade por meio de drones, laser Scanning e visualização 360° <br>" +

    "Registre as atualizações em um ambiente integrado";


const posTextoCliente = "Tenha uma versão simplificada e visual do seu plano para facilitar a compreensão <br>" +

    "Elabore relatórios com máxima transparência";

const posTextoServidor = "Tenha uma versão simplificada e visual do seu plano para facilitar a compreensão <br>" +

    "Elabore relatórios com máxima transparência";

const posTextoProjetista = "Tenha uma versão simplificada e visual do seu plano para facilitar a compreensão";

const posTextoConstrutora = "Conte com histórico de projeto para gerar relatórios e registrar processos na obra";

const posTextoFiscal = "Conte com histórico de projeto para gerar relatórios e registrar processos na obra";