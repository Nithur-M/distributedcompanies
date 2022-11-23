import { Flex, SimpleGrid, Box, Tag, Text, Button, Circle, useMediaQuery } from '@chakra-ui/react';
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

import Image from 'next/image';
import Link from 'next/link';

const Home = ({data}) => {
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    
    return (
        <Flex direction="column" align="center" gap="2">
           {/* <TableContainer mt="4">
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th>Logo</Th>
                        <Th>Name</Th>
                        <Th>Industry</Th>
                        <Th>Number of Countries</Th>
                        <Th>Countries</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {data.map(company =>
                    <Tr>
                        <Td><Circle size={['80px']} bg="white" ><Image src={company.logo} width="100" height="100" style={{ borderRadius: '50%' }} objectFit='contain' loading="lazy" alt={company.name} /></Circle></Td>
                        <Td>{company.name}</Td>
                        <Td>{company.industry}</Td>
                        <Td>{company.countries.length}</Td>
                        <Td fontSize="2xl" minW="56"><SimpleGrid minChildWidth='36px' spacing='4px'>{company.countries.map(country => <Box></Box>)}</SimpleGrid></Td>
                    </Tr>
                    )}
                    </Tbody>
                </Table>
                </TableContainer> */}
            {data.map(company => 
            <Flex alignItems="center" border="1px" borderColor="gray.300" p="2" gap="2" borderRadius="lg" w={['22rem', 'md', '2xl', '5xl']} >
                <Circle size={['80px']} bg="white" ><Image src={company.logo} width="100" height="100" style={{ borderRadius: '50%' }} objectFit='contain' loading="lazy" alt={company.name} /></Circle>
                <Flex direction="column" gap="1" w={['xs', 'sm', 'md']}> 
                    <Text fontSize={isMobile? "sm" : "xl"} fontWeight="600" >{company.name}</Text>
                    <Tag w="max-content">{company.industry}</Tag>
                    <Text color="gray">{company.description}</Text>
                    <Text>Distributed across {company.number_of_countries} countries</Text>
                    {isMobile ? <Link href={company.url} style={{ marginLeft: "auto"}}><Button>Career page</Button></Link> : null}
                </Flex>
                {isMobile ? null : <Link href={company.url} style={{ marginLeft: "auto"}}><Button>Career page</Button></Link>}
            </Flex>
            )}
        </Flex>
    )
}

export default Home;