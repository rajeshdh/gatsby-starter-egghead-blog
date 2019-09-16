import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
// import Link from 'components/Link'
// import { useTheme } from 'components/Theming'
import Container from 'components/Container'
// import { rhythm } from '../lib/typography'


const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

export default function Index({ data: { site, allMdx } }) {
  // const theme = useTheme()
  return (
    <Layout site={site}>
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
         <hr /> 
        <Description>
          Hi, I'm Rajesh. I am a developer specializing in building useful things with Node.js, MongoDB and react.js.
When I'm not coding, you can find me cycling or cooking something in my kitchen.
You can read my writing, get in touch, or subscribe below to get updated when I write something new.

            </Description>
        <hr />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
  }
`
