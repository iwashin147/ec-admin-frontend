import { McTextInputProps } from "@/types/McTextInputProps";
import { TextField } from "@mui/material";
import { FieldValues, useController } from "react-hook-form";
import McFormItem from "../display/McFormItem";

/**
 * react-hook-formと統合したtext input コンポーネント
 * 使用する場合はnameプロパティの指定は必須
 * @param props - McTextInputProps<T>
 */
export default function McTextInput<T extends FieldValues>(
  props: McTextInputProps<T>
) {
  const { name, control, label, disabled } = props;

  /**
   * useControllerでnameとcontrolからrhfで必要な値を取得できる
   */
  const {
    field: { ref, ...rest },
    fieldState: { error },
    formState: { isSubmitting },
  } = useController({ name, control });

  return (
    <McFormItem label={!!label ? label?.toString() : ""} error={error}>
      <TextField
        {...props}
        inputRef={ref}
        error={!!error}
        disabled={isSubmitting || disabled}
        fullWidth
        label={null}
        {...rest}
      />
    </McFormItem>
  );
}
