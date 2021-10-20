import StyledButton from 'common/components/Button'
import { StyledText } from 'common/components/Typography'
import { useMainController } from 'common/context/Controller/MainController'
import { useEffect, useState } from 'react'
import { RootContainer } from '../Container'
import { InnerContainer, ResultContainer } from './styled'
import { AiOutlineDownload } from 'react-icons/ai'

function ResultTemplate() {
  const [bgLink, setBgLink] = useState<string>('')
  const [downloadLink, setDownloadLink] = useState<string>('')

  const { getBgFilePath } = useMainController()

  useEffect(() => {
    const { bgLink, downloadLink } = getBgFilePath()

    setBgLink(bgLink)
    setDownloadLink(downloadLink)
  }, [getBgFilePath])

  return (
    <RootContainer padding={false}>
      <ResultContainer
        css={{
          backgroundImage: `url(${bgLink})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          boxSizing: 'border-box',
          padding: '0px 20px 52px 20px',
        }}
      >
        <StyledButton css={{ marginRight: '20px' }} variant="secondary">
          <InnerContainer>
            <AiOutlineDownload size="18" />
            <StyledText css={{ marginLeft: '10px' }} mobileVariant="button">
              บันทึกรูปภาพ
            </StyledText>
          </InnerContainer>
        </StyledButton>
        <StyledButton variant="primary">
          <StyledText mobileVariant="button">กลับสู่หน้าหลัก</StyledText>
        </StyledButton>
      </ResultContainer>
    </RootContainer>
  )
}

export default ResultTemplate
