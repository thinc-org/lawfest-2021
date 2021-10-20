import StyledButton from 'common/components/Button'
import { RootContainer } from '../Container'
import { ResultContainer } from './styled'

function ResultTemplate() {
  return (
    <RootContainer>
      <ResultContainer>
        <StyledButton>บันทึกรูปภาพ</StyledButton>
        <StyledButton>กลับสู่หน้าหลัก</StyledButton>
      </ResultContainer>
    </RootContainer>
  )
}

export default ResultTemplate
