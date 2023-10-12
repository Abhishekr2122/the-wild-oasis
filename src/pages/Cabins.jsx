import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import { useState } from "react";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showNewForm, setShowNewForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter/Sort</p>
      </Row>

      <Row>
        <CabinTable />
        <Button
          onClick={function () {
            setShowNewForm(function (showNewForm) {
              return !showNewForm;
            });
          }}
        >
          Add new Cabin
        </Button>
        {showNewForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
