import React from 'react'
import { Store } from "./Store";
import { IAction, IEpisode, IState } from "./interfaces";


export const fetchDataAction = async (dispatch: any) => {
  const URL =
    "http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
  const data = await fetch(URL);
  const dataJSON = await data.json();
  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes
  });
};

export const toggleFavAction = (favorites: any, dispatch: any, episode: IEpisode): IAction => {
  const isEpisodeFav = favorites.includes(episode);
  let actionType = isEpisodeFav ? "REMOVE_FAV" : "ADD_FAV";
  console.log(actionType);
  return dispatch({
    type: actionType,
    payload: episode
  });
};