import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View, FlatList, Button} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = (goalTitle) => {
        if (goalTitle.length === 0) {
            return;
        }
        setCourseGoals((currentGoals) => [
            ...currentGoals,
            {id: Math.random().toString(), value: goalTitle}
        ]);
        setIsAddMode(false);
    };

    const cancelGoalAdditionHandler = () => {
        setIsAddMode(false);
    };

    const removeGoalHandler = (goalId) => {
        setCourseGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== goalId));
    };

    return (
        <View style={styles.screen}>
            <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
            <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>

            <FlatList data={courseGoals} renderItem={(itemData) => (
                <GoalItem goal={itemData.item} onDelete={removeGoalHandler}/>
            )}/>

            <StatusBar style="auto"/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
});

export default App;
