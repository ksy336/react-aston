import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Carousel } from 'antd';
import "./HomePage.scss";
import { Link } from 'react-router-dom';

const HomePage = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

  return (
    <>
      <Layout />
      <section className="main-text">
        <h2 className="main-welcome-text">Приветствуем Вас на сайте Кино! Здесь собраны лучшие фильмы, сериалы, мультфильмы всех времен! Окунитесь в мир интересных фильмов!</h2>
       <Link to="/movie" className="movie-main-link">
         <h4 className="movie-link">Нажми здесь и Поехали...</h4>
       </Link>
      </section>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>Лучшие фильмы</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Новинки</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Сериалы</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Мультфильмы</h3>
        </div>
      </Carousel>
    </>
  );
};

export default HomePage;