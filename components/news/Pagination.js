function Pagination({ currentPage, maxPages, buttonClicked }) {
  let pagesEnum = [];

  pagesEnum.push(
    <button className="m-2 h-8 w-8 p-2 rounded-full text-black bg-gray-200" onClick={buttonClicked}>
      <img
        src="https://ik.imagekit.io/300/0IyCDangboResources/back-svgrepo-com_3kp7Wky8dD.svg?updatedAt=1637858511533"
        key="back"
        id="back"
      />
    </button>
  );

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

  pagesEnum.push(
    <button className="m-2 h-8 w-8 p-2 rounded-full text-black bg-gray-200" onClick={buttonClicked}>
      <img
        src="https://ik.imagekit.io/300/0IyCDangboResources/next-svgrepo-com_bjY9toqygL.svg?updatedAt=1637858517964"
        key="next"
        id="next"
      />
    </button>
  );

  return <div className="flex justify-evenly w-max mx-auto">{pagesEnum}</div>;
}

export default Pagination;
