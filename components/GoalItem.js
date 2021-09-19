import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const GoalItem = ({goal, onDelete}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => onDelete(goal.id)}>
            <View style={styles.listItem}>
                <Text>{goal.value}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#ccc',
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default GoalItem;
