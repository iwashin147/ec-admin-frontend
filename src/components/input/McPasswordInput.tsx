import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useState } from "react";
/**
 * パスワード用 text input コンポーネント
 * @returns
 */
export default function McPasswordInput(props: TextFieldProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  /**
   * パスワード表示・非表示アイコンクリックイベントハンドラ
   */
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  /**
   * マウスボタン押下時のイベントハンドラ
   * @param event - マウスイベント
   */
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  /**
   * マウスボタンアップ時のイベントハンドラ
   * @param event - マウスイベント
   */
  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <TextField
      {...props}
      type={showPassword ? "text" : "password"}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                size="small"
                disableRipple
                aria-label={
                  showPassword ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
    ></TextField>
  );
}
