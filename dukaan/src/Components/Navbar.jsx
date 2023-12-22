
import { Box, Text, Stack, InputGroup, InputLeftElement, Input, Flex, Image } from '@chakra-ui/react';
import Search from "../Icon/search.png"
import Help from "../Icon/Help.png"
import Menu from "../Icon/Menu.png"
import Group from "../Icon/Group.png"


const Navbar = () => {

    return (
        <>
            <Box position="fixed" top="0" marginLeft="244px" bg="#FFFFFF" width="1216px" height="64px" >
                <Flex align="center">
                    <Box width="360px" marginLeft='50px' >
                        <Flex align="center" gap="6px">
                            <Image h="14px" src={Help} alt="Help" />
                            <Text color="#4D4D4D" fontSize="12px" fontFamily="Galano Grotesque" fontWeight="400" >How it works </Text>
                        </Flex>

                    </Box>

                    <Stack width="400px" mx="auto" marginTop="4vh" transform="translateY(-50%)">
                        <InputGroup>
                            <InputLeftElement pointerEvents='none'>
                                <Image src={Search} alt="Search" />
                            </InputLeftElement>
                            <Input type='tel' variant='filled' placeholder='Search features, tutorials, etc.' height="40px" />
                        </InputGroup>
                    </Stack>

                    <Box width="360px" marginRight="16px">
                        <Flex flexDirection="row-reverse" gap="20px">
                            <Image width="40px" height="40px" src={Menu} alt='Menu' />
                            <Image width="40px" height="40px" src={Group} alt='Group' />

                        </Flex>

                    </Box>
                </Flex>
            </Box>

        </>
    )
}

export default Navbar