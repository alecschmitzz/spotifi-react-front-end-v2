import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";

import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { XIcon } from "lucide-react";

type ColumnFilterOptions = {
  [key: string]: { label: string; value: string }[];
};

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  columnFilterOptions?: ColumnFilterOptions;
  filterColumn: string;
}

export function DataTableToolbar<TData>({
  table,
  columnFilterOptions,
  filterColumn,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter..."
          value={
            (table.getColumn(filterColumn)?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn(filterColumn)?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanFilter()
          )
          .map((column) => {
            const options =
              columnFilterOptions && columnFilterOptions[column.id]
                ? columnFilterOptions[column.id]
                : [];

            if (options.length === 0) {
              return null;
            }

            return (
              <DataTableFacetedFilter
                key={column.id}
                column={column}
                title={column.id}
                options={options}
              />
            );
          })}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <XIcon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
