const KAKAO_URI = 'http://localhost:3000/oauth/callback/kakao';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_ID}&redirect_uri=${KAKAO_URI}&response_type=code`;

const GITHUB_URI = 'http://localhost:3000/oauth/callback/github';

export const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_ID}&redirect_uri=${GITHUB_URI}`;

const NAVER_URI = 'http://localhost:3000/oauth/callback/naver';

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NAVER_ID}&state=STATE_STRING&redirect_uri=${NAVER_URI}`;
