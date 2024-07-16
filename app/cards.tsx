import { Text, Heading, Box, VStack } from '@gluestack-ui/themed'
import { SafeAreaView } from 'react-native'
import { Link } from 'expo-router'

export default function Cards() {
  return (
    <SafeAreaView flexDirection="row">
      <Link href="/">Go to Home Page</Link>
      <Heading>Cards</Heading>
    </SafeAreaView>
  )
}
