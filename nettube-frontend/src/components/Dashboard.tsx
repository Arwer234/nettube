import { Box, useMediaQuery, useTheme } from '@mui/material';
import ProfileCard, { ProfileInfo } from './ProfileCard';
import useHttp from '../hooks/useHttp';
import { useEffect, useState } from 'react';
import AdminAccordion from './AdminAccordion';

function Dashboard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('desktop'));
  const { sendRequest } = useHttp();
  const [userData, setData] = useState({
    username: '',
    fullname: '',
    email: '',
    birthdate: '',
    subscription: 0,
  });

  const fetchUserProfileInfo = async () => {
    const response = await sendRequest({
      method: 'POST',
      body: {
        username: localStorage.getItem('username'),
      },
      endpoint: '/user/getUserData',
    });
    if (response.result === 'SUCCESS') {
      setData(response);
    }
  };

  const sendUpdateQuery = async (param: string, value: string) => {
    const response = await sendRequest({
      method: 'POST',
      body: {
        param: param,
        value: value,
        username: localStorage.getItem('username'),
      },
      endpoint: '/user/updateUser',
    });
    if (response.result === 'success') {
      fetchUserProfileInfo();
    }
  };

  useEffect(() => {
    fetchUserProfileInfo();
  }, []);

  const userProfileInfo: ProfileInfo = {
    uname: userData.username,
    fullname: userData.fullname,
    email: userData.email,
    birthdate: userData.birthdate,
    subscriptiontype: userData.subscription,
    confirmChange: sendUpdateQuery,
  };
  const styleBox = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
  };
  return (
    <>
      <Box sx={styleBox}>
        <ProfileCard {...userProfileInfo} />
        <AdminAccordion />
      </Box>
    </>
  );
}
export default Dashboard;
