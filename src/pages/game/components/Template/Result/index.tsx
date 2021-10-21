import StyledButton from 'common/components/Button'
import { StyledText } from 'common/components/Typography'
import { useMainController } from 'common/context/Controller/MainController'
import { useCallback, useEffect, useRef, useState } from 'react'
import { RootContainer } from '../Container'
import { InnerContainer, ResultContainer } from './styled'
import { AiOutlineDownload } from 'react-icons/ai'

function ResultTemplate() {
  const [bgLink, setBgLink] = useState<string>('')
  const [downloadLink, setDownloadLink] = useState<string>('')
  const [fileName, setFileName] = useState<string>('')
  const downloadRef = useRef<HTMLAnchorElement | null>()

  const { getBgFilePath } = useMainController()

  useEffect(() => {
    const { bgLink, downloadLink, fileName } = getBgFilePath()

    setBgLink(bgLink)
    setDownloadLink(downloadLink)
    setFileName(fileName)
  }, [getBgFilePath])

  const handleDownload = useCallback(() => {
    if (!downloadRef.current) return
    downloadRef.current.click()
  }, [])

  return (
    <RootContainer padding={false}>
      <ResultContainer
        css={{
          backgroundImage: `url(${bgLink})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          boxSizing: 'border-box',
          padding: '0px 20px 32px 20px',
        }}
      >
        <StyledButton
          css={{ marginRight: '20px' }}
          variant="secondary"
          onClick={handleDownload}
        >
          <InnerContainer>
            <AiOutlineDownload size="18" />
            <a
              download={fileName}
              ref={(el) => (downloadRef.current = el)}
              href={downloadLink}
              style={{ display: 'none' }}
            >
              Download
            </a>
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
