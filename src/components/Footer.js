import React from 'react';
import Parser from 'html-react-parser';
import style from '../styles/components/footer.scss'

const Footer = (props) =>

<footer>
  <hr/>
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-10 mx-auto">
        <ul className="list-inline text-center">
          <li className="list-inline-item">
            <a href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href={props.fieldFacebookLink}>
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="#">
              <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className="fa fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </li>
        </ul>
        <p className="copyright text-muted">{props.fieldCopyright ? Parser(props.fieldCopyright.value) : ''}</p>
      </div>
    </div>
  </div>
</footer>


export default Footer;
