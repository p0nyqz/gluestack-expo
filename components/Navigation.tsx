import {
  Box,
  Text,
  HStack,
  Progress,
  ProgressFilledTrack,
} from '@gluestack-ui/themed'

import DocumentData from '../assets/Icons/DocumentData'
import Rocket from '../assets/Icons/Rocket'
import LightBulbPerson from '../assets/Icons/LightbulbPerson'

import { Link } from 'expo-router'
import { Svg, Path } from 'react-native-svg'

export default function Navigation() {
  return (
    <Box
      position="absolute"
      bottom={0}
      left={0}
      right={0}
      // height="70px"
      // minHeight="60px"
      minWidth="50px"
      // bg="white"
      p="$5"
      px="$6"
      mb="$8"
      mx="$6"
      borderRadius="$20"
      // shadow="$2"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      bgColor="#08122D"
      boxShadow="0px -4px 8px rgba(0, 0, 0, 0.1)"
    >
      {/* <Text>Navigation</Text> */}
      <Link href="/">
        <DocumentData />
      </Link>

      <Link href="/cards">
        <Rocket />
      </Link>

      <Link href="/claims">
        <LightBulbPerson />
      </Link>

      <Link href="/profile">
        <DocumentData />
      </Link>
    </Box>
  )
}
