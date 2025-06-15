

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Plus } from "lucide-react";
import { Link } from "react-router";

import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";
import { useState } from "react";
import TableMember from "./table-member";
import TitleBlock from "@/components/common/title-block";
import ContentAdminIntro from "@/components/common/content-admin-intro";
import { ADMIN_ADD_BRAND, ADMIN_ADD_USER } from "@/services/constant/api-url";

// Mock data - replace with your actual data source
const mockMembers = [
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

const MembersPage = () => {
  const [members, setMembers] = useState(mockMembers);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleDelete = (id: number) => {
    // setMembers(members.filter((member) => member.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <ChatBot /> */}

      <div className="flex flex-col gap-6">
        {/* Header */}
        <TitleBlock  >

          <ContentAdminIntro title="Members" description="Manage users, roles, and access to keep your system secure and organized." />
          {/* <ContentAdminIntro title="Members" description="View and manage user accounts, roles, and permissions with ease and control." /> */}
          <Button asChild className="w-full sm:w-auto">
            <Link to={ADMIN_ADD_USER}>
              <Plus />
              Add Member
            </Link>
          </Button>
        </TitleBlock>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Search Members</CardTitle>
            <CardDescription>
              Find members by name or description
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
              <Input
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Members Table */}
        <TableMember filteredMembers={filteredMembers} />
      </div>
    </div>
  );
}

export default MembersPage