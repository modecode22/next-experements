import {
  LuArrowDown,
  LuArrowUp,
  LuFilter,
  LuEyeOff,
} from "react-icons/lu"
import { Column } from "@tanstack/react-table"

import { cn } from "@/lib/utils"
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react"

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>
  title: string
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="flat"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {column.getIsSorted() === "desc" ? (
              <LuArrowDown className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "asc" ? (
              <LuArrowUp className="ml-2 h-4 w-4" />
            ) : (
              <LuFilter className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={() => column.toggleSorting(false)}>
            <LuArrowUp className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </DropdownItem>
          <DropdownItem onClick={() => column.toggleSorting(true)}>
            <LuArrowDown className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </DropdownItem>
          
          <DropdownItem onClick={() => column.toggleVisibility(false)}>
            <LuEyeOff className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
