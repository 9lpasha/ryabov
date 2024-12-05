import { PasswordErrorsItem } from "./PasswordErrorsItem";

interface Props {
  passwordValidation: {
    containsEmail: boolean;
    minLength: boolean;
    containsNumberOrSymbol: boolean;
    containsCapital: boolean;
  };
  filled: boolean;
}

export const PasswordErrorsList = ({ passwordValidation, filled }: Props) => (
  <ul style={{ margin: 0, listStyleType: "none", paddingLeft: 0 }}>
    <PasswordErrorsItem
      filled={filled}
      text="Can't contain e-mail address"
      validationField={!passwordValidation.containsEmail}
    />
    <PasswordErrorsItem
      filled={filled}
      text="At least 8 characters"
      validationField={!passwordValidation.minLength}
    />
    <PasswordErrorsItem
      filled={filled}
      text="Contains a number or symbol"
      validationField={!passwordValidation.containsNumberOrSymbol}
    />
    <PasswordErrorsItem
      filled={filled}
      text="One or more capitalized letters"
      validationField={!passwordValidation.containsCapital}
    />
  </ul>
);
