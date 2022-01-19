import React, { Component } from 'react'
import FirebaseContext from '../../utils/FirebaseContext'
import FirebaseService from '../../services/FirebaseService'


const EditPage = (props) =>(
    <FirebaseContext.Consumer>
        {contexto => <EditAluno firebase={contexto} id={props.match.params.id}/>}
    </FirebaseContext.Consumer>
)

class EditAluno extends Component {
   
    constructor(props) {
        super(props)
        this.state = { nome: '', curso: '', ira: '' }

        this.setNome = this.setNome.bind(this)
        this.setCurso = this.setCurso.bind(this)
        this.setIra = this.setIra.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }



    componentDidMount(){
        FirebaseService.retrieve(
            this.props.firebase.getFirestore(),
            (aluno)=>{
                this.setState({
                    nome: aluno.nome,
                    curso: aluno.curso,
                    ira: aluno.ira
                })
            },
            this.props.id
        )
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }
    
    setCurso(e) {
        this.setState({ curso: e.target.value })
    }

    setIra(e) {
        this.setState({ ira: e.target.value })
    }

    onSubmit(e){
        e.preventDefault()

        const aluno = {
            nome:this.state.nome,
            curso: this.state.curso,
            ira: this.state.ira,
        }

        FirebaseService.edit(
            this.props.firebase.getFirestore(),
            (mensagem)=>{
                console.log(mensagem)
            },
            aluno,
            this.props.id
        )
        this.setState({nome:'',curso:'',ira:0})
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Editar Aluno</h3>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Nome: </label>
                        <input type="text" className="form-control" 
                        value={this.state.nome} onChange={this.setNome}/>
                    </div>
                    <div className="form-group">
                        <label>Curso: </label>
                        <input type="text" className="form-control" 
                        value={this.state.curso} onChange={this.setCurso}/>
                    </div>
                    <div className="form-group">
                        <label>IRA: </label>
                        <input type="text" className="form-control" 
                        value={this.state.ira} onChange={this.setIra}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Editar Aluno" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        )
    }
}

export default EditPage