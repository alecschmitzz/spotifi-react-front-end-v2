import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { playlistSchema } from "../../../data/playlists/schema";
import { MoreHorizontalIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { playlistService } from "@/_services";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>; // Add this line
  handleRemoveRow: (id: string) => void;
}

export function DataTableRowActions<TData>({
  row,
  handleRemoveRow,
}: DataTableRowActionsProps<TData>) {
  const playlist = playlistSchema.parse(row.original);

  const deletePlaylist = (id: string) => {
    playlistService
      .delete(id)
      .then(() => {
        handleRemoveRow(id); // Call the callback after deletion
      })
      .catch((error) => alert(error));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted ml-auto"
        >
          <MoreHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open Playlist</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <Link to={`/playlists/edit/${playlist.id}`}>
          <DropdownMenuItem>Edit</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => deletePlaylist(playlist.id)}>
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
