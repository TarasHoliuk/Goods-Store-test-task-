import React from 'react';
import { NavLink } from 'react-router-dom';
import './Details.scss';

interface Props {
  good: Good;
}

export const Details: React.FC<Props> = (props) => {
  const { good } = props;

  return (
    <div className="details">
      <div className="layer card p-6">
        <h1 className="title has-text-centered ">
          {`${good.name[0].toUpperCase()}${good.name.slice(1)}`}
        </h1>
        <div className="image-container mb-2">
          <img src={good.imgUrl} alt={good.name} />
        </div>
        <p className="is-size-4">Description:</p>
        <p className="is-size-5 mb-2">
          {good.description}
        </p>
        <div className="level">
          <p className="level-left">
            {`Color: ${good.color}`}
          </p>
          <p className="level-right">
            {`Weight: ${good.weight} per piece`}
          </p>
        </div>
        <div className="level">
          <p className="level-left">
            {`Price: ${good.price} UAH/kg`}
          </p>
          <p className="level-right">
            {`Left ${good.amount} pieces`}
          </p>
        </div>
        <NavLink
          to="/"
          className="button is-link"
        >
          Go Back
        </NavLink>
      </div>
    </div>
  );
};
