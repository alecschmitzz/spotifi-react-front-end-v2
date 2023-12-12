import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  HomeIcon,
  SearchIcon,
  ListMusicIcon,
  Music4Icon,
  HistoryIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { playlistService } from "@/_services";
import { PlaylistContext } from "@/context/PlaylistProvider";

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const { playlists, setPlaylists } = useContext(PlaylistContext);
  const effectRun = useRef(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getPlaylists = async () =>
      playlistService
        .getAll(signal)
        .then((data) => {
          setPlaylists(data);
          console.log(data);
        })
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Request aborted");
          } else {
            console.error("Error fetching playlists:", error);
          }
        });

    // Check if useEffect has run the first time
    if (effectRun.current) {
      getPlaylists();
    }

    // Cleanup function to abort the request when the component unmounts
    return () => {
      controller.abort();
      effectRun.current = true; // update the value of effectRun to true
    };
  }, []); // Empty dependency array since we only want to fetch once on mount

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <img src="/assets/SPOTIFI_LOGO-02.png" alt="Spotifi Logo" />

        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <NavLink to="/">
              {({ isActive }) => (
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  <HomeIcon width={18} className="me-2" />
                  Home
                </Button>
              )}
            </NavLink>
            <Button variant="ghost" className="w-full justify-start">
              <SearchIcon size={18} className="me-2" />
              Browse
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            My Music
          </h2>
          <div className="space-y-1">
            <NavLink to="/playlists/">
              {({ isActive }) => (
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  <ListMusicIcon size={18} className="me-2" />
                  Playlists
                </Button>
              )}
            </NavLink>

            <NavLink to="/likedsongs">
              {({ isActive }) => (
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  <Music4Icon size={18} className="me-2" />
                  Songs
                </Button>
              )}
            </NavLink>

            <Button variant="ghost" className="w-full justify-start">
              <HistoryIcon size={18} className="me-2" />
              Recently Played
            </Button>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist) => (
                <NavLink
                  to={`/playlists/${playlist.id}`}
                  key={`${playlist.id}`}
                >
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className="w-full justify-start"
                    >
                      <ListMusicIcon size={18} className="me-2" />
                      {playlist.title}
                    </Button>
                  )}
                </NavLink>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
