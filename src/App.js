import React, {useState} from 'react';
import Modal from './Modal';

import './app.css';

const modalText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' + 
'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit' + 
'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

// Управление открытием окна срабатывает из 
const ModalBody = (props) => {
  return (
    <div className='modal-root'>
      <div className='modal'>
        <div>
              {modalText}
        </div>
        <hr/>
        <button onClick={props.onButtonClick}>Hide Modal</button>
      </div>
    </div>
  )
}

function App() {
  const [modalShown, setModalShown] = useState(false);

  const handlerToogleButtonClick = () => {
    setModalShown(!modalShown);
  }

  return (
    <div className='app'>
      <h5>Application</h5>
      <button onClick={handlerToogleButtonClick}>Show modal</button>
      {modalShown ? 
      // Создаем элемент modal и передаем ему в children-ы элемент Modal body, прокидывая через пропсы функцию срабатывания кнопки
      (<Modal>
        <ModalBody onButtonClick={handlerToogleButtonClick}/>        
      </Modal>)
      : <></>}
    </div>
  );
}

export default App;
