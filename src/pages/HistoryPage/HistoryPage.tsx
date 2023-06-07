import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store-types';
import HistoryItem from '../../components/HistoryItem/HistoryItem';


const HistoryPage = () => {
  const {moviesForHistory} = useSelector((state: RootState) => state.history);
  console.log(moviesForHistory.flat())

  return (
    <>
      <Layout />
    <div className="history-container">
      <h2>Всего было запросов: {moviesForHistory?.flat().length}</h2>
      <h2>Названия всех запрашиваемых фильмов:</h2>
      {moviesForHistory?.flat()?.map((movie) => (
        <HistoryItem
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
      </>
  );
};

export default HistoryPage;