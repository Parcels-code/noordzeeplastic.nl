import { Layout } from '@/components/layout'
import { Box, Container, Heading, Text, Accordion } from '@chakra-ui/react'
import { ViciPublications } from '@/data/publications'
import { Paper } from '@/components/paper'

const vicipublications = () => {
  return (
    <Layout
      title={'Publicaties uit het Noordzeeplastic project'}
      card={
        'https://github.com/Parcels-code/virtualship.parcels-code.org/blob/main/public/virtualship-assets/logo_no-text.png?raw=true'
      }
      url={`/publications`}
    >
      <Box as='section' py={20}>
        <Container maxW='container.lg'>
          <Heading as='h1' size='2xl' textAlign={'center'}>
            Publicaties uit het Noordzeeplastic project
          </Heading>

          <Box id='publications' />

          <Accordion allowMultiple>
            {[...ViciPublications].reverse().map((paper, index, array) => (
              <Paper
                key={paper.title}
                published_info={paper.published_info}
                title={paper.title}
                authors={paper.authors}
                doi={paper.doi}
                abstract={paper.abstract}
                number={array.length - index}
              />
            ))}
          </Accordion>
        </Container>
      </Box>
    </Layout>
  )
}

export default vicipublications
