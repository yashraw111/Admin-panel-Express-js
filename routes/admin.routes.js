const express = require('express')
const Admin = express()
const adminCon= require('../controller/admin.controller')

Admin.post('/addAdminUser',adminCon.addAdmin)

module.exports = Admin