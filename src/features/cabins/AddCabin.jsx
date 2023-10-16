import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import { Modal } from "../../ui/Modal";
import CabinTable from "./CabinTable";

export function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="table">
        <Button>Show Cabin Table</Button>
      </Modal.Open>
      <Modal.Window name="table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

// export function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);

//   return (
//     <div>
//       <Button
//         onClick={function () {
//           setIsOpenModal(function (isOPenModal) {
//             return !isOpenModal;
//           });
//         }}
//       >
//         {isOpenModal ? "Close cabin form" : "Add new Cabin"}
//       </Button>
//       {isOpenModal && (
//         <Modal
//           onClose={function () {
//             setIsOpenModal(false);
//           }}
//         >
//           <CreateCabinForm
//             onCloseModal={function () {
//               setIsOpenModal(false);
//             }}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// }
