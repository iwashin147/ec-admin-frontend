import { ReactNode } from "react";
import { FieldError } from "react-hook-form";
import { McBaseFormProps } from "./McBaseFormProps";

/**
 * フォーム項目のprops
 */
export type McFormItemProps = McBaseFormProps & {
  children: ReactNode;
  error: FieldError | undefined;
};
