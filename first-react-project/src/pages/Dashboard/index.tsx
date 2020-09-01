import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#!">
          <img
            src="https://avatars3.githubusercontent.com/u/49242233?s=460&v=4"
            alt="Murilo Cunha"
          />

          <div>
            <strong>cunhamuril/next-level-week-2</strong>
            <p>Next Level Week 2 by Rocketseat - App Proffy</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#!">
          <img
            src="https://avatars3.githubusercontent.com/u/49242233?s=460&v=4"
            alt="Murilo Cunha"
          />

          <div>
            <strong>cunhamuril/next-level-week-2</strong>
            <p>Next Level Week 2 by Rocketseat - App Proffy</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="#!">
          <img
            src="https://avatars3.githubusercontent.com/u/49242233?s=460&v=4"
            alt="Murilo Cunha"
          />

          <div>
            <strong>cunhamuril/next-level-week-2</strong>
            <p>Next Level Week 2 by Rocketseat - App Proffy</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
