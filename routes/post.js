const express = require('express');
const router = express.Router();
//import schema
const Post = require('../models/userfeed');

//get back data from the database

router.get('/', async (req, res)=>{
 try{
   const post = await Post.find();
   res.json(post);
 }catch(err){
   console.log(err)
 }
});


//posting the model to our database
router.post('/', async (req, res)=>{
   const post = new Post({
     userid : req.body.userid,
     firstname : req.body.firstname,
     lastname : req.body.lastname,
     tags : req.body.tags,
     frequency : req.body.frequency,
     source : req.body.source
   });

   //save post to database and error message
   try {
  const savepost = await post.save();
  res.json(savepost)
}catch(err){
  res.json({message : err });
}

});
//get a specefic post by id
router.get('/:postId', async(req , res)=> {
  try{
const post = await Post.findById(req.params.postId);
res.json(post);
}catch(err){
  console.log(err);
}

})
module.exports = router;
