import {
  Description,
  Informative,
  LeftContent,
  RightContent,
  Subtitle,
  TechnologyButton,
  TechnologyButtonArea,
  TechnologyContainer,
  TechnologyContent,
  TechnologyImage,
  Title,
} from './styles'
import data from '../../data.json'
import { useState } from 'react'
import vehicle from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import capsule from '../../assets/technology/image-space-capsule-portrait.jpg'
import spaceport from '../../assets/technology/image-spaceport-portrait.jpg'

export const Technology = () => {
  const [technology, setTechnology] = useState(data.technology[0])

  const [image, setImage] = useState(vehicle)

  const handleTechnology = (technology: string) => {
    switch (technology) {
      case 'vehicle':
        setTechnology(data.technology[0])
        setImage(vehicle)
        break

      case 'spaceport':
        setTechnology(data.technology[1])
        setImage(spaceport)
        break

      case 'capsule':
        setTechnology(data.technology[2])
        setImage(capsule)
        break
    }
  }

  return (
    <TechnologyContainer>
      <TechnologyContent>
        <LeftContent>
          <Informative>
            <strong>03</strong> SPACE LAUNCH 101
          </Informative>

          <div className='flex'>
            <TechnologyButtonArea>
              <TechnologyButton
                onClick={() => handleTechnology('vehicle')}
                isActive={technology.name === 'Launch vehicle'}
              >
                1
              </TechnologyButton>
              <TechnologyButton
                onClick={() => handleTechnology('spaceport')}
                isActive={technology.name === 'Spaceport'}
              >
                2
              </TechnologyButton>
              <TechnologyButton
                onClick={() => handleTechnology('capsule')}
                isActive={technology.name === 'Space capsule'}
              >
                3
              </TechnologyButton>
            </TechnologyButtonArea>

            <div>
              <Subtitle>THE TERMINOLOGY…</Subtitle>

              <Title>{technology.name}</Title>

              <Description>{technology.description}</Description>
            </div>
          </div>
        </LeftContent>

        <RightContent>
          <TechnologyImage src={image} alt={technology.name} />
        </RightContent>
      </TechnologyContent>
    </TechnologyContainer>
  )
}
