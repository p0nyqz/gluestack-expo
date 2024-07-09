import { Link } from 'expo-router'
import { View, SafeAreaView } from 'react-native'
import { Text, Heading, Box, VStack } from '@gluestack-ui/themed'

import Deductible from '../components/Deductible'

export default function Accumulators() {
  return (
    <Box flex={1} backgroundColor="#F3F2F8">
      <SafeAreaView flexDirection="row">
        <Link href="/">Go to Home Page</Link>
        <Heading pb="$6">Accumulators</Heading>
      </SafeAreaView>

      <VStack space="sm" reversed={false}>
        <Box flexDirection="row" justifyContent="space-between">
          <Text color="$warmGray400" size="sm">
            Family
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
          <Deductible
            title="Medical Deductible"
            progressValue={60}
            amount1="$1650"
            amount2="$3000"
          />

          <Deductible
            title="In Network"
            progressValue={40}
            amount1="$2300"
            amount2="$7500"
          />

          <Deductible
            title="Out of Network"
            progressValue={10}
            amount1="$1230"
            amount2="$38000"
          />
        </Box>
      </VStack>
    </Box>
  )
}
