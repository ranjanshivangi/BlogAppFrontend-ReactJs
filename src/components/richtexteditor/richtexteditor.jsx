import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const RichTextEditor = (props, { initialValue, config }) => {
    const editor = useRef(null);
    const description = () => {
        props.handleDescription()
    }

    return (
        <JoditEditor
            ref={editor}
            config={config}
            tabIndex={1}
            onChange={description}
        />
    );
};

export default RichTextEditor;