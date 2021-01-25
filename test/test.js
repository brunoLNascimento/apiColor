const app = require('../app');
const mongoose = require('mongoose');
const request = require('supertest');
const config = require('../app/config/config');

mongoose.connect(config.db.urlTest, config.db.option);

const bulbasaur = {
    "name": "bulbasaur",
    "id": 1,
    "type": [ { "name": "grass", "color" :[] }, { "name": "poison", "color" :[] }]
}

const ivysaur = {
        "name": "ivysaur",
        "id": 2,
        "type": [{ "name": "grass", "color": " " }, { "name": "poison", "color": "" }]
}


describe('Testando api color', () => {
    setTimeout( function () {
        process.exit()
      }, 2000);

    it(`#Salvando Pokemon ${bulbasaur.name} na base!`, done => {
        request(app)
            .post('/colorBy')
            .send(bulbasaur)
            .expect('Content-Type',/json/)
            .timeout(5000)
            .expect(200)
            .end(done)
    });

    it(`#Salvando Pokemon ${ivysaur.name} na base!`, done => {
        request(app)
            .post('/colorBy')
            .send(ivysaur)
            .expect('Content-Type',/json/)
            .timeout(5000)
            .expect(200)
            .end(done)
    });

    it(`#Consultando Pokemon ${bulbasaur.name} pelo nome`, done => {
        request(app)
            .get(`/findPokemon/${bulbasaur.name}`)
            .expect('Content-Type',/json/)
            .timeout(5000)
            .expect(200)
            .end(done)
    });

    it(`#Consultando Pokemon ${ivysaur.name} pelo id`, done => {
        request(app)
            .get(`/findPokemon/${ivysaur.id}`)
            .expect('Content-Type',/json/)
            .timeout(5000)
            .expect(200)
            .end(done)
    });

    it('#Consultando todos pokemons na base!', done => {
        request(app)
            .get('/findAllPokemon/')
            .expect('Content-Type',/json/)
            .timeout(5000)
            .expect(200)
            .end(done)
    });
    

    it('#Deletando pokemon na base pelo nome!', done => {
        request(app)
            .delete(`/deletePokemon/${ivysaur.name}`)
            .expect('Content-Type',/json/)
            .timeout(5000)
            .expect(200)
            .end(done)
    });

    it('#Deletando pokemon na base pelo id!', done => {
        request(app)
            .delete(`/deletePokemon/${bulbasaur.id}`)
            .expect('Content-Type',/json/)
            .timeout(5000)
            .expect(200)
            .end(done)
    });

    
    it('#Deletando pokemon na base pelo id, sem dados na base!', done => {
        request(app)
            .delete(`/deletePokemon/${bulbasaur.id}`)
            .expect('Content-Type',/json/)
            .timeout(5000)
            .expect(400)
            .end(done)
    });

});

