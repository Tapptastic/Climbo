import * as React from 'react';

interface CardProps {
    climberName: string;
    pointsEarned: number;
    pointsSpent: number;
    routesClimbed: number;
    highestRoute: number;
};
interface CardState { };

export class ClimberCard extends React.Component<CardProps, CardState> {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">{this.props.climberName}</div>
                <div className="card-body">
                    <div className="text-center"><b>Weekly</b></div>
                    <br />
                    <div className="row text-center">
                        <div className="col-sm-3">Total Points Earned: {this.props.pointsEarned} </div>
                        <div className="col-sm-3">Total Points Spent: {this.props.pointsSpent}</div>
                        <div className="col-sm-3">Routes Climbed: {this.props.routesClimbed}</div>
                        <div className="col-sm-3">Highest Route: {this.props.highestRoute}</div>
                    </div>
                </div>
                {/* <div className="card-footer">
                    <div className="text-center"><b>Weekly</b></div>
                    <br/>
                    <div className="row text-center">
                        <div className="col-sm-3">Total Points Earned</div>
                        <div className="col-sm-3">Total Points Spent</div>
                        <div className="col-sm-3">Routes Climbed</div>
                        <div className="col-sm-3">Highest Route</div>
                    </div>
                </div> */}
            </div>
        );
    }
};