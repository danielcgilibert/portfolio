import {
  Box,
  Icon,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { RiGitCommitFill, RiGitRepositoryLine } from 'react-icons/ri'

export const Stast = ({ repositories, totalContributions }) => {
  const [repositoriesCount, setRepositoriesCount] = useState(0)
  const [contributionsCount, setContributionsCount] = useState(0)
  useEffect(() => {
    const timeoutRepo = setTimeout(() => {
      contributionsCount < totalContributions
        ? setContributionsCount(contributionsCount + 1)
        : clearInterval(timeoutRepo)
    }, 5)

    const timeoutCont = setTimeout(() => {
      repositoriesCount < repositories
        ? setRepositoriesCount(repositoriesCount + 1)
        : clearInterval(timeoutCont)
    }, 50)
  }, [repositoriesCount, contributionsCount, repositories])
  const bgColor = useColorModeValue('colors.200', 'colors.300')

  return (
    <Box bg={bgColor} rounded="lg" px="4" py="2">
      <StatGroup
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        textAlign="center">
        <Stat>
          <StatLabel>Contribuciones</StatLabel>
          <Tooltip
            label="Datos obtenidos de la api de github"
            aria-label="A tooltip">
            <StatNumber
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="1"
              fontSize="xl">
              {contributionsCount}
              <Icon as={RiGitCommitFill} w={6} h={6} color="colors.100" />
            </StatNumber>
          </Tooltip>
        </Stat>

        <Stat>
          <StatLabel>Repositorios</StatLabel>
          <Tooltip
            label="Datos obtenidos de la api de github"
            aria-label="A tooltip">
            <StatNumber
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="1"
              fontSize="xl">
              <Icon as={RiGitRepositoryLine} w={6} h={6} color="colors.100" />
              {repositoriesCount}
            </StatNumber>
          </Tooltip>
        </Stat>
      </StatGroup>
    </Box>
  )
}
