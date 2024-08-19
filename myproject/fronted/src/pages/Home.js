import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Category from '../components/Category';
import Product from '../components/Product';
import { axiosClient } from '../utilis/axiosClient';

const Home = () => {
  const [category, setCategory] = useState([]);
  const [topPick, setTopPick] = useState({});

  async function fetch() {
    try {
      const categoryResponse = await axiosClient('categories/');
      const topProductResponse = await axiosClient('top-picks/');
      console.log('Category Response:', categoryResponse);
      console.log('Top Picks Response:', topProductResponse);
      setCategory(categoryResponse.data);
      setTopPick(topProductResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <Hero />
      <section className="collection container flex-col gap-2">
        <div className="info flex flex-col gap-1 text-center mt-10">
          <h1 className="text-2xl font-semibold">Shop by categories</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur.</h1>
        </div>
        <div className="flex justify-between">
          {category.length > 0 && category.map(cat => (
            <Category key={cat.id} item={cat} />
          ))}
        </div>
      </section>

      <section className="collection-container"></section>

      <section className="collection container center flex-col gap-2">
        <div className="info flex flex-col gap-1 text-center mt-10">
          <h1 className="text-2xl font-semibold">Our top picks</h1>
          <h1>Lorem, ipsum dolor sit amet consectetur.</h1>
        </div>
        <div className="content flex justify-between">
          {topPick.Anime && <Product key={topPick.Anime.id} item={topPick.Anime} />}
          {topPick.Tvshows && <Product key={topPick.Tvshows.id} item={topPick.Tvshows} />}
          {topPick.Sports && <Product key={topPick.Sports.id} item={topPick.Sports} />}
        </div>
      </section>

      <section className="collection-container"></section>
    </div>
  );
};

export default Home;
