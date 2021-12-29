import React, { useState } from 'react';
import * as Styled from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddList } from './components/AddItem';


const App = () => {

  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Estudar React JS', done: false},
    {id: 2, name: 'Estudar Java Script', done: false},
    {id: 3, name: 'Estudar TypeScript', done: true},
  ]);

  const handleAddtask = (nameTask: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: nameTask,
      done: false
    });
    setList(newList);
  }

  return (
    <Styled.Container>
      <Styled.Area>
        <Styled.Header>Lista de Tarafas</Styled.Header>

        <AddList onEnter={handleAddtask} />

        {list.map( (item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </Styled.Area>
    </Styled.Container>
  );
}

export default App;
