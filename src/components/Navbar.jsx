import React from "react";
import {Box} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

function Navbar(){
    return(
        <Box
            display= "flex"
            flexDirection= "row"
            padding="12px"
            border= "1px solid black"
            borderRadius = "10px"
            justifyContent = "space-between"
        >
            <Link style={{textDecoration:"none"}} to ="/">Home</Link>
            <Link style={{textDecoration: "none"}} to = "/products">Products</Link>
        </Box>
    )
}

export default Navbar;