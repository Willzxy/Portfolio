const linguagens_descricao = {
    html: 
    'HTML5 é uma linguagem de marcação usada para criar conteúdo de páginas da web. Os elementos e atributos definem a estrutura, estilo e comportamento do conteúdo. É uma linguagem semântica, o que significa que o conteúdo é projetado para descrever seu significado, em vez de sua aparência visual. É a base da web moderna e essencial para a criação de páginas da web. <br> <br> Aprender esta linguagem foi o primeiro passo para estudar o front-end ',

    css: 
    'CSS3 é uma linguagem de folha de estilo usada para estilizar o conteúdo HTML de uma página da web. Ele define como o conteúdo deve ser apresentado, incluindo a aparência visual, layout e design. CSS separa a apresentação do conteúdo, permitindo que os desenvolvedores alterem a aparência visual sem modificar o conteúdo HTML subjacente. CSS é amplamente utilizado em conjunto com HTML e JavaScript para criar páginas da web modernas e responsivas. <br> <br> Depois de aprender a sintaxe do html eu ingressei no css para deixar meus sites mais bonitos e responsivos',

    javascript: 
    'é uma linguagem de programação de alto nível e interpretada usada principalmente para criar conteúdo interativo em páginas da web. Ele permite que os desenvolvedores criem recursos dinâmicos e interativos em páginas da web, como animações, pop-ups, validação de formulários e muito mais. JavaScript pode ser executado em todos os navegadores da web e também pode ser usado em aplicativos de desktop e dispositivos móveis. <br> <br> Foi uma linguagem muito complicada no inicio mas depois se tornou mais fácil, eu uso ela para a interatividades dos meus sites.',

    python:
    'Python é uma linguagem de programação interpretada e de alto nível usada para desenvolvimento de software, análise de dados, inteligência artificial, aprendizado de máquina e muito mais. É uma linguagem fácil de aprender e possui uma sintaxe simples e legível, tornando-a popular entre iniciantes e desenvolvedores experientes. Python é conhecido por sua biblioteca padrão extensa, que oferece uma ampla variedade de módulos para realizar tarefas comuns de programação. Foi a linguagem onde eu mais desenvolvi a minha lógica da programação, <br> <br> esta linguagem de sintaxe simples de entender me ajudou muito no começo.',

    php:
    'PHP é uma linguagem de script de servidor de código aberto usada principalmente para desenvolvimento de aplicativos web e criação de conteúdo dinâmico em páginas da web. É uma linguagem fácil de aprender e possui uma sintaxe semelhante a outras linguagens de programação como C e Java. O PHP é amplamente utilizado em conjunto com bancos de dados e é executado no lado do servidor para processar as solicitações do usuário e gerar páginas da web dinâmicas. <br> <br> PHP é a linguagem onde e faço as interações com o servidor e respondo para o cliente.',

    lua:
    'Lua Script é uma linguagem de programação leve, rápida e poderosa usada principalmente para scripting e jogos. Ele foi projetado para ser incorporado em aplicativos maiores como uma linguagem de script extensível. Lua Script é fácil de aprender e possui uma sintaxe simples e concisa, tornando-a popular entre desenvolvedores de jogos e programadores de sistemas embutidos. <br> <br> Lua script foi a primeira linguagem que eu tive contato por conta dos jogos que eu jogava, decidi aprender esta linguagem para desenvolver meus próprios jogos na plataforma roblox.',

    git:
    'Git é um sistema de controle de versão distribuído usado para gerenciar e rastrear alterações no código-fonte de um projeto de software. Ele permite que os desenvolvedores trabalhem em colaboração em um projeto, rastreiem o histórico de alterações, revertam alterações indesejadas e gerenciem diferentes versões do mesmo projeto. Git é amplamente utilizado na indústria de desenvolvimento de software e é uma ferramenta essencial para o gerenciamento de projetos de software. <br> <br> Uma forma prática e organizada para o versionamento de meus projetos.',

    github:
    'GitHub é uma plataforma de hospedagem de código-fonte baseada na web que usa o Git como sistema de controle de versão. Ele permite que desenvolvedores armazenem, gerenciem e compartilhem seus projetos de software publicamente ou privadamente. Além disso, o GitHub oferece ferramentas para colaboração e gerenciamento de projetos, como rastreamento de problemas, solicitações de pull e integração contínua. O GitHub é amplamente utilizado na indústria de desenvolvimento de software e é uma plataforma essencial para a comunidade de código aberto. <br> <br>  repositório remoto de meus projetos.',

    padrao: 'Passe o mouse por cima dos icones para ver a descrição das habilidades.'
}

const descricao = document.getElementById('descricao')

function updatedescricao(linguagem){
    descricao.innerHTML =  '<p class="textos" id="descricao">' + linguagens_descricao[linguagem] + ' </p> ' 
}

function resetdescricao() {
    descricao.innerHTML =  '<p class="textos" id="descricao" style="text-align: center;" >' + linguagens_descricao['padrao'] + ' </p> '
}