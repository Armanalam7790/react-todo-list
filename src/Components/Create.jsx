import { nanoid } from "nanoid/non-secure";

import "./Read.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Create = ({ todos, settodos }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
  
   data.isCompleted =false;
   data.id = nanoid();
 console.log(data);

const  copytodos = [...todos]
copytodos.push(data)
settodos(copytodos)
toast.success(" todo is create")
 reset()
 
   
  };

  // console.log(errors.title.message);
  

  return (
    <div className=" w-[60%] p-10 ">
      <h1 className="text-5xl font-thin mb-10">
        Set <span className="text-red-400">Reminders</span> for <br /> tasks
      </h1>


      <form onSubmit={handleSubmit(submitHandler)}>


        <input
          {...register("title", {required:"title can not empty"})}
          className="border-b w-full text-2xl font-thin p-2 outline-0"
          type="text"
          placeholder="Title"
        />
        {/* {errors && errors.title && errors.title.message && <small> {errors.title.message}</small>} */}
       <small className="font-thin text-red-300">{errors?.title?.message}</small>   
        <br /> 
        <br />

        <button className="text-xl px-10 py-2 border rounded mt-5">
          Create Todo
        </button>

      </form>


    </div>
  );
};

export default Create;
