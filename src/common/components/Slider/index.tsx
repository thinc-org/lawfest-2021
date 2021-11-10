import React from 'react'
import ReactSlider from 'react-slider'
import {
  Container,
  StyledFilledTrack,
  StyledThumb,
  StyledTrack,
  TrackContainer,
} from './styled'
import { SliderProps } from './types'

const Slider = ({ value, onChange, css }: SliderProps) => {
  return (
    <Container css={css}>
      <TrackContainer>
        <StyledFilledTrack />
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          renderTrack={(props, state) => {
            return <StyledTrack {...props} index={state.index} />
          }}
          renderThumb={(props) => <StyledThumb {...props} />}
          value={value}
          onChange={onChange}
        />
      </TrackContainer>
    </Container>
  )
}

export default Slider
