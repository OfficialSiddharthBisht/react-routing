import React  from "react";
import {Link} from "react-router-dom";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

function Product()
{
    const [products,setProducts]=React.useState([]);
    React.useEffect(
        ()=>{
            fetch(`http://localhost:8080/products`)
            .then((res)=>res.json())
            .then((res)=>{
                setProducts(res);
            })
            .catch((error)=>
            {
                console.log(error);
            })
        },[]
    )
    return(
        
        <Table variant="striped" colorScheme="teal">
            <Thead>
                
                <Th>Product Name</Th>
                <Th>Product Price</Th>
                <Th>More Details</Th>
             
            </Thead>
            <Tbody>
            {
                products?.map((product)=>
                (
                 <Tr key={product.id}>
                    <Td>{product.name}</Td>
                    <Td>{product.price}</Td>
                    <Td><Link to={`/products/${product.id}`}>More Details</Link></Td>
                    
                 </Tr>   
                ))
            }
            </Tbody>
        </Table>
        
    )
} 

export default Product;