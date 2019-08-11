import React from "react";
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import {fetchDataAction, toggleFavAction} from './actions'

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);
  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  }); // on page load
  

  const props: IEpisodeProps = {
    episodes: state.episodes,
    favorites: state.favorites,
    toggleFavAction,
    dispatch
  };

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>...Loading</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
