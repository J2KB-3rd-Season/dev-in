import React from "react";

const Editor = ({ onInputChange, value }) => {
    return (
        <div className="editor">
            <textarea
                autoFocus={false}
                onChange={(e) => onInputChange(e)}
                value={value}
            />
        </div>
    );
}

export default Editor;