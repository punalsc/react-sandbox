import styled, { keyframes } from 'styled-components';

export const keyFrameExample = keyframes`
			0% {
				opacity: 0;
			}
			100% {
				opacity: 1;
		}`;

export const UlStyle = styled.ul`
	opacity: 1;
	animation-name: ${keyFrameExample};
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 0.5s;
`;
