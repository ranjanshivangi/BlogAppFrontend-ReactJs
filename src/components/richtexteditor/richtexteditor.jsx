import React, { useRef } from "react";
import JoditEditor from "jodit-react";

const RichTextEditor = ({ initialValue, config }) => {
    const editor = useRef(null);

    return (
        <JoditEditor
            ref={editor}
            config={config}
            tabIndex={1}
        />
    );
};

export default RichTextEditor;