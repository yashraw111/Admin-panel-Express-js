const express = require('express')
const Admin = express()
const adminCon= require('../controller/admin.controller')

Admin.post('/addAdminUser',adminCon.Register)
Admin.post('/loginUser',adminCon.login)

module.exports = Admin