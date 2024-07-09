import Gradient from '../assets/Icons/Gradient'
import DocumentData from '../assets/Icons/DocumentData'
import LightBulbPerson from '../assets/Icons/LightbulbPerson'
import Rocket from '../assets/Icons/Rocket'
import Logo from '../assets/Icons/Logo'
import Deductible from '../components/Deductible'
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

const FeatureCard = ({ iconSvg: IconSvg, name, desc }: any) => {
  return (
    <Box
      flexDirection="column"
      borderWidth={1}
      borderColor="$borderDark700"
      $web-flex={1}
      m="$2"
      p="$4"
      rounded="$md"
    >
      <Box alignItems="center" display="flex" flexDirection="row">
        <Text>
          <IconSvg />
        </Text>
        <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
          {name}
        </Text>
      </Box>
      <Text color="$textDark400" mt="$2">
        {desc}
      </Text>
    </Box>
  )
}

export default function Home() {
  return (
    <Box flex={1} backgroundColor="#F3F2F8">
      <ScrollView
        style={{ height: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}
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
          {/* <HStack justifyContent="space-between" marginHorizontal="$10">
            <Box
              bg="#64748B33"
              py="$2"
              px="$6"
              rounded="$full"
              alignItems="center"
              marginTop={20}
              $base-flexDirection="column"
              $sm-flexDirection="row"
              $md-flexDirection="flex-start"
            >
              <Text color="$white" fontWeight="$normal">
                Get started by editing
              </Text>
              <Text color="$white" fontWeight="$medium" ml="$2">
                app/index.tsx
              </Text>
            </Box>
            <Link href="/tabs/">
              <Box
                bg="#64748B33"
                rounded="$full"
                alignItems="center"
                py="$2"
                px="$6"
                marginTop="$5"
                $base-flexDirection="column"
                $sm-flexDirection="ro"
                $md-flexDirection="flex-end"
              >
                <Text color="$white" fontWeight="$normal">
                  Explore Tab Navigation
                </Text>
              </Box>
            </Link>
          </HStack> */}

          {/* <Box justifyContent="center" alignItems="center">
            <Logo />
          </Box> */}

          <HStack justifyContent="space-between">
            <Box>
              <Text pb="$1">Welcome</Text>
              <Text fontSize="21" fontWeight="bold" pb="$6">
                John Smith 👋
              </Text>
            </Box>

            {/* Avatar */}
            <Avatar bgColor="$primary500" size="md" borderRadius="$full">
              <AvatarFallbackText color="$white">Jonh Smith</AvatarFallbackText>
              <AvatarBadge $dark-borderColor="$black" />
            </Avatar>
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

            <Text color="$warmGray400" size="sm">
              Coverage
            </Text>
          </VStack>

          {/* Cards */}
          <Card size="lg" variant="elevated" m="$3">
            {/* <Heading mb="$1" size="md">
              Quick Start
            </Heading> */}
            <Text size="sm" py="$1">
              Medical Deductible
            </Text>
            <Progress value={60} size="sm" color="lightBlue900">
              <ProgressFilledTrack bg="$cyan600" />
            </Progress>
            <HStack>
              <Text fontWeight="bold" size="sm" py="$1">
                $1,650
              </Text>
              <Text size="sm" py="$1">
                $1,450 until met
              </Text>
              <Text fontWeight="bold" size="sm" py="$1" pb="$4">
                $3,000
              </Text>
            </HStack>
            <Divider></Divider>

            <Text size="sm" py="$1" pt="$2">
              Out-Of-Pocket - In Network
            </Text>
            <Progress value={60} size="sm" color="lightBlue900">
              <ProgressFilledTrack bg="$cyan600" />
            </Progress>
            <HStack>
              <Text fontWeight="bold" size="sm" py="$1">
                $1,650
              </Text>
              <Text size="sm" py="$1">
                $1,450 until met
              </Text>
              <Text fontWeight="bold" size="sm" py="$1" pb="$4">
                $3000
              </Text>
            </HStack>
            <Divider></Divider>

            <Text size="sm" py="$1" pt="$2">
              Out-Of-Pocket - Out of Network
            </Text>
            <Progress value={60} size="sm" color="lightBlue900">
              <ProgressFilledTrack bg="$cyan600" />
            </Progress>
            <HStack>
              <Text fontWeight="bold" size="sm" py="$1">
                $1,650
              </Text>
              <Text size="sm" py="$1">
                $1,450 until met
              </Text>
              <Text fontWeight="bold" size="sm" py="$1">
                $3,000
              </Text>
            </HStack>
          </Card>

          <FeatureCard
            iconSvg={DocumentData}
            name="Docs"
            desc="Find in-depth information about gluestack features and API."
          />
          <FeatureCard
            iconSvg={LightBulbPerson}
            name="Learn"
            desc="Learn about gluestack in an interactive course with quizzes!"
          />
          <FeatureCard
            iconSvg={Rocket}
            name="Deploy"
            desc="Instantly drop your gluestack site to a shareable URL with vercel."
          />

          {/* Form */}
        </Box>
      </ScrollView>
    </Box>
  )
}
