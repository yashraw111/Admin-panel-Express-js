const express = require('express')
const Admin = express()
const adminCon= require('../controller/admin.controller')
const upload = require('../middleware/upload')

Admin.post('/addAdminUser',adminCon.Register)
Admin.post('/loginUser',adminCon.login)
Admin.post('/UpdateProfile', upload.single("admin_profile"),adminCon.updateProfile)

module.exports = Admin