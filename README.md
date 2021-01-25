# Objetivo

Essa API deverá se comunicar com o banco de dados e retornar o hexadecimal de cada um dos tipos necessários. Sugerimos o MongoDB, mas pode optar pelo banco de dados de sua preferência.
Atualmente existem 20 possibilidades de tipo, que podem ser consultados na PokéAPI: https://pokeapi.co/api/v2/type
Não é necessário criar hexadecimais conceitualmente fidedignos (ex.: grass = verde, então #00FF00). Evite apenas repetir os códigos, para facilitar na hora de debugar.

### Rodando o sistema

```sh
$ npm install -- Instalar as dependências.
$ npm start -- Rodar o sistema.
$ npm test -- Executar os testes do sistema.
```
get: localhost:3000/findPokemon/:pokemon - pode ser ID ou nome pokemon
Endpoint para buscar Pokemon na base, busca pode ser feita pelo id ou pelo nome

get: localhost:3000/findAllPokemon/:page
Endpoint para buscar todos Pokemons na base, busca limitada a 10 itens por página

delete: localhost:3000/deletePokemon/:pokemon
Endpoint para deletar o Pokemon: pode ser enviado ID ou nome do pokemon

post: localhost:3000/colorBy/
Endpoint (esse endPoint é um post, pois decedir salvar o conteúdo consultado na pokApi e salvar na base, dessa forma, iremos agilizar o processo de consulta) para encontrar a cor do Pokemon, de forma randomico de acordo com o tipo do pokemon, e sem seguida salvar na base. OBS: o body está em test.js
       
        