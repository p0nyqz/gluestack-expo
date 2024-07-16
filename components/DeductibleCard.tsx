import {
  Card,
  Text,
  HStack,
  Progress,
  ProgressFilledTrack,
  Divider,
} from '@gluestack-ui/themed'

const DeductibleCard = () => {
  return (
    <Card size="lg" variant="elevated" m="$3">
      <Text size="sm" py="$1">
        Medical Deductible
      </Text>
      <Progress value={60} size="sm" color="lightBlue900">
        <ProgressFilledTrack bg="$cyan600" />
      </Progress>
      <HStack>
        <Text fontWeight="bold" size="sm" py="$1">
          $1,650
        </Text>
        <Text size="sm" py="$1">
          $1,450 until met
        </Text>
        <Text fontWeight="bold" size="sm" py="$1" pb="$4">
          $3,000
        </Text>
      </HStack>
      <Divider></Divider>

      <Text size="sm" py="$1" pt="$2">
        Out-Of-Pocket - In Network
      </Text>
      <Progress value={60} size="sm" color="lightBlue900">
        <ProgressFilledTrack bg="$cyan600" />
      </Progress>
      <HStack>
        <Text fontWeight="bold" size="sm" py="$1">
          $1,650
        </Text>
        <Text size="sm" py="$1">
          $1,450 until met
        </Text>
        <Text fontWeight="bold" size="sm" py="$1" pb="$4">
          $3000
        </Text>
      </HStack>
      <Divider></Divider>

      <Text size="sm" py="$1" pt="$2">
        Out-Of-Pocket - Out of Network
      </Text>
      <Progress value={60} size="sm" color="lightBlue900">
        <ProgressFilledTrack bg="$cyan600" />
      </Progress>
      <HStack>
        <Text fontWeight="bold" size="sm" py="$1">
          $1,650
        </Text>
        <Text size="sm" py="$1">
          $1,450 until met
        </Text>
        <Text fontWeight="bold" size="sm" py="$1">
          $3,000
        </Text>
      </HStack>
    </Card>
  )
}

export default DeductibleCard
