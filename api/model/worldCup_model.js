const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WorldCupSchema = new Schema({
    Tournament_Name: {
        type: String,
        required: true
    },
    Country: {
        type: String, 
        required:true
    },
    Team_Member: [
        {
            Name: String,
            Age: Number,
            Address: String
        }
    ],
    Ranking: {
        type: Number,
        required: true
    },
    WorldCup_Winners: {
        type: Number
    },
    TotalGoal: Number 
})
const WorldCup = mongoose.model('WorldCup', WorldCupSchema)

module.exports = WorldCup