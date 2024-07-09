import React from 'react'
import {
  Box,
  Text,
  HStack,
  Progress,
  ProgressFilledTrack,
} from '@gluestack-ui/themed'

const Deductible = ({ title, progressValue, amount1, untilMet, amount2 }) => (
  <Box pb="$2">
    <Text pb="$1.5" size="md">
      {title}
    </Text>
    <Progress value={progressValue} size="md" bg="#EEF2F5">
      <ProgressFilledTrack bg="$primary500" />
    </Progress>
    <HStack py="$1.5" justifyContent="space-between">
      <Text fontWeight="bold" size="sm">
        {amount1}
      </Text>
      <Box flexDirection="row">
        <Text size="sm">{untilMet} until met </Text>
        <Text fontWeight="bold" size="sm">
          {amount2}
        </Text>
      </Box>
    </HStack>
  </Box>
)

export default Deductible
