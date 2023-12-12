// import { RestaurantContext } from "@/context/RestaurantContext";
import { playlistService, songService } from "@/_services";
import {
  columns,
  columnFilterOptions,
} from "@/components/data-table/songs/columns";
import { DataTable } from "@/components/ui/data-table/data-table";
import { Playlist } from "@/data/playlists/schema";
import { Song } from "@/data/songs/schema";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function List() {
  const [playlist, setPlaylist] = useState<Playlist | undefined>();
  const { id } = useParams();

  const handleSongDeleted = (id: string) => {
    setPlaylist((prev) => {
      if (!prev) {
        return prev; // return undefined if prev is undefined
      }
      return {
        ...prev,
        songs: (prev.songs || []).filter((song) => song.id !== id),
      };
    });
  };

  useEffect(() => {
    playlistService
      // .getAllByRestaurantId(selectedRestaurant?.id!)
      .getById(id!, true)
      .then((data) => {
        console.log(data);
        setPlaylist(data);
        // alertService.success("Restaurant added", {
        //   keepAfterRouteChange: true,
        // });
      })
      .catch(() => alert("error"));
    // .catch(alertService.error);
    // }, [selectedRestaurant]);
  }, [id]);

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your songs
            </p>
          </div>
        </div>
        <DataTable
          data={playlist?.songs || []}
          columns={columns}
          columnFilterOptions={columnFilterOptions}
          filterColumn="title"
          handleRemoveRow={handleSongDeleted}
          addLink={"add"}
        />
      </div>
    </>
  );
}
