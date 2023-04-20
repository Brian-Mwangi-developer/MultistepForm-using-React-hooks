//manage forms,handle submission,validation and eror messages
import {useForm} from "react-hook-form";
// It provides a way to navigate to different 
//routes in the application without needing to reload the page
import {useNavigate} from "react-router-dom";
import { useAppState } from "../state";
import { Button, Field, Form, Input } from "../Forms";
export const Contact = () =>{
    const [state, setState] =useAppState();
    const {
        handleSubmit,
        register,
        watch,
        formState: {errors },
    } =useForm({defaultValues:state, mode: "onSubmit" });
    const watchPassword = watch("password");
    const navigate = useNavigate();

    const saveData = (data)=> {
//This creates a new object that merges the properties of both state and data.
        setState({...state, ...data});
        navigate("/education");
    };
    return(
        <Form onSubmit = {handleSubmit(saveData)}>
            <fieldset>
            <Field label="First name" error={errors?.firstName}>
                <Input
                    {...register("firstName", { required: "First name is required" })}
                    id="first-name"
                />
        </Field>
                <Field label="last name" error={errors?.lastName}>
                    <Input
                    {...register("lastName",{ required:"Last name is required"})}
                    id="last-name"
                    />
                </Field>
                <Field label="Email" error={errors?.email}>
                    <Input type="email"
                    {...register("email",{required:"Email is required" })}
                    id="email"
                    />
                </Field>
                <Field label="password" error={errors?.password}>
                    <Input type="password"
                    {...register("password", {required:"Password is required"})}
                    id="password"
                    />
                </Field>
                <Field label="confirmpassword" error={errors?.confirmpassword}>
                    <Input type="password"
                    {...register("confirmpassword",{
                        required: "confirm the password",
                        validate:(value) =>
                        value === watchPassword ||"The password do not match",
                    })}
                    id="password-confirm"
                    />
                </Field>
                <Button>Next {">"}</Button>
            </fieldset>
        </Form>
    );   
};