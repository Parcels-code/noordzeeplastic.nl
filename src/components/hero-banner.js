import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react'

import { Image } from '@/components/mdx'

export const HeroBanner = () => {
  return (
    <Box id='header' as='section' bg='#FFFFFF'>
      <Container maxW='container.lg' pt={24} centerContent mb={0} pb={12}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          justify={'center'}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  zIndex: -1,
                }}
                color={'#27187E'}
              >
                VirtualShip
              </Text>
              <br />
              <Text as={'span'} color={'#758BFD'}>
                Noordzee Plastic: Waar plastic afval en wetenschap samenkomen
              </Text>
            </Heading>
            <Text fontSize={'lg'} mt={0}>
              Tijdens het <strong>Noordzee plastic</strong> experiment laten we bijna 500 drifters los in de Noordzee. Daarmee brengen we in kaart hoe stromingen, golven en wind plastic afval verspreiden. Doe mee en volg de drifters in real-time!
            </Text>
          </Stack>
          <Stack flex={1} spacing={{ base: 10, md: 20 }}>
            {
              <Image
                src={'/waddendrifter.jpg'}
                alt='Een drifter op het strand'
                objectFit='contain'
              ></Image>
            }
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}
