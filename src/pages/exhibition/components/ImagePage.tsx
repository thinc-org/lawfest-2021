import 'App.css'
import TextWithLine from 'common/components/TextWithLine'
import React from 'react'
import { StyledText } from 'pages/exhibition/styled'
class ImagePage extends React.Component<{
  onClick: any
  header: string
  subheader: string
  name: string
  imgURL: string
  content: string
  imgRef: string
  dataRef: string
}> {
  render() {
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h2
          style={{
            padding: '10px',
            color: '#FFFFFF',
            backgroundColor: '#00000099',
            borderRadius: '15px',
          }}
        >
          {this.props.header}
        </h2>
        <StyledText style={{ color: '#505B89' }}>
          {this.props.subheader}
        </StyledText>
        <TextWithLine mobileVariant="subhead">{this.props.name}</TextWithLine>
        <img src={this.props.imgURL} alt="" style={{ height: '30%' }} />
        <div>{this.props.content}</div>
        <div>
          <div>
            ภาพ: <span style={{ color: '#AAAAAA' }}>{this.props.imgRef}</span>
          </div>
          <div>
            อ้างอิง:{' '}
            <span style={{ color: '#AAAAAA' }}>{this.props.dataRef}</span>
          </div>
        </div>
      </div>
    )
  }
}
export default ImagePage
