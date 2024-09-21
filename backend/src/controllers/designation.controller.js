import designationModel from "../models/designation.model.js";

export const getAllDesignation = async (req, res) => {
    try {
        const designations = await designationModel.find();
        return res.status(201).send(designations)
    } catch (err) {
        console.log("Error while getting the Designation")
        res.status(500).send(
            { message: "Error while getting the Designation" }
        )
    }
}