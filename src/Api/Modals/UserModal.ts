import { timeStamp } from 'console';
import mongoose from 'mongoose';

interface userType {
    _id: string,
    name: string,
    email: string,
    password: string,
    dateOfBirth: string,
    phoneNumber: string,
    destination: string,
    isVerify: Boolean,
    createdAt: string,
    isArchive: boolean
}

interface userUpdateType {
    _id?: string,
    name?: string,
    email?: string,
    password?: string,
    dateOfBirth?: string,
    phoneNumber?: string,
    destination?: string,
    isVerify?: Boolean,
    createdAt?: Date,
    isArchive?: boolean
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    destination: {
        type: String,
    },
    isVerify: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
    },
    isArchive:{
        type: Boolean,
        default: false
    }
})

const Users = mongoose.model("Users", userSchema);

const insert = async (obj: userType) => {
    try {
        let user = new Users({
            name: obj.name,
            email: obj.email,
            password: obj.password,
            dateOfBirth: obj.dateOfBirth,
            phoneNumber: obj.phoneNumber,
            destination: obj.destination
        })
        user = await user.save()
        console.log("user", user)
        return user
    }
    catch (error) {
        return {status: 'error', message: error.message, error}
    }
}

const getAll = async () => {  
    try {
        const users = await Users.find({});
        if (users && users.length > 0) {
            return {status: 'success', data: users}
        }
        else {
            return {status: 'error', message: 'Users not exists.'}
        }
    }
    catch (error) {
        return {status: 'error', message: error.message, error}
    }
}

const getOne = async (whereObj: userUpdateType) => {
    try {
        const users = await Users.findOne(whereObj);
        if (users && !users.isArchive) {
            return {status: 'success', data: users}
        }
        else {
            return {status: 'error', message: 'Users not exists.'}
        }
    }
    catch (error) {
        return {status: 'error', message: error.message, error}
    }
}

const update = async (id: string, whereObj: userUpdateType) => {
    try {
        let user = await Users.findByIdAndUpdate(
            id,
            whereObj,
            { new: true }
        );
        
        if (!user) return {status: 'error', message: 'Users not exists.'};
        else return {status: 'success', message: "Update successfully"}
    }
    catch (error) {
        return {status: 'error', message: error.message, error}
    }
}

const archive = async (id: string) => {
    try {
        let user = await Users.findByIdAndUpdate(
            id,
            {
                isArchive: true
            },
            { new: true }
        );
        
        if (!user) return {status: 'error', message: 'Users not exists.'};
        else return {status: 'success', message: "Update successfully"}
    }
    catch (error) {
        return {status: 'error', message: error.message, error}
    }
}

let UserObj = {
    insert,
    getAll,
    getOne,
    update,
    archive
}

export default Users;
export {UserObj};