import Gradient from '../assets/Icons/Gradient'
import DocumentData from '../assets/Icons/DocumentData'
import LightBulbPerson from '../assets/Icons/LightbulbPerson'
import Rocket from '../assets/Icons/Rocket'
import Logo from '../assets/Icons/Logo'
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
          <Text pb="$1">Welcome</Text>
          <Text fontSize="21" fontWeight="bold" pb="$8">
            John Smith 👋
          </Text>
          <VStack space="md" reversed={false}>
            <Text pb="$1">Family</Text>
            <Box
              $base-flexDirection="column"
              $md-flexDirection="row"
              bg="white"
              p="$8"
              borderRadius="16"
            >
              <Text>Medical Deductible</Text>
              <Progress value={60} size="md">
                <ProgressFilledTrack />
              </Progress>
              <HStack>
                <Text fontWeight="bold">$1650</Text>
                <Text>$1,450 until met</Text>
                <Text fontWeight="bold">$3000</Text>
              </HStack>

              <Divider my="$0.5" />
              <Text>Out-Of-Pocket - In Network</Text>
              <Progress value={40} size="md">
                <ProgressFilledTrack />
              </Progress>
              <Text>Out-Of-Pocket - Out of Network</Text>
              <Progress value={10} size="md">
                <ProgressFilledTrack />
              </Progress>
            </Box>
          </VStack>

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
                $1650
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
              Out-Of-Pocket - In Network
            </Text>
            <Progress value={60} size="sm" color="lightBlue900">
              <ProgressFilledTrack bg="$cyan600" />
            </Progress>
            <HStack>
              <Text fontWeight="bold" size="sm" py="$1">
                $1650
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
                $1650
              </Text>
              <Text size="sm" py="$1">
                $1,450 until met
              </Text>
              <Text fontWeight="bold" size="sm" py="$1">
                $3000
              </Text>
            </HStack>
          </Card>
          {/* <FeatureCard
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
            /> */}

          {/* Form */}
          <FormControl minWidth="$80">
            {/* <FormControlLabel>
                <FormControlLabelText>Name</FormControlLabelText>
              </FormControlLabel> */}
            <Input>
              <InputField placeholder="Email" />
            </Input>
            {/* <FormControlHelper>
                <FormControlHelperText>
                  What would you like people to call you?
                </FormControlHelperText>
              </FormControlHelper> */}
          </FormControl>
          <FormControl>
            <Button bg="$darkBlue600">
              <ButtonText fontSize="$sm" fontWeight="$medium">
                Create Account
              </ButtonText>
            </Button>
          </FormControl>
        </Box>
      </ScrollView>
    </Box>
  )
}
