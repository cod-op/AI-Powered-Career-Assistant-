import mongoose,{Document,Mongoose,Schema} from "mongoose";

export interface  IUser extends Document{
    name:string,
    email:string,
    password?: string;
    image?:string,
    subscription:Date | null,
    freeRequestsUsed:number,

    hasProAccess():boolean,
    canMakeRequest():boolean,
}

const schema:Schema <IUser> = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password: {
    type: String,
    default: null
   },
    image:{
        type:String,
        default:null
    },
    subscription:{
        type:Date,
        default:null,
    },
    freeRequestsUsed:{
        type:Number,
        default:0,
    }
},{timestamps:true})


schema.methods.hasProAccess=function():boolean{
  return !!this.subscription  && new Date() <new Date(this.subscription);
}

schema.methods.canMakeRequest=function():boolean{
    return this.hasProAccess() || this.freeRequestsUsed < 6;
}

const User=mongoose.model<IUser>("User",schema);

export default User
