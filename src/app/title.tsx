import * as React from 'react';

const styles = {
  title: {
    display: 'flex',
    padding: '1rem',
    backgroundColor: '#cf4646',
    color: 'white',
    flexDirection: "row" || "column"
  } as React.CSSProperties,
  h1: {
    fontWeight: 300,
    fontSize: '4rem',
    margin: '1rem'
  } as React.CSSProperties,
  logo: {
    height: '12rem',
    backgroundColor: 'white',
    borderRadius: '1rem',
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '2rem',
    margin: '.5rem'
  } as React.CSSProperties
};

interface ITitleProps {};

interface ITitleState {};

export class Title extends React.Component<ITitleProps, ITitleState> {
  render() {
    return (
      <div style={styles.title}>

      </div>
    );
  }
}
