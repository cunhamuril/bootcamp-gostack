import React, { ChangeEvent, useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import { ValidationError } from 'yup';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { api } from '../../services';
import { getValidationErrors } from '../../utils';
import { IFormData } from './interfaces';
import schema from './schema';

import { Button, Input } from '../../components';

import { Container, Content, AvatarInput } from './styles';

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const { user, updateUser } = useAuth();

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      try {
        formRef.current?.setErrors({});

        await schema.validate(data, {
          /*
           * abortEarly: vai retornar todos os erros que encontrar,
           * não apenas o primeiro como é por padrão no Yup.
           */
          abortEarly: false,
        });

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(old_password && {
            old_password,
            password,
            password_confirmation,
          }),
        };

        const response = await api.put('/profile', formData);

        updateUser(response.data);

        addToast({
          type: 'success',
          title: 'Perfil atualizado!',
          description:
            'Suas informações do perfil foram atualizadas com sucesso!',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro na atualização',
          description: 'Ocorreu um erro ao atualizar perfil, tente novamente.',
        });
      }
    },
    [addToast, history, updateUser],
  );

  const handleAvatarChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api
          .patch('/users/avatar', data)
          .then((response) => {
            updateUser(response.data);

            addToast({
              type: 'success',
              title: 'Avatar atualizado!',
            });
          })
          .catch((err) => console.error(err.data || err)); // eslint-disable-line
      }
    },
    [addToast, updateUser],
  );

  return (
    <Container>
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft />
          </Link>
        </div>
      </header>

      <Content>
        <Form
          ref={formRef}
          initialData={{
            name: user.name,
            email: user.email,
          }}
          onSubmit={handleSubmit}
        >
          <AvatarInput>
            <img src={user.avatar_url} alt={user.name} />
            <label htmlFor="avatar">
              <FiCamera />
              <input
                type="file"
                id="avatar"
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </label>
          </AvatarInput>

          <h1>Meu perfil</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />

          <Input name="email" type="email" icon={FiMail} placeholder="E-mail" />

          <Input
            className="old-password"
            name="old_password"
            type="password"
            icon={FiLock}
            placeholder="Senha atual"
          />

          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Nova senha"
          />

          <Input
            name="password_confirmation"
            type="password"
            icon={FiLock}
            placeholder="Confirmar senha"
          />

          <Button type="submit">Confirmar mudanças</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
