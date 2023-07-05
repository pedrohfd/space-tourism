import {
  DestinationContainer,
  DestinationContent,
  LeftContent,
  Destiny,
  RightContent,
  Title,
  DestinyButtonArea,
  DestinyButton,
  DestinyName,
  Body,
  Divider,
  DistanceArea,
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
    <DestinationContainer>
      <DestinationContent>
        <LeftContent>
          <Title>
            <strong>01</strong> PICK YOUR DESTINATION
          </Title>

          <Destiny src={image} />
        </LeftContent>
        <RightContent>
          <DestinyButtonArea>
            <DestinyButton
              isActive={destination.name.toLowerCase() === 'moon'}
              onClick={() => handleDestiny('moon')}
            >
              MOON
            </DestinyButton>
            <DestinyButton
              isActive={destination.name.toLowerCase() === 'mars'}
              onClick={() => handleDestiny('mars')}
            >
              MARS
            </DestinyButton>
            <DestinyButton
              isActive={destination.name.toLowerCase() === 'europa'}
              onClick={() => handleDestiny('europa')}
            >
              EUROPA
            </DestinyButton>
            <DestinyButton
              isActive={destination.name.toLowerCase() === 'titan'}
              onClick={() => handleDestiny('titan')}
            >
              TITAN
            </DestinyButton>
          </DestinyButtonArea>

          <DestinyName>{destination.name.toUpperCase()}</DestinyName>

          <Body>{destination.description}</Body>

          <Divider />

          <DistanceArea>
            <div>
              <h5>AVG. DISTANCE</h5>

              <h4>{destination.distance.toUpperCase()}</h4>
            </div>
            <div>
              <h5>EST. TRAVEL TIME</h5>

              <h4>{destination.travel.toUpperCase()}</h4>
            </div>
          </DistanceArea>
        </RightContent>
      </DestinationContent>
    </DestinationContainer>
  )
}
