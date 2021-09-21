import React, { useState } from 'react';
import { GoodsList } from '../GoodsList/GoodsList';
import { Sort } from '../Sort/Sort';

interface Props {
  setGoodForDetails: React.Dispatch<React.SetStateAction<Good | null>>
  setUrl: React.Dispatch<React.SetStateAction<string>>
}

export const HomePage: React.FC<Props> = (props) => {
  const { setGoodForDetails, setUrl } = props;
  const [sortBy, setSortBy] = useState<SortBy>('name');

  return (
    <div className="home-page pt-5">
      <h1 className="title has-text-centered">Goods Store</h1>
      <Sort setSortBy={setSortBy} sortBy={sortBy} />
      <GoodsList
        sortBy={sortBy}
        setGoodForDetails={setGoodForDetails}
        setUrl={setUrl}
      />
    </div>
  );
};
