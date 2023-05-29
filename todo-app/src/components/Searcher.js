import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import searcherStyles from './Searcher.module.css';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const Searcher = ({ searchTasks }) => {
  const [searchKey, setSearchKey] = useState('');

  useEffect(() => {
    searchTasks(searchKey);
  }, [searchKey]);

  return (
    <div className={searcherStyles.search}>
      <div className={searcherStyles.searchInput}>
        <Form.Group>
          <Form.Control
            type="input"
            placeholder="Search with a keyword"
            value={searchKey}
            onChange={(event) => {
              setSearchKey(event.target.value);
            }}
          />
        </Form.Group>
      </div>
      <AiOutlineCloseSquare
        className={searcherStyles.closeIcon}
        onClick={() => {
          setSearchKey('');
        }}
      />
    </div>
  );
};

Searcher.PropTypes = {};
export default Searcher;
