// eslint-disable
// this is an auto generated file. This will be overwritten

export const getBugatchi = `query GetBugatchi($product_id: String!, $category: String!) {
  getBugatchi(product_id: $product_id, category: $category) {
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
export const listBugatchis = `query ListBugatchis(
  $filter: TableBugatchiFilterInput
  $limit: Int
  $nextToken: String
) {
  listBugatchis(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const queryBugatchisByCategoryIndex = `query QueryBugatchisByCategoryIndex(
  $category: String!
  $subcategory: String
  $first: Int
  $after: String
) {
  queryBugatchisByCategoryIndex(
    category: $category
    subcategory: $subcategory
    first: $first
    after: $after
  ) {
    items {
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
    nextToken
  }
}
`;
export const getSubcategories = `query GetSubcategories($subcategory: String!, $category: String!) {
  getSubcategories(subcategory: $subcategory, category: $category) {
    category
    subcategory
  }
}
`;
export const listSubcategories = `query ListSubcategories(
  $filter: TableSubcategoriesFilterInput
  $limit: Int
  $nextToken: String
) {
  listSubcategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      category
      subcategory
    }
    nextToken
  }
}
`;
export const getCategories = `query GetCategories($categories: String!) {
  getCategories(categories: $categories) {
    categories
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
      categories
    }
    nextToken
  }
}
`;
