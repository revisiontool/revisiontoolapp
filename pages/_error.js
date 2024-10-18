import ErrorComponent from 'next/error';
import { getInitialProps } from 'next/error';

function ErrorPage({ statusCode }) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</h1>
        <p>Please check your URL or try again later.</p>
      </div>
    );
  }
  
ErrorPage.getInitialProps = getInitialProps;

export default ErrorPage;
  
