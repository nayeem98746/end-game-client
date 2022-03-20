import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddDoctors.css'

const AddDoctors = () => {
    const {register, handleSubmit, reset} = useForm()

    const onSubmit = data => {
        axios.post('http://localhost:5000/doctors' , data)
        .then(res => {
            console.log(res)
            if(res.data.insertedId){
                alert('added service successfuly')
                reset()
            }
        })
    }
    return (
        <div className='addProduct-container'>
        <h1 className='text-info my-4'>Add A Doctors !</h1>
       <form onSubmit={handleSubmit(onSubmit)} className='shadow p-4'>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" className='input-apply' /> 
            <br/><br/>
            <input {...register("text", { required: true, maxLength: 20 })} placeholder="Degree" className='input-apply' /> 
            <br/><br/>
            <input {...register("department", { required: true, maxLength: 20 })} placeholder="Department" className='input-apply' /> 

            {/* <input {...register("catagory", { required: true, maxLength: 20 })} placeholder="catagory" className='input-apply' />  */}
            {/* <br/><br/> */}
            
            {/* <textarea {...register("description" )} 
            className='input-apply'
            placeholder="Description"  /><br/><br/> */}
            <br/><br/> 
            <input type="number" {...register("price")} placeholder="price" className='input-apply' /><br/><br/>
            <input {...register("img" )} placeholder="img url" className='input-apply' /><br/><br/>
            <input style={{backgroundColor:'gold', color:'blue', borderRadius:'20px', marginTop:'20px', padding:'10px' }}  type="submit" />
        </form>
    </div>
    );
};

export default AddDoctors;