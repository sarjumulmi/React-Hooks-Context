import React from "react";

import { IState, IAction, IEpisode } from "./interfaces";

const initialState: IState = {
  episodes: [],
  favorites: []
};
export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAV":
      const favorites = [...state.favorites]
      const favWithoutEpisode = favorites.filter((f: IEpisode) => f.id !== action.payload.id)
      return { ...state, favorites: favWithoutEpisode };
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}
