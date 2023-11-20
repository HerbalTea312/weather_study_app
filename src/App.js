import Table from './components/Table';
// import City from './components/City';
import ModalWindow from './components/UI/ModalWindow/ModalWindow.jsx';
import ChangeButton from './components/UI/ChangeButton/ChangeButton';
import Input from './components/UI/Input/Input';
import './styles/App.css'
import { useState } from 'react';

function App() {

  const [modal, setModal] = useState(false);
  const [post, setPost] = useState({ title: '', body: '' });

  return (
    <div className="App">
      <header>
        <h1>SIMPLE WEATHER</h1>
      </header>
      <div className='flex space_between'>
        <p>Ульяновск</p>
        <ChangeButton onClick={() => setModal(true)}>
          Изменить город
        </ChangeButton>
      </div>
      <ModalWindow visible={modal} setVisible={setModal}>
        <form>
          <Input onChange={e => setPost({ ...post, title: e.target.value })}
            type="text"
            placeholder="Название поста" />
        </form>
      </ModalWindow>
      <Table />
    </div>
  );
}

export default App;
