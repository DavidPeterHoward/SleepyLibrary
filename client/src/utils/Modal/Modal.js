import React, { useState, useEffect, useContext } from "react";
import { AuthorSingleItem } from "../../components/Author/AuthorListing";
import CreateAuthor from "../../components/Author/CreateAuthor";
import { BookSingleItem } from "../../components/Book/BookListing";
import CreateBook from "../../components/Book/CreateBook";
import Transition from "../Transition";
import { Modal, ModalOverlay } from "./Modal.styled.js";

const ModalComponent = ({
  show,
  type,
  HandleModalOverlayClick,
  data,
  ShowModal
}) => {
  return (
    <ModalOverlay show={show} onClick={HandleModalOverlayClick}>
      <Transition show={show}>
        <Modal>
          {/* Single Book/Author & Edit / Delete */}
          {type === "BOOK" && BookSingleItem(data)}
          {type === "AUTHOR" && AuthorSingleItem(data)}

          {/* Create New Book/Author */}
          {type === "CREATE_BOOK" && <CreateBook ShowModal={ShowModal} />}
          {type === "CREATE_AUTHOR" && <CreateAuthor ShowModal={ShowModal} />}
        </Modal>
      </Transition>
    </ModalOverlay>
  );
};

export default ModalComponent;
