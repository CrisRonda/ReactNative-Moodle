import {useState} from 'react';
import {Alert} from 'react-native';

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const fetch = async (apiCallback) => {
    try {
      setLoading(true);
      const res = await apiCallback();
      setLoading(false);
      return res;
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Ocurrio un error');
    }
  };
  return {fetch};
};

export default useFetch;
