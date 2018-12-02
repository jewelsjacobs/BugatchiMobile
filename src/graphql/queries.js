// eslint-disable
// this is an auto generated file. This will be overwritten

export const getBugachi = `query GetBugachi($product_id: Int!) {
  getBugachi(product_id: $product_id) {
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
export const listBugachis = `query ListBugachis(
  $filter: TableBugachiFilterInput
  $limit: Int
  $nextToken: String
) {
  listBugachis(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCategories = `query GetCategories($id: String!) {
  getCategories(id: $id) {
    id
    category
    subcategories
  }
}
`;
export const listCategories = `query ListCategories(
  $filter: TableCategoriesFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      category
      subcategories
    }
    nextToken
  }
}
`;
