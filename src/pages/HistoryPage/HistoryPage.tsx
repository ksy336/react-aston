import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store-types';
import HistoryItem from '../../components/HistoryItem/HistoryItem';
import "./HistoryPage.scss";

const HistoryPage = () => {
  const {moviesForHistory} = useSelector((state: RootState) => state.history);

  return (
    <>
      <Layout />
    <div className="history-container">
      <h2>Всего было запросов: {moviesForHistory?.flat().length}</h2>
      <h2>Список всех запрашиваемых фильмов:</h2>
      <div className="history-title">
        {moviesForHistory?.flat()?.map((movie) => (
          <HistoryItem
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
      </>
  );
};

export default HistoryPage;