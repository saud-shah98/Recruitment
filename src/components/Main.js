import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../assets/images/lilly.png'
import pic02 from '../assets/images/bg1.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic05 from '../assets/images/pic05.png'
import pic06 from '../assets/images/pic06.png'
import pic07 from '../assets/images/pic07.png'
import card from '../assets/images/card.jpg'

class Main extends React.Component {
  constructor(props){
    super(props);

  
  this.state= {
  name:"",
    year: "",
    major: "",
    phone: "",
    on_campus: "",
  };

  this.handleSubmit = this.handleSubmit.bind(this);

}
onNameChange(event) {
  this.setState({name: event.target.value})
}

onPhoneChange(event) {
  this.setState({phone: event.target.value})
}

onMajorChange(event) {
  this.setState({major: event.target.value})
}
onYearChange(event) {
  this.setState({year: event.target.value})
}

handleSubmit(event) {
  event.preventDefault();
  console.log(this.state)
}

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          onCloseArticle()
        }}
      ></div>
    )

  
    const {setWrapperRef,timeout,article,articleTimeout,onCloseArticle} = this.props;
    

    return (
      
      <div
        ref={setWrapperRef}
        id="main"
        style={timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${article === 'intro' ? 'active' : ''} ${
            articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Rush PIKE</h2>
          <span className="image main">
            <img src={card} alt="" />
          </span>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
           
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${article === 'work' ? 'active' : ''} ${
            articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Donate towards FC</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${article === 'about' ? 'active' : ''} ${
            articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Executive Board</h2>
          <span className="image main">
            <img src={pic05} alt="" height="100"/>
          </span>
          <span className="image main">
            <img src={pic06} alt="" height="100"/>
          </span>
          <span className="image main">
            <img src={pic07} alt="" width="100" height="200"/>
          </span>
          
  
          {close}
        </article>

        <article
          id="contact"
          className={`${article === 'contact' ? 'active' : ''} ${
           articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Connect with us</h2>
          <form method="POST" onSubmit={this.handleSubmit}  >
            <div className="field half first">
              <label htmlFor="name">Full Name</label>
              <input type="text" name="name"  required id="name" onChange={this.onNameChange.bind(this)} value={this.state.name} />
            </div>
            <div className="field half">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" name="phone" id="phone" onChange={this.onPhoneChange.bind(this)} required value={this.state.phone} />
            </div>
            <div className="field">
              <label htmlFor="year">School Year</label>
              <input  type="text" name="year" id="year" onChange={this.onYearChange.bind(this)} required value={this.state.year} ></input>
            </div>
            <div className="field">
              <label htmlFor="major">Major</label>
              <textarea name="major" id="major" onChange={this.onMajorChange.bind(this)} required value={this.state.major} rows="0"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Submit Contact Form" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
