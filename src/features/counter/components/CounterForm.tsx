import McTextInput from "@/features/shared/components/input/McTextInput";
import { selectCount } from "@/features/counter/slice/counterSlice";
import { CountFormInput } from "@/features/counter/types/CounterFormInput";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useSelector } from "react-redux";
import useCounterForm from "../hooks/useCounterForm";
/**
 * カウンターページコンポーネントのprops
 */
interface CounterFormProps {
  handleIncrementClick: () => void;
  handleDecrementClick: () => void;
  handleSubmmit: (input: CountFormInput) => void;
}

/**
 * カウンターページの入力フォーム
 */
export default function CounterForm({
  handleIncrementClick,
  handleDecrementClick,
}: CounterFormProps) {
  /**
   * react hook formの設定
   */
  const { control, onSubmit } = useCounterForm();
  // selectoreでカウントを取得
  const count = useSelector(selectCount);

  return (
    <Stack component="form" onSubmit={onSubmit}>
      <Grid sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Paper variant="outlined" square={false} elevation={5}>
          <Box>
            <Box
              sx={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Button
                  size="small"
                  aria-label="Increment value"
                  variant="outlined"
                  onClick={handleIncrementClick}
                >
                  たす
                </Button>
              </Box>
              <Box>
                <Button
                  size="small"
                  aria-label="Decrement value"
                  variant="outlined"
                  onClick={handleDecrementClick}
                >
                  ひく
                </Button>
              </Box>
              <Box sx={{ padding: 5 }}>
                <Typography>{count}</Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <McTextInput
              label="カウント"
              name="count" // Formのproperty名を指定する
              control={control}
              type="number"
              placeholder="数値を入力してください"
              variant="standard"
            />
            <Button type="submit" variant="outlined">
              入力をたす
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Stack>
  );
}
