import {
  Body,
  HomeContainer,
  HomeContent,
  ExploreButton,
  SubTitle,
  Title,
} from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <div>
          <SubTitle>SO, YOU WANT TO TRAVEL TO</SubTitle>
          <Title>SPACE</Title>
          <Body>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Body>
        </div>

        <ExploreButton to='/destination'>
          <h4>EXPLORE</h4>
        </ExploreButton>
      </HomeContent>
    </HomeContainer>
  )
}
