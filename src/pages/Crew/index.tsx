import { useState } from 'react'
import {
  CrewContainer,
  CrewContent,
  Informative,
  LeftContent,
  RightContent,
  Role,
  Name,
  Body,
  CrewMember,
  CrewButton,
  CrewButtonArea,
} from './styles'
import ansari from '../../assets/crew/image-anousheh-ansari.webp'
import douglas from '../../assets/crew/image-douglas-hurley.webp'
import mark from '../../assets/crew/image-mark-shuttleworth.webp'
import victor from '../../assets/crew/image-victor-glover.webp'
import data from '../../data.json'

export const Crew = () => {
  const [crew, setCrew] = useState(data.crew[0])

  const [image, setImage] = useState(douglas)

  const handleCrew = (crew: string) => {
    switch (crew) {
      case 'douglas':
        setCrew(data.crew[0])
        setImage(douglas)
        break

      case 'mark':
        setCrew(data.crew[1])
        setImage(mark)
        break

      case 'victor':
        setCrew(data.crew[2])
        setImage(victor)
        break

      case 'ansari':
        setCrew(data.crew[3])
        setImage(ansari)
        break
    }
  }

  return (
    <CrewContainer>
      <CrewContent>
        <LeftContent>
          <Informative>
            <strong>02</strong> MEET YOUR CREW
          </Informative>

          <Role>{crew.role}</Role>

          <Name>{crew.name}</Name>

          <Body name={crew.name}>{crew.bio}</Body>

          <CrewButtonArea>
            <CrewButton
              isActive={crew.name === 'Douglas Hurley'}
              onClick={() => handleCrew('douglas')}
            />

            <CrewButton
              isActive={crew.name === 'Mark Shuttleworth'}
              onClick={() => handleCrew('mark')}
            />

            <CrewButton
              isActive={crew.name === 'Victor Glover'}
              onClick={() => handleCrew('victor')}
            />

            <CrewButton
              isActive={crew.name === 'Anousheh Ansari'}
              onClick={() => handleCrew('ansari')}
            />
          </CrewButtonArea>
        </LeftContent>
        <RightContent name={crew.name}>
          <CrewMember src={image} alt={crew.name} />
        </RightContent>
      </CrewContent>
    </CrewContainer>
  )
}
