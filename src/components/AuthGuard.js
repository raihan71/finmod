import React, { useEffect } from 'react';
import { getAuthToken } from '../utils/authed';
export default function AuthGuard({children,...props}) {
  useEffect(() => {
    const items = getAuthToken();
    if (!items) {
      window.location.href = '/login';
    }
  }, []);
  return (
    <React.Fragment {...props}>
      {children}
    </React.Fragment>
  )
}
