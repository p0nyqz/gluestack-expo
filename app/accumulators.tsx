import { Link } from 'expo-router'
import { View, SafeAreaView, ScrollView } from 'react-native'
import { Text, Heading, Box, VStack } from '@gluestack-ui/themed'

import Deductible from '../components/Deductible'

export default function Accumulators() {
  return (
    <Box flex={1} backgroundColor="#F3F2F8">
      <ScrollView
        style={{ height: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box $base-my="$16" $base-mx="$5">
          <SafeAreaView flexDirection="row">
            <Link href="/">Go to Home Page</Link>
            <Heading pb="$6">Accumulators</Heading>
          </SafeAreaView>

          {/* Family */}
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
                amount1="$1650"
                amount2="$3000"
              />

              <Deductible title="In Network" amount1="$2300" amount2="$7500" />

              <Deductible
                title="Out of Network"
                amount1="$1230"
                amount2="$38000"
              />
            </Box>
          </VStack>

          {/* Individual */}
          {/* Family */}
          <VStack space="sm" reversed={false}>
            <Box flexDirection="row" justifyContent="space-between">
              <Text
                color="$warmGray600"
                size="sm"
                mt="$2"
                fontWeight="$semibold"
              >
                John Smith
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
                amount1="$1"
                amount2="$750"
              />

              <Deductible
                title="Dental Deductible"
                amount1="$0"
                amount2="$1000"
              />

              <Deductible title="In Network" amount1="$43" amount2="$3000" />

              <Deductible
                title="Out of Network"
                amount1="$1230"
                amount2="$38000"
              />
            </Box>
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  )
}
