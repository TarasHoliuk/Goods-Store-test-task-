import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { generatePath } from 'react-router';
import './GoodCard.scss';
import { DeleteModal } from '../DeleteModal/DeleteModal';

interface Props {
  good: Good;
  setGoodToDelete: React.Dispatch<React.SetStateAction<string>>
  setGoodForDetails: React.Dispatch<React.SetStateAction<Good | null>>
  setUrl: React.Dispatch<React.SetStateAction<string>>
}

export const GoodCard: React.FC<Props> = (props) => {
  const {
    good,
    setGoodToDelete,
    setGoodForDetails,
    setUrl,
  } = props;
  const [detailsUrl, setDetailsUrl] = useState('');
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);

  useEffect(() => {
    const url = generatePath(('details/:id'), {
      id: good.id,
    });

    setDetailsUrl(url);
  }, []);

  const liftStateUp = () => {
    setUrl(detailsUrl);
    setGoodForDetails(good);
  };

  return (
    <div className="card p-4 my-card">
      <div className="wrapper">
        <div className="card__image-box">
          <img
            src={good.imgUrl}
            alt={`Fruit: ${good.name}`}
            className="card__image"
          />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                {`${good.name[0].toUpperCase()}${good.name.slice(1)}`}
              </p>
            </div>
          </div>
          <div className="level">
            <p className="level-left">
              {`Price: ${good.price}`}
            </p>
            <p className="level-right">
              {`Amount: ${good.amount}`}
            </p>
          </div>
          <div className="content">
            {good.description}
          </div>
        </div>
      </div>
      <div className="level">
        <NavLink
          to={detailsUrl}
          className="button is-success level-item mr-1"
          onClick={() => liftStateUp()}
        >
          Details
        </NavLink>
        <button
          type="button"
          className="button is-warning level-item ml-1"
          onClick={() => setDeleteModalStatus(true)}
        >
          Delete
        </button>
        <DeleteModal
          setDeleteModalStatus={setDeleteModalStatus}
          setGoodToDelete={setGoodToDelete}
          goodName={good.name}
          deleteModalStatus={deleteModalStatus}
        />
      </div>
    </div>
  );
};
