import {
  Box,
  Text,
  HStack,
  Progress,
  ProgressFilledTrack,
} from '@gluestack-ui/themed'

const Deductible = ({ title, amount1, amount2 }) => {
  // Функция для удаления символа $ и запятых, и преобразования строки в число
  const parseCurrency = (value) => {
    return parseFloat(value.replace(/[$,]/g, ''))
  }

  const amount1Num = parseCurrency(amount1)
  const amount2Num = parseCurrency(amount2)

  // Вычисление разницы
  const untilMet = amount2Num - amount1Num

  // Форматирование чисел в денежный формат
  const formatCurrency = (value) => {
    return `$${value.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })}`
  }

  // Вычисление значения прогресса
  const progressValue = (amount1Num / amount2Num) * 100

  return (
    <Box pb="$2">
      <Text pb="$1.5" size="md">
        {title}
      </Text>
      <Progress value={progressValue} size="md" bg="#EEF2F5">
        <ProgressFilledTrack bg="$primary500" />
      </Progress>
      <HStack py="$1.5" justifyContent="space-between">
        <Text fontWeight="bold" size="sm">
          {formatCurrency(amount1Num)}
        </Text>
        <Box flexDirection="row">
          <Text size="sm">{`${formatCurrency(untilMet)} until met `}</Text>
          <Text fontWeight="bold" size="sm">
            {formatCurrency(amount2Num)}
          </Text>
        </Box>
      </HStack>
    </Box>
  )
}

export default Deductible
