export interface IState {
  episodes: Array<IEpisode>,
  favorites: Array<IEpisode>
}

export interface IAction {
  type: string,
  payload: any
}

export interface IEpisode {
  id: number;
  name: string;
  airstamp: string;
  image: { medium: string; original: string };
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}

export interface IEpisodeProps {
  episodes: Array<IEpisode>
  favorites: Array<IEpisode>
  toggleFavAction: (favorites: IEpisode, dispatch: any, episode: IEpisode) => IAction
  dispatch: any
}