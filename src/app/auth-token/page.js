import { headers } from 'next/headers';

export default function Page() {
  // Function to set authorization header
  const setAuthorizationHeader = () => {
    const headersList = new Headers();
    const authorizationToken = '1234567890';
    headersList.append('Authorization', `Bearer ${authorizationToken}`);
    
    return headersList;
  };
  
  // Usage of the function
  const requestHeaders = setAuthorizationHeader();
  


  return (
    <div style={{ padding: '30px' }}>
      <b>Your Auth Token:</b> {requestHeaders}
    </div>
  );
}


