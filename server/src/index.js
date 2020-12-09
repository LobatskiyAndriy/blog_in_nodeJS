import mongoose from 'mongoose'
import express from 'express';
import bodyParser from 'body-parser';


import postController from './controllers/PostController';

const app = express();
mongoose.connect('mongodb://localhost/blog');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PostController = new postController();

app.get('/posts',PostController.index )
app.post('/posts', PostController.creater)
app.get('/posts/:id',PostController.read )
app.delete('/posts/:id',PostController.delete  )
app.put('/posts/:id', PostController.update)


app.listen(3333, ({ ...props }) => {
    console.log("Server started");


})

