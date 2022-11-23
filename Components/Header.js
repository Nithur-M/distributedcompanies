import { Flex, Text, Box, Image, Spacer, useColorModeValue, useColorMode, Button, useMediaQuery,
    Menu, MenuList, MenuItem, MenuButton } from '@chakra-ui/react';

import Link from 'next/link';
    
const Header = () => {
    const borderColor = useColorModeValue('gray', 'gray.700');
    const { colorMode, toggleColorMode } = useColorMode()
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    
    return(
        <Flex direction={isMobile ? 'column' : 'row'} borderBottom="1px" mb="8" borderColor={borderColor} align="baseline" p="1" gap="2" >
            <Link href='/'>
               <Text fontWeight="900" fontSize="6xl">Distributed<br/>Companies</Text>                
            </Link>
            <Spacer />

            <Flex direction="column" w={['sm', 'md']}>
                <Text fontWeight="500" fontSize={isMobile ? "sm" : "xl"}>A directory of companies with distributed teams.</Text>
                <Text color="gray">Work with your kid at pool side or while travelling the world, this list help you find a distributed company to get a flexible job.</Text>
                <Text>By <a href='https://twitter.com/nithurM' style={{ color: 'blue', textDecoration: 'underline'}}>Nithur</a></Text>
            </Flex>
           

            
        </Flex>
    )
}
    
    export default Header;