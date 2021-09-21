import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  setSortBy: Dispatch<SetStateAction<SortBy>>
  sortBy: SortBy;
}

export const Sort: React.FC<Props> = (props) => {
  const { setSortBy, sortBy } = props;

  return (
    <div className="container">
      <form className="field">
        <div className="mb-2">Sort By:</div>
        <div className="control">
          <div className="select">
            <select
              id="sort"
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value as SortBy)}
            >
              <option value="name">
                Name
              </option>
              <option value="amount">
                Amount
              </option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};
