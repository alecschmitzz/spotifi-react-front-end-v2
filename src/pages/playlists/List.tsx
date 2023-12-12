// import { RestaurantContext } from "@/context/RestaurantContext";
import { playlistService } from "@/_services";
import {
  columns,
  columnFilterOptions,
} from "@/components/data-table/playlists/columns";
import { DataTable } from "@/components/ui/data-table/data-table";
import { PlaylistContext } from "@/context/PlaylistProvider";
import { useContext, useEffect } from "react";

export default function List() {
  const { playlists, setPlaylists } = useContext(PlaylistContext);

  const handlePlaylistDeleted = (id: string) => {
    // console.log(id);
    // console.log(playlists);
    setPlaylists((prev) => prev.filter((playlist) => playlist.id !== id));
  };

  useEffect(() => {
    playlistService
      // .getAllByRestaurantId(selectedRestaurant?.id!)
      .getAll()
      .then((data) => {
        setPlaylists(data);
        // console.log(data);
        // alertService.success("Restaurant added", {
        //   keepAfterRouteChange: true,
        // });
      })
      .catch(() => alert("error"));
    // .catch(alertService.error);
    // }, [selectedRestaurant]);
  }, []);

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your playlists
            </p>
          </div>
        </div>
        <DataTable
          data={playlists}
          columns={columns}
          columnFilterOptions={columnFilterOptions}
          filterColumn="title"
          handleRemoveRow={handlePlaylistDeleted}
          addLink={"add"}
        />
      </div>
    </>
  );
}
