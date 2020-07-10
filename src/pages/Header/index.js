import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { Container, Content, Profile } from './styles';

export default function Header() {
    const user_token = localStorage.getItem('token');
    const user_id = localStorage.getItem('id');

    const [profile, setProfile] = useState('');
    const [avatar, setAvatar] = useState('https://api.adorable.io/avatars/50/abott@adorable.png');

    useEffect(() => {
        api.get(`users/${user_id}`, {})
        .then(response => {
            setProfile(response.data);
        })
    }, []);

    useEffect(() => {
        api.get(`avatar/${profile.id}`, {
            headers: {
                authorization: user_token,
            }
        }).then(response => {
            setAvatar(response.data);
        })
    }, [profile]);


  return (
    <Container>
      <Content>
        <nav>
          <Link to='/dashboard'>DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to='/profile'>Meu perfil</Link>
            </div>
            <img src={avatar.url || avatar} alt='Avatar' />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}