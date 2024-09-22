import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function EmployeeForm({ formData, setFormData, btnAction, setBtnAction, departments, designations, selectedEmpId, setSelectedEmpId, setEmployees, employees }) {
    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.designation || !formData.salary || !formData.department) {
            Alert.alert('Error', 'All fields must be filled!');
            return;
        }

        if (btnAction) {
            let result = await createEmployee(formData);
            if (result.error) {
                Alert.alert('Error', result.error);
                return;
            }

            Alert.alert('Success', 'Employee created successfully');
            setEmployees([...employees, result]);
        } else {
            let result = await updateEmployee(selectedEmpId, formData);
            if (result.error) {
                Alert.alert('Error', result.error);
                return;
            }
            Alert.alert('Success', 'Employee updated successfully');
            setEmployees(employees.map((emp) => (emp._id === selectedEmpId ? result : emp)));
            setSelectedEmpId(null);
        }

        setFormData({
            name: '',
            designation: '',
            salary: '',
            department: '',
        });
        setBtnAction(true);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
                style={styles.input}
                value={formData.name}
                onChangeText={(value) => handleChange('name', value)}
                placeholder="Enter name"
                placeholderTextColor="#888"
            />

            <Text style={styles.label}>Designation:</Text>
            <Picker
                selectedValue={formData.designation}
                style={styles.picker}
                onValueChange={(value) => handleChange('designation', value)}
            >
                <Picker.Item label="Select Designation" value="" />
                {designations.map((designation) => (
                    <Picker.Item key={designation._id} label={designation.designationName} value={designation._id} />
                ))}
            </Picker>

            <Text style={styles.label}>Salary:</Text>
            <TextInput
                style={styles.input}
                value={String(formData.salary)}
                onChangeText={(value) => handleChange('salary', value)}
                placeholder="Enter salary"
                keyboardType="numeric"
                placeholderTextColor="#888"
            />

            <Text style={styles.label}>Department:</Text>
            <Picker
                selectedValue={formData.department}
                style={styles.picker}
                onValueChange={(value) => handleChange('department', value)}
            >
                <Picker.Item label="Select Department" value="" />
                {departments.map((department) => (
                    <Picker.Item key={department._id} label={department.deptName} value={department._id} />
                ))}
            </Picker>

            <Button title={btnAction ? "Submit" : "Update"} onPress={handleSubmit} color="#007bff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    picker: {
        height: 50,
        marginBottom: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
});

export default EmployeeForm;
