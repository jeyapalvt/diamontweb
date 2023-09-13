import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import {
  EditorState,
  ContentState,
  convertToRaw,
  convertFromHTML,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const NoteEditor = (props) => {
  const contentDataState = ContentState.createFromBlockArray(
    convertFromHTML(`${props.value}`)
  );
  const editorDataState = EditorState.createWithContent(contentDataState);

  const [editorState, setEditorState] = useState(editorDataState);

  const onEditorStateChange = (editorStateData) => {
    setEditorState(editorStateData);
    let data = draftToHtml(convertToRaw(editorStateData.getCurrentContent()));
    props.onChange(data);
  };

  return (
    <React.Fragment>
      <label>{props.label}</label>
      {props.touched && props.error && (
        <span className="error text-danger">{props.error}</span>
      )}
      <Editor
        editorStyle={{ border: "1px solid #F1F1F1" }}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        toolbarClassName="toolbar-class"
        // toolbar={{
        //   options: ["inline", "list", "textAlign"],
        //   inline: {
        //     options: ["bold", "italic", "underline"],
        //   },
        //   list: {
        //     options: ["unordered", "ordered", "indent", "outdent"],
        //   },
        //   textAlign: {
        //     options: ["left", "center", "right"],
        //   },
        // }}
      />
    </React.Fragment>
  );
};

const FNoteEditor = (props) => {
  const {
    meta: { touched, error },
    label,
    input,
  } = props;
  return (
    <div>
      {" "}
      <NoteEditor
        onChange={input.onChange}
        value={input.value}
        touched={touched}
        error={error}
        label={label}
        input={{ ...input }}
      />
    </div>
  );
};

export default FNoteEditor;
