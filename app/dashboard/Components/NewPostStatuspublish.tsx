import { Box } from "@mui/material";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
function NewPostStatuspublish() {
  return (
    <div className="bg-gray-100 rounded-xl p-2">
      <span className="text-xl "> وضعیت انتشار</span>
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
            />
            <FormControlLabel
              value="draft"
              control={<Radio />}
              label="پیش نویس"
            />
          </RadioGroup>
        </FormControl>
      </Box>
    </div>
  );
}

export default NewPostStatuspublish;
