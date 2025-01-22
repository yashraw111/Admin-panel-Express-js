
const router = require('express').Router()

const categoryModel=require('../model/catModel');


router.get('/addCategory',(req,res)=>{
    res.render('pages/addCategory')
  })
  
  router.get('/viewCategory',async(req,res)=>{
    const category=await categoryModel.find()
    res.render('pages/viewCategory',{category})
  })
  
  router.get("/updateCategory",async(req,res)=>{
    const {id}=req.query
    const category=await categoryModel.findById(id)
    res.render('pages/updateCategory',{category})
  })
  router.get("/register",async(req,res)=>{
    res.render("pages/register")
  })
  router.get("/login",async(req,res)=>{
    res.render("pages/login")
  })

  module.exports = router