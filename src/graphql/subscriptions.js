// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateBugachi = `subscription OnCreateBugachi($product_id: Int) {
  onCreateBugachi(product_id: $product_id) {
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
export const onUpdateBugachi = `subscription OnUpdateBugachi($product_id: Int) {
  onUpdateBugachi(product_id: $product_id) {
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
export const onDeleteBugachi = `subscription OnDeleteBugachi($product_id: Int) {
  onDeleteBugachi(product_id: $product_id) {
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
export const onCreateCategories = `subscription OnCreateCategories($id: String) {
  onCreateCategories(id: $id) {
    id
    category
    subcategories
  }
}
`;
export const onUpdateCategories = `subscription OnUpdateCategories($id: String) {
  onUpdateCategories(id: $id) {
    id
    category
    subcategories
  }
}
`;
export const onDeleteCategories = `subscription OnDeleteCategories($id: String) {
  onDeleteCategories(id: $id) {
    id
    category
    subcategories
  }
}
`;
