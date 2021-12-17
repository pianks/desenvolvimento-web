import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class ListAluno extends Component {
    
    constructor(props){
        super(props)
        this.state = {alunos:[]}
        this.apagarAlunoPorID = this.apagarAlunoPorID.bind(this)
    }

    apagarAlunoPorID(_id){
        let alunosTemp = this.state.alunos
        for(let i=0;i<alunosTemp.length;i++){
            if(alunosTemp[i]._id===_id){
                alunosTemp.splice(i,1)
            }
        }
        this.setState({alunos:alunosTemp})
    }

    componentDidMount(){
        
        axios.get('http://localhost:3002/alunos/list')
        .then(
            (response)=>{
                this.setState({alunos:response.data})
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    montarTabela(){
        if(!this.state.alunos) return
        return this.state.alunos.map(
            (aluno,i)=>{
                return <LinhaDaTabela aluno={aluno} key={i} apagarAlunoPorID={this.apagarAlunoPorID}/>
            }
        )
    }

    render(){
        return(
            <div>
                <p>Listar Alunos</p>
                <table className='table table-striped' style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Nome</td>
                            <td>Curso</td>
                            <td>IRA</td>
                            <td colSpan='2' style={{textAlign:'center'}}>Ações</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>
        )
    }
}

class LinhaDaTabela extends Component{

    constructor(props){
        super(props)
        this.apagarAluno = this.apagarAluno.bind(this)
    }

    apagarAluno(){
        axios.delete('http://localhost:3002/alunos/delete/'+this.props.aluno._id)
        .then(
            (response)=>{
                alert('Registro apagado')
                this.props.apagarAlunoPorID(this.props.aluno._id)
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
            <tr>
                <td>{this.props.aluno._id}</td>
                <td>{this.props.aluno.nome}</td>
                <td>{this.props.aluno.curso}</td>
                <td>{this.props.aluno.ira}</td>
                <td style={{textAlign:'center'}}>
                    <Link to={'/editAluno/'+this.props.aluno._id} 
                          className='btn btn-primary'>Editar</Link>
                </td>
                <td style={{textAlign:'center'}}>
                    <button className='btn btn-danger' onClick={this.apagarAluno}>Apagar</button>
                </td>
            </tr>
        )
    }
}