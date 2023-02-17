import React from 'react'
import styled from 'styled-components'
import BackgroundImg from "../essets/images/pexels-alexy-almond-3756523 1.jpg"
import SummaryInfoCard from './SummaryInfoCard';



function Summary() {
  return (
    <Container>
      <BackgroundImageStyle src={BackgroundImg} alt="summaryImg" />
      <SummaryInfoCard></SummaryInfoCard>
    </Container>
  );
}

export default Summary

const Container=styled.div`
  height: 527px;
  margin-bottom: 70px;
`
const BackgroundImageStyle=styled.img`
  width: 100%;
`