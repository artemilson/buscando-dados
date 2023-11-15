import { useState } from "react"
import { useEffect } from "react"

const tarefas = [
  { id: "1", title: "Minha primeira tarefa" },
  { id: "2", title: "Minha segunda tarefa" },
  { id: "3", title: "Minha terceira tarefa" },
  { id: "4", title: "Minha quarta tarefa" },
  { id: "5", title: "Minha quinta tarefa" },
]

export default function App() {

  const [tarefas, setTarefas] = useState([])
 
  useEffect(() => {

    async function buscarDados(){
      const resultado = await fetch("https://jsonplaceholder.typicode.com/todos")
      const resultadoFinal = await resultado.json()
      return resultadoFinal
    }

    buscarDados().then(res => setTarefas(res))

  }, [])

  return (
    <div>
      <h1>Buscando dados</h1>
      <ol>
        {tarefas.map((tarefa) => {
          return (
            <div>
              <li key={tarefa.id}>
                {tarefa.title}
                {tarefa.completed ?  " - OK" : null}</li>
              
            </div>
          )
        })}
      </ol>
    </div>
  )
}