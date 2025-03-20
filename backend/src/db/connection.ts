import e from 'express';
import { connect, disconnect } from 'mongoose';

async function connectToDatabase() {


    try {
        await connect(process.env.MONGODB_URL);

    } catch (error) {
        console.log(error)
        throw new Error('Error while connecting to database')
    }
}

async function diconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error)
        throw new Error('Error while disconnecting from database')
    }
}

export { connectToDatabase, diconnectFromDatabase }