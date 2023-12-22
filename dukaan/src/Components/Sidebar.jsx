
import { Box, VStack, Flex, Image, Text } from '@chakra-ui/react';
import Menu from "./Menu";
import Home from "../Icon/Home.png"
import Order from "../Icon/Order.png"
import Product from "../Icon/Product.png"
import Delivery from "../Icon/Delivery.png"
import Marketing from "../Icon/Marketing.png"
import Analytics from "../Icon/Analytics.png"
import Payouts from "../Icon/Payouts.png"
import Discounts from "../Icon/Discounts.png"
import Audience from "../Icon/Audience.png"
import Appearance from "../Icon/Appearance.png"
import Plugins from "../Icon/plugins.png"
import Wallet from "../Icon/wallet.png"
import Logo from "../Icon/Image.png"
const Sidebar = () => {

    return (
        <>

            <Box bg="#353C53" h="100vh" w="60" marginTop={0} >

                <Box width="192px" height="42px" bg="#353C53" padding="24px 6px" marginBottom="24px" mx="auto" display="flex" alignItems="center">
                    <Flex gap="20px" padding="8px 16px">

                        <Image width="39px" height="39px" src={Logo} alt='Home' />
                        <Box>
                            <Text fontSize="15px" fontFamily="Inter" fontWeight="500" color="#FFFFFF">Nishyan</Text>
                            <Text fontSize="13px" fontFamily="Galano Grotesque" fontWeight="400" color="#FFFFFF">Visit store</Text>
                        </Box>


                    </Flex>
                </Box>

                <VStack align="left" paddingRight="20px" cursor="pointer">

                    <Menu image={Home} text="Home" />

                    <Menu image={Order} text="Order" />
                    <Menu image={Product} text="Products" />
                    <Menu image={Delivery} text="Delivery" />
                    <Menu image={Marketing} text="Marketing" />
                    <Menu image={Analytics} text="Analytics" />
                    <Menu image={Payouts} text="Payouts" />
                    <Menu image={Discounts} text="Discounts" />
                    <Menu image={Audience} text="Audience" />
                    <Menu image={Appearance} text="Appearance" />
                    <Menu image={Plugins} text="Plugins" />

                </VStack>

                <Box width="224px" height="50px" bg="#FFFFFF1A" marginTop="100px" mx="auto" borderRadius="4px">
                    <Flex gap="20px" padding="8px 16px">

                        <Image width="24px" height="24px" src={Wallet} alt='Home' />
                        <Box>
                            <Text fontSize="13px" fontFamily="Inter" fontWeight="400" color="#FFFFFF">Available credits</Text>
                            <Text fontSize="16px" fontFamily="Inter" fontWeight="500" color="#FFFFFF">222.10</Text>
                        </Box>


                    </Flex>



                </Box>


            </Box>
        </>
    )
}

export default Sidebar;