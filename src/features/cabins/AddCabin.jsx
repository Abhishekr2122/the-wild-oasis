import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import { Modal } from "../../ui/Modal";

export function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button
        onClick={function () {
          setIsOpenModal(function (isOPenModal) {
            return !isOpenModal;
          });
        }}
      >
        {isOpenModal ? "Close cabin form" : "Add new Cabin"}
      </Button>
      {isOpenModal && (
        <Modal
          onClose={function () {
            setIsOpenModal(false);
          }}
        >
          <CreateCabinForm
            onClose={function () {
              setIsOpenModal(false);
            }}
          />
        </Modal>
      )}
    </div>
  );
}
