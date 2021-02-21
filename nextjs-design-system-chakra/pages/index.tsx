// import Head from 'next/head'

import { Flex, Grid, Link, Text } from '@chakra-ui/core';
import Button from '../components/Button';
import Divider from '../components/Divider';
import Input from '../components/Input';

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '. . . .'
        '. logo form .'
        '. . . .'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" as="aside" flexDir="column" alignItems="flex-start">
        <img src="/rocketseat.svg" alt="Rocketseat" />

        <Text
          fontSize="4xl"
          fontWeight="bold"
          lineHeight="shorter"
          marginTop={16}
        >
          Faça seu login na plataforma
        </Text>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDirection="column"
        alignItems="stretch"
        padding={16}
      >
        <Input
          name="email"
          placeholder="E-mail"
          borderRadius="sm"
          backgroundColor="gray.800"
          focusBorderColor="purple.500"
        />

        <Input
          type="password"
          name="password"
          placeholder="Senha"
          marginTop={2}
          borderRadius="sm"
          backgroundColor="gray.800"
          focusBorderColor="purple.500"
        />

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          _hover={{ color: 'purple.500' }}
          color="purple.600"
          fontWeight="bold"
        >
          Esqueci minha senha
        </Link>
        
        <Button
          backgroundColor="purple.500"
          padding={2}
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'purple.600' }}
        >
          ENTRAR
        </Button>

        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
          Não tem uma conta?{' '}
          <Link
            _hover={{ color: 'purple.500' }}
            color="purple.600"
            fontWeight="bold"
          >
            Registre-se
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm">Ou entre com</Text>
          <Button
            backgroundColor="gray.600"
            flex="1"
            marginLeft={6}
            _hover={{ backgroundColor: 'purple.500' }}
          >
            GITHUB
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
