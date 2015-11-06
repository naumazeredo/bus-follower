# Bus Follower

Aplicativo web criado para o projeto da disciplina Análise e Projeto de Sistemas II do segundo semestre de 2015. A disciplina foi ministrada pelo professor Ricardo Choren Noya e o trabalho foi desenvolvido por Naum Azeredo Fernandes Barreira, Jonas Amaro Rocha Lima, Antonio Luis Sombra de Medeiros e Athos Cotta Couto.

O programa serve como um rastrador dos ônibus na cidade do Rio de Janeiro, oferecendo a posição e orientacão dos veículos assim como as rotas e os pontos de parada relacionados a uma determinada linha de ônibus no mapa da cidade.

Tudo isso é feito usando a API do Google e os dados oferecidos pela cidade do Rio de Janeiro. O objetivo foi de disponibilizar uma interface mais simples possível para o usuário, que permita que ele identifique a posição dos veículos da linha desejada e possa fazer uma previsão de quanto tempo o ônibus levará para chegar ao ponto.

### Instalação
Para instalar e rodar o aplicativo localmente:

1. Instale o Meteor (instruções em inglês [aqui](https://www.meteor.com/install)).
2. [Clone](https://help.github.com/articles/cloning-a-repository/) o [projeto](https://github.com/naumazeredo/bus-follower) do GitHub.
3. Entre no diretório raíz (pela linha de comando) do projeto e execute `$ meteor`. No Google Chrome é necessário executar como `$ meteor --production` devido à uma incompatibilidade entre o Jasmine (plataforma de testes) e o Google Maps API.

O app está pronto para ser utilizado em qualquer browser da sua máquina.

### Modo de uso
Para usar o aplicativo, basta acessa-lo em [busfollower.meteor.com](http://busfollower.meteor.com/) e escolher o número da linha que se deseja descobrir a posição dos carros. Após a escolha, insira o número da linha no formulário no lado esquerdo e superior da tela e pressione pesquisar. Após isso o aplicativo desenhará as rotas, os pontos e a posição mais atual disponibilizada pela prefeitura do Rio dos veículos dessa linha no mapa.

Para maior informações de como utilizar melhor o mapa acessar a [referência](https://support.google.com/gmm/?hl=pt-BR) do Google.
