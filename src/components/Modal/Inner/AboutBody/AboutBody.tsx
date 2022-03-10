import React from 'react';

import { Skill } from '../../../Skill/Skill';
import { List } from '../../../About/Content/RightSide/Inner/List/List';
import aboutInfo from '../../../../constants/about-us-info';

interface IAboutBody {
  active: boolean;
  data: any
}

export const AboutBody: React.FC<IAboutBody> = ({active, data}) => {
  return (
    <div className="about-modal">
      <h2 className="about-modal__title">My skills</h2>

      <div className="about-modal__skills">
        <Skill procent="90%" name="HTML/CSS" color="yellow" active={active}/>
        <Skill procent="65%" name="JavaScript" color="blue" active={active}/>
        <Skill procent="75%" name="React/Redux" color="red" active={active}/>
        <Skill procent="80%" name="TypeScript" color="green" active={active}/>
      </div>

      <List name={data.name} age={data.age} phone={data.phone} email={data.email}/>
    </div>
  );
};
