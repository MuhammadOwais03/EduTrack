import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function EmployeeForm({ formData, setFormData, btnAction, setBtnAction }) {
    const handleChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        console.log('Form Submitted:', formData);
        if (!formData.name || !formData.designation || !formData.salary || !formData.department) {
            console.error("All fields must be filled!");
            return;
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
            />

            <Text style={styles.label}>Designation:</Text>
            <Picker
                selectedValue={formData.designation}
                style={styles.picker}
                onValueChange={(value) => handleChange('designation', value)}
            >
                <Picker.Item label="Select Designation" value="" />
                <Picker.Item label="Junior Developer" value="Junior Developer" />
                <Picker.Item label="Senior Developer" value="Senior Developer" />
                <Picker.Item label="Manager" value="Manager" />
                <Picker.Item label="Team Lead" value="Team Lead" />
            </Picker>

            <Text style={styles.label}>Salary:</Text>
            <TextInput
                style={styles.input}
                value={formData.salary}
                onChangeText={(value) => handleChange('salary', value)}
                placeholder="Enter salary"
                keyboardType="numeric"
            />

            <Text style={styles.label}>Department:</Text>
            <Picker
                selectedValue={formData.department}
                style={styles.picker}
                onValueChange={(value) => handleChange('department', value)}
            >
                <Picker.Item label="Select Department" value="" />
                <Picker.Item label="Engineering" value="Engineering" />
                <Picker.Item label="Marketing" value="Marketing" />
                <Picker.Item label="Sales" value="Sales" />
                <Picker.Item label="HR" value="HR" />
            </Picker>

            <Button title={btnAction ? "Submit" : "Update"} onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 16,
        borderRadius: 5,
    },
    picker: {
        height: 50,
        marginBottom: 16,
    },
});

export default EmployeeForm;
