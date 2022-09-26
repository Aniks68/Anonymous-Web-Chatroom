import TextField from "@material-ui/core/TextField";
import React from "react";
import { Button } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import styles from "./SignIn.module.css";

const SignIn = () => {
    const defaultValues = { username: ""};
    const { handleSubmit, reset, control, formState: { errors } } = useForm({ defaultValues: defaultValues });
  const onSubmit = (data) => {
    if (data.username.length < 3) {
        // reset(defaultValues);
        return;
    }
    console.log(data);
    localStorage.setItem("user", data.username);
    reset(defaultValues);
    };

  return (
    <form className={styles.form}>
      <Controller
        name={"username"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextField className={styles.input} onChange={onChange} value={value} label={"Username"} required={true}/>
        )}
      />
      {errors.username && <p className={styles.error}>This field is required</p>}

        <Button variant={"contained"} color={"primary"} style={{marginRight: '5px',}} onClick={handleSubmit(onSubmit)}>
            Sign In
        </Button>
        <Button variant={"contained"} style={{color: 'grey'}} onClick={() => reset()}>Reset</Button>
        
    </form>
  );
}

export default SignIn;