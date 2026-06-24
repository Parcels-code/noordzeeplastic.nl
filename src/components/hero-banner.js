import { Box, Container, Heading, Text } from '@chakra-ui/react'

import { Image } from '@/components/mdx'

export const HeroBanner = () => {
  return (
    <Box id='header' as='section' bg='#FFFFFF'>
      <Container maxW='container.lg' pt={24} centerContent mb={0} pb={12}>
        <Box display='flex' flexDirection='column' alignItems='center' gap={{ base: 8, md: 10 }}>
          <Box flex={1} display='flex' flexDirection='column' gap={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text as={'span'} color={'#27187E'}>
                Noordzee Plastic
              </Text>
              <Text as={'span'} color={'#27187E'}>
                <br></br>Waar plastic afval en wetenschap samenkomen
              </Text>
            </Heading>
            <Text fontSize={'lg'} mt={0}>
              Tijdens het <strong>Noordzee plastic</strong> experiment laten we bijna 500 drifters los in de Noordzee. Daarmee brengen we in kaart hoe stromingen, golven en wind plastic afval verspreiden. Doe mee en volg de drifters in real-time!
            </Text>
          </Box>
          <Box flex={1}>
            <Image
              src={'/waddendrifter.jpg'}
              alt='Een drifter op het strand'
              objectFit='contain'
            ></Image>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
