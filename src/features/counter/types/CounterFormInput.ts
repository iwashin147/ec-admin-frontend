import { z } from "zod";

/**
 * CounterFormの入力値スキーマ
 */
export const countFormSchema = z.object({
  // MUIのTextFieldは文字列として値を保持するので
  // 入力された値をにcoerceでnumberに変換してからチェックする
  count: z.coerce
    .number({ message: "数値で入力してください" })
    .int({ message: "整数で入力してください" })
    .min(1, { message: "1以上で入力してください" })
    .max(100, { message: "最大100まで入力してください" }),
});

/**
 * CounterFormの入力値型
 */
export type CountFormInput = z.infer<typeof countFormSchema>;
