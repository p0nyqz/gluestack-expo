import {
  Box,
  Text,
  HStack,
  Progress,
  ProgressFilledTrack,
} from '@gluestack-ui/themed'

export default function Navigation() {
  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      // height="70px"
      minHeight="60px"
      bg="white"
      pb="$8"
      borderRadius="$16"
      // shadow="$2"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgColor="transparent"
    >
      <Text>Navigation</Text>
    </Box>
  )
}
