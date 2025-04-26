import { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + '/api/test'
        );
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <Box textAlign="center" mt={20}>
      <Heading>Hello, NCP Boilerplate!</Heading>
      <Text mt={4}>Backend says: {message}</Text>
    </Box>
  );
}
