import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/UseAuth';

const DoctorsReview = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const {user} = useAuth()
      const onSubmit = (data) => {
        fetch("https://secure-temple-05589.herokuapp.com/addReview", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        },[])
          .then((res) => res.json())
          .then((result) => console.log(result));
       
        console.log(data)
      };
    return (
        <div>
         <div className="review-container"> 
    <h1 className='text-success my-4'>Please Give Your Doctors-Review !</h1>
  <form onSubmit={handleSubmit(onSubmit)} className='shadow p-4'>
  <input
    className="input-apply my-0"
    name="name"
    defaultValue="Name"
    {...register("name")}
  />
  <br />
  <input
    className="input-apply"
    type="email"
    name="email"
    defaultValue="email"
    {...register("email")}
  />
  <br />
  <input
    className="input-apply"
    id="text-box"
    {...register("comments")}
    placeholder="Write your comments here"
  />
  <br />
  <input
    className="input-apply"
    name="rating"
    placeholder="give us Rating out of 10"
    {...register("rating", { required: true })}
  />
  
  <br />

  <input style={{backgroundColor:'gold', color:'blue', borderRadius:'20px', marginTop:'20px', padding:'10px' }} type="submit" value="Submite" />
</form></div>;
        </div>
    );
};

export default DoctorsReview;