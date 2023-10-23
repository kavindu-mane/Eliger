import { Pagination } from "flowbite-react";

const Paginations = ({ totpages = 5, currentPage, setCurrentPage }) => {
  return (
    <div className="mb-5 mt-3 flex w-full justify-center">
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
