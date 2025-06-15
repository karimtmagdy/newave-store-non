
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Plus, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import TableProduct from "./table-product";
import TitleBlock from "@/components/common/title-block";
import ContentAdminIntro from "@/components/common/content-admin-intro";
import { ADMIN_ADD_PRODUCT } from "@/services/constant/api-url";

// Mock data - replace with your actual data source
const mockProducts = [
  {
    id: 1,
    name: "Technology",
    description: "All things tech related",
    status: "active",
    createdAt: "2024-01-15",
    postCount: 24,
  },
  {
    id: 2,
    name: "Design",
    description: "UI/UX and graphic design content",
    status: "active",
    createdAt: "2024-01-10",
    postCount: 18,
  },
  {
    id: 3,
    name: "Marketing",
    description: "Digital marketing strategies",
    status: "inactive",
    createdAt: "2024-01-05",
    postCount: 12,
  },
  {
    id: 4,
    name: "Business",
    description: "Business and entrepreneurship",
    status: "active",
    createdAt: "2024-01-01",
    postCount: 31,
  },
];

const ProductsPage = () => {

  const [products, setProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleDelete = (id: number) => {
    // setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <ChatBot /> */}

      <div className="flex flex-col gap-6">
        {/* Header */}
        <TitleBlock  >

          <ContentAdminIntro title="Products" description="View and manage your product listings, prices, and availability all in one place." />
          <Button asChild className="w-full sm:w-auto">
            <Link to={ADMIN_ADD_PRODUCT}>
              <Plus />
              Add Product
            </Link>
          </Button>
        </TitleBlock>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Search Products</CardTitle>
            <CardDescription>
              Find products by name or description
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Products Table */}
        <TableProduct filteredProducts={filteredProducts} />
      </div>
    </div>
  );
};



export default ProductsPage