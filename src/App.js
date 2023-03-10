import { useState } from 'react';
import './App.css';

function App() {

  const [nome, setNome] = useState()
  const [idade, setIdade] = useState()

  const [pessoas, setPessoas] = useState([]);

  function cadastrar() {
    if (idade < 18) {
      alert(`Pessoa menor de idade!`)
      limparForm()
    } else {
      const pessoa = {
        nome,
        idade
      }
      pessoas.push(pessoa)

      setPessoas([...pessoas])

    }

  }

  function limparForm() {
    setNome('')
    setIdade('')
  }

  return (
    <>
      <div className="form m5" >
        <h1> Formulário de Cadastro </h1>
        <input className='m5' placeholder='Nome' value={nome} onChange={(e) => { setNome(e.target.value) }} />
        <input className='m5' placeholder='Idade' type="number" value={idade} onChange={(e) => { setIdade(e.target.value) }} />
        <button className='m5' onClick={cadastrar}>Cadastrar</button>
      </div>

      <table>
        <tr>
          <th>Nome</th>
          <th>Idade</th>
        </tr>
        {
          pessoas.map((pessoa) => {
            return (
              <tr>
                <td>{pessoa.nome}</td>
                <td>{pessoa.idade}</td>
              </tr>
            )
          })
        }
      </table>
    </>
  );
}

export default App;
