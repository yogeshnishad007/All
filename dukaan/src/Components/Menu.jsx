import {Flex,Image,Text} from "@chakra-ui/react"


const Menu = ({image,text}) =>{

    return(
        <>

                   <Flex gap="20px" padding="8px 16px">

                        <Image width="20px" src={image} alt={text} />
                        <Text fontSize="14px" color="#FFFFFF">{text}</Text>

                    </Flex>
        
        </>
    )
}

export default Menu;