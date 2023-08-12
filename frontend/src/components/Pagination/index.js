
const Pagination = ({ totalPost, postsPerPage, setCurrentPage, currentPage }) => {


  const pageIndex = [];

  for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
    pageIndex.push(i);
  }

  console.log(currentPage);
  return (
    <div className="d-flex align-items-center mt-auto">
      <span className="text-muted small d-none d-md-inline">
        There are {totalPost} pets meet to your requirement
      </span>
      <nav aria-label="Page navigation example" className="ms-auto">
        <ul className="pagination my-0">
          {
            pageIndex.map((index) => {
              return (
                <li key={index} className={"page-item " + (currentPage == index ? "active" : "" )}>
                  <a
                    className="page-link"
                    onClick={() => setCurrentPage(index)}>
                    {index}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
}

export default Pagination;
