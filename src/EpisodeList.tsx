import React from "react";
import { IEpisode } from "./interfaces";

export default function EpisodeList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavAction, favorites, dispatch } = props;

  return episodes.map((episode: IEpisode) => {
    return (
      <section key={episode.id} className="episode-box">
        <img
          src={episode.image.medium}
          alt={`Rick and Morty ${episode.name}`}
        />
        <section style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            Season: {episode.season} Episode: {episode.number}
          </div>
          <button type="button" onClick={() => toggleFavAction(favorites, dispatch, episode)}>
            {favorites.includes(episode) ? "-" : "+"}
          </button>
        </section>
      </section>
    );
  });
}
