import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmployeeForm from './app/(employee)/employeeForm'; // Ensure this component is defined correctly
import { Base } from './app/Base';
import NotFoundScreen from './app/+not-found';
import EmployeeTable from './app/(employee)/employeeTable';

// Define the stack navigator
const Stack = createStackNavigator();

// Configure deep linking
const linking = {
    prefixes: ['http://localhost:8081', 'myapp://'],
    config: {
        screens: {
            Base: 'base',
            Form: 'form',
            NotFound: '*',
        },
    },
};

export default function App() {

    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        salary: '',
        department: '',
    });


    useEffect(()=>{
        console.log(formData.salary)
    }, [formData])

    const [btnAction, setBtnAction] = useState(true)

    return (
        <NavigationContainer linking={linking}>
            <Stack.Navigator initialRouteName="Form">
                {/* <Stack.Screen name="Base" component={Base} /> */}
                <Stack.Screen name="Form" options={{ headerShown: false }}>
                    {({ navigation }) => (
                        <Base navigation={navigation}>
                            <EmployeeForm
                                formData={formData}
                                setFormData={setFormData}
                                btnAction={btnAction}
                                setBtnAction={setBtnAction}
                            />
                            <EmployeeTable
                                setFormData={setFormData}
                                setBtnAction={setBtnAction}
                            />
                        </Base>
                    )}
                </Stack.Screen>

                <Stack.Screen name="NotFound" component={NotFoundScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
