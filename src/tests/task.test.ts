import {Response} from "express";

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
chai.use(chaiHttp);
const expect = chai.expect;

describe('Task API Routes', () => {
    describe('GET /tasks', () => {
        it('should return status code 200 and an array of tasks', (done) => {
            chai
                .request(app)
                .get('/tasks')
                .end((err: Error, res: Response) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });

    describe('POST /tasks', () => {
        it('should create a new task and return status code 201', (done) => {
            const newTask = {
                title: 'New Task',
                description: 'This is a new task',
            };

            chai
                .request(app)
                .post('/tasks')
                .send(newTask)
                .end((err: Error, res: Response) => {
                    console.log(res.get('body'))
                    expect(res).to.have.status(201);
                    // Add additional assertions for the response body if needed
                    done();
                });
        });
    });
    describe('GET /tasks/:id', () => {
        it('should return status code 200 and the specified task', (done) => {
            const taskId = 1; // Specify the ID of an existing task

            chai
                .request(app)
                .get(`/tasks/${taskId}`)
                .end((err: Error, res: Response) => {
                    expect(res).to.have.status(200);
                    // Add additional assertions for the response body if needed
                    done();
                });
        });
    });

    describe('PATCH /tasks/:id', () => {
        it('should update the specified task and return status code 200', (done) => {
            const taskId = 1; // Specify the ID of an existing task
            const updatedTask = {
                id: 1,
                title: 'Updated Task',
                description: 'This is an updated task',
            };

            chai
                .request(app)
                .patch(`/tasks/${taskId}`)
                .send(updatedTask)
                .end((err: Error, res: Response) => {
                    expect(res).to.have.status(200);
                    // Add additional assertions for the response body if needed
                    done();
                });
        });
    });

    describe('DELETE /tasks/:id', () => {
        it('should delete the specified task and return status code 204', (done) => {
            const taskId = 1; // Specify the ID of an existing task

            chai
                .request(app)
                .delete(`/tasks/${taskId}`)
                .end((err: Error, res: Response) => {
                    expect(res).to.have.status(204);
                    done();
                });
        });
    });
});