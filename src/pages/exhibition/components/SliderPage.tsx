import 'App.css'
import React, { useState } from 'react'
import Slider from 'common/components/Slider'
import TextWithLine from 'common/components/TextWithLine'
import { StyledText } from 'pages/exhibition/styled'
function SilderPage(){
  	const [value, setValue] = useState(50)
  	return( 
  	<div
   	 	style={{
   	        height: '100%',
            display: 'flex',
			justifyContent:'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
          >
		<h2>Hope Ignited</h2>
		<StyledText>if justice takes place, there shall be hope</StyledText>
		<TextWithLine>ALBERTO MANGUEL</TextWithLine>
      	<Slider
        	value={value}
        	onChange={(value) => {
        		setValue(value)
        	}}
      	/>
		<p></p>
	  	<StyledText>ตอนนี้ตังค์ของคุณมีมากแค่ไหน</StyledText>
	</div>
	  )
}
export default SilderPage