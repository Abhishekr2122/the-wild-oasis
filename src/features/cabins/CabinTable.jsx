import { useCabins } from "./useCabins";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { AddCabin } from "./AddCabin";
import { Table } from "../../ui/Table";
import { Menus } from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

export default function CabinTable() {
  // fetching cabin data from supabase
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) {
    return <Spinner />;
  }

  const filterValue = searchParams.get("discount") || "all";

  let filterCabins;

  if (filterValue === "all") {
    filterCabins = cabins;
  }

  if (filterValue === "no-discount") {
    filterCabins = cabins.filter(function (citem) {
      return citem.discount === 0;
    });
  }

  if (filterValue === "with-discount") {
    filterCabins = cabins.filter(function (citem) {
      return citem.discount > 0;
    });
  }

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={filterCabins}
          render={function (cabin) {
            return <CabinRow cabin={cabin} key={cabin.id} />;
          }}
        />
      </Table>
      <AddCabin />
    </Menus>
  );
}
