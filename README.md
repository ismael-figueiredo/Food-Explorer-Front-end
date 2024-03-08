
# Food Explorer Front-End

## Sobre o Projeto

O front-end do Food Explorer é uma interface de usuário dinâmica e responsiva desenvolvida para interagir com a [FoodExplorer API](https://github.com/ismael-figueiredo/Food-Explorer-Back-end), proporcionando uma experiência de usuário sem precedentes na busca e gestão de catálogos de pratos em restaurantes. Este projeto foi criado como parte do Desafio Final do curso Explorer da Rocketseat, utilizando tecnologias modernas de desenvolvimento web como React, Styled Components, Axios e React Router DOM. Com um design intuitivo e recursos de navegação fluida e direta, o front-end do Food Explorer conta com:
-  Autenticação de usuários 
-  Busca avançada e visualização de detalhes de pratos.
- Autorização, usuário `Admin` e `Client`, onde o `Admin` pode criar e editar pratos e o `Client` realizar pedidos.
- Capacidade de expansão, criação de novas funcionalidades de acordo com cada demanda.


https://github.com/ismael-figueiredo/Food-Explorer-Front-end/assets/149712941/48c9cd00-ba6e-4df7-91a2-503784e044a8



## Demonstração Online

Você pode acessar a demonstração online do front-end do Food Explorer através do seguinte link: [FoodExplorer Online](https://food-explorer-if.netlify.app/). Esta demonstração permite explorar a interface de usuário e interagir com a API FoodExplorer em um ambiente de produção.

`[Inserir aqui um vídeo demonstrativo do projeto]`

## Tecnologias Utilizadas

- **React**: Para a construção de uma interface de usuário interativa e dinâmica.
- **Styled Components**: Para estilização modular e reutilizável dos componentes.
- **Axios**: Para a realização de requisições HTTP de forma simples e eficaz.
- **React Router DOM**: Para a gestão de rotas e navegação dentro da aplicação.

## Arquitetura do Projeto

Este projeto segue uma abordagem modular e componentizada, com:

- **Componentes**: Reutilizáveis e estilizados para construir a interface do usuário.
- **Layout**: Layout usado em quase toda a aplicação, facilitando a manutenção e ganhando produtividade..
- **Páginas**: Agregam componentes para formar as diferentes telas da aplicação.
- **Serviços**: Encapsulam a lógica de comunicação com a API, utilizando Axios.
- **Rotas**: Utilizam React Router DOM para definir a navegação dentro da aplicação.

Esta estrutura facilita a manutenção, expansão e reusabilidade do código, promovendo uma experiência de desenvolvimento ágil e eficiente.

## Pronto para o Mercado

Assim como a API FoodExplorer, o front-end deste projeto ultrapassa o âmbito acadêmico, demonstrando potencial de mercado com uma interface de usuário atrativa e funcionalidades robustas. Com ajustes mínimos, está pronto para ser implementado em restaurantes ou outros estabelecimentos alimentícios que desejam oferecer uma experiência digital enriquecedora para seus clientes.


## Como Rodar o Projeto

Para executar este projeto localmente em sua máquina, siga os passos abaixo. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado, pois ele é necessário para rodar o Vite e outros pacotes do projeto.

### Clonando o Projeto

Primeiro, clone o repositório do projeto para a sua máquina local usando o Git:

`bash
git clone https://github.com/ismael-figueiredo/Food-Explorer-Front-end.git
cd Food-Explorer-Front-end` 

### Instalando Dependências

Com o repositório clonado, navegue até a pasta do projeto e instale as dependências necessárias usando o npm (ou yarn, se preferir):

`npm install` ou, se você preferir usar yarn `yarn install` 

### Executando o Projeto

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento do Vite:

`npm run dev`  ou, se você estiver usando yarn `yarn dev` 

Esse comando iniciará o servidor de desenvolvimento e normalmente abrirá o projeto no seu navegador padrão. Se o navegador não abrir automaticamente, você pode acessar manualmente digitando `http://localhost:3000` na barra de endereços do seu navegador, ou a porta especificada no console se for diferente.

### Visualizando o Projeto

Com o servidor de desenvolvimento em execução, você agora pode visualizar e interagir com o front-end do Food Explorer diretamente no seu navegador.

### Construindo para Produção

Se você desejar construir o projeto para produção, execute o seguinte comando:

`npm run build` ou, usando yarn `yarn build` 

Isso gerará uma versão otimizada do seu projeto na pasta `dist`, pronta para ser deployada em qualquer servidor de hospedagem estática de sua escolha.

