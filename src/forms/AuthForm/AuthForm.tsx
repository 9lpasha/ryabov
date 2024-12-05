import React from "react";
import { useForm, Controller } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, Box } from "@mui/material";
import { authFormSchema } from "./constants";
import { AuthFormData } from "./types";
import { CheckboxField } from "./CheckboxField";
import { ReferralCode } from "./ReferralCodeField";
import { PasswordField } from "./PasswordField";

export const AuthForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: zodResolver(authFormSchema),
  });

  const password = watch("password");
  const email = watch("email");

  const onSubmit = (data: AuthFormData) => {
    console.log("Form Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box padding={2}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="E-mail"
              fullWidth
              margin="normal"
              variant="outlined"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone number"
              fullWidth
              margin="normal"
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          )}
        />

        <PasswordField
          control={control}
          errors={errors}
          password={password}
          setValue={setValue}
          email={email}
        />

        <ReferralCode control={control} />

        <Controller
          name="acceptTerms"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <CheckboxField field={field} errors={errors} />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "1rem", textTransform: "none", height: 48 }}
        >
          Sign up
        </Button>
      </Box>
    </form>
  );
};
