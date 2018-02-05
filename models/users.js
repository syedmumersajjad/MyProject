var mongoose=require('mongoose');
var Users = mongoose.model('Users',{
    first_name:{
        type : String,
        required: true,
        minlength : 1
    },
    last_name:{
        type : String,
        required: true,
        minlength : 1
    },
    user_email:{
        type : String,
        required: true,
        minlength : 1
    },
    user_password:{
        type : String,
        required: true,
        minlength : 6
    }
    // address:{
    //     type : String,
    //     required: true,
    //     minlength : 1
    // },
    // City:{
    //     type : String,
    //     required: true,
    //     minlength : 1
    // },
    // Country:{
    //     type : String,
    //     required: true,
    //     minlength : 1
    // },
    // user_lat:{
    //     type : String,
    //     required: false,
    //     minlength : 1
    // },
    // user_long:{
    //     type : String,
    //     required: false,
    //     minlength : 1
    // }
});

module.exports={
    Users
}