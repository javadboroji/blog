"use client";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, TextField } from "@mui/material";

function TinyEditor() {
  const editorRef = useRef(null);
  useEffect(() => {
    const content = editorRef.current;
    console.log(content);
  }, [editorRef]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  if (loading) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", minHeight: "20rem" }}
      >
        <CircularProgress />
      </Box>
    );
  } else {
    return (
      <div>
        <Box sx={{ display: "flex", width: "100%", marginBottom:"1rem"}}>
          <TextField id="title" label="عنوان" variant="outlined" sx={{width:"100%"}} />
        </Box>

        <Editor
          apiKey="wsntphmr8e2ki1sfhg8mr9pojwmpng64egw5t57af1uk4jdc"
          onInit={(_evt, editor) => (editorRef.current = editor)}
          onChange={(event) => console.log(event.target.getContent())}
          init={{
            height: 500,
            language: "fa",
            language_url: "../../../langs/fa.js",
            directionality: "rtl",
            menubar: false,
            plugins:
              "powerpaste casechange searchreplace autolink directionality advcode visualblocks visualchars image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker editimage help formatpainter permanentpen charmap  linkchecker emoticons advtable export print autosave",
            toolbar:
              "undo redo print spellcheckdialog formatpainter | blocks fontfamily fontsize | bold italic underline forecolor backcolor | link image addcomment showcomments  | alignleft aligncenter alignright alignjustify lineheight | checklist bullist numlist indent outdent | removeformat",
            toolbar_sticky: true,
            icons: "thin",
          }}
        />
      </div>
    );
  }
}

export default TinyEditor;
