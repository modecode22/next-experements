"use client"

import { LuDroplets } from "react-icons/lu"
import { Row } from "@tanstack/react-table"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"
import { taskSchema } from "./data/schema"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const task = taskSchema.parse(row.original)

  return (
    <Dropdown>
      <DropdownTrigger >
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <LuDroplets className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu  className="w-[160px]">
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Make a copy</DropdownItem>
        <DropdownItem>Favorite</DropdownItem>
        <DropdownItem>
          Delete
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
