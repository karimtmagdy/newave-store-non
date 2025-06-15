import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { columns_brands } from "@/services/constant/tables";
import { Edit, MoreHorizontal, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router";
import { ADMIN_ADD_BRAND } from "@/services/constant/api-url";

const TableBrand = ({ filteredBrands }: any) => {
  return <Card>
    <CardHeader>
      <CardTitle>All Brands ({filteredBrands.length})</CardTitle>
      <CardDescription>
        A list of all your brands and their details
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {columns_brands.map((column) => (
                <TableHead key={column.id} className="first:w-[70px] first:text-center last:w-[70px]">
                  {column.label}
                </TableHead>
              ))}

            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredBrands.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="py-8 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-muted-foreground">
                      No brands found
                    </p>
                    <Button asChild size="sm">
                      <Link to={ADMIN_ADD_BRAND}>
                        <Plus />
                        Add your brand
                      </Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              filteredBrands.map((brand: any) => (
                <TableRow key={brand.id}>
                  <TableCell>{brand.id}</TableCell>
                  <TableCell className="font-medium">
                    {brand.name}
                  </TableCell>
                  <TableCell className="max-w-[300px] truncate">
                    {brand.description}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        brand.status === "active"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {brand.status}
                    </Badge>
                  </TableCell>
                  {/* <TableCell>{brand.postCount}</TableCell> */}
                  <TableCell>{brand.createdAt}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-destructive"
                        // onClick={() => handleDelete(brand._id)}
                        >
                          <Trash2 />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
}
export default TableBrand