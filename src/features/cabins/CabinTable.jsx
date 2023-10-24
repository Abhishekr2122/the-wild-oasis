import { useCabins } from "./useCabins";

import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { AddCabin } from "./AddCabin";
import { Table } from "../../ui/Table";
import { Menus } from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";

export default function CabinTable() {
  // fetching cabin data from supabase
  const { isLoading, cabins } = useCabins();

  const [searchParams] = useSearchParams();

  if (isLoading) {
    return <Spinner />;
  }

  // 1) Filter
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

  // 2) Sort
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filterCabins.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

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
          data={sortedCabins}
          render={function (cabin) {
            return <CabinRow cabin={cabin} key={cabin.id} />;
          }}
        />
      </Table>
      <AddCabin />
    </Menus>
  );
}
