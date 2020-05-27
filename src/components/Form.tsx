import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { TextInput, Button, Text, View } from 'react-native';

import { useDispatch } from 'react-redux';

import { setNewElementTodoList } from '../actions/todoListActions';
import { ISingleElementList } from '../entities/todoSingleEl';

const Wrapper = styled.View`
    margin: 80px 20px 0 20px;
`;

const CustomTextInput = styled.TextInput`
    border: 1px solid;
    padding: 10px;
    color: black;
    width: 100%;
    margin: 0 0 10px 0;
`;

type setNewElementTodoList = ReturnType<typeof setNewElementTodoList>;

const Form: FC<{switchView(formView: boolean)}> = props =>{
    const dispatch = useDispatch();
    const [nameInput, setNameInput] = useState<string>('');
    const [descInput, setDescInput] = useState<string>('');

    const nameValueChange = (txt) => {
        setNameInput(txt.nativeEvent.text);
    }
    
    const descriptionValueChange = (txt) => {
        setDescInput(txt.nativeEvent.text);
    }


    let status: boolean = false;

    const showHideText = () =>{
        return status ? false : true;
    }

    const saveData = () => {
        if(nameInput === ""){
            showHideText()
        } else{
        dispatch<setNewElementTodoList>(setNewElementTodoList({
            name: nameInput,
            description: descInput,
            id: new Date().getTime()
        } as ISingleElementList
        ));
        props.switchView(false)
        }
    }

    return (
        <Wrapper>
            <CustomTextInput value={nameInput} onChange={nameValueChange} placeholder="Name"/>
            <CustomTextInput value={descInput} onChange={descriptionValueChange} placeholder="Description"/>
            <Button title="Save" onPress={saveData} /> 
            {status ? <Text style ={{fontSize: 20, color: 'red', textAlign: 'center', marginTop: 20}}>Please fill Name label</Text> : null}
            
        </Wrapper>
    )
};

export default Form;