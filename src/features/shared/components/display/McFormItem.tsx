import { McFormItemProps } from "@/types";
import {
  Box,
  FormHelperText,
  FormLabel,
  Typography,
  useTheme,
} from "@mui/material";

export default function McFormItem({
  children,
  error,
  label,
}: McFormItemProps) {
  const theme = useTheme();

  const errorStyle = { color: error ? theme.palette.error.main : undefined };

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "row", width: "fit-content" }}>
        <FormLabel sx={errorStyle} component="legend">
          <Typography variant="caption">{label}：</Typography>
        </FormLabel>
        {children}
      </Box>
      {error && (
        <FormHelperText style={errorStyle}>{error.message}</FormHelperText>
      )}
    </Box>
  );
}
