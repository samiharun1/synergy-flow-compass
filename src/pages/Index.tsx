import { Navigate } from "react-router-dom";

const Index = () => {
  // Redirect to Dashboard which is our home page
  return <Navigate to="/dashboard" replace />;
};

export default Index;
