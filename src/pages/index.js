import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import CardLayout from "../components/cardLayout"
import Seo from "../components/seo"
import { useEffect, useState } from "react"
import styled from "@emotion/styled"

const IndexPage = () => {
  const options = {method: 'GET'};

  const [collection, setCollection] = useState()
  const [evilCollection, setEvilCollection] = useState()

  useEffect(() => {
    fetch('https://api.opensea.io/api/v1/collection/noundles', options)
      .then(response => response.json())
      .then(response => {
        if (response.collection) {
          setCollection(response.collection)
        }
      }).catch(err => console.error(err));

    fetch('https://api.opensea.io/api/v1/collection/noundlesgame', options)
      .then(response => response.json())
      .then(response => {
        if (response.collection) {
          setEvilCollection(response.collection)
        }
      }).catch(err => console.error(err));
  }, [])



  return (
    <Layout>
      <Seo title="Noundle Theory" />
      <CardContainer>
        <CardLayout>
          <h2>🧹</h2>
          <h4>Genesis Floor Price</h4>
          <div style={{ fontSize: '2.5rem', lineHeight: '3rem', margin: '1rem 0'}}>
            {collection?.stats?.floor_price}Ξ
          </div>
          <a href='https://opensea.io/collection/noundles'>
            OpenSea
          </a>
        </CardLayout>
        <CardLayout>
          <h2>😈</h2>
          <h4>Theory Floor Price</h4>
          <div style={{ fontSize: '2.5rem', lineHeight: '3rem', margin: '1rem 0'}}>
            {evilCollection?.stats?.floor_price}Ξ
          </div>
          <a href='https://opensea.io/collection/noundlesgame'>
            OpenSea
          </a>
        </CardLayout>
        <CardLayout>
          <h2>🌈</h2>
          <h4>$RAINBOW Mint Price</h4>
          <div style={{ fontSize: '2.5rem', lineHeight: '3rem', margin: '1rem 0'}}>
            soon™
          </div>
          <a href='https://noundles.io/stake'>
            per 40 $RAINBOW
          </a>
        </CardLayout>
      </CardContainer>
      <FrameContainer>
        <iframe src="https://dune.xyz/embeds/290023/547738/62e3f6b4-e62b-4af6-87a5-11de3d29ccf2" />
      </FrameContainer>
    </Layout>
  )

}

const CardContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin: 0 1rem;
  
  @media only screen and (min-width: 680px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media only screen and (min-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

const FrameContainer = styled.div`
  margin: 2rem 1rem;
  height: 20rem;
  background: #FDDDEC;
  
  @media only screen and (min-width: 980px) {
    padding: 0 5rem;
  }
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`

export default IndexPage
