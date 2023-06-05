import express, { Application } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { sequelize } from './config/database';
import tasksRouter from './app/routes/tasks';
import { TodoTask } from './app/models/task';
const cors = require('cors');
const app: Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/tasks', tasksRouter);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection to the database has been established successfully.');
        TodoTask.sync({ force: true }).then(() => {
            console.log('Table created!');
        });
    })
    .catch((error: Error) => {
        console.error('Unable to connect to the database:', error);
    });

export default app;
module.exports = app;