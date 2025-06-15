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
import TableCategory from "./table-category";
import ContentAdminIntro from "@/components/common/content-admin-intro";
import { ADMIN_ADD_CATEGORY } from "@/services/constant/api-url";
import TitleBlock from "@/components/common/title-block";

// Mock data - replace with your actual data source
const mockCategories = [
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

const CategoriesPage = () => {
  // const {categories}=useCategory()
  const [categories, setCategories] = useState(mockCategories);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleDelete = (id: number) => {
    // setCategories(categories.filter((category) => category.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <ChatBot /> */}

      <div className="flex flex-col gap-6">
        {/* Header */}
        <TitleBlock  >
          <ContentAdminIntro title="Categories" description="Organize and manage categories to structure your products, users, and orders efficiently." />

          <Button asChild className="w-full sm:w-auto">
            <Link to={ADMIN_ADD_CATEGORY}>
              <Plus />
              Add Category
            </Link>
          </Button>
        </TitleBlock>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Search Categories</CardTitle>
            <CardDescription>
              Find categories by name or description
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
              <Input
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Categories Table */}
        <TableCategory filteredCategories={filteredCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
