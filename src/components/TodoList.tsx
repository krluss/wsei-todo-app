import React, { FC } from 'react';
import { Button, TouchableWithoutFeedback } from 'react-native';
import  styled  from 'styled-components';
import { useSelector, useDispatch  } from 'react-redux';

import { IState } from '../reducers';
import { ITodoListReducer } from '../reducers/todoListReducer';


import { ISingleElementList } from '../entities/todoSingleEl';
import { removeElementTodoList } from '../actions/todoListActions';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

type removeElemTodoList = ReturnType<typeof removeElementTodoList>;

const Wrapper = styled.ScrollView`
    margin: 80px 20px 0 20px;
`;
const SingleElList = styled.View`
    border: 1px solid black;
    margin: 0 0 10px 0;
`;
const TodoName = styled.Text`
    textAlign: center;
    padding: 5px;
    fontWeight: bold;
`;

const TodoDesc = styled.Text`
    padding: 10px;
`;

const AfterNameLine = styled.View`
    backgroundColor: black;
    height: 1px;
    width: 165px;
    left: 100px;
`;


const TodoList: FC<{switchView(formView: boolean)}> = props =>{
    const todoListState = useSelector<IState, ITodoListReducer>(state => state.todoList)
    const dispatch = useDispatch();
    const removeData = (id: number) => { dispatch<removeElemTodoList>(removeElementTodoList(id)) }
    const goToForm = () => {
        props.switchView(true);
    }
    return (
        <Wrapper showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
            {todoListState.todoList.map((elem: ISingleElementList, index: number) =>
                <TouchableWithoutFeedback onLongPress={() => removeData(elem.id)} key={index}>
                    <SingleElList >
                        <TodoName>{elem.name}</TodoName>        
                            <AfterNameLine />
                        <TodoDesc>{elem.description}</TodoDesc>
                    </SingleElList>
                </TouchableWithoutFeedback>
            )}
            <Button title="Add Task" onPress={goToForm} />
        </Wrapper>
    )
};

export default TodoList;