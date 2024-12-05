import { FormControlLabel, Checkbox, FormHelperText } from "@mui/material";
import { ControllerRenderProps, FieldErrors } from "react-hook-form";
import { AuthFormData } from "../types";

type FieldType = ControllerRenderProps<AuthFormData, "acceptTerms">;

interface Props {
  field: FieldType;
  errors: FieldErrors<AuthFormData>;
}

export const CheckboxField = ({ field, errors }: Props) => (
  <>
    <FormControlLabel
      style={{ padding: "8px 0 0", marginLeft: 0 }}
      name="acceptTerms"
      control={
        <Checkbox
          {...field}
          checked={field.value}
          color="primary"
          style={{ marginRight: 8 }}
        />
      }
      label={
        <>
          I accept the{" "}
          <a
            style={{ color: "#526ED3", textUnderlineOffset: 3 }}
            href="/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>{" "}
          and have read{" "}
          <a
            style={{ color: "#526ED3", textUnderlineOffset: 3 }}
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </>
      }
    />
    {errors.acceptTerms && (
      <FormHelperText error>{errors.acceptTerms.message}</FormHelperText>
    )}
  </>
);
