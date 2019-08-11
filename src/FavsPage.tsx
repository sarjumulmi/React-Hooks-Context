import React from 'react'
import {Store} from './Store'
import {toggleFavAction} from './actions'
import { IEpisodeProps } from './interfaces';

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'))

export default function FavsPage(): JSX.Element {
  const {state, dispatch} = React.useContext(Store)
  // episodes, toggleFavAction, favorites, dispatch
  const props: IEpisodeProps = {
    episodes: state.favorites,
    favorites: state.favorites,
    toggleFavAction,
    dispatch
  }
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>...Loading</div>}>
        {state.favorites.length === 0 && <div>No Favorites Added</div> }
        <div className="episode-layout">
          <EpisodeList {...props} />
        </div>
        </React.Suspense>
        </React.Fragment>
  )
}
