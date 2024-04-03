import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = 'http://localhost:8080';

const useAuth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    let isMounted = true; // Variable to track component mount state

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          navigate('/tenant/login');
          return;
        }

        const response = await axios.get(`${SERVER_URL}/users/verify-token`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { userId } = response.data;
        console.log(userId);

        const userData = await axios.get(`${SERVER_URL}/users/${userId}`);
        
        if (isMounted) {
          setUser(userData.data.user);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        if (isMounted) {
          navigate('/tenant/login');
          setIsLoading(false);
        }
      }
    };

    fetchUserData();

    return () => {
      // Cleanup function to handle component unmounting
      isMounted = false; // Update component mount state
    };
  }, [navigate]);

  return { isLoading, user };
};

export default useAuth;
