import { TextFieldProps } from "@mui/material";
import { FieldValues, UseControllerProps } from "react-hook-form";

/**
 * text input props
 */
export type McTextInputProps<T extends FieldValues> = UseControllerProps<T> & TextFieldProps;
