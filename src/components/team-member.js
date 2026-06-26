import { Image } from '@/components/mdx'
import { Button, Circle, Flex, Card, Stack, Text } from '@chakra-ui/react'

import {
  CardBody,
  ButtonGroup,
  Divider,
  CardFooter,
  Heading,
} from '@chakra-ui/react'

export const TeamMember = ({ member }) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        {member.image && (
          <Image src={member.image} alt={member.name} borderRadius='lg' />
        )}
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{member.name}</Heading>
          <Heading size='sm'>{member.position}</Heading>
          {member.description && <Text>{member.description}</Text>}
        </Stack>
      </CardBody>
    </Card>
  )
}
