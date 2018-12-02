// eslint-disable
// this is an auto generated file. This will be overwritten

export const createBugachi = `mutation CreateBugachi($input: CreateBugachiInput!) {
  createBugachi(input: $input) {
    product_id
    sku_number
    name
    product_url
    pixel
    sale_price
    retail_price
    long_description
    productimage_url
    primary_category
    secondary_category
    shipping_availability
    shipping_information
    upc
    manufacturer
  }
}
`;
export const updateBugachi = `mutation UpdateBugachi($input: UpdateBugachiInput!) {
  updateBugachi(input: $input) {
    product_id
    sku_number
    name
    product_url
    pixel
    sale_price
    retail_price
    long_description
    productimage_url
    primary_category
    secondary_category
    shipping_availability
    shipping_information
    upc
    manufacturer
  }
}
`;
export const deleteBugachi = `mutation DeleteBugachi($input: DeleteBugachiInput!) {
  deleteBugachi(input: $input) {
    product_id
    sku_number
    name
    product_url
    pixel
    sale_price
    retail_price
    long_description
    productimage_url
    primary_category
    secondary_category
    shipping_availability
    shipping_information
    upc
    manufacturer
  }
}
`;
export const createCategories = `mutation CreateCategories($input: CreateCategoriesInput!) {
  createCategories(input: $input) {
    id
    category
    subcategories
  }
}
`;
export const updateCategories = `mutation UpdateCategories($input: UpdateCategoriesInput!) {
  updateCategories(input: $input) {
    id
    category
    subcategories
  }
}
`;
export const deleteCategories = `mutation DeleteCategories($input: DeleteCategoriesInput!) {
  deleteCategories(input: $input) {
    id
    category
    subcategories
  }
}
`;
