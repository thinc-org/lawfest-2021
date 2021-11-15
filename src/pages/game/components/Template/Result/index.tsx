import StyledButton from 'common/components/Button'
import { useMainController } from 'common/context/Controller/MainController'
import { useCallback, useRef } from 'react'
import { RootContainer } from '../Container'
import { ButtonText, InnerContainer, ResultContainer } from './styled'
import { AiOutlineDownload } from 'react-icons/ai'
import { useHistory } from 'react-router'

function ResultTemplate() {
  const downloadRef = useRef<HTMLAnchorElement | null>()
  const router = useHistory()

  const { lastImg } = useMainController()

  const handleDownload = useCallback(() => {
    if (!downloadRef.current) return
    downloadRef.current.click()
  }, [])

  return (
    <RootContainer padding={false}>
      <ResultContainer
        css={{
          backgroundImage: `url(${lastImg.bgLink})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          boxSizing: 'border-box',
          padding: '0px 20px 20px 20px',
        }}
      >
        <StyledButton
          css={{ marginRight: '20px' }}
          variant="secondary"
          onClick={handleDownload}
        >
          <InnerContainer>
            <AiOutlineDownload size="20" />
            <a
              download={lastImg.fileName}
              ref={(el) => (downloadRef.current = el)}
              href={lastImg.downloadLink}
              style={{ display: 'none' }}
            >
              Download
            </a>
            <ButtonText css={{ marginLeft: '10px' }}>บันทึกรูปภาพ</ButtonText>
          </InnerContainer>
        </StyledButton>
        <StyledButton variant="primary" onClick={() => router.push('/')}>
          <ButtonText>กลับสู่หน้าหลัก</ButtonText>
        </StyledButton>
      </ResultContainer>
    </RootContainer>
  )
}

export default ResultTemplate
