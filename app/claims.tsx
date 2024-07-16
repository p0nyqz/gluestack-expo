import { Text, Heading, Box, VStack } from '@gluestack-ui/themed'
import { SafeAreaView } from 'react-native'
import { Link } from 'expo-router'

export default function Claims() {
  return (
    <SafeAreaView flexDirection="row">
      <Link href="/">Go to Home Page</Link>
      <Heading>Claims</Heading>
    </SafeAreaView>
  )
}
