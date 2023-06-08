import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import {findMovieBySearchQuery} from "../../../store/movieSlice/movieSlice";
import Button from "../Button/Button";
import "./SearchComponent.scss";


type SearchComponentProp = {
  fetchMovies: () => void;
}
const SearchComponent = ({fetchMovies}: SearchComponentProp) => {
  const dispatch = useDispatch();

  return (
    <form className="form-container-search">
      <Input
        placeholder="Введите название фильма"
        allowClear
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(findMovieBySearchQuery((e.target.value)))}
        style={{ width: 504, height: 46 }}
      />
      <Button onClick={fetchMovies}>Поиск</Button>

    </form>
  )
}
export default SearchComponent;