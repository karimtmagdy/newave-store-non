import ContentAdminIntro from "@/components/common/content-admin-intro";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ADMIN_ADD_BRAND, API_BRANDS } from "@/services/constant/api-url";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Plus, Search, } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import TableBrand from "./table-brand";
import TitleBlock from "@/components/common/title-block";

// Mock data - replace with your actual data source
const mockBrands = [
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
const fetchBrands = async () => {
  const response = await axios.get(API_BRANDS);
  return response.data
}
const useBrands = () => {
  const query = useQuery({
    queryKey: ['brands'],
    queryFn: fetchBrands
  })
  return query
}
const BrandsPage = () => {
  const { data } = useBrands()
  console.log(data)
  const [brands, setBrands] = useState(mockBrands);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBrands = brands.filter(
    (brand) =>
      brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleDelete = (id: number) => {
    setBrands(brands.filter((brand) => brand.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <ChatBot /> */}

      <div className="flex flex-col gap-6">
        <TitleBlock  >
          <ContentAdminIntro title="Brands" description="Keep track of product brands to improve filtering and organization." />
          <Button asChild className="w-full sm:w-auto">
            <Link to={ADMIN_ADD_BRAND}>
              <Plus />
              Add Brand
            </Link>
          </Button>
        </TitleBlock>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Search Brands</CardTitle>
            <CardDescription>
              Find brands by name or description
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
              <Input
                placeholder="Search brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>
        {/* Brands Table */}
        <TableBrand filteredBrands={filteredBrands} />
      </div>
    </div>
  );
};


export default BrandsPage