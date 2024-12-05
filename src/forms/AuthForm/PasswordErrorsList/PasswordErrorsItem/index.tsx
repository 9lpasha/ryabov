interface Props {
  validationField: boolean;
  filled: boolean;
  text: string;
}

export const PasswordErrorsItem = ({
  validationField,
  filled,
  text,
}: Props) => {
  const color = filled ? (validationField ? "#EF4E57" : "#51D85E") : "#A6ABB0";

  return (
    <li
      style={{
        color,
        position: "relative",
        fontSize: 12,
        display: "flex",
        alignItems: "center",
      }}
    >
      <svg
        width={!filled || validationField ? "10" : "11"}
        height={!filled || validationField ? "10" : "8"}
        viewBox={!filled || validationField ? "0 0 10 10" : "0 0 11 8"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginRight: 12 }}
      >
        <path
          d={
            !filled || validationField
              ? "M8.99998 8.99998L5.00001 5.00001M5.00001 5.00001L1 1M5.00001 5.00001L9.00002 1M5.00001 5.00001L1 9.00002"
              : "M1 4.00008L3.82843 6.82851L9.48468 1.17163"
          }
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {text}
    </li>
  );
};
