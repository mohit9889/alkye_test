import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getItemFromLocalStorage } from '~/utils/localStorageUtils';

// Utility function to check authentication
const isAuthenticated = () => {
  if (typeof window !== 'undefined') {
    const token = getItemFromLocalStorage('token');
    return Boolean(token);
  }
  return false;
};

const withAuth = (WrappedComponent) => {
  const AuthHOC = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const checkAuth = () => {
        if (!isAuthenticated()) {
          // Redirect to login page if not authenticated
          router.push('/');
        } else {
          setLoading(false);
        }
      };

      checkAuth();
    }, [router]);

    // Show a loading state while authentication is being checked
    if (loading) {
      return <div>Loading...</div>;
    }

    // Render the wrapped component if authenticated
    return isAuthenticated() ? <WrappedComponent {...props} /> : null;
  };

  return AuthHOC;
};

export default withAuth;
