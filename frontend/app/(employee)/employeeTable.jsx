import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const DATA = [
    { id: '1', name: 'John Doe', designation: 'Junior Developer', department: 'Engineering', salary: "12000" },
    { id: '2', name: 'Jane Smith', designation: 'Senior Developer', department: 'Engineering', salary: "12000" },
    { id: '3', name: 'Emily Johnson', designation: 'Manager', department: 'Marketing', salary: "12000" },
    // Add more entries as needed
];

const EmployeeTable = ({ setFormData, setBtnAction }) => {
    const handleEmployeePress = (item) => {
        console.log(item)
        setFormData({
            name: item.name,
            designation: item.designation,
            salary: item.salary,
            department: item.department,
        });
        setBtnAction(false);
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.row} onPress={() => handleEmployeePress(item)}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.designation}</Text>
            <Text style={styles.cell}>{item.department}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Name</Text>
                <Text style={styles.headerText}>Designation</Text>
                <Text style={styles.headerText}>Department</Text>
            </View>
            {DATA.length === 0 ? (
                <Text style={styles.emptyMessage}>No employees found.</Text>
            ) : (
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            )}
        </View>
    );
};

// Define the styles using StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    headerText: {
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    cell: {
        flex: 1,
        textAlign: 'center',
    },
});

export default EmployeeTable;
