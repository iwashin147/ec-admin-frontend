import { incrementByAmount } from "@/features/counter/slice/counterSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
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

  const dispatch = useDispatch();

  const _onSubmit: SubmitHandler<CountFormInput> = (input) => {
    reset(input);
    //
    dispatch(incrementByAmount(input.count));
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
