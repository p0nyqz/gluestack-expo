import {
  Box,
  Text,
  HStack,
  Progress,
  ProgressFilledTrack,
} from '@gluestack-ui/themed'

import { Link } from 'expo-router'

export default function Coverage() {
  return (
    <Box flexDirection="row" justifyContent="space-between">
      <Text color="$warmGray400" size="sm">
        Coverage
      </Text>
      <Text color="$primary500" size="sm">
        <Link href="/cards">ID Card</Link>
      </Text>
    </Box>
  )
}
