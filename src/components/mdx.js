import { Image as ChakraImage, Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Link = ({ href = '', children, ...props }) => {
  const isExternal = href.startsWith('http://') || href.startsWith('https://')

  if (isExternal) {
    return (
      <ChakraLink href={href} isExternal {...props}>
        {children}
      </ChakraLink>
    )
  }

  return (
    <ChakraLink as={NextLink} href={href} {...props}>
      {children}
    </ChakraLink>
  )
}

export const Image = (props) => <ChakraImage {...props} />
