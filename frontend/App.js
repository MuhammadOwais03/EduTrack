import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmployeeForm from './app/(employee)/employeeForm'; // Ensure this component is defined correctly
import { Base } from './app/Base';
import NotFoundScreen from './app/+not-found';
import EmployeeTable from './app/(employee)/employeeTable';
import { getEmployees, getDepartments, getDesignations } from './apis/utils.js';

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

    const [employees, setEmployees] = useState([])
    const [departments, setDepartments] = useState([])
    const [designations, setDesignations] = useState([])
    const [selectedEmpId, setSelectedEmpId] = useState(null)

    useEffect(()=>{
        console.log(formData.salary)
    }, [formData])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const [employees, departments, designations] = await Promise.all([
              getEmployees(),
              getDepartments(),
              getDesignations()
            ]);
            setEmployees(employees);
            setDepartments(departments);
            setDesignations(designations);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);
      

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
                                departments={departments}
                                designations={designations}
                                selectedEmpId={selectedEmpId}
                                setSelectedEmpId={setSelectedEmpId}
                                setEmployees={setEmployees}
                                employees={employees}

                            />
                            <EmployeeTable
                                setFormData={setFormData}
                                setBtnAction={setBtnAction}
                                employees={employees}
                                setEmployees={setEmployees}
                                setSelectedEmpId={setSelectedEmpId}
                            />
                        </Base>
                    )}
                </Stack.Screen>

                <Stack.Screen name="NotFound" component={NotFoundScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
