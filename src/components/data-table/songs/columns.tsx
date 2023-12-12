import { ColumnDef, Row } from "@tanstack/react-table";

import { Song } from "../../../data/songs/schema";
import { DataTableColumnHeader } from "../../ui/data-table/data-table-column-header";
import { DataTableRowActions } from "./actions";
import { HeartIcon } from "lucide-react";
import { useState } from "react";

export const columns: ColumnDef<Song>[] = [
  {
    accessorKey: "index",
    header: ({ column }) => <DataTableColumnHeader column={column} title="#" />,
    cell: ({ row, table }) => {
      const myIndex =
        table.getSortedRowModel().rows.findIndex((r) => r.id === row.id) + 1;

      return (
        <div
          className="flex flex-col cursor-pointer group"
          onClick={() => handleRowClick(row)}
        >
          <span className="max-w-[500px] truncate font-medium group-hover:text-blue-500">
            {myIndex}
          </span>
        </div>
      );
    },
    enableHiding: false,
    enableSorting: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <div
          className="flex flex-col cursor-pointer group"
          onClick={() => handleRowClick(row)}
        >
          <span className="max-w-[500px] truncate font-medium group-hover:text-blue-500">
            {row.getValue("title")}
          </span>
          <span className="max-w-[500px] truncate font-medium group-hover:text-blue-500">
            {row.original.artist}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "album",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Album" />
    ),
    cell: ({ row }) => {
      return (
        <div
          className="flex flex-col cursor-pointer group"
          onClick={() => handleRowClick(row)}
        >
          <span className="max-w-[500px] truncate font-medium group-hover:text-blue-500">
            {row.getValue("album")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "dateAdded",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date Added" />
    ),
    cell: ({ row }) => {
      return (
        <div
          className="flex flex-col cursor-pointer group"
          onClick={() => handleRowClick(row)}
        >
          <span className="max-w-[500px] truncate font-medium group-hover:text-blue-500">
            {row.getValue("dateAdded")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    accessorKey: "duration",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Duration" />
    ),
    cell: ({ row }) => {
      return (
        <div
          className="flex flex-col cursor-pointer group"
          onClick={() => handleRowClick(row)}
        >
          <span className="max-w-[500px] truncate font-medium group-hover:text-blue-500">
            {row.getValue("duration")}
          </span>
        </div>
      );
    },
    enableHiding: false,
  },
  {
    id: "likeStatus",
    cell: ({ row }) => {
      const [likeStatus, setLikeStatus] = useState<boolean>(true);

      const handleHeartClick = () => {
        console.log(likeStatus);
        setLikeStatus((prevStatus) => !prevStatus);
      };

      return (
        <>
          <button onClick={() => handleHeartClick()}>
            <HeartIcon
              className={likeStatus ? "fill-green-500 stroke-green-500" : ""}
            />
          </button>
        </>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <>
        <div>
          <DataTableRowActions row={row} />
        </div>
      </>
    ),
  },
];

function handleRowClick(row: Row<Song>) {
  console.log("Row clicked:", row.original);
}

export const columnFilterOptions = {};
