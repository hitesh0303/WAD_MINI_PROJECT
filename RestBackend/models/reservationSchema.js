import mongoose from "mongoose";
import validator from "validator";

const reservationSchema= new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength: [3, "First Name Must Contain Atleast 3 characters!"],
        maxLength: [30, "First Name Cannot Exceed Above 30 Characters!" ],
    },
    
    lastName:{
        type: String,
        required: true,
        minLength: [3, "Last Name Must Contain Atleast 3 characters!"],
        maxLength: [30, "Last Name Cannot Exceed Above 30 Characters!" ],
    },

    email:{
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a Valid Email"],
    },

    phone:{
        type: String,
        required: true,
        minLength: [10, "Invaild!"],
        maxLength: [10, "Should Not Exceed Above 10 Characters!" ],
    },

    time:{
        type: String,
        required: true,
    },

    date:{
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);