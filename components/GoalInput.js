import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Modal} from 'react-native';

const GoalInput = ({visible, onAddGoal, onCancel}) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    const cancelHandler = () => {
        onCancel();
        setEnteredGoal('');
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputHandler}/>
                <View style={styles.actions}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={cancelHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderBottomColor: 'black',
        borderWidth: 1
    },
    actions: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;
