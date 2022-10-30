import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { getPeople } from "../redux/people/selectors";

function People() {
  const { list, query } = useSelector((state) => getPeople(state));

  const peopleMap = useMemo(() => {
    const filterdPeople = list.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );

    return filterdPeople.map(({ name }) => <div class="App-box">{name}</div>);
  }, [list, query]);

  return <div>{peopleMap}</div>;
}

export default People;
