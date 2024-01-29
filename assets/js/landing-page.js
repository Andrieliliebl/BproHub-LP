'use strict';

const client = "perfil-cliente"
const publicService = "perfil-servidor"
const draftsman = "perfil-projetista"
const constructionCompany = "perfil-construtora"
const fiscal = "perfil-fiscal"

function selectPerfil() {
    
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

    const profileSelected = document.querySelector('input[name="profile-radio"]:checked').value;


    switch (profileSelected) {
        case client:
            inicioTexto.innerHTML = inicioTextoCliente;
            planejamentoTexto.innerHTML = planejamentoTextoCliente;
            execucaoTexto.innerHTML = execucaoTextoCliente;
            monitoriamentoTexto.innerHTML = monitoramentoTextoCliente;
            posTexto.innerHTML = posTextoCliente;
            break
        case publicService:
            inicioTexto.innerHTML = inicioTextoServidor;
            planejamentoTexto.innerHTML = planejamentoTextoServidor;
            execucaoTexto.innerHTML = execucaoTextoServidor;
            monitoriamentoTexto.innerHTML = monitoramentoTextoServidor;
            posTexto.innerHTML = posTextoServidor;
            break
        case draftsman:
            inicioTexto.innerHTML = inicioTextoProjetista;
            planejamentoTexto.innerHTML = planejamentoTextoProjetista;
            execucaoTexto.innerHTML = execucaoTextoProjetista;
            monitoriamentoTexto.innerHTML = monitoramentoTextoProjetista;
            posTexto.innerHTML = posTextoProjetista;
            break
        case constructionCompany:
            inicioTexto.innerHTML = inicioTextoConstrutora;
            planejamentoTexto.innerHTML = planejamentoTextoConstrutora;
            execucaoTexto.innerHTML = execucaoTextoConstrutora;
            monitoriamentoTexto.innerHTML = monitoramentoTextoConstrutora;
            posTexto.innerHTML = posTextoConstrutora;
            break
        case fiscal:
            inicioTexto.innerHTML = inicioTextoFiscal;
            planejamentoTexto.innerHTML = planejamentoTextoFiscal;
            execucaoTexto.innerHTML = execucaoTextoFiscal;
            monitoriamentoTexto.innerHTML = monitoramentoTextoFiscal;
            posTexto.innerHTML = posTextoFiscal;
            break
    }

}

function openModal(type) {
    const myModal = new bootstrap.Modal('#landingModal', {
        keyboard: false
      })

      const textModal = document.getElementById("profileExplanationModalText")
      const profileSelect = document.getElementById("contact-form-profile-modal")

      textModal.innerHTML = stepsForEachProfile[type]

      const profileRadio = document.querySelector('input[name="profile-radio"]:checked')
      
      if(profileRadio != null) {
        profileSelect.value = profileRadio.value
      }

      myModal.show()
}


//-----Contratante textos
const inicioTextoCliente = "<p><b class='highlight-step-text' onclick='openModal(1)'>✔ Ferramenta de planejamento</b> de projetos; </p><br>" +

"<p><b class='highlight-step-text' onclick='openModal(1)'>✔ Repositório de armazenamento</b> para documentação do projeto; </p><br>" +

"<p><b class='highlight-step-text' onclick='openModal(1)'>✔ Ferramenta de comunicação</b> simples e unificada; </p><br>" +

"<p><b class='highlight-step-text' onclick='openModal(7)'>✔ Ambiente de capacitação;</b> </p>"

const planejamentoTextoCliente = "<p><b class='highlight-step-text' onclick='openModal(6)'>✔ Ferramenta de modelagem 3D;</b> </p><br>" +

"<p><b class='highlight-step-text' onclick='openModal(1)'>✔ Repositório de armazenamento</b> de arquivos técnicos; </p><br>" +

"<p><b class='highlight-step-text' onclick='openModal(4)'>✔ Ferramenta para gerenciamento de processos;</b> </p><br>" +

"<p><b class='highlight-step-text' onclick='openModal(6)'>✔ Espaço para recrutamento de equipes especializadas;</b> </p>"

const execucaoTextoCliente = "<p>✔ Espaço para <b class='highlight-step-text' onclick='openModal(6)'>contratação de equipe de obras;</b> </p><br>" +

"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(5)'>controle logístico;</b> </p><br>" +

"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(3)'>gestão de tarefas;</b> </p><br>" +

"<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(3)'>registro de atividades;</b> </p><br>" +

