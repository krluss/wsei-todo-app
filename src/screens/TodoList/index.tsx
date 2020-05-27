import React, { FC, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Form from '../../components/Form';
import TodoList from '../../components/TodoList';

const TodoScreen: FC = () => {
    const [formView, setFormView] = useState<boolean>(false);
    return (
        <ScrollView>
            {formView ? (
                <Form switchView={setFormView}/>
            ) : (
                <TodoList switchView={setFormView}/>    
            )}
        </ScrollView>
    );
};

export default TodoScreen;