// PlaylistContext.tsx
import { Playlist } from "@/data/playlists/schema";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface PlaylistContextProps {
  children: React.ReactNode;
}

interface PlaylistContextType {
  playlists: Playlist[];
  setPlaylists: Dispatch<SetStateAction<Playlist[]>>;
  //   selectedPlaylist: Playlist | undefined;
  //   setSelectedPlaylist: Dispatch<SetStateAction<Playlist | undefined>>;
}

export const PlaylistContext = createContext<PlaylistContextType>({
  playlists: [],
  setPlaylists: () => {},
  //   selectedPlaylist: undefined,
  //   setSelectedPlaylist: () => {},
});

export const PlaylistProvider = ({ children }: PlaylistContextProps) => {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  //   const [selectedPlaylist, setSelectedPlaylist] = useState<
  //     Playlist | undefined
  //   >(undefined);

  return (
    <PlaylistContext.Provider
      value={{
        playlists,
        setPlaylists,
        // selectedPlaylist,
        // setSelectedPlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
