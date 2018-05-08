import * as React from 'react';
import { Header } from './header';
import { Title } from './title';
import { Techs } from './techs/techs';
import { Footer } from './footer';
import { ClimberCard } from './utils/card';

interface IMainProps { };
interface IMainState { };

export class Main extends React.Component<IMainProps, IMainState> {
  render() {
    return (
      <div>
        <Header />
        <ClimberCard climberName='Grant Tapp' highestRoute={3} pointsEarned={23} pointsSpent={22} routesClimbed={5} />
        <br />
        <ClimberCard climberName='Shannon Ryder' highestRoute={4} pointsEarned={23} pointsSpent={16} routesClimbed={7} />
        <br />
        <Footer />
      </div>
    );
  };
}
