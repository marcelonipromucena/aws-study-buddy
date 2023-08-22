import {
  InputWrapper,
  InputLabel,
  InputField,
} from "./styles";

function CustomInput({type,label, placeholder}) {
  return (
    <>
      <InputWrapper>
        <InputLabel>{label}</InputLabel><br/>
        <InputField
            type={type}
            placeholder={placeholder}
        />
      </InputWrapper>
    </>
  );
}

export default CustomInput;
