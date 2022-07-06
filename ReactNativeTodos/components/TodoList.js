/* 추가된 아이템을 스크롤 뷰를 통해 나타냄 */

import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import TodoListItem from "./TodoListItem";

const TodoList = ({todos, onRemove, onToggle}) => {
    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            {todos.map(todo => (
                <TodoListItem
                key={todo.id}
                {...todo}
                onRemove={onRemove}
                onToggle={onToggle}
                />
            ))}
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
    },
});

export default TodoList;