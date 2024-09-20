
import employeeModel from "../models/employee.model.js";

export default async function  nullReferenceDepartmentAttribute (req, res, next) {
    try {
        const departmentId = req.params.deptId;


        const employeeData = await employeeModel.find({ department: departmentId });

        if (employeeData && employeeData.length > 0) {

            await Promise.all(
                employeeData.map(async (emp) => {
                    emp.department = null;
                    await emp.save();
                })
            );
        }

        next();
    } catch (err) {
        console.log("Error while nullifying department reference:", err);
        res.status(500).send({
            message: "Error while nullifying department reference",
        });
    }
};
