import React from 'react';
import { styled } from 'styled-components';
import Button from './Button';
import { Link } from 'react-router-dom';
import palette from '../../libs/styles/palette';
import { ResponsiveBig } from './Responsive';
import { useDispatch, useSelector } from 'react-redux';
import logoImg from '../../mock/img/logo3.png';
import { logout } from '../../modules/user';
import axios from 'axios';
import { loginSuccess } from '../../modules/auth';

const HeaderBlock = styled.div`
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled(ResponsiveBig)`
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .logoImg {
    width: 2.5rem;
    height: 2.5rem;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .headerList {
    font-weight: 800;
    color: ${palette.gray[8]};
    &:hover {
      color: #3DA5F5;
    }
  }
  .logoWrapper{
    display:flex;
    justify-content: center;
    align-items: center;

    &:hover {
      color: ${palette.gray[7]};
    }
  }
`
const UserIndo = styled.div`
  font-weight: 800;
  margin: 0 0.5rem;
`

const Header = () => {
  const {user} = useSelector(({user}) => 
  ({
    user: user.user,
  }));
  const dispatch = useDispatch();

  let accessToken, refreshToken
  if(user !== null) {
    accessToken = user.tokenDto.accessToken;
    refreshToken = user.tokenDto.refreshToken;
  }

  const onLogout = () => {
    axios.post('http://localhost:8080/auth/logout', {accessToken , refreshToken})
    .then(function(response) {
      if(response){
        dispatch(loginSuccess(false))
        dispatch(logout())
        localStorage.removeItem('user');
      }
      console.log(response);
      return;
    })
    .catch(function(error) {
      console.log(error);
      return;
    })
  }

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/standard" className='logo'>
            <div className='logoWrapper'>
              <img src={logoImg} alt="logo" className='logoImg'/>
              <div>Easy Contract Guide</div>
            </div>
          </Link>
          <Link to="/standard" className='headerList'>표준 계약서와 비교</Link>
          <Link to="/building" className='headerList'>건축물 대장과 비교</Link>
          <Link to="/register" className='headerList'>등기부 등본과 비교</Link>
          <Link to="/dous" className='headerList'>계약서 작성 가이드</Link>
          {
            user ? (
              <div className='right'>
                <UserIndo>{user.username}</UserIndo>
                <Button onClick={onLogout} cyan>로그아웃</Button>
              </div>
            ) :(
              <div className='right'>
                <Button to="/">로그인</Button>
              </div>
            )
          }
        </Wrapper>
      </HeaderBlock >
    </>
  );
};

export default Header;