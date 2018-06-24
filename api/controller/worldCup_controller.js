const WorldCup = require('../model/worldCup_model');

//all post get
const WorldCup_all_Post= (req, res) => {
    WorldCup.find()
    .then(allTeam=>{
        res.json({
            msg:`${allTeam.length} allTeam `,
            allTeam: allTeam
        })
    })
    .catch(error => {
        console.log(error)
        res.json({
            mas: 'error data',

        })
    })
 }
 module.exports.WorldCup_all_Post = WorldCup_all_Post

 ////worldCup single post get
 const worldCup_single_post = (req, res) => {
    const id = req.params.id
    WorldCup.findOne({_id:id})
    .then(data=>{
        res.json({
            msg:"worldCup single post founded",
            Tournament_Name: data.Tournament_Name,
            Country: data.Country,
            Team_Member: data.Team_Member,
            Ranking: data.Ranking,
            WorldCup_Winners: data.WorldCup_Winners,
            TotalGoal: data.TotalGoal

        })
    })
}
module.exports.worldCup_single_post = worldCup_single_post

//worldCup new post 
const newPostController = (req,res,next) =>{
    const data ={
        Tournament_Name: req.body.Tournament_Name,
        Country: req.body.Country,
        Team_Member: req.body.Team_Member,
        Ranking: req.body.Ranking,
        WorldCup_Winners: req.body.WorldCup_Winners,
        TotalGoal: req.body.TotalGoal
    }
    const WorldCup_Save = new WorldCup(data)
        WorldCup_Save.save()
            .then(data => { 
                console.log(data)
                res.json({
                    msg: 'add data',
                    WorldCup_Save: data
                })
            })
            .catch(error => {
                console.log(error)
                res.json({
                    mas: 'error data',

                })
            })
}
module.exports.newPostController = newPostController

//worldCup post delete
const worldCup_single_delete = (req, res) => {
    const id = req.params.id
    WorldCup.findByIdAndRemove({_id: id})
        .then(data => {
            res.json({
                 msg: data.Country + "is deleted successfully"
            })
        })
}
module.exports.worldCup_single_delete = worldCup_single_delete

//worldCup post edit
const worldCup_single_edit = (req, res) => {
    const data ={
        Tournament_Name: req.body.Tournament_Name,
        Country: req.body.Country,
        Team_Member: req.body.Team_Member,
        Ranking: req.body.Ranking,
        WorldCup_Winners: req.body.WorldCup_Winners,
        TotalGoal: req.body.TotalGoal
    }

    const id = req.params.id
    WorldCup.findOneAndUpdate({_id:id},data)
    .then(data=>{
        res.json({
            msg:"data update",
        })
    })

}
module.exports.worldCup_single_edit = worldCup_single_edit