import mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const userCollection = 'users';

const userSchema = new Schema({

    firstName: { type: Schema.Types.String, required: true },
    lastName: { type: Schema.Types.String, required: true },
    email: { type: Schema.Types.String, required: true, unique: true },
    age: { type: Schema.Types.Number, required: true },
    password: { type: Schema.Types.String,required: true },
    cart: { type: Schema.Types.ObjectId, ref: 'carts', required: true },
    roles: [{ type: Schema.Types.ObjectId, ref: 'roles', index: true, default:'client'}]
});

userSchema.plugin(mongoosePaginate);

userSchema.pre('paginate',function(){
    this.populate('roles');
    this.populate('carts');
})

userSchema.pre('getOne',function(){
    this.populate('roles');
    this.populate('carts');
})


export default mongoose.model(userCollection, userSchema);