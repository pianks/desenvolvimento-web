import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import FirebaseContext from '../../utils/FirebaseContext'
import FirebaseService from '../../services/FirebaseService'



const ListPage = () =>(
    <FirebaseContext.Consumer>
        {contexto => <ListAluno firebase={contexto} />}
    </FirebaseContext.Consumer>
)


 class ListAluno extends Component {
    
    constructor(props){
        super(props)
        this._isMounted = false
        this.state = {alunos:[] , loading: false}
    }

    componentDidMount(){
        this._isMounted = true
        this.setState({loading:true})
        FirebaseService.list(
                this.props.firebase.getFirestore(),
                (alunos)=>{
                    if(alunos){
                        if(this._isMounted) this.setState({alunos:alunos, loading: false})
                    }
                }
                )
    }

    componentWillUnmount(){
        this._isMounted = false
    }

    montarTabela(){
        if(!this.state.alunos) return
        return this.state.alunos.map(
            (aluno,i)=>{
                return <LinhaDaTabela aluno={aluno} key={i} firebase={this.props.firebase}/>
            }
        )
    }

    gerarConteudo(){
        if(this.state.loading){
            return(
                <tr>
                    <td colSpan='6' style={{textAlign:'center'}}>
                    <div className='spinner-border' role = "status">
                        <span className="sr-only"></span>
                    </div>
                    </td>
                </tr>
            )
        }else return this.montarTabela()
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
                        {this.gerarConteudo()}
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

    apagarAluno(id,nome){
        let res =  window.confirm(`Deseja excluir o aluno ${nome} ?`)
        if(res){
            FirebaseService.delete(
                this.props.firebase.getFirestore(),
                (mensagem)=>{
                    console.log(mensagem)
                },
                id,
                nome
            )
        }
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
                    <button className='btn btn-danger' 
                    onClick={
                     ()=> this.apagarAluno(this.props.aluno._id,
                                           this.props.aluno.nome)   
                            }
                    >Apagar</button>
                </td>
            </tr>
        )
    }
}

export default ListPage