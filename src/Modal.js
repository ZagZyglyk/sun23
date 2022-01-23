import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Получаем ссылку на элемент в дом дереве, описанный в index.html, по id 
const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
    constructor(props) {
        super(props)
        // В рамках компонента создаем элемент типа div
        this.divElement = document.createElement('div');
    }

    componentDidMount() {
        // После срабатывания рендера добавляем созданный в конструкторе div элемент в элемент, ссылку на который получили выше
        modalRoot.appendChild(this.divElement);
    }

    componentWillUnmount() {
        // При размонтировании элемента необходимо удалять созданные div элементы, так как иначе они буду сохраняться в dom дереве
        modalRoot.removeChild(this.divElement)
    }

    render() {
        // Используем createPortal по аналогии с синтаксисом ReactDOM.render, отдаем что именно создать и в каком элементе дом дерева
        return ReactDOM.createPortal(this.props.children, this.divElement);
    }
}

export default Modal;
