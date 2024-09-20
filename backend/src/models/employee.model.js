import mongoose from 'mongoose'


const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Designation',
    },
    salary: {
        type: Number,
        default: 0
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
    },
});

export default mongoose.model('Employee', employeeSchema);