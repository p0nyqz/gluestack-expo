import Gradient from '../assets/Icons/Gradient'
import DocumentData from '../assets/Icons/DocumentData'
import LightBulbPerson from '../assets/Icons/LightbulbPerson'
import Logo from '../assets/Icons/Logo'
import Deductible from '@/components/Deductible'
import Navigation from '@/components/Navigation'
import DeductibleCard from '@/components/DeductibleCard'
import Coverage from '@/components/Coverage'
import {
  Box,
  Button,
  ButtonText,
  HStack,
  VStack,
  ScrollView,
  Text,
  Progress,
  ProgressFilledTrack,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  Input,
  InputField,
  Divider,
  Card,
  Heading,
  Avatar,
  AvatarFallbackText,
  Icon,
  AvatarBadge,
} from '@gluestack-ui/themed'

import { Link } from 'expo-router'

export default function Home() {
  return (
    <Box flex={1} backgroundColor="#F3F2F8">
      <ScrollView
        // horizontal
        style={{ height: '100%' }}
        // contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box
          position="absolute"
          $base-h={500}
          $base-w={500}
          $lg-h={500}
          $lg-w={500}
        >
          {/* <Gradient /> */}
        </Box>

        <Box
          height="60%"
          $base-my="$16"
          $base-mx="$5"
          $base-height="80%"
          $lg-my="$24"
          $lg-mx="$5"
          justifyContent="space-between"
        >
          <HStack justifyContent="space-between">
            <Box>
              <Text pb="$1">Welcome</Text>
              <Text fontSize="21" fontWeight="bold" pb="$6">
                John Smith 👋
              </Text>
            </Box>

            {/* Avatar */}
            <Link href="/profile">
              <Avatar bgColor="$primary500" size="md" borderRadius="$full">
                <AvatarFallbackText color="$white">
                  Jonh Smith
                </AvatarFallbackText>
                <AvatarBadge $dark-borderColor="$black" />
              </Avatar>
            </Link>
          </HStack>

          {/* Deductible */}
          <VStack space="sm" reversed={false}>
            <Box flexDirection="row" justifyContent="space-between">
              <Text color="$warmGray400" size="sm">
                Family
              </Text>
              <Text color="$primary500" size="sm">
                <Link href="/accumulators">View All</Link>
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

              {/*Self-Payment */}
              <Deductible title="In Network" amount1="$2300" amount2="$7500" />
              <Deductible
                title="Out of Network"
                amount1="$3230"
                amount2="$38000"
              />
            </Box>
          </VStack>

          {/* <DeductibleCard /> */}
          <Coverage />
        </Box>
      </ScrollView>
      <Navigation />
    </Box>
  )
}
