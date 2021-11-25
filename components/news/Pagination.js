function Pagination({ currentPage, maxPages, buttonClicked }) {
  let pagesEnum = [];
  for (let i = 0; i < maxPages; i++) {
    pagesEnum.push(
      <button
        className={` m-2 h-8 w-8 rounded-full  ${currentPage == i ? "text-white bg-blue-800" : "text-white bg-black"}`}
        key={i}
        id={i}
        onClick={buttonClicked}
      >
        {i}
      </button>
    );
  }
  return <div className="flex justify-evenly w-max mx-auto">{pagesEnum}</div>;
}

export default Pagination;
