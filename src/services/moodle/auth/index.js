import axios from 'axios';

const baseURL = 'http://192.168.100.24/';

async function getCurrentUser({token, username}) {
  const resp = await axios.get(
    `${baseURL}webservice/rest/server.php?wstoken=${token}&wsfunction=core_user_get_users_by_field&field=username&values[0]=${username}&moodlewsrestformat=json`,
  );
  const user = resp.data;
  return user;
}
async function login({username, password}) {
  const respAuth = await axios.get(
    `${baseURL}login/token.php?username=${username}&password=${password}&service=moodle_mobile_app`,
  );
  const data = respAuth.data;
  console.log(data);
  const {token} = data;
  return {data, token};
}
export const loginMoodle = async ({username, password}) => {
  const {token, data} = await login({username, password});
  const user = await getCurrentUser({token, username});
  return {user, data};
};
