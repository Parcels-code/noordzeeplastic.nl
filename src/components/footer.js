import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react'

import { Image, Link } from '@/components/mdx'
import { footerItems } from '@/data/footer-items'

const SocialButton = ({ children, label, href }) => {
  return (
    <Button
      bg='blackAlpha.100'
      rounded={'full'}
      w={12}
      h={12}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: 'blackAlpha.200',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </Button>
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'bold'} mb={2}>
      {children}
    </Text>
  )
}

export const Footer = () => {
  return (
    <Box bg='gray.50' color='gray.700' as='footer'>
      <Container maxW='container.lg' my={8} centerContent>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3 }}
          spacing={{ base: 2, md: 8 }}
        >
          <Stack spacing={6}>
            <Box>
              <Image
                h={'48px'}
                src={'/drifter_logo.svg'}
                alt={'drifter logo'}
              />
            </Box>

            <Text fontSize={'sm'}>
              © {new Date().getFullYear()}, Noordzeeplastic developers.
            </Text>
            <Text fontSize={'sm'}>Apache 2.0 Licensed.</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Achtergrond</ListHeader>

            {footerItems.achtergrond.map((item) => {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  fontSize={'sm'}
                  color='black'
                  textDecoration='none'
                  _hover={{ color: 'black', textDecoration: 'none' }}
                >
                  {item.label}
                </Link>
              )
            })}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
