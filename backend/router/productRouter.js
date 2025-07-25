const express=require( 'express');

const router = express.Router();
const { blogmodel }=require( "../Models/user");
const auth= require( '../Middlewares/auth');
const Add=require( './add');
const Blog=require( './bloggssss');
router.post('/add', auth, Add);
router.get('/blog', auth, Blog);

module.exports = router; 