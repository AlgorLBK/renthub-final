const express = require( 'express' );

const property = require('../models/Property');
const propertyRoute = express.Router();

propertyRoute.post('/add', async(req, res) => {
    
    try {
        let propertyName = req.body.propertyName;
        let propertyType = req.body. propertyType;
        let bathroom = req.body.bathroom;
        let bedroom = req.body.bedroom;
        let pet = req.body.pet;
        let price = req.body.price;
        let addressStreet = req.body.addressStreet;
        let addressCity = req.body.addressCity;
        let addressProvince = req.body.addressProvince;
        let postalCode = req.body.postalCode;
        let description = req.body.description;
        let image1 = req.body.image1;
        let image2 = req.body.image2;
        let image3 = req.body.image3;
        let image4 = req.body.image4;
        let amenities = req.body.amenities;
        let landlord = req.body.landlord;


        if (propertyName === '' || propertyType === '' || bathroom === '' || bedroom === '' || pet === '' || price === '' || addressStreet === '' || 
        addressCity === '' || addressProvince === '' || postalCode == '' || description === '') {
            return res.send({
                status: false,
                message: "All fields are required"
            });
        }  else {
        
            const newProperty = new property ({
                propertyName,
                propertyType, 
                bathroom,
                bedroom,
                pet,
                addressStreet,
                addressCity,
                addressProvince,
                postalCode,
                description,
                price,
                image1,
                image2,
                image3,
                image4,
                amenities,
                landlord
            });
    
            await newProperty.save();
    
            res.status(201).json({
                status: true,
                message: "Property Listed successfully"
            });
        }

        //const { name, username, email, phone, password, confirmPassword, role} = req.body
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

propertyRoute.get('/', async(req, res) => {
    try {
        let properties = await property.find();
        if (properties.length > 0) {
            res.status(200).json(properties)
        } else {
            return res.status(404).send("Property not found.");
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

propertyRoute.get('/:id', async(req, res) => {
    try {
        let propertyById = await property.findById()
        if (!propertyById) {
            return res.status(404).send("Property not found.");
        }
        res.status(200).json(ppropertyById)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});



propertyRoute.get('/landlords/:landlordId', async(req, res) => {
    try {
        const landlordId = req.params.landlordId;
        let properties = await property.find({landlord : landlordId});
        if (!properties) {
            return res.status(404).send("Properties for landlord not found.");
        }
        res.status(200).json(properties)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

propertyRoute.get('/:landlordId', async(req, res) => {
    try {
        const landlordId = req.params.landlordId;
        let properties = await property.find({landlord : landlordId});
        if (!properties) {
            return res.status(404).send("Properties for landlord not found.");
        }
        res.status(200).json(properties)
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

propertyRoute.delete('/:id', async (req, res) => {
    try {
      const propertyId = req.params.id;
  
      const findProperty = await property.findById(propertyId);
      if (!findProperty) {
          return res.status(404).send({ error: "Property not found" });
      }
  
      await property.findByIdAndDelete(propertyId);
      res.status(200).send({ message: "Property deleted successfully" });
  
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "An error occurred while deleting the property" });
    }
  });

  propertyRoute.get('/count', async(req, res) => {
    try{
        let propertiesCount = await property.countDocuments({});
        return res.status(200).json({propertyCount: propertiesCount})
    }catch(err){
        console.log(err);
        return res.status(400).send(err);
    }
})

propertyRoute.get('/all', async (req, res) => {
    try {
        let properties = await property.find();
        return res.status(200).json({properties });
    } catch (error) {
        console.error(error);
        return res.status(500).send("Internal Server Error");
    }
});


module.exports = propertyRoute;



