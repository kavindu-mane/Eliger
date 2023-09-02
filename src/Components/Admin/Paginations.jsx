import { Pagination } from "flowbite-react";
import { useState } from "react";

const Paginations = ({totpages=5}) => {

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex w-full mb-5 mt-3 justify-center">
      <Pagination
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
        }}
        showIcons
        totalPages={totpages}
      />
    </div>
  );
};
export default Paginations;
