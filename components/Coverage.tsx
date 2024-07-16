import {
  Box,
  Text,
  VStack,
  HStack,
  Badge,
  BadgeText,
  BadgeIcon,
  Progress,
  ProgressFilledTrack,
} from '@gluestack-ui/themed'

import Deductible from './Deductible'
import { Link } from 'expo-router'

export default function Coverage() {
  return (
    <VStack space="sm" reversed={false} py="$3">
      <Box flexDirection="row" justifyContent="space-between">
        <Text color="$warmGray400" size="sm">
          Coverage
        </Text>
        <Text color="$primary500" size="sm">
          <Link href="/cards">ID Card</Link>
        </Text>
      </Box>
      <Box
        $base-flexDirection="column"
        $md-flexDirection="row"
        bg="white"
        px="$8"
        py="$7"
        borderRadius="16"
      >
        <HStack justifyContent="space-between">
          <Box>
            <Box flexDirection="row" justifyContent="space-between">
              <Text size="sm">Member ID</Text>
              <Badge
                mx="$1"
                size="sm"
                variant="solid"
                borderRadius="$sm"
                action="info"
              >
                <BadgeText>subscriber</BadgeText>
              </Badge>
            </Box>
            <Text size="lg" bold>
              123456789 00
            </Text>
          </Box>

          <Box>
            <Text size="sm">Plan</Text>
            <Text size="lg" bold>
              PPO2
            </Text>
          </Box>
        </HStack>
        <Text pt="$6" pb="$2">
          01/01/2025
        </Text>
      </Box>
    </VStack>
  )
}
