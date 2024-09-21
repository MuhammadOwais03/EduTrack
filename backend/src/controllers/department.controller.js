import departmentModel from "../models/department.model.js";


export const getAllDepartment = async (req, res) => {
    try {
        const departments = await departmentModel.find();
        return res.status(201).send(departments)
    } catch (err) {
        console.log("Error while getting the Department")
        res.status(500).send(
            { message: "Error while getting the Department" }
        )
    }
}


export const getDepartment = async (req, res) => {
    const departmentId = req.params.deptId;

    try {
        const dept = await departmentModel.findOne({ _id: departmentId });
        if (!dept) return res.status(201).send({ "message": "Department not found!" })
        return res.status(201).send(dept)
    } catch (err) {
        console.log("Error while getting the department", err)
        res.status(500).send(
            { message: "Error while getting the department" }
        )
    }
}

export const createDepartment = async (req, res) => {
    const department = {
        deptName: req.body.deptName,
        location: req.body.location,
    }

    try {
        const dept = await departmentModel.create(department);
        return res.status(201).send(dept)
    } catch (err) {
        console.log("Error while creating department", err)
        res.status(500).send(
            { message: "Error while creating department" }
        )
    }
}


export const deleteDepartment = async (req, res) => {
    const deleteId = req.params.deptId;

    try {
        const deletedDept = await departmentModel.findByIdAndDelete(deleteId)
        if (!deletedDept) return res.status(201).send({ "message": "Department not found!" })
        return res.status(201).send({ "message": "Successfully deleted the department" })
    } catch (err) {
        console.log("Error while deleting the department")
        res.status(500).send(
            { message: "Error while deleting the department" }
        )
    }
}


export const updatedDepartment = async (req, res) => {
    let data = req.body
    const departmentId = req.params.deptId;

    const updatedDept = {
        deptName: data.deptName,
        location: data.location
    }
    
    try {
        const dept = await departmentModel.findByIdAndUpdate(departmentId, updatedDept, { new: true });
        if (!dept) return res.status(201).send({ "message": "Department not found!" })
        return res.status(201).send({ "message": "Successfully updated the department" })
    } catch (err) {
        console.log("Error while updating the department")
        res.status(500).send(
            { message: "Error while updating the department" }
        )
    }
}
