export default class FirebaseService{

    static list = (firestore,callback) => {
        let ref = firestore.collection('alunos')
        ref.onSnapshot(
            (query) => {
                let alunos = []
                query.forEach(
                    (doc)=>{
                        const {nome,curso,ira} = doc.data()
                        alunos.push(
                            {
                                _id: doc.id,
                                nome,
                                curso,
                                ira,
                            }
                        )
                    }
                )
                callback(alunos)
            }
        )
    }

    static delete = (firestore,callback,id,nome) => {
        firestore.collection('alunos').doc(id).delete()
        .then(()=>callback(`Aluno ${nome} excluido com sucesso`))
        .catch(error =>callback(error))
    }

    static create = (firestore,callback,aluno) => {
        firestore.collection('alunos').add(
            {
                nome: aluno.nome,
                ira: aluno.ira,
                curso: aluno.curso,
            }
        )
        .then((()=>callback(`Aluno ${aluno.nome} Criado`)))
        .catch(error => callback(error))
    }

    static retrieve = (firestore,callback,id) => {
        firestore.collection('alunos').doc(id).get()
        .then(
            (doc) => {
                callback(
                    {
                        nome: doc.data().nome,
                        curso: doc.data().curso,
                        ira: doc.data().ira
                    }
                )
            }
        )
        .catch(error=>callback(error))
    }

    static edit = (firestore,callback,aluno,id) => {
        firestore.collection('alunos').doc(id).set(
            {
                nome: aluno.nome,
                curso: aluno.curso,
                ira: aluno.ira,
            }
        )
        .then(()=>{
            callback("Atualização Feita")
        })
        .catch(error =>callback(error))
    }

}