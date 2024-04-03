const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
    propertyName: {
        type: String,
        required: true
    },
    propertyType: {
        type: String,
        required: true,
        enum: [
            'apartment',
            'studio',
            'bachelor',
            'basement',
            'duplex',
            'loft',
            'condo',
            'house',
            'townhouse',
            'multi-unit',
            'cabin',
            'cottage',
            'private room',
            'shared room'
        ]
    },
    bathroom: {
        type: Number,
        required: true,
    },
    bedroom: {
        type: Number,
        required: true,
    },
    pet: {
        type: String,
        enum: ['allowed', 'not allowed']
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },

    addressStreet: {
        type: String,
        required: true
    },
    addressCity: {
        type: String,
        required: true
    },

    addressProvince: {
        type: String,
        enum: ['NL', 'PE', 'NS', 'NB', 'QC', 'ON', 'MB', 'SK', 'AB', 'BC', 'YT', 'NT', 'NU'],
        required: true
    },

    postalCode: {
        type: String,
        required: true,
        // Do the validation in routing:
        // validate: {
        //     validator: function (value) {
        //         // Canadian postal code regex: A1A 1A1
        //         return /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/.test(value);
        //     },
        //     message: 'Please enter a valid Canadian postal code (e.g., A1A 1A1)',
        // }
    },

    amenities: [String],

    landlord: {
        type: String,
        required: true
    },

    image1: {
        data: Buffer,
        contentType: String,
        caption: String,
    },
    image2: {
        data: Buffer,
        contentType: String,
        caption: String,
    },
    image3: {
        data: Buffer,
        contentType: String,
        caption: String,
    },
    image4: {
        data: Buffer,
        contentType: String,
        caption: String,
    },
    
}, { timestamps: true });

const property = mongoose.model('properties', propertySchema);

module.exports = property;
