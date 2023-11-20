import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  HomeIcon,
  SearchIcon,
  ListMusicIcon,
  Music2Icon,
  Music3Icon,
  Music4Icon,
  HistoryIcon,
} from "lucide-react";

import { Playlist } from "../data/playlists";
import { NavLink } from "react-router-dom";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[];
}

export function Sidebar({ className, playlists }: SidebarProps) {
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
            <Button variant="ghost" className="w-full justify-start">
              <ListMusicIcon size={18} className="me-2" />
              Playlists
            </Button>

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
        {/* <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <ListMusicIcon size={18} className="me-2" />
                  <span className="whitespace-nowrap truncate block w-[200px] text-left">{playlist}</span>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div> */}
      </div>
    </div>
  );
}
