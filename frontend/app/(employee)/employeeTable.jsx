import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Alert } from 'react-native';
import { deleteEmployee } from '../../apis/utils.js';


const EmployeeCard = ({ setFormData, setBtnAction, employees, setEmployees, setSelectedEmpId }) => {
    const handleEmployeePress = (item) => {
        console.log('Employee Pressed:', item);
        setFormData({
            name: item.name,
            designation: item.designation ? item.designation._id : null,
            salary: item.salary,
            department: item.department ? item.department._id : null,
        });

        setSelectedEmpId(item._id);
        setBtnAction(false);
    };

    const handleDelete = async (emp) => {
        let result = await deleteEmployee(emp._id);
        if (result.error) {
            Alert.alert('Error', result.error);
            return;
        }
        Alert.alert('Success', 'Employee deleted successfully');
        setEmployees(employees.filter((employee) => employee._id !== emp._id));
    };

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <TouchableOpacity onPress={() => handleEmployeePress(item)}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardText}>Designation: {item.designation ? item.designation.designationName : 'N/A'}</Text>
                <Text style={styles.cardText}>Department: {item.department ? item.department.deptName : 'N/A'}</Text>
                <Text style={styles.cardText}>Salary: {item.salary} Rs</Text>
            </TouchableOpacity>
            <Button title="Delete" onPress={() => handleDelete(item)} color="#ff6347" />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={employees}
                renderItem={renderItem}
                keyExtractor={item => item._id} // Use _id instead of id
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginTop: 10,
        backgroundColor: '#f8f9fa',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.5,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardText: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default EmployeeCard;
