import * as React from 'react';

const styles = {
  footer: {
    padding: '0.5rem',
    fontSize: '1rem',
    backgroundColor: '#1f1f1f',
    textAlign: 'center',
    color: 'white'
  } as React.CSSProperties
};

interface IFooterProps {};

interface IFooterState {};

export class Footer extends React.Component<IFooterProps, IFooterState> {
  render() {
    return (
      <footer style={styles.footer}>
        Built with ♥ by Grant Tapp =] 
      </footer>
    );
  }
}
