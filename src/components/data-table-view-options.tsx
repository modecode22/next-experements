"use client";

// import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { LuChevronDown ,LuFlipHorizontal} from "react-icons/lu";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Button,
  DropdownTrigger,
  Checkbox,
} from "@nextui-org/react";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function DataTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          endContent={<LuChevronDown className="h-4 w-4" />}
          variant="flat"
        >
          <LuFlipHorizontal className="mr-2 h-4 w-4" />
          View
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        closeOnSelect={false}
        aria-label="Table columns"
        selectionMode="multiple"
        className="w-[150px]"
      >
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide()
          )
          .map((column) => {
            return (
              <DropdownItem key={column.id} className="capitalize">
                <Checkbox
                  checked={column.getIsVisible()}
                  onChangeCapture={(value) => column.toggleVisibility(!!value)}
                  defaultSelected
                >
                  {column.id}
                </Checkbox>
              </DropdownItem>
            );
          })}
      </DropdownMenu>
    </Dropdown>
  );
}
