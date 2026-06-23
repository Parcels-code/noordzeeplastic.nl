import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Link } from '@/components/mdx'
import { Box, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import ReactGA from 'react-ga4'
import { useEffect } from 'react'

// Google Analytics
ReactGA.initialize('G-62W42QPRQC')

export const Layout = ({
  title,
  description,
  card,
  children,
  url = 'https://noordzeeplastic.nl',
}) => {
  // Track page views
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview' })
  }, [])

  // Determine the base URL based on the environment
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://noordzeeplastic.nl'
      : 'http://localhost:3000'

  // Construct the full card URL
  const fullCardUrl = card.startsWith('http') ? card : `${baseUrl}${card}`

  return (
    <>
      <Head>
        {/* Open Sans font-face for global usage */}
        <style>{`
          @font-face {
            font-family: 'Open Sans';
            src: url('/fonts/OpenSans-VariableFont_wdth,wght.ttf') format('truetype');
            font-weight: 1 1000;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'Open Sans';
            src: url('/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf') format('truetype');
            font-weight: 1 1000;
            font-style: italic;
            font-display: swap;
          }
        `}</style>
        <meta content='IE=edge' httpEquiv='X-UA-Compatible' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={fullCardUrl} />
        <meta property='og:url' content={url} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={fullCardUrl} />
        <meta name='twitter:card' content='summary_large_image' />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/drifter_logo.svg'
        />
        <link rel='icon' type='image/svg+xml' href='/drifter_logo.svg' />
        <link rel='icon' type='image/png' href='/drifter_logo.png' />

        <title>{title}</title>
      </Head>
      <Flex
        direction={'column'}
        justify={'space-between'}
        gap={0}
        minHeight={'100vh'}
      >
        <Box>
          <Header />
          {children}
        </Box>

        <Footer />
      </Flex>
    </>
  )
}

export default Layout
