import { Controller, UseFormReturn } from "react-hook-form";
import { TextField, InputAdornment } from "@mui/material";
import { AuthFormData } from "../types";

import { useState, useEffect } from "react";

let timeout: number | undefined = undefined;

export const ReferralCode = ({
  control,
}: {
  control: UseFormReturn<AuthFormData>["control"];
}) => {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(false);

    if (!value) return;

    timeout = window.setTimeout(async () => {
      console.log("Запрос"); // await

      setChecked(true); // если положительный результат запроса
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  const onChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setValue(e.target.value);
  };

  return (
    <Controller
      name="referralCode"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Referral code"
          fullWidth
          margin="normal"
          onChange={(e) => {
            onChange(e);
            field.onChange(e);
          }}
          InputProps={{
            endAdornment: checked && value && (
              <InputAdornment position="end">
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginRight: 12 }}
                >
                  <path
                    d={"M1 4.00008L3.82843 6.82851L9.48468 1.17163"}
                    stroke="#51D85E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};
