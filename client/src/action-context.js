import React, { useState, useEffect } from "react";
import Modal, { useHandleShowModal } from "./utils/Modal/Modal";

const StateContext = React.createContext();
const DispatchContext = React.createContext();

const Delete = (data, payload, listing, type) => {
  console.log("attempting to delete" + `${payload}`);
  fetch(`/${listing}/${payload}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const Edit = (data, payload, listing, type) => {
  console.log("attempting to delete" + `${payload}`);
  fetch(`/${listing}/${payload}`, {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
};

const ActionReducer = (state, action) => {
  const { data, listing, type, payload } = action;
  switch (type) {
    case "ShowModal":
      return { data, payload, listing, type };
    case "HideModal":
      return { data, payload, listing, type };
    case "Delete":
      Delete(data, payload, listing, type);
      return { data, payload, listing, type };
    case "Edit":
      Edit(data, payload, listing, type);
      return { data, payload, listing, type };
    default:
      return state;
  }
};

function ActionProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState(null);
  const [state, dispatch] = React.useReducer(ActionReducer, {
    action: "1"
  });

  const ShowModal = (e, ModalType) => {
    setShowModal(!showModal);
    ModalType && setType(ModalType);
  };

  const HandleModalOverlayClick = e => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (state?.type === "ShowModal") {
      setShowModal(true);
    } else {
    }
  }, [state]);

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          {children}
          <>
            {showModal && (
              <Modal
                show={showModal}
                type={state?.listing}
                data={state?.data}
                HandleModalOverlayClick={HandleModalOverlayClick}
                ShowModal={ShowModal}
              />
            )}
          </>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </>
  );
}
export { ActionProvider, StateContext, DispatchContext };
