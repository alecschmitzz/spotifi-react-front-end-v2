import {
  columns,
  columnFilterOptions,
} from "@/components/data-table/likedsongs/columns";
import { DataTable } from "@/components/ui/data-table/data-table";
import { useEffect, useState } from "react";

export default function LikedSongs() {
  const [likedSongs, setLikedSongs] = useState([]);

  useEffect(() => {
    fetch("/src/data/likedsongs/data.json")
      .then((response) => response.json())
      .then((data) => {
        setLikedSongs(data); // Assuming the JSON data is an array of likedSongs.
      })
      .catch((error) => {
        console.error("Error fetching liked songs:", error);
      });
  }, []);

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your liked songs
            </p>
          </div>
          {/* <div className="flex items-center space-x-2">
            <UserNav />
          </div> */}
        </div>
        <DataTable
          data={likedSongs}
          columns={columns}
          columnFilterOptions={columnFilterOptions}
          filterColumn="title"
        />
      </div>
    </>
  );
}
