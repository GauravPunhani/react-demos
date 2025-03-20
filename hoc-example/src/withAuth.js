const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = true; // Fetch from context/state
    return isAuthenticated ? <WrappedComponent {...props} /> : <h2>Access Denied</h2>;
  }
}

export default withAuth