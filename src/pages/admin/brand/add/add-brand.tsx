import type React from "react";
// import { toast } from "react-hot-toast";
import { createElement, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ArrowLeft, Save, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";
import axios from "axios";
import { ADMIN_BRAND, API_BRANDS } from "@/services/constant/api-url";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { type TBrand } from "@/types/TBrand";
import ContentAdminIntro from "@/components/common/content-admin-intro";
import TitleBlock from "@/components/common/title-block";
export const createUser = async (Data: { name: string; }) => {
  const response = await axios.post(API_BRANDS, Data);
  return response.data;
};
const AddBrand = () => {
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<TBrand>({
    name: "",
    // description: "",
    // status: "active",
    // isActive: true,
    // image: "",
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['brands'] });
      console.log('User created:', data);
      setFormData({ name: "" });
      // setFormData({ name: "" });
      // optionally refetch queries or give UI feedback
    },
    onError: (error) => {
      console.error('Error creating user:', error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ name: formData.name }); // sending the data
  };

  return (
    <div className="container mx-auto py-8 px-4    ">
      <div className="flex flex-col gap-6  ">
        <TitleBlock  >

          <ContentAdminIntro title="Add New Brand" description="Add a new brand and associate it with your products for better brand visibility." />
          <Button asChild className="w-full sm:w-auto">
            <Link to={ADMIN_BRAND}>
              <ArrowLeft />
              Back
            </Link>
          </Button>
        </TitleBlock>
        <form onSubmit={handleSubmit} className=" space-y-2   ">
          <div className="grid  gap-y-4 md:grid-cols-1 lg:grid-cols-2   md:gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Enter the basic details for your brand
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Brand Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter brand name"
                    value={formData.name} autoComplete="off"
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter brand description" autoComplete="off"
                    // value={formData.description}
                    // onChange={(e) =>
                    //   handleInputChange("description", e.target.value)
                    // }
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="  ">
              <CardHeader>
                <CardTitle>Brand Settings</CardTitle>
                <CardDescription>
                  Configure brand behavior and hierarchy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="status">Active Status</Label>
                    <p className="text-sm text-muted-foreground">
                      Make this brand visible to users
                    </p>
                  </div>
                  <Switch
                    id="status"
                  // checked={formData.isActive}
                  // onCheckedChange={(checked) =>
                  //   handleInputChange("isActive", checked)
                  // }
                  />
                </div>
                <div className="    ">
                  <Label htmlFor="image">Image</Label>
                  <p className="text-sm text-muted-foreground">
                    Upload an image for your brand
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 items-center mt-2  ">
                    <div className="flex w-fit rounded-full border-2 border-dashed p-5">
                      {createElement(Image, {
                        className: "h-8 w-8 text-neutral-400",
                      })}
                    </div>

                    <div className="w-full">
                      <Input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleInputChange("image", e.target.value)
                        }
                      />
                      <p className="text-xs   sm:text-left text-center mt-2 ">
                        Pick a photo up to 1MB.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <Button variant="outline" asChild>
              <Link to={ADMIN_BRAND}>Cancel</Link>
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                  Creating...
                </>
              ) : (
                <>
                  <Save />
                  Create Brand
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBrand;
