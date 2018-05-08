import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Route, routerShape } from 'react-router';
import { Wall } from './wall';
import { Color } from './color';
import { Header } from '../header';
import { Footer } from '../footer';
import { ReactTable } from 'react-table';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

interface IRoute {
    name: string;
    points: number;
    wall: Wall;
    color: Color;
};

interface IClimbingRouteState {
    routes: IRoute[];
    walls: string[];
    colors: string[];
    routeName: string;
    routePoints: number;
    routeWall: Wall;
    routeColor: Color;
};

interface IClimbingRouteProps {
}

export class ClimbingRoute extends React.Component<IClimbingRouteProps, IClimbingRouteState>  {

    constructor() {
        super();
        this.state = { routes: [], walls: [], colors: [], routeName: '', routeColor: null, routePoints: 0, routeWall: null };
    };

    componentDidMount() {
        this.RenderWalls();
        this.RenderColors();
    };

    AddRoute(route: IRoute) {
        this.setState((prevState, props) => {
            prevState.routes.push(route);
            return { routes: prevState.routes };
        });

        // this.RenderRoutes();
    };

    RenderRoutes() {
        let routes = [];
        this.state.routes.map((route, index) => {
            routes.push(route);
        });
        this.setState({
            routes: routes
        });
    };

    RemoveRoute(route: IRoute) {
        this.setState((prevState, props) => {
            let index = prevState.routes.findIndex(r => r == route);
            return { routes: prevState.routes.splice(index, 1) };
        });
    };

    RenderWalls() {
        let walls = [];
        for (let wall in Wall) {
            let isValueProperty = parseInt(wall, 10) >= 0;
                if (isValueProperty) {
                    wall = Wall[wall];
                    walls.push(<option value={wall}>{wall}</option>);
                }
        };
        this.setState({
            walls: walls
        });
    };

    RenderColors() {
        let colors = [];
        for (let color in Color) {
            let isValueProperty = parseInt(color, 10) >= 0;
            if (isValueProperty) {
                color = Color[color];
                colors.push(<option value={color}>{color}</option>);
            }
        };
        this.setState({
            colors: colors
        });
    };

    onClickHandler() {
        let route = {
            color: this.state.routeColor,
            name: this.state.routeName,
            points: this.state.routePoints,
            wall: this.state.routeWall
        } as IRoute;

        if (!this.state.routeColor) {
            swal('Error', 'No color', 'error');
            return;
        };
        if (!this.state.routeName) {
            swal('Error', 'No name', 'error');
            return;
        };
        if (!this.state.routePoints) {
            this.setState({
                routePoints: 0
            });
        };
        if (!this.state.routeWall) {
            swal('Error', 'No wall', 'error');
            return;
        };

        this.AddRoute(route);
        this.RenderWalls();
    };

    onChangeHandler(routeProperty, routeValue) {
        this.state[routeProperty] = routeValue;
    };

    render() {
        return (
            <div>
                <Header />
                <table className='table table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Wall</th>
                            <th scope='col'>Color</th>
                            <th scope='col'>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.routes.map((route, index) => {
                            return <tr><td>{index + 1}</td><td>{route.name}</td><td>{route.wall}</td><td>{route.color}</td><td>{route.points}</td></tr>;
                        })}
                    </tbody>
                </table>

                <div className='input-group pb-3 px-3'>
                    <div className='input-group-prepend'>
                        <span className='btn btn-outline-primary'>Name</span>
                    </div>
                    <select className='form-control' onChange={(e) => this.onChangeHandler('routeName', e.target.value)}>
                        <option value=''>Select a climber</option>
                        <option value='Grant Tapp'>Grant Tapp</option>
                        <option value='Shannon Ryder'>Shannon Ryder</option>
                    </select>
                </div>

                <div className='input-group pb-3 px-3'>
                    <div className='input-group-prepend'>
                        <span className='btn btn-outline-primary'>Wall</span>
                    </div>
                    <select className='form-control' onChange={(e) => this.onChangeHandler('routeWall', e.target.value)}>
                        <option value=''>Select a wall</option>
                        {this.state.walls.map(wall => {
                            return wall
                        })}
                    </select>
                </div>

                <div className='input-group pb-3 px-3'>
                    <div className='input-group-prepend'>
                        <span className='btn btn-outline-primary'>Color</span>
                    </div>
                    <select className='form-control' onChange={(e) => this.onChangeHandler('routeColor', e.target.value)}>
                        <option value=''>Select a color</option>
                        {this.state.colors.map(color => {
                            return color
                        })}
                    </select>
                </div>

                <div className='input-group pb-3 px-3'>
                    <div className='input-group-prepend'>
                        <span className='btn btn-outline-primary'>Points</span>
                    </div>
                    <input type='number' className='form-control' onChange={(e) => this.onChangeHandler('routePoints', e.target.value)} />
                </div>

                <div className='pb-3 px-5 text-center'>
                    <button className='btn btn-secondary' onClick={(e) => this.onClickHandler()}>Add Route</button>
                </div>

                <Footer />
            </div>
        );
    };
}
