import { styled } from 'common/config'
export const StyledText = styled('p',{
	color: 'black',
	fontSize: '20px',
	fontWeight: 'bold',
	fontFamily: '$Mitr',
	cursor: 'pointer',
	userSelect: 'none',
	'@sm': {
		fontSize: '16px',
		marginBottom: '17px',
 	}
})