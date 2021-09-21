import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import { LoadGoods } from '../../api/api';
import { GoodCard } from '../GoodCard/GoodCard';
import './GoodsList.scss';

interface Props {
  sortBy: SortBy;
  setGoodForDetails: React.Dispatch<React.SetStateAction<Good | null>>
  setUrl: React.Dispatch<React.SetStateAction<string>>
}

export const GoodsList: React.FC<Props> = (props) => {
  const { sortBy, setGoodForDetails, setUrl } = props;
  const [goods, setGoods] = useState<Good[] | null>(null);
  const [goodToDelete, setGoodToDelete] = useState('');

  useEffect(() => {
    (async () => {
      const goodsFromApi: Good[] = await LoadGoods();

      setGoods(goodsFromApi);
    })();
  }, []);

  const sortGoods = (sort: SortBy) => {
    if (goods) {
      setGoods([...goods].sort((a, b) => {
        switch (sort) {
          case 'amount':
            return a.amount - b.amount;

          case 'name':
            return a.name.localeCompare(b.name);

          default:
            return 0;
        }
      }));
    }
  };

  useEffect(() => {
    sortGoods(sortBy);
  }, [sortBy]);

  const deleteGood = (goodName: string) => {
    if (goods) {
      setGoods([...goods]
        .filter(good => good.name !== goodName));
    }
  };

  useEffect(() => {
    deleteGood(goodToDelete);
  }, [goodToDelete]);

  return (
    <div>
      <div className="container">
        {goods
          ? goods.map(good => (
            <GoodCard
              good={good}
              setGoodToDelete={setGoodToDelete}
              setGoodForDetails={setGoodForDetails}
              setUrl={setUrl}
              key={good.id}
            />
          ))
          : <Loader type="Rings" color="green" />}
      </div>
    </div>
  );
};