"<p>✔ Ambiente de <b class='highlight-step-text' onclick='openModal(7)'>capacitação;</b> </p>"

const monitoramentoTextoCliente = "<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(3)'>acompanhamento de atividades;</b> </p><br>" +

"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(2)'>acompanhamento 360°;</b> </p><br>" +

"<p>✔ Ferramenta para visualização por <b class='highlight-step-text' onclick='openModal(2)'>Laser Scanning;</b> </p><br>" +

"<p>✔ Visualização por meio de  <b class='highlight-step-text' onclick='openModal(2)'>drones;</b> </p>"

const posTextoCliente = "<p><b class='highlight-step-text' onclick='openModal(1)'>✔ Repositório de arquivos</b> de todo o projeto; </p><br>" +

"<p><b class='highlight-step-text' onclick='openModal(1)'>✔ Versões simplificadas do projeto;</b></p><br>" +

"<p><b class='highlight-step-text' onclick='openModal(1)'>✔ Ambiente com histórico</b> de modelagens; </p><br>" +

"<p><b class='highlight-step-text' onclick='openModal(1)'>✔ Ferramenta para emissão</b> de relatórios personalizados; </p>" 


//-----Servidor publico textos
const inicioTextoServidor = "<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(1)'>planejamento de projetos;</b></p><br>" +

"<p>✔ Repositório de armazenamento para <b class='highlight-step-text' onclick='openModal(1)'>documentação do projeto;</b></p><br>"+

"<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(1)'>comunicação simples e unificada;</b></p><br>"+

"<p><b class='highlight-step-text' onclick='openModal(7)'>✔ Ambiente de capacitação;</b></p><br>"+

"<p>✔ Consultoria com equipe  especializada em <b class='highlight-step-text' onclick='openModal(6)'>obras públicas;</b></p>"

const planejamentoTextoServidor = "<p><b class='highlight-step-text' onclick='openModal(6)'>✔ Ferramenta de modelagem 3D;</b></p><br>"+

"<p>✔ Repositório <b class='highlight-step-text' onclick='openModal(1)'>de armazenamento de arquivos técnicos;</b></p><br>"+

"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(4)'>gerenciamento de processos;</b></p><br>"+

"<p>✔ Espaço para recrutamento de <b class='highlight-step-text' onclick='openModal(6)'>equipes especializadas no setor público;</b></p>"

const execucaoTextoServidor = "<p>✔ Espaço para <b class='highlight-step-text' onclick='openModal(6)'>contratação de equipe de obras;</b></p><br>"+

"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(5)'>controle logístico;</b></p><br>"+

"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(3)'>gestão de tarefas;</b></p><br>"+

"<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(3)'>registro de atividades;</b></p><br>"+

"<p>✔Ambiente de <b class='highlight-step-text' onclick='openModal(7)'>capacitação;</b></p>"

const monitoramentoTextoServidor = "<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(3)'>acompanhamento de atividades;</b></p><br>"+

"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(2)'>acompanhamento 360°;</b></p><br>"+

"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(2)'>visualização por Laser Scanning;</b></p><br>"+

"<p>✔ Visualização por meio de <b class='highlight-step-text' onclick='openModal(2)'>drones;</b></p><br>"

const posTextoServidor = "<p><b class='highlight-step-text' onclick='openModal(1)'>✔ Repositório de arquivos</b> de todo o projeto;</p>"+
 
 "<p><b class='highlight-step-text' onclick='openModal(1)'>✔ Versões simplificadas</b> do projeto;</p><br>"+
 
 "<p>✔ Ambiente com <b class='highlight-step-text' onclick='openModal(1)'>histórico de modelagens;</b></p><br>"+
 
 "<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(1)'>emissão de relatórios</b> personalizados;</p>"


//-----Projetista textos
const inicioTextoProjetista = "<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(1)'>planejamento de projetos;</b></p><br>"+

"<p><b class='highlight-step-text' onclick='openModal(1)'>✔Repositório de armazenamento</b> de documentação;</p><br>"+


"<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(3)'>comunicação simples e unificada;</b></p><br>"+


"<p>✔ Ambiente de <b class='highlight-step-text' onclick='openModal(7)'>capacitação;</b></p>"

const planejamentoTextoProjetista = "<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(6)'>modelagem 3D;</b></p><br>"+


"<p>✔ Repositório de <b class='highlight-step-text' onclick='openModal(1)'>armazenamento de arquivos técnicos;</b></p><br>"+


"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(4)'>gerenciamento de processos;</b></p><br>"+


