import React, { useState, KeyboardEvent } from 'react';
import * as Styled from './styles';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddList = ({onEnter}: Props) => {

    const [inputText, setInputText] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText);
            setInputText('');
        }
    }

    return (
        <Styled.Container>
            <div className="image">+</div>
            <input 
            type='text'
            placeholder='Digite uma tarefa.' 
            value={inputText} 
            onChange={ e => setInputText(e.target.value) } 
            onKeyUp={handleKeyUp} />
        </Styled.Container>
    );
}