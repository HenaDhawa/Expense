const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var todoSchema = new Schema(
    {
        transaction_type : {
            type : String,
            required : true
        },
        amount : {
            type : String,
            required : true
        }
    }
)

module.exports = mongoose.model('todo',todoSchema);
