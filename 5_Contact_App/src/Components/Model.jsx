import React from "react";
import { createPortal } from "react-dom";

export default function Model({ open, onClose, children }) {
  return createPortal(
    <>
      {open && (
        <>
          <div className="box">
            <div onClick={onClose}>
              <h1>X</h1>
            </div>
            {children}
          </div>
          <div className="blur"></div>
        </>
      )}
    </>,
    document.getElementById("model-root")
  );
}
