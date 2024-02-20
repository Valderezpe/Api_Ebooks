const request = require('supertest');
const app = require('../src/app');

describe('Estar tudo certinho',() => {
    it('should show tudo certinho',async () =>{
        const res = await request(app)
        .get('/ebooks')
        expect(res.statusCode).toEqual(200);
    });

    it('should check if create user', async ()=>{
        const res = await request(app)
        .post('/ebooks').send({
            author: 'João',
            title: 'como vencer o medo',
            page: '234',
            description: 'a vida e muito bela'
        });
        expect(res.statusCode).toEqual(201);
    });
});