import { RefConatainer, StyledLink } from './styled'
import { RefsProps } from './types'

export const Refs = (props: RefsProps) => {
  const { refs, title } = props
  return (
    <RefConatainer>
      {title}
      {refs.map((ref, idx) => (
        <>
          <StyledLink href={ref.url}>{ref.text}</StyledLink>
          {idx !== refs.length - 1 && ', '}
        </>
      ))}
    </RefConatainer>
  )
}
