# CdU 1 Seguir uma frota de ônibus

**Sumário:** Passageiro usa o sistema para seguir os ônibus necessários para alcançar o seu destino

**Ator primário**: Passageiro

## Fluxo Principal

1. O passageiro entra com o número da linha do ônibus que deseja saber a localização.
2. O sistema apresenta uma lista de linhas que podem ser compatíveis com o número informado;
3. O passageiro seleciona a linha desejada;
4. O sistema apresenta no mapa o itinerário da linha e a posição dos ônibus em funcionamento;
5. O passageiro seleciona a opção de limpar o mapa;
6. O sistema termina o caso de uso e retorna o usuário para a tela inicial do sistema.

### Fluxo Alternativo (4): Cancelamento do caminho selecionado

a. O passageiro clica no ônibus desejado;

b. O sistema informa ao usuário o sentido da rota, o identificador do ônibus, o horário de última atualização da posição e a linha.

### Fluxo de Excessão (2): Não há linha correspondente ao número informado

a. O sistema mostra a mensagem: "Não há linha para o número informado." e o caso de uso fracassa.

**Pós-condições:** O passageiro segue o conjunto de ônibus necessários para alcançar o seu destino, se houver tal conjunto.

**Observação:** A qualquer momento o usuário pode retornar ao ponto inicial começar uma nova pesquisa
