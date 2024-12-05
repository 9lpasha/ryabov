import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Controller } from "react-hook-form";

import { UseFormReturn } from "react-hook-form";
import { generatePassword } from "utils/generatePassword";
import { similarity } from "utils/similarity";

import { PasswordErrorsList } from "../PasswordErrorsList";
import { AuthFormData } from "../types";

interface Props {
  control: UseFormReturn<AuthFormData>["control"];
  errors: UseFormReturn<AuthFormData>["formState"]["errors"];
  setValue: UseFormReturn<AuthFormData>["setValue"];
  password: string;
  email: string;
}

export const PasswordField = ({ control, errors, password, email, setValue }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleGeneratePassword = () => {
    const pass = generatePassword();
    setValue("password", pass);
  };

  const passwordValidation = {
    containsEmail: password ? similarity(email, password) <= 20 : true,
    minLength: password ? password.length >= 8 : true,
    containsNumberOrSymbol: password ? /\d|[@#$%^&*]/.test(password) : true,
    containsCapital: password ? /[A-Z]/.test(password) : true,
  };

  const noErrors =
    passwordValidation.containsCapital &&
    passwordValidation.containsEmail &&
    passwordValidation.containsNumberOrSymbol &&
    passwordValidation.minLength;

  return (
    <>
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            error={!noErrors}
            helperText={!noErrors && errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {!password ? (
                    <Button
                      variant="outlined"
                      sx={{
                        height: 32,
                        padding: "8px 12px",
                        textTransform: "none",
                        color: "black",
                        borderColor: "#A6ABB0",
                      }}
                      onClick={handleGeneratePassword}
                    >
                      Generate
                    </Button>
                  ) : (
                    <IconButton
                      onClick={handleTogglePasswordVisibility}
                      edge="end"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
        )}
      />

      {errors.password && (
        <>
          <Typography variant="caption" sx={{ color: (theme) => theme.palette.customColors.greyText }}>
            Password strength:{" "}
            <Typography
              variant="caption"
              sx={{
                color: (theme) => theme.palette.customColors[noErrors ? "greenText" : "redText"],
              }}
            >
              {password ? (noErrors ? "Ok" : "Weak password") : ""}
            </Typography>
          </Typography>

          <PasswordErrorsList passwordValidation={passwordValidation} filled={!!password} />
        </>
      )}
    </>
  );
};
