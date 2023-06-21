type TextFieldProps = {
  placeholder: string;
  value: string;
};

export function TextField({ placeholder, value }: TextFieldProps) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      type="text"
      className="border rounded-md outline-none focus:border-purple-400 p-2"
    />
  );
}
