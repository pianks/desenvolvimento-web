import React, {Component} from 'react';
import axios from 'axios';

export default class CreateAluno extends Component{

    constructor(props){
        super(props)
        this.state = {nome:'',curso:'',ira:0}

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIra = this.setIra.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    setNome(e){
        this.setState({nome:e.target.value})
    }
    setCurso(e){
        this.setState({curso:e.target.value})
    }
    setIra(e){
        this.setState({ira:e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
       // alert('Nome: '+this.state.nome + 'Curso: '+this.state.curso + 'Ira: '+this.state.ira)
        const novoAluno = {nome:this.state.nome, curso:this.state.curso, ira:this.state.ira}
        this.setState({nome:'',curso:'',ira:0})

        axios.post('http://localhost:3002/alunos/register',novoAluno)
        .then(
            (response)=>{
                alert('Aluno: '+ response.data.nome + ' Cadastrado com Sucesso')
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )

    } 

    render(){
        return(
            <div style={{marginTop:50}}>
                <h4>Criar Aluno</h4>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Nome:</label>
                        <input type='text' className="form-control" 
                               value ={this.state.nome} onChange={this.setNome}
                               placeholder="Digite seu Nome."  
                        />
                    </div>
                    <div className='form-group'>
                        <label>Curso:</label>
                        <input type='text' className="form-control" 
                               value ={this.state.curso} onChange={this.setCurso}
                               placeholder="Digite seu Curso." 
                        />
                    </div>
                    <div className='form-group'>
                        <label>IRA:</label>
                        <input type='text' className="form-control" 
                               value ={this.state.ira} onChange={this.setIra}
                              
                        />
                    </div>
                    <div className='form-group' style={{marginTop:10}}>
                        <input type='submit' className="btn btn-primary" />
                    </div>


                </form>
            </div>
        )
    }

}