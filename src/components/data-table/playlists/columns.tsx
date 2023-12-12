import { ColumnDef, Row, TableMeta } from "@tanstack/react-table";

import { Playlist } from "../../../data/playlists/schema";
import { DataTableColumnHeader } from "../../ui/data-table/data-table-column-header";
import { DataTableRowActions } from "./actions";
import { Link } from "react-router-dom";
import { playlistService } from "@/_services";

interface ExtendedTableMeta extends TableMeta<Playlist> {
  removeRow: (index: string) => void;
}

export const columns: ColumnDef<Playlist>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      return (
        <Link
          to={`/playlists/${row.original.id}`}
          className="p-4 flex space-x-2 cursor-pointer group"
        >
          <span className="max-w-[500px] truncate font-medium group-hover:text-blue-500">
            {row.getValue("title")}
          </span>
        </Link>
      );
    },
    enableHiding: false,
  },
  {
    id: "actions",
    cell: ({ row, cell }) => {
      const meta = cell.getContext().table.options.meta as ExtendedTableMeta;

      const handleRemoveRow = (id: string) => {
        meta?.removeRow(id);
      };

      return (
        <div className="p-4">
          <DataTableRowActions row={row} handleRemoveRow={handleRemoveRow} />
        </div>
      );
    },
  },
];

export const columnFilterOptions = {};
