import * as types from '../people/types';

export const updateQuery = (textQuery) => ({
  type: types.UPDATE_QUERY,
  payload: textQuery,
});

export const listPeople = (payload) => ({
  type: types.LIST_PEOPLE,
  payload: payload,
});
