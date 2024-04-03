const express = require( 'express' );
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config.json');
  
const user = require('../models/User');
const property = require('../models/Property');
const adminRoute = express.Router();

adminRoute.get('/', async(req, res) => {
    try{
        let tenantsCount = await user.countDocuments({role: "tenant"});
        let landlordsCount = await user.countDocuments({role: "landlord"});
        let propertiesCount = await property.countDocuments({});
        return res.status(200).json({
                propertyCount: propertiesCount, 
                tenantCount: tenantsCount,
                landlordCount: landlordsCount
            })
    }catch(err){
        console.log(err);
        return res.status(400).send(err);
    }
})

module.exports = adminRoute;