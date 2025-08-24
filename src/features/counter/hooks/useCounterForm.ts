
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { CountFormInput, countFormSchema } from "../types/CounterFormInput";

export default function useCounterForm() {
  const {
    control,
    formState: { isSubmitting, isValid },
    handleSubmit,
    trigger,
    reset,
    getValues,
  } = useForm<CountFormInput>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: zodResolver(countFormSchema),
  });



  const _onSubmit: SubmitHandler<CountFormInput> = (input) => {
    reset(input);

  };

  return {
    control,
    isSubmitting,
    isValid,
    onSubmit: handleSubmit(_onSubmit),
    trigger,
    getValues,
  };
}
