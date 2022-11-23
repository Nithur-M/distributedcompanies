import { Flex, Text, Grid, useColorModeValue, Button, useMediaQuery, Divider } from '@chakra-ui/react';
import Link from 'next/link';
    
const Footer = () => {
    const borderColor = useColorModeValue('gray', 'gray.700');
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');
    const columns = isMobile ? 'repeat(1, 1fr)' : isLargerThan1280 ? 'repeat(5, 1fr)' : 'repeat(3, 1fr)';

    return(
        <Flex direction="column" borderTop="1px" bottom="0" mt="20" borderColor={borderColor} align={isMobile ? 'none' : "baseline"} p="2" gap="3" w="full">
            <Text fontSize="sm">Want to add a company? Go to <a href="https://github.com/Nithur-M/locationflexiblecompanies" style={{ textDecoration: 'underline'}}>Github</a></Text>
        </Flex>
    )
}
    
export default Footer;