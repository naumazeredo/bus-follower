# CdU 1 Seguir uma frota de ônibus

Sumário: Passageiro usa o sistema para seguir os ônibus necessários para alcançar o seu destino

**Ator primário**: Passageiro

Fluxo Principal

1. O passageiro entra com o número da linha do ônibus que deseja saber a localização.
2. O sistema apresenta uma lista de linhas que podem ser compatíveis com o número informado;
3. O passageiro seleciona a linha desejada;
4. O sistema apresenta no mapa o itinerário da linha e a posição dos ônibus em funcionamento;
5. O passageiro seleciona a opção de limpar o mapa;
6. O sistema termina o caso de uso e retorna o usuário para a tela inicial do sistema.

Fluxo Alternativo (4): Cancelamento do caminho selecionado

a. O passageiro clica no ônibus desejado;

b. O sistema informa ao usuário o sentido da rota, o identificador do ônibus, o horário de última atualização da posição e a linha.

Fluxo de Excessão (2): Não há linha correspondente ao número informado

a. O sistema mostra a mensagem: "Não há linha para o número informado." e o caso de uso fracassa.

Pós-condições: O passageiro segue o conjunto de ônibus necessários para alcançar o seu destino, se houver tal conjunto.

Observação: A qualquer momento o usuário pode retornar ao ponto inicial começar uma nova pesquisa


#CdU 2 Esperar ônibus

Sumário: Passageiro usa o sistema para saber quanto tempo o próximo ônibus tomará para alcançar o ponto que o passageiro está esperando

Ator primário: Passageiro

Ator secundário: Motorista

Precondições: O passageiro deverá está seguindo o ônibus(CdU 1); O passageiro está aguardando o próximo ônibus.

Fluxo Principal

1. O passageiro acessa o sistema;

2. O sistema apresenta o número da linha do ônibus que o passageiro está esperando e o tempo estimado que o ônibus levará para chegar ao ponto até que o ponto;

3. O Motorista para o ônibus no ponto;

4. O sistema notifica o passageiro que o ônibus chegou ao ponto e o caso de uso termina com sucesso

Fluxo Alternativo (3): Motorista não para no ponto

a. O sistema notifica que o ônibus passou do ponto sem parar e pergunta se o passageiro gostaria de notificar a infração;

b. O passageiro seleciona as opções o botão sim ou não para notificar a infração

c. Se o passageiro selecionar sim, o sistema enviará uma notificação para SETRANS; Em todo caso o sistema atualiza os ônibus que o passageiro está seguindo e retorna ao passo 2

Pós-condições: -

Observação: A qualquer momento o usuário pode retornar ao ponto inicial do CdU 1 e começar uma nova pesquisa
