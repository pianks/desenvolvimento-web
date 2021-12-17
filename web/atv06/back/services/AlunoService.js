const AlunoModel = require('../models/AlunoModel');

class AlunoService{

    static register (req,res){
        AlunoModel.create(req.body).then(
            (aluno) => {
                res.status(201).json(aluno);
            }
        ).catch(
            (aluno)=>{
                res.status(500).json(aluno);
            }
        )
    }

    static list (req,res){
        AlunoModel.find().then(
            (user) => {
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        )
    }




    static update(req,res){
        AlunoModel.findByIdAndUpdate(req.params.id,req.body, {'new':true}).then(
            (user) =>{
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        )
    }

    static delete(req,res){
        AlunoModel.findByIdAndRemove(req.params.id).then(
            (user) =>{
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        )
    }



    static retrieve(req,res){
        AlunoModel.findById(req.params.id).then(
            (user) =>{
                res.status(201).json(user);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
            }
        )
    }
}

module.exports = AlunoService;