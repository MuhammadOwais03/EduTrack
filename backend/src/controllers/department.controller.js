import departmentModel from "../models/department.model.js";


export const getAllDepartment = async (req, res) => {
    try {
        const dept = await departmentModel.find();
        return res.status(201).send(dept)
    } catch(err) {
        console.log("Error while getting the Department")
        res.status(500).send(
            {message: "Error while getting the Department"}
        )
    }
}


export const getDepartment = async (req, res) => {

    const departmentId = req.params.deptId;
    console.log(departmentId)

    try {
        const dept = await departmentModel.findOne({_id: departmentId});
        if (!dept) return res.status(201).send({"message":"Department not found!"})
        return res.status(201).send(dept)
    } catch(err) {
        console.log("Error while getting the Department", err)
        res.status(500).send(
            {message: "Error while getting the Department"}
        )
    }
}



export const createDepartment = async (req, res) => {
    const department = {
        deptName: req.body.deptName,
        location: req.body.location,
    }

    console.log(department)

    try {
        const dept = await departmentModel.create(department);
        return res.status(201).send(dept)
    } catch(err) {
        console.log("Error while creating Department", err)
        res.status(500).send(
            {message: "Error while creating Department"}
        )
    }
}

export const deleteDepartment =  async (req, res) => {
    const deleteId = req.params.deptId;
    
    try {
        const deletedDept =  await departmentModel.findByIdAndDelete(deleteId)
        if (!deletedDept) return res.status(201).send({"message":"Department not found!"})
        return res.status(201).send({"message":"successfully deleted the Department"})
    } catch(err) {
        console.log("Error while deleting the Department")
        res.status(500).send(
            {message: "Error while deleting the Department"}
        )
    }
}

//http:localhost/api/user/1

export const updatedDepartment =  async (req, res) => {
    let data = req.body
    const departmentId = req.params.deptId;
    
    const updatedDept_ = {
        deptName: data.deptName,
        location: data.location
    }

    try {
        const updatedDept = await departmentModel.findByIdAndUpdate(departmentId,updatedDept_ , { new: true });
        if (!updatedDept) return res.status(201).send({"message":"Department not found!"})
        return res.status(201).send({"message":"successfully updated the Department"})
    } catch(err) {
        console.log("Error while updating the Department")
        res.status(500).send(
            {message: "Error while updating the Department"}
        )
    }
}
