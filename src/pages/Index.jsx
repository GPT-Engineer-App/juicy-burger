import { Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaHamburger, FaPlus, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg={useColorModeValue("gray.100", "gray.900")} minH="100vh" py="12" px={{ base: "4", lg: "8" }}>
        <Box bg="white" w="full" mx="auto" p="6" rounded="lg" shadow="lg">
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
            <Heading fontWeight="extrabold" letterSpacing="tight" size="xl" bgGradient="linear(to-r, red.400,pink.400)" bgClip="text">
              Chud Burger
            </Heading>
            <Button leftIcon={<FaShoppingCart />} colorScheme="pink" variant="solid" size="md" mt={{ base: "4", md: "0" }}>
              Checkout
            </Button>
          </Flex>

          <Stack direction={{ base: "column", md: "row" }} spacing="8" mt="10" align="center">
            <Box boxSize="sm">
              <Image src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXJnZXJ8ZW58MHx8fHwxNzEwMjg0NTUyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Delicious Burger" borderRadius="md" />
            </Box>
            <Stack flex="1" spacing="6">
              <Heading size="lg">Classic Burger</Heading>
              <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.400")}>
                Our classic burger is made with 100% pure beef patty, topped with cheese, fresh lettuce, tomatoes, and our special sauce.
              </Text>
              <Button leftIcon={<FaPlus />} colorScheme="green" variant="solid" size="lg">
                Add to Cart
              </Button>
            </Stack>
          </Stack>

          <Flex justify="center" align="center" mt="10">
            <Button leftIcon={<FaHamburger />} colorScheme="yellow" variant="solid" size="lg">
              See More Burgers
            </Button>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};

export default Index;