"<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(4)'>integração entre disciplinas;</b></p>"


const execucaoTextoProjetista = "<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(5)'>controle logístico;</b></p><br>"+


"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(3)'>gestão de tarefas;</b></p><br>"+


"<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(3)'>registro de atividades;</b></p><br>"+


"<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(4)'>visualização global para o projeto;</b></p><br>"+


"<p><b class='highlight-step-text' onclick='openModal(7)'>✔ Capacitações</b> em diversas áreas;</p>"

const monitoramentoTextoProjetista = "<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(2)'>acompanhamento de obra</b> em tempo real;</p><br>"+

"<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(3)'>acompanhamento de atividades;</b></p><br>"+


"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(2)'>acompanhamento 360°;</b></p><br>"+


"<p>✔  Ferramenta para visualização por <b class='highlight-step-text' onclick='openModal(2)'>Laser Scanning;</b></p><br>"+


"<p>✔ Visualização por meio de <b class='highlight-step-text' onclick='openModal(2)'>drones;</b></p>"

const posTextoProjetista = "<p><b class='highlight-step-text' onclick='openModal(1)'>✔ Repositório de arquivos</b> de todo o projeto;</p><br>"+


"<p><b class='highlight-step-text' onclick='openModal(1)'>✔ Versões simplificadas do projeto;</b></p><br>"+


"<p>✔ Ambiente com <b class='highlight-step-text' onclick='openModal(1)'>histórico de modelagens;</b></p><br>"+


"<p>✔ Ferramenta para emissão de <b class='highlight-step-text' onclick='openModal(1)'>relatórios personalizados;</b></p>"


//-----Construtora textos
const inicioTextoConstrutora = "<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(1)'>planejamento de projetos;</b></p><br>"+

"<p>✔ Repositório de <b class='highlight-step-text' onclick='openModal(1)'>armazenamento para documentação</b> do projeto;</p><br>"+

"<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(1)'>comunicação simples e unificada;</b></p><br>"+

"<p>✔ Ambiente de <b class='highlight-step-text' onclick='openModal(7)'>capacitação;</b></p><br>"+

"<p>✔ Espaço para <b class='highlight-step-text' onclick='openModal(6)'>contratação de equipe de obras.</b></p>"

const planejamentoTextoConstrutora = "<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(6)'>modelagem 3D;</b></p><br>"+

"<p>✔ Repositório de armazenamento de <b class='highlight-step-text' onclick='openModal(1)'>arquivos técnicos;</b></p><br>"+

"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(4)'>gerenciamento de processos;</b></p><br>"+

"<p>✔ Espaço para <b class='highlight-step-text' onclick='openModal(6)'>recrutamento de equipes especializadas; </b></p><br>"+

"<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(2)'>acompanhamento do campo de obra em tempo real;</b></p>"

const execucaoTextoConstrutora = "<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(5)'>controle logístico;</b></p><br>"+

"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(3)'>gestão de tarefas;</b></p><br>"+

"<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(3)'>registro de atividades;</b></p><br>"+

"<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(4)'>visualização global para o projeto;</b></p><br>"+

"<p><b class='highlight-step-text' onclick='openModal(7)'>✔ Capacitações</b> em diversas áreas;</p>"

const monitoramentoTextoConstrutora = "<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(3)'>acompanhamento de atividades;</b></p><br>"+

"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(2)'>acompanhamento 360°;</b></p><br>"+

"<p>✔ Ferramenta para visualização por <b class='highlight-step-text' onclick='openModal(2)'>Laser Scanning;</b></p><br>"+

"<p>✔ Visualização por meio de <b class='highlight-step-text' onclick='openModal(2)'>drones;</b></p>"

const posTextoConstrutora = "<p>✔ Ambiente com <b class='highlight-step-text' onclick='openModal(1)'>histórico de modelagens;</b></p><br>"+

"<p>✔ Ferramenta para emissão de <b class='highlight-step-text' onclick='openModal(1)'>relatórios personalizados;</b></p><br>"+

"<p><b class='highlight-step-text' onclick='openModal(1)'>✔ Repositório de arquivos</b> de todo o projeto;</p>"


//-----Fiscal textos
const inicioTextoFiscal = "<p><b class='highlight-step-text' onclick='openModal(1)'>✔ Repositório de armazenamento para documentação</b> do projeto;</p><br>"+

"<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(1)'>comunicação simples e unificada;</b></p><br>"+

"<p>✔ Ambiente de <b class='highlight-step-text' onclick='openModal(7)'>capacitação;</b></p>"


