'use strict';
/*cards*/


/*cards*/


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

const inicioTextoCliente = "✔ Ferramenta de planejamento de projetos; <br>" +

"✔ Repositório de armazenamento para documentação do projeto; <br>" +

"✔ Ferramenta de comunicação simples e unificada; <br>" +

"✔ Ambiente de capacitação; <br>"


const inicioTextoServidor = "✔ Ferramenta de planejamento de projetos;<br>" +

"✔ Repositório de armazenamento para documentação do projeto;<br>"+

"✔ Ferramenta de comunicação simples e unificada;<br>"+

"✔ Ambiente de capacitação;<br>"+

"✔ Consultoria com equipe  especializada em obras públicas;<br>"

const inicioTextoProjetista = "✔ Ferramenta de planejamento de projetos;<br>"+

"✔Repositório de armazenamento de documentação;<br>"+


"✔ Ferramenta de comunicação simples e unificada;<br>"+


"✔ Ambiente de capacitação;<br>"


const inicioTextoConstrutora = "✔ Ferramenta de planejamento de projetos;<br>"+

"✔ Repositório de armazenamento para documentação do projeto;<br>"+

"✔ Ferramenta de comunicação simples e unificada;<br>"+

"✔ Ambiente de capacitação;<br>"+

"✔ Espaço para contratação de equipe de obras.<br>"



const inicioTextoFiscal = "✔ Repositório de armazenamento para documentação do projeto;<br>"+

"✔ Ferramenta de comunicação simples e unificada;<br>"+

"✔ Ambiente de capacitação;<br>"



const planejamentoTextoCliente = "✔ Ferramenta de modelagem 3D; <br>" +

"✔ Repositório de armazenamento de arquivos técnicos; <br>" +

"✔ Ferramenta para gerenciamento de processos; <br>" +

"✔ Espaço para recrutamento de equipes especializadas; <br>"



const planejamentoTextoServidor = "✔ Ferramenta de modelagem 3D;<br>"+

"✔ Repositório de armazenamento de arquivos técnicos;<br>"+

"✔ Ferramenta para gerenciamento de processos;<br>"+

"✔ Espaço para recrutamento de equipes especializadas no setor público; <br>"


const planejamentoTextoProjetista = "✔ Ferramenta de modelagem 3D;<br>"+


"✔ Repositório de armazenamento de arquivos técnicos;<br>"+


"✔ Ferramenta para gerenciamento de processos;<br>"+


"✔ Ferramenta de integração entre disciplinas;<br>"


const planejamentoTextoConstrutora = "✔ Ferramenta de modelagem 3D;<br>"+

"✔ Repositório de armazenamento de arquivos técnicos;<br>"+

"✔ Ferramenta para gerenciamento de processos;<br>"+

"✔ Espaço para recrutamento de equipes especializadas; <br>"+

"✔ Ferramenta de acompanhamento do campo de obra em tempo real;<br>"


const planejamentoTextoFiscal = "✔ Repositório de armazenamento de arquivos 3D;<br>"+

"✔ Ferramenta para gerenciamento de processos;<br>"+

"✔ Ferramenta de acompanhamento do campo de obra em tempo real;<br>"




const execucaoTextoCliente = "✔ Espaço para contratação de equipe de obras; <br>" +

"✔ Ferramenta para controle logístico; <br>" +

"✔ Ferramenta para gestão de tarefas; <br>" +

"✔ Ferramenta de registro de atividades; <br>" +

"✔ Ambiente de capacitação; <br>"


const execucaoTextoServidor = "✔ Espaço para contratação de equipe de obras;<br>"+

"✔ Ferramenta para controle logístico;<br>"+

"✔ Ferramenta para gestão de tarefas;<br>"+

"✔ Ferramenta de registro de atividades;<br>"+

"✔Ambiente de capacitação;<br>"


const execucaoTextoProjetista = "✔ Ferramenta para controle logístico;<br>"+


