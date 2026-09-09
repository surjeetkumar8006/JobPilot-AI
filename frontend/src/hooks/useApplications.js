import { useState, useEffect } from 'react';
import { fetchApplications } from '../services/api';

export const useApplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApplications()
      .then(data => {
        setApplications(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return { applications, loading, setApplications };
};
