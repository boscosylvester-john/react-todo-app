import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import {
  SORTING_OPTIONS,
  SORTING_OPTIONS_ARRAY
} from '../constants';
import sorterStyles from './Sorter.module.css';

const Sorter = ({ sortTasks }) => {
  const [sorterValue, setSorterValue] = useState(
    SORTING_OPTIONS.DEFAULT
  );

  useEffect(() => {
    sortTasks(sorterValue);
  }, [sorterValue]);

  return (
    <div className={sorterStyles.sortOptionDropdown}>
      <Form.Group className="mb-3">
        <Form.Label>Sort by</Form.Label>
        <Form.Select
          value={sorterValue}
          onChange={(event) => {
            setSorterValue(event.target.value);
          }}>
          {SORTING_OPTIONS_ARRAY.map((op, index) => {
            return (
              <option key={index} value={op}>
                {op}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
    </div>
  );
};

Sorter.PropTypes = {};
export default Sorter;
