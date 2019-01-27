// eslint-disable
// this is an auto generated file. This will be overwritten

export const createBugatchi = `mutation CreateBugatchi($input: CreateBugatchiInput!) {
  createBugatchi(input: $input) {
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
export const updateBugatchi = `mutation UpdateBugatchi($input: UpdateBugatchiInput!) {
  updateBugatchi(input: $input) {
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
export const deleteBugatchi = `mutation DeleteBugatchi($input: DeleteBugatchiInput!) {
  deleteBugatchi(input: $input) {
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
export const createSubcategories = `mutation CreateSubcategories($input: CreateSubcategoriesInput!) {
  createSubcategories(input: $input) {
    category
    subcategory
  }
}
`;
export const updateSubcategories = `mutation UpdateSubcategories($input: UpdateSubcategoriesInput!) {
  updateSubcategories(input: $input) {
    category
    subcategory
  }
}
`;
export const deleteSubcategories = `mutation DeleteSubcategories($input: DeleteSubcategoriesInput!) {
  deleteSubcategories(input: $input) {
    category
    subcategory
  }
}
`;
export const createCategories = `mutation CreateCategories($input: CreateCategoriesInput!) {
  createCategories(input: $input) {
    categories
  }
}
`;
export const updateCategories = `mutation UpdateCategories($input: UpdateCategoriesInput!) {
  updateCategories(input: $input) {
    categories
  }
}
`;
export const deleteCategories = `mutation DeleteCategories($input: DeleteCategoriesInput!) {
  deleteCategories(input: $input) {
    categories
  }
}
`;