const planejamentoTextoFiscal = "<p>✔ Repositório de <b class='highlight-step-text' onclick='openModal(1)'>armazenamento de arquivos 3D;</b></p><br>"+

"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(4)'>gerenciamento de processos;</b></p><br>"+

"<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(2)'>acompanhamento do campo de obra</b> em tempo real;</p>"

const execucaoTextoFiscal = "<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(5)'>controle logístico;</b></p><br>"+

"<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(3)'>registro e acompanhamento de atividades;</b></p><br>"+

"<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(4)'>visualização global para o projeto;</b></p><br>"+

"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(4)'>acompanhamento digital em tempo real;</b></p>"


const monitoramentoTextoFiscal = "<p>✔ Ferramenta de <b class='highlight-step-text' onclick='openModal(3)'>acompanhamento de atividades;</b></p><br>"+
 
 "<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(4)'>acompanhamento 360°;</b></p><br>"+
 
 "<p>✔ Ferramenta para visualização por <b class='highlight-step-text' onclick='openModal(4)'>Laser Scanning;</b></p><br>"+
 
 "<p>✔ Visualização por meio de <b class='highlight-step-text' onclick='openModal(4)'>drones;</b></p>"

const posTextoFiscal = "<p>✔ Ambiente com <b class='highlight-step-text' onclick='openModal(1)'>histórico de modelagens;</b></p><br>"+

"<p>✔ Ferramenta para <b class='highlight-step-text' onclick='openModal(1)'>emissão de relatórios personalizados;</b></p><br>"+

"<p><b class='highlight-step-text' onclick='openModal(1)'>✔ Repositório de arquivos</b> de todo o projeto;</p>"


//----------------- Explicacoes das etapas para cada perfil

const bProject = "É um repositório de armazenamento seguro e rastreável em que você pode acessar todos os documentos relativos ao projeto. Como aprovações, a Lista Mestra, relatórios de análise técnica de projetos, além de contar com um visualizador BIM. "

const bProField = "Uma ferramenta perfeita para quem quer ter uma visão global do canteiro de obras." +
                "Nela, você pode monitorar os planejamentos criados, a execução de tarefas em tempo real, a lista de atividades, o controle de produção, a medição de impacto e ainda ter o acompanhamento visual por meio de câmeras 360°, drones, o trimble e ferramentas 4D…"

const bProActivity = "Aproveite o melhor das metodologias ágeis para gerenciar as atividades da sua equipe. Centralize todas as tarefas em um único ambiente, atribua responsáveis, acompanhe em tempo real, realize revisões semanais e mantenha tudo registrado no sistema. Alinhe sua equipe e impulsione a produtividade."

const bProManager = "Acompanhe resultados em tempo real No BproManager é possível verificar a gestão de entregas, fazer o monitoramento de atividades e acompanhar o resultado da obra ao vivo. "

const bProLog = "Mantenha todas as informações logísticas em um só local Cadastre usuários, equipes, clientes e contratos de maneira eficiente, garantindo a fluidez no andamento do seu projeto. Simplifique a logística e foque no que realmente importa." 

const bProEng = "Contrate um time experiente de gestores, engenheiros, arquitetos e muito mais! Conte com os melhores profissionais para o desenvolvimento, a gestão e a execução de seu projeto BIM."

const capacitacoes = "Desenvolva habilidades únicas por meio de uma curadoria cuidadosa de cursos e treinamentos relacionados à metodologia BIM. " +

"Entre eles, destacamos:" +

"Ferramentas BIM" +
"Cursos FF (PT)" +
"Cursos Miller (ES)" +
"Cursos Acca (ES/PT)" +

"Metodologia BIM" +
"Cursos Miller (ES)" +
"Cursos FF (PT)" +
"Cursos Andrea y Javier (ES)" +

"Inscreva-se para ver os cursos"

const stepsForEachProfile = {}

const bProjectType = 1
const bProFieldType = 2
const bProActivityType = 3
const bProManagerType = 4
const bProLogType = 5
const bProEngType = 6
const capacitacoesType = 7

stepsForEachProfile[bProjectType] = bProject
stepsForEachProfile[bProFieldType] = bProField
stepsForEachProfile[bProActivityType] = bProActivity
stepsForEachProfile[bProManagerType] = bProManager
stepsForEachProfile[bProLogType] = bProLog
stepsForEachProfile[bProEngType] = bProEng
stepsForEachProfile[capacitacoesType] = capacitacoes