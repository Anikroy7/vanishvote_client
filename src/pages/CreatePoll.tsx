import { useState, useEffect } from "react";
import MainLayout from "../components/Layout/MainLayout";
import { useForm, useFieldArray, FieldValues } from "react-hook-form";
import { Inputs } from "../types";
import { FaTimes } from "react-icons/fa";
import { addHours } from "date-fns";
import { useCreatePollMutation } from "../redux/api/pollApi";
import { useNavigate } from "react-router-dom";

const CreatePoll = () => {
    const { register, handleSubmit, watch, formState: { errors }, control } = useForm<Inputs>();
    const [createPoll, { isLoading, data }] = useCreatePollMutation()
    const navigate = useNavigate();
    const vanishvote_user_id = localStorage.getItem('vanishvote_user_id')
    const pollTypeField = watch("pollType")
    const { fields, append, remove } = useFieldArray({
        control,
        name: "options",
        rules: { required: pollTypeField === 'multiple_choice' ? "At least two options are required" : false }
    });

    const [pollType, setPollType] = useState("yes_no");

    useEffect(() => {
        if (pollType === "multiple_choice" && fields.length === 0) {
            append({ option: "" });
            append({ option: "" });
        }
    }, [pollType, fields.length, append]);

    useEffect(() => {
        if (data && !isLoading) {
            console.log('come dda', data, isLoading)
            navigate('/')
        }
    }, [data, isLoading])

    const addOption = () => {
        append({ option: "" });
    };

    const removeOption = (index: number) => {
        if (fields.length > 2) {
            remove(index);
        }
    };

    const onSubmit = (data: FieldValues) => {
        if (data.pollType === "yes_no") {
            data.options.push({
                "text": "Yes",
                "vote": []
            })
            data.options.push({
                "text": "No",
                "vote": []
            })
        } else {
            const finalOptions = data.options.map((option: { option: string }) => ({
                text: option.option,
                vote: []
            }))
            data.options.length = 0
            data.options = [...finalOptions];
        }
        const pollData = {
            ...data,
            createdBy: vanishvote_user_id,
            expiresAt: addHours(new Date(Date.now()), data.expiredAt),

        }
        createPoll(pollData)
    };
    return (
        <MainLayout>
            <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Create a New Poll</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium">Poll Type</label>
                        <select
                            {...register("pollType", { required: true })}
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                            onChange={(e) => setPollType(e.target.value)}
                        >
                            <option value="yes_no">Yes/No</option>
                            <option value="multiple_choice">Multiple Choice</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium">Question</label>
                        <input
                            {...register("question", { required: true })}
                            type="text"
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                            placeholder="Enter your poll question"
                        />
                        {errors.question?.type === "required" && <p className="text-red-400">Question is required</p>}
                    </div>

                    {pollType === "multiple_choice" && (
                        <div>
                            <label className="block text-gray-700 font-medium">Options</label>
                            {fields.map((field, index) => (
                                <div key={field.id} className="flex items-center gap-2 mt-2">
                                    <input
                                        {...register(`options.${index}.option`, { required: "Option is required" })}
                                        type="text"
                                        defaultValue={field.option}
                                        className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-200"
                                    />
                                    {fields.length > 2 && (
                                        <button
                                            type="button"
                                            onClick={() => removeOption(index)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <FaTimes />
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addOption}
                                className="mt-2 text-blue-500 hover:underline"
                            >
                                + Add Option
                            </button>
                            {errors.options && <p className="text-red-400">At least two options are required</p>}
                        </div>
                    )}

                    <div>
                        <label className="block text-gray-700 font-medium">Expired After</label>
                        <select
                            {...register("expiredAt", { required: true })}
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                        >
                            <option value="1">1 hour</option>
                            <option value="12">12 hours</option>
                            <option value="24">24 hours</option>
                        </select>
                    </div>

                    <div className="flex items-center">
                        <input
                            {...register("private")}
                            type="checkbox"
                            defaultChecked={false}
                            className="mr-2"
                        />
                        <label className="text-gray-700 font-medium">Is it Private?</label>
                    </div>

                    <div className="flex items-center">
                        <input
                            {...register("resultsHidden")}
                            type="checkbox"
                            defaultChecked={true}
                            className="mr-2"
                        />
                        <label className="text-gray-700 font-medium">Display Poll Results?</label>
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-cyan-600 text-white p-3 rounded-lg hover:bg-cyan-700"
                    >

                        {isLoading ? "Loading..." : "Create Poll"}
                    </button>
                </form>
            </div>
        </MainLayout>
    );
};

export default CreatePoll;
