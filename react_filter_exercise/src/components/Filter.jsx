import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateQuery } from "../redux/people/actions";
import { getPeople } from "../redux/people/selectors";

function Filter() {
  const { query } = useSelector((state) => getPeople(state));
  const dispatch = useDispatch();

  const onChangeQuery = (e) => {
    dispatch(updateQuery(e.target.value));
  };

  return (
    <div className="App-box">
      <input type="text" value={query} onChange={onChangeQuery} />
    </div>
  );
}

export default Filter;
