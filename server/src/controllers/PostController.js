import PostModel from '../models/Post';
// import Post from './models/Post';

import Post from "../models/Post";

class PostController{
    index(req, res) {
        Post.find().then((err, posts) => {
            if (err) {
                return res.send(err);
            }
    
            return res.json(posts);
        })
    }
    creater(req, res)   {
        const data = req.body;
    
        const post = new PostModel({
            title: data.title,
            text: data.text,
        })
    
        post.save().then(() => {
            res.send({ statuse: 'OK' });
        })
    }
    read(req,res){
        console.log( PostModel);
        
         PostModel.findOne({ _id: req.params.id}).then(post=>{
             console.log(post );
             
             if(!post){
                 res.send({error:'not found'})
             }else{
                 res.json(post)
             }
         })
    }
    update(req, res){
 
        PostModel.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
            if (err) {
                res.send(err)
            }
            res.json({ statuse: "update" }) 
        })
    }
    delete(req, res){


        PostModel.remove({
            _id: req.params.id
        }).then(post => {
            if (post) {
                res.json({ status: 'delete' })
            } else {
                res.json({ status: 'error' })
            }
        })
    }
}

export default PostController;