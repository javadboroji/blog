import { Box } from "@mui/material";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { newPostStateProps } from "@/app/Types";
const NewPostStatuspublish: React.FC<newPostStateProps> = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-2">
      <span className="text-base "> وضعیت انتشار</span>
      <Box sx={{ display: "flex" }}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="publish"
              control={<Radio />}
              label="انتشار"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: "13px",
                },
              }}
            />
            <FormControlLabel
              value="draft"
              control={<Radio />}
              label="پیش نویس"
              sx={{
                "& .MuiFormControlLabel-label": {
                  fontSize: "13px",
                },
              }}
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
};

export default NewPostStatuspublish;
