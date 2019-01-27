// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateBugatchi = `subscription OnCreateBugatchi(
  $product_id: String
  $category: String
  $subcategory: String
  $description: String
  $manufacturer_part_number: String
) {
  onCreateBugatchi(
    product_id: $product_id
    category: $category
    subcategory: $subcategory
    description: $description
    manufacturer_part_number: $manufacturer_part_number
  ) {
    product_id
    category
    subcategory
    description
    manufacturer_part_number
    name
    pixel
    product_url
    productimage_url
    retail_price
    sale_price
    shipping_info
    sku_number
    upc
  }
}
`;
export const onUpdateBugatchi = `subscription OnUpdateBugatchi(
  $category: String
  $product_id: String
  $subcategory: String
  $description: String
  $manufacturer_part_number: String
) {
  onUpdateBugatchi(
    category: $category
    product_id: $product_id
    subcategory: $subcategory
    description: $description
    manufacturer_part_number: $manufacturer_part_number
  ) {
    product_id
    category
    subcategory
    description
    manufacturer_part_number
    name
    pixel
    product_url
    productimage_url
    retail_price
    sale_price
    shipping_info
    sku_number
    upc
  }
}
`;
export const onDeleteBugatchi = `subscription OnDeleteBugatchi(
  $product_id: String
  $category: String
  $subcategory: String
  $description: String
  $manufacturer_part_number: String
) {
  onDeleteBugatchi(
    product_id: $product_id
    category: $category
    subcategory: $subcategory
    description: $description
    manufacturer_part_number: $manufacturer_part_number
  ) {
    product_id
    category
    subcategory
    description
    manufacturer_part_number
    name
    pixel
    product_url
    productimage_url
    retail_price
    sale_price
    shipping_info
    sku_number
    upc
  }
}
`;
export const onCreateSubcategories = `subscription OnCreateSubcategories($category: String, $subcategory: String) {
  onCreateSubcategories(category: $category, subcategory: $subcategory) {
    category
    subcategory
  }
}
`;
export const onUpdateSubcategories = `subscription OnUpdateSubcategories($category: String, $subcategory: String) {
  onUpdateSubcategories(category: $category, subcategory: $subcategory) {
    category
    subcategory
  }
}
`;
export const onDeleteSubcategories = `subscription OnDeleteSubcategories($category: String, $subcategory: String) {
  onDeleteSubcategories(category: $category, subcategory: $subcategory) {
    category
    subcategory
  }
}
`;
export const onCreateCategories = `subscription OnCreateCategories($categories: String) {
  onCreateCategories(categories: $categories) {
    categories
  }
}
`;
export const onUpdateCategories = `subscription OnUpdateCategories($categories: String) {
  onUpdateCategories(categories: $categories) {
    categories
  }
}
`;
export const onDeleteCategories = `subscription OnDeleteCategories($categories: String) {
  onDeleteCategories(categories: $categories) {
    categories
  }
}
`;
