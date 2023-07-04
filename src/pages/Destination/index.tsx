import {
  Container,
  Content,
  LeftContent,
  Destiny,
  RightContent,
  Title,
  DestinyButtonArea,
  DestinyButton,
  DestinyName,
  Body,
} from './styles'
import Moon from '../../assets/destination/image-moon.webp'
import Mars from '../../assets/destination/image-mars.webp'
import Europa from '../../assets/destination/image-europa.webp'
import Titan from '../../assets/destination/image-titan.webp'
import { useState } from 'react'
import data from '../../data.json'

export const Destination = () => {
  const [destination, setDestination] = useState(data.destinations[0])
  const [image, setImage] = useState(Moon)

  const handleDestiny = (destiny: string) => {
    switch (destiny) {
      case 'moon':
        setDestination(data.destinations[0])
        setImage(Moon)
        break

      case 'mars':
        setDestination(data.destinations[1])
        setImage(Mars)
        break

      case 'europa':
        setDestination(data.destinations[2])
        setImage(Europa)
        break

      case 'titan':
        setDestination(data.destinations[3])
        setImage(Titan)
        break
    }
  }

  return (
    <Container>
      <Content>
        <LeftContent>
          <Title>
            <strong>01</strong> PICK YOUR DESTINATION
          </Title>

          <Destiny src={image} />
        </LeftContent>
        <RightContent>
          <DestinyButtonArea>
            <DestinyButton onClick={() => handleDestiny('moon')}>
              MOON
            </DestinyButton>
            <DestinyButton onClick={() => handleDestiny('mars')}>
              MARS
            </DestinyButton>
            <DestinyButton onClick={() => handleDestiny('europa')}>
              EUROPA
            </DestinyButton>
            <DestinyButton onClick={() => handleDestiny('titan')}>
              TITAN
            </DestinyButton>
          </DestinyButtonArea>

          <DestinyName>{destination.name.toUpperCase()}</DestinyName>

          <Body>{destination.description}</Body>
        </RightContent>
      </Content>
    </Container>
  )
}
