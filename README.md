# API

- Cliente (client) - faz um pedido;
- Garçom (API) - anota o pedido em um bloquinho de notas;
- Cozinha (server) - recebe o pedido através do bloquinho do garçon.

API (application programming interface) é basicamente um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que **outras** aplicações possam utilizar essas funconalidades.

- Responsável por establecer comunicação entre diferentes serviços;
- Intermediador para troca de informações.

# REST

REST (representational state transfer - transferência de estado representativo) é a transferência de dados de uma maneira represntativa/didática.

- A transferência de dados geralmente é feita usando **protocolo http** (bloquinho de notas do garçom).
- Determina algumas obrigaçoes na transferência de dados;

Existem 6 necessidades (constraints) para ser **RESTful**:
- _Client-server_: cleinte e servidor precisam estar separados, dessa forma poderemos ter uma **portabilidade** do nosso sistema (usando React pra web e RN pra mobile, por exemplo);
- _Stateless_: Cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias pro servidor entender e responder **(response)** a requisição **(request)**, ele NÃO pode armazenar essas informações - nesse caso ele teria um ESTADO. _Exemplo: A sessão do usuário deverá ser enviada em todas as req, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o cliente foi atutenticado na req anterior_;
- _Cacheable_: As respostas para uma requisição deverão ser explicitas ao dizer se aquela req pode ou não ser cacheada pelo cliente;
- _Layered System_: Nesse exemplo o _graph.facebook_ é uma API e o _youtube_ é um endpoint (caminho onde quer chegar) https://graph.facebook.com/youtube. O cliente acessa um endpoint, sem precisar saber da compexidade, de quais passos estão sendo necessários para o servidor responder a req, ou quais outras **camadas** o servidor estará lidando para que a req seja atendida; 
- _Code on demand (optional)_: O servidor manda pro cliente um **script** que pode ser executado no front. Dá a possibilidade da nossa aplicação pegar códigos (JS por ex.) e executar no cliente.

# Verbos HTTP
- GET: recebe os dados de um **resource**
- POST: envia os dados a serem processados por um **resource**
- PUT: atualiza os dados de um **resource**
- DELETE: deleta um **resource**

# Passo a passo do projeto:
Iniciar o projeto
```
npm init -y
```
Adicionar o **express** (framework pra trabalhar com servidor http)
```
npm add express 
```


Referências de estudo [Rocketseat](https://www.youtube.com/watch?v=ghTrp1x_1As)