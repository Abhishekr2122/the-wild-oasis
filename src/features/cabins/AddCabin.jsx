import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

export function AddCabin() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Button
        onClick={function () {
          setShowForm(function (showNewForm) {
            return !showNewForm;
          });
        }}
      >
        {showForm ? "Close cabin form" : "Add new Cabin"}
      </Button>
      {showForm && <CreateCabinForm />}
    </div>
  );
}
