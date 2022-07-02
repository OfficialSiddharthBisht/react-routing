REACT ROUTING
Create the following routes

Home - /

All Products - /products

Product details - /products/:id

The All Products page should display the data (end of the question) in a tabular manner.

Product Name | Price | more details

on clicking the more details take user to /products/:id route

use useParams hook

on each page, display details of the product in that page

if the product id does not exist, show a statement saying "Product does not exist"

Create a 404 page, if the route does not exist

Use json-server to create mock the data

[
        {
            name : "SmartPhone",
            price: 30,
            id : 0
        },
        {
            name : "Watch",
            price : 20,
            id : 1
        },
        {
            name : "Shirt",
            price : 50,
            id : 2
        },
        {
            name : "Pants",
            price : 100,
            id : 3
        }
]