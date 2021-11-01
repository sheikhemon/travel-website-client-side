import React from "react";
import { useForm } from "react-hook-form";
import "./AddNewBooking.css";

const AddNewBooking = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const uri = `https://quiet-everglades-89717.herokuapp.com/allbooking`;
        fetch(uri, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("added successfullay");
                    reset();
                }
            });
    };
    return (
        <div className="add-services">
            <h2 className="text-center">
                ADD NEW BOOKING
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", {
                        required: true,
                        maxLength: 20,
                    })}
                    placeholder="Place Name"
                    required
                />
                <textarea
                    {...register("description")}
                    placeholder="Place description"
                    required
                />
                <input
                    type="number"
                    {...register("price")}
                    placeholder="Price"
                    required
                />
                <input {...register("img")} placeholder="Image Url" required />

                <input type="submit" value="submit" className="submit-form" />
            </form>
        </div>
    );
};

export default AddNewBooking;
