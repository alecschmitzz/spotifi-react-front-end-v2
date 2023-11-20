import { Row } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontalIcon, PlusCircleIcon } from "lucide-react";
import { playlists } from "@/data/playlists";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted ml-auto"
        >
          <MoreHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            {/* <PlusCircleIcon className="mr-2 h-4 w-4" /> */}
            <span>Add to Playlist</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {playlists.map((playlist, index) => (
                <DropdownMenuItem key={playlist + index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="mr-2 h-4 w-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15V6M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM12 12H3M16 6H3M12 18H3" />
                  </svg>
                  {playlist}
                </DropdownMenuItem>
              ))}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuItem>Removed from your Liked Songs</DropdownMenuItem>
        <DropdownMenuItem>Add to queue</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Go to artist</DropdownMenuItem>
        <DropdownMenuItem>Go to album</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Share</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
