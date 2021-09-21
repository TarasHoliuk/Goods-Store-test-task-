import React from 'react';
import cn from 'classnames';
import './DeleteModal.scss';

interface Props {
  setDeleteModalStatus: React.Dispatch<React.SetStateAction<boolean>>
  setGoodToDelete: React.Dispatch<React.SetStateAction<string>>
  goodName: string;
  deleteModalStatus: boolean;
}

export const DeleteModal: React.FC<Props> = (props) => {
  const {
    setDeleteModalStatus,
    setGoodToDelete,
    goodName,
    deleteModalStatus,
  } = props;

  return (
    <div className={cn('modal', { 'is-active': deleteModalStatus })}>
      <div className="modal-background"></div>
      <div className="modal-content has-background-light p-6 my-modal">
        <h1 className="modal-card-title mb-4">
          Are you sure you want to delete this item?
        </h1>
        <button
          className="button is-danger mr-4"
          type="button"
          onClick={() => setGoodToDelete(goodName)}
        >
          Yes, delete
        </button>
        <button
          className="button is-success"
          type="button"
          onClick={() => setDeleteModalStatus(false)}
        >
          No, cancel
        </button>
      </div>
      <div className="modal-close is-large" aria-label="close"></div>
    </div>
  );
};
