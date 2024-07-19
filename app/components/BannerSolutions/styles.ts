import styled from "styled-components";



interface SectionProps {
  $imageBanner: string;
}

export const Section = styled.section<SectionProps>`
  background-image: url(${props => props.$imageBanner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 3rem 0;
  min-height: 400px;
`;


export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;