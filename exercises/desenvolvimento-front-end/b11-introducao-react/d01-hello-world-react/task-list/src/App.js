import './App.css';

const task = (tasks) => {
    return (
        tasks.map((task) => <li>{task}</li>)
    );
}

function App() {
    const tasks = ['Passear com o doguinho.', 'Lavar o carro.', 'Ler mais 1 capitulo do livro Clean Code.']
    return (
        <div>
            <ol>
                {task(tasks)}
            </ol>
        </div>
    );
}

export default App;
