// get all the employees from the backend

const API_URL = 'http://192.168.1.9:5000/api';

export const getEmployees = async () => {
    try {
        const response = await fetch(`${API_URL}/employees`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching employees:', error);
        return []; // Return empty array in case of error
    }
};

export const getDepartments = async () => {
    try {
        const response = await fetch(`${API_URL}/departments`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching departments:', error);
        return []; // Return empty array in case of error
    }
};

export const getDesignations = async () => {
    try {
        const response = await fetch(`${API_URL}/designations`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching designations:', error);
        return []; // Return empty array in case of error
    }
};


export const createEmployee = async (employee) => {
    try {
        const response = await fetch(`${API_URL}/employee`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee),
        });
        console.log(response);
        return await response.json();
    } catch (error) {
        console.error(error);
        return { error: 'Error while creating employee' };
    }
}

export const deleteEmployee = async (id) => {
    try {
        const response = await fetch(`${API_URL}/employee/${id}`, {
            method: 'DELETE',
        });
        return await response.json();
    } catch (error) {
        console.error(error);
        return { error: 'Error while deleting employee' };
    }
}

export const updateEmployee = async (id, employee) => {
    try {
        const response = await fetch(`${API_URL}/employee/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employee),
        });
        return await response.json();
    } catch (error) {
        console.error(error);
        return { error: 'Error while updating employee' };
    }
}