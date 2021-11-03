import mongoose, { Schema } from "mongoose"

const dataSchema = new Schema({
    location:{} ,
    status:{},
    firstname:{},
    lastname:{},
    phone:{},
    email:{},
    residence:{},
    propertySearch:{},
    isOlder:{},
    acceptTerms:{},
    acceptImage:{},
    createdDate:{}
});

const Data = mongoose.model('data', dataSchema);
export default Data
