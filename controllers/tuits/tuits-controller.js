//import posts from "./tuits.js";
//let tuits = posts;
//const initialState = [...tuits]


//const resetTuits = (req, res) => {
    //tuits = [...initialState];
    //res.json(tuits)
//}

import * as tuitsDao from "../../tuits/tuits-dao.js";
import mongoose from 'mongoose';
const TuitsController = (app) => {
    //retreive data from server
    app.get('/api/tuits', findTuits);

    app.post('/api/tuits', createTuit);

    app.put('/api/tuits/:tid', updateTuit);

    app.delete('/api/tuits/:tid', deleteTuit);

}

const createTuit = async (req, res) => {
    const newTuit = req.body;
    //newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    //tuits.push(newTuit);
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}
const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    //const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate)
    //tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
    res.json(status);
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    //tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
    res.json(status);

}


export default TuitsController;




