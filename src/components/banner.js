import React from 'react';

class Banner extends React.Component {
  render() {
      
    return (
      <header>
        <div>
                <div className='logo'>
                    <a href='#'>Start Bootstrap</a>
                </div>
                {/* <button onClick={() => this.toggleSideBarFunc()} className='hide'> Click!</button>
                <nav className={this.state.toggleSideBar ? 'show': ''}> */}
                    <ul>
                        <li>
                            <a href='#/services'>Services</a>
                        </li>
                        <li>
                            <a href='#/portfolio'>Portfolio</a>
                        </li>
                        <li>
                            <a href='#/about'>About</a>
                        </li>
                        <li>
                            <a href='#/team'>Team</a>
                        </li>
                        <li>
                            <a href='#/contact'>Contact</a>
                        </li>
                    </ul>
                {/* </nav> */}
        </div>
      </header>
    );
  }
}

export default Banner;