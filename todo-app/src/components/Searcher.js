import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import searcherStyles from './Searcher.module.css';

const Searcher = () => {
  const [searchKey, setSearchKey] = useState('');

  return (
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
  );
};

Searcher.PropTypes = {};
export default Searcher;
