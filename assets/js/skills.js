//SKILLS
function mostraDescricao() {
const changeDescription = (nameCard, text) => {
    let infoSkills = document.querySelector('.info__skills')
    let skillName = document.querySelector('.nome__skills')

    document.querySelector(nameCard).addEventListener('mouseover', () => {
        infoSkills.innerHTML = text
        if(nameCard === '.aws') {
            skillName.innerHTML = ' AWS '
        } 
        if(nameCard === '.ansible') {
            skillName.innerHTML = ' Ansible '
        }
        if(nameCard === '.terraform') {
            skillName.innerHTML = ' Terraform '
        }
        if(nameCard === '.git') {
            skillName.innerHTML = ' Git '
        } 
        if(nameCard === '.linux') {
            skillName.innerHTML = ' Linux '
        } 
        if(nameCard === '.docker') {
            skillName.innerHTML = ' Docker '
        } 
        if(nameCard === '.kubernetes') {
            skillName.innerHTML = ' Kubernetes '
        } 
        if(nameCard === '.cloudform') {
            skillName.innerHTML = ' CloudFormation '
        } 
    })

    document.querySelector(nameCard).addEventListener('mouseout', () => {
        infoSkills.innerHTML = 'passe o cursor nos elementos para saber mais'
        skillName.innerHTML = ""
    })
}

changeDescription(
    '.aws',
    'Implementação, gerenciamento e operação de carga de trabalho na AWS, bem como na implementação de controles de segurança e requisitos de conformidade e serviços de rede e segurança da AWS e a infraestrutura global da AWS.'
)

changeDescription(
    '.linux',
    'Sysadmin, administração do ambiente de infraestrutura, dando suporte a toda arvore de sistemas operacionais Unix.'
)

changeDescription(
    '.ansible',
    'Automação e configuração de servidores, instalação software e executação uma grande variedade de tarefas de TI a partir de uma localização central.'
)

changeDescription(
    '.git',
    'Versionamento de código e principais comandos.'
)

changeDescription(
    '.terraform',
    'Construção, alteração e configuração de infraestrutura de rede de forma segura e eficiente, bem como gerenciamento de serviços de nuvem.'  
)

changeDescription(
    '.docker',
    'Criação e administração de ambientes, possibilitando o empacotamento de uma aplicação ou ambiente dentro de um container, se tornando portátil para qualquer outro host que contenha o Docker instalado.'   
)

changeDescription(
    '.kubernetes',
    'Automatização de operações dos containers, eliminando grande parte dos processos manuais necessários para implantar e escalar as aplicações em containers.'   
)

changeDescription(
    '.cloudform',
    'Criação de conjuntos de recursos relacionados da AWS para provisioná-los e gerenciá-los de forma organizada e previsível.'   
)
}