"✔ Ferramenta para gestão de tarefas;<br>"+


"✔ Ferramenta de registro de atividades;<br>"+


"✔ Ferramenta de visualização global para o projeto;<br>"+


"✔ Capacitações em diversas áreas;<br>"


const execucaoTextoConstrutora = "✔ Ferramenta para controle logístico;<br>"+

"✔ Ferramenta para gestão de tarefas;<br>"+

"✔ Ferramenta de registro de atividades;<br>"+

"✔ Ferramenta de visualização global para o projeto;<br>"+

"✔ Capacitações em diversas áreas;<br>"


const execucaoTextoFiscal = "✔ Ferramenta para controle logístico;<br>"+

"✔ Ferramenta de registro e acompanhamento de atividades;<br>"+

"✔ Ferramenta de visualização global para o projeto;<br>"+

"✔ Ferramenta para acompanhamento digital em tempo real;<br>"



const monitoramentoTextoCliente = "✔ Ferramenta de acompanhamento de atividades; <br>" +

"✔ Ferramenta para acompanhamento 360°; <br>" +

"✔ Ferramenta para visualização por Laser Scanning; <br>" +

"✔ Visualização por meio de drones; <br>"


const monitoramentoTextoServidor = "✔ Ferramenta de acompanhamento de atividades;<br>"+

"✔ Ferramenta para acompanhamento 360°;<br>"+

"✔ Ferramenta para visualização por Laser Scanning;<br>"+
"✔ Visualização por meio de drones;<br>"


const monitoramentoTextoProjetista = "✔ Ferramenta de acompanhamento de obra em tempo real;<br>"+

"✔ Ferramenta de acompanhamento de atividades;<br>"+


"✔ Ferramenta para acompanhamento 360°;<br>"+


"✔  Ferramenta para visualização por Laser Scanning;<br>"+


"✔ Visualização por meio de drones;<br>"


const monitoramentoTextoConstrutora = "✔ Ferramenta de acompanhamento de atividades;<br>"+

"✔ Ferramenta para acompanhamento 360°;<br>"+

"✔ Ferramenta para visualização por Laser Scanning;<br>"+

"✔ Visualização por meio de drones;<br>"


const monitoramentoTextoFiscal = "✔ Ferramenta de acompanhamento de atividades;<br>"+
 
 "✔ Ferramenta para acompanhamento 360°;<br>"+
 
 "✔ Ferramenta para visualização por Laser Scanning;<br>"+
 
 "✔ Visualização por meio de drones;<br>"
 


const posTextoCliente = "✔ Repositório de arquivos de todo o projeto; <br>" +

"✔ Versões simplificadas do projeto; <br>" +

"✔ Ambiente com histórico de modelagens; <br>" +

"✔ Ferramenta para emissão de relatórios personalizados; <br>" 


const posTextoServidor = "✔ Repositório de arquivos de todo o projeto;<br>"+
 
 "✔ Versões simplificadas do projeto;<br>"+
 
 "✔ Ambiente com histórico de modelagens;<br>"+
 
 "✔ Ferramenta para emissão de relatórios personalizados;<br>"
 

const posTextoProjetista = "✔ Repositório de arquivos de todo o projeto;<br>"+


"✔ Versões simplificadas do projeto;<br>"+


"✔ Ambiente com histórico de modelagens;<br>"+


"✔ Ferramenta para emissão de relatórios personalizados;<br>"


const posTextoConstrutora = "✔ Ambiente com histórico de modelagens;<br>"+

"✔ Ferramenta para emissão de relatórios personalizados;<br>"+

"✔ Repositório de arquivos de todo o projeto;<br>"



const posTextoFiscal = "✔ Ambiente com histórico de modelagens;<br>"+

"✔ Ferramenta para emissão de relatórios personalizados;<br>"+

"✔ Repositório de arquivos de todo o projeto;<br>"
