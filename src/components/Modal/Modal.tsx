import React, { MouseEvent } from "react";
import { CloseButton } from "./Inner/CloseButton";
import { closeModal } from "../../utils/closeModal";

type ModalPropsType = {
  active: boolean;
  setActive: (value: boolean) => void;
  children: React.ReactNode;
};

export const Modal: React.FC<ModalPropsType> = ({
  active,
  setActive,
  children,
}) => {
  const disabledCloseModal = (event: MouseEvent<HTMLDivElement>) =>
    event.stopPropagation();

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => closeModal(setActive)}
    >
      <div className="modal__inner" onClick={disabledCloseModal}>
        <div className="modal__header">
          <CloseButton setActive={setActive} />
        </div>
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
};
