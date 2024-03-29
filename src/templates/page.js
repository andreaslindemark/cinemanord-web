/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { PageContent } from './styles/StyledPage';

import Layout from '../components/layout';

const PageTemplate = ({ data }) => (
  <Layout>
    <div className="container">
      <div className="row" style={{ maxWidth: '800px', margin: '40px auto' }}>
        <PageContent className="col">
          {data.currentPage.featured_media ? (
            <Img
              style={{ marginBottom: '20px' }}
              fluid={
                data.currentPage.featured_media.localFile.childImageSharp.fluid
              }
            />
          ) : null}
          <h1 dangerouslySetInnerHTML={{ __html: data.currentPage.title }} />
          <div dangerouslySetInnerHTML={{ __html: data.currentPage.content }} />
        </PageContent>
      </div>
    </div>
  </Layout>
);

export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    currentPage: wordpressPage(id: { eq: $id }) {
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
