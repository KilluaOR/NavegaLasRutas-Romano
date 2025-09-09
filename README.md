# Tabaquería Rodriguez - React Router Implementation

## Features Implemented

### ✅ React Router Implementation

- **BrowserRouter** wrapping the entire application
- **Routes** and **Route** components for navigation
- Dynamic routing with parameters (`:id`, `:category`)

### ✅ Component Architecture

- **Container Components** (state management):

  - `ItemListContainer` - Manages product list state and async data fetching
  - `ItemDetailContainer` - Manages individual product state and async data fetching

- **Presentation Components** (UI only):
  - `ItemList` - Displays list of products using Array.map()
  - `ItemCard` - Individual product card component
  - `ItemDetail` - Detailed product view
  - `NavBar` - Navigation with routing links

### ✅ Async Data Fetching

- **Promises** with simulated delays:
  - `getProducts()` - 2 second delay
  - `getProductById(id)` - 1.5 second delay
  - `getProductsByCategory(category)` - 1 second delay
- Loading states with spinners
- Error handling for failed requests

### ✅ Array.map() and Key Props

- Product list rendering using `Array.map()`
- Proper `key` prop for each item (`product.id`)
- Dynamic content based on data

### ✅ useParams() Hook

- **ItemDetailContainer** uses `useParams()` to get product ID from URL
- **ItemListContainer** uses `useParams()` to get category from URL
- Dynamic routing: `/item/:id` and `/category/:category`

## Routes Structure

```
/ - Home page (all products)
/category/tabaco-armar - Tobacco for rolling
/category/tabaco-pipa - Pipe tobacco
/category/accesorios - Accessories
/item/:id - Individual product detail
```

## Sample Data

The app includes 8 sample products across 3 categories:

- **Tabaco para armar** (2 products)
- **Tabaco para pipa** (2 products)
- **Accesorios** (4 products)

## Usage

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Navigate to the displayed URL (usually http://localhost:5173)

## Features

- **Responsive Design** - Works on mobile and desktop
- **Loading States** - Shows spinners during data fetching
- **Error Handling** - Graceful error messages
- **Modern UI** - Clean, professional design with hover effects
- **Navigation** - Fixed navbar with category links
- **Product Details** - Detailed view with images and descriptions
