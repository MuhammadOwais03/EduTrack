import mongoose from 'mongoose'

const departmentSchema = new mongoose.Schema({
    deptName: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
});

export default mongoose.model('Department', departmentSchema);