import { AtSign, Clock, type LucideIcon } from "lucide-react";

export const columns_users = [
  { id: "no", label: "# no", icon: Clock },
  { id: "id", label: "id", icon: Clock },
  { id: "email", label: "email", icon: AtSign },
  { id: "username", label: "username", icon: Clock },
  { id: "role", label: "role", icon: Clock },
  { id: "status", label: "status", icon: Clock },
  { id: "joined_at", label: "joined At", icon: Clock },
  { id: "updated_at", label: "updated At", icon: Clock },
  { id: "last_login", label: "last Login", icon: Clock },
  { id: "actions", label: "actions" },
] as Array<{ id: string; label: string; icon?: string }>;

export const columns_categories = [
  { id: "no", label: "# no" },
  { id: "id", label: "id" },
  { id: "category_name", label: "category name" },
  { id: "status", label: "status" },
  { id: "created_at", label: "created At", icon: Clock },
  { id: "updated_at", label: "updated At", icon: Clock },
  { id: "actions", label: "actions" },
] as Array<{ id: string; label: string; icon?: LucideIcon }>;

export const columns_products = [
  { id: "no", label: "# no" },
  { id: "id", label: "id" },
  { id: "product_name", label: "product name" },
  { id: "discount", label: "discount" },
  { id: "stock", label: "stock" },
  { id: "unit", label: "unit" },
  { id: "sold", label: "sold" },
  { id: "price", label: "price" },
  { id: "quantity", label: "quantity" },
  { id: "status", label: "status" },
  { id: "created_at", label: "created At", icon: Clock },
  { id: "updated_at", label: "updated At", icon: Clock },
  { id: "actions", label: "actions" },
] as Array<{ id: string; label: string; icon?: string }>;

export const columns_subcategories = [
  { id: "no", label: "# no" },
  { id: "id", label: "id" },
  { id: "subcategory_name", label: "subcategory name" },
  { id: "category", label: "category" },
  { id: "created_at", label: "created At", icon: Clock },
  { id: "updated_at", label: "updated At", icon: Clock },
  { id: "actions", label: "actions" },
] as Array<{ id: string; label: string; icon?: LucideIcon }>;
export const columns_brands = [
  { id: "no", label: "# no" },
  { id: "id", label: "id" },
  { id: "brand_name", label: "brand name" },
  { id: "created_at", label: "created At", icon: Clock },
  { id: "updated_at", label: "updated At", icon: Clock },
  { id: "actions", label: "actions" },
] as Array<{ id: string; label: string; icon?: LucideIcon }>;
export const columns_orders = [
  { id: "no", label: "# no" },
  // { id: "no", label: "no" },
  // { id: "no", label: "no" },
  // { id: "no", label: "no" },
  { id: "created_at", label: "created At", icon: Clock },
  { id: "updated_at", label: "updated At", icon: Clock },
  { id: "actions", label: "actions" },
] as Array<{ id: string; label: string; icon?: string }>;
// { id: "category_name", label: "category name" },
// { id: "description", label: "description" },
// { id: "image", label: "image" },

// { id: "rating", label: "rating" },
// { id: "rating_count", label: "rating count" },
// { id: "brand_name", label: "brand name" },
// { id: "sub_category_name", label: "sub category name" },
// { id: "color", label: "color" },
// { id: "size", label: "size" },
// { id: "weight", label: "weight" },
// { id: "dimensions", label: "dimensions" },
// { id: "material", label: "material" },
// { id: "condition", label: "condition" },
// { id: "warranty", label: "warranty" },
// { id: "shipping", label: "shipping" },
// { id: "shipping_cost", label: "shipping cost" },
// { id: "shipping_time", label: "shipping time" },
// { id: "shipping_location", label: "shipping location" },
// { id: "shipping_method", label: "shipping method" },
// { id: "shipping_details", label: "shipping details" },
// { id: "shipping_policy", label: "shipping policy" },
// { id: "shipping_charges", label: "shipping charges" },
// { id: "shipping_type", label: "shipping type" },
// { id: "stock_type", label: "stock type" },
// { id: "stock_status", label: "stock status" },
// { id: "stock_location", label: "stock location" },
