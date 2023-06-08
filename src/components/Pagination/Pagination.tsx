import { Link } from "react-router-dom";
import "./Pagination.scss";

type PaginationProp = {
  moviesPerPage: number;
  totalMovies: number;
  paginate: () => void;
}
const Pagination = ( {moviesPerPage, totalMovies, paginate}: PaginationProp) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.floor(totalMovies / moviesPerPage); i+=1) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  return (
    <footer className="footer">
      <section className="pagination">
        <div className="wrapper pagination__wrapper">
          <div className="container">
            <nav className="nav__pagination">
              {pageNumbers.map((page) =>
                <p key={Math.random().toString()}
                    onClick={()=> paginate(page)}
                >
                  {page}
                </p>
              )}
            </nav>
          </div>
        </div>
      </section>
    </footer>
  )
}
export default Pagination;