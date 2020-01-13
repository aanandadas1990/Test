import React from 'react';
import ReactDOM from 'react-dom';
// import './assets/css/bootstrap.min.css';
// import './assets/css/animate.css';
// import './assets/css/owl.carousel.min.css';
// import './assets/css/owl.theme.default.min.css';
// import './assets/css/video.popup.css';
// import './assets/css/theme.css';
// import './assets/css/responsive.css';
import mainLogo from'./logo.png';

//import './css/theme.css';

//const myfirstelement = <h1>Hello React..!</h1>

const myelement = (
	<div>
  
<section className="top_header">
  <div className="container">
    <div className="row top_header_inner">
      <div className="col-md-4 col-sm-12 top_head_box">
        <div className="top_head_left">
          <ul>
            <li className="li_login"><a href=""><span><img src="images/user_login_icon.png" alt="" /></span> Login</a></li>
            <li className="li_signup"><a href="">Sign Up <span><i class="fa fa-angle-double-right" aria-hidden="true"></i></span></a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-8 col-sm-12 top_head_box top_head_right_main">
        <div className="top_head_right">
          <ul>
            <li><a href="tel:1234567890"><span><i className="fa fa-phone" aria-hidden="true"></i></span> (123)456-7890</a></li>
            <li><a href="mailto:info@example.com"><span><i className="fa fa-envelope" aria-hidden="true"></i></span> info@example.com</a></li>
            <li><a href=""><span><i className="fa fa-map-marker" aria-hidden="true"></i></span> Find Us</a></li>
            <li className="li_social"> <a href="" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a> <a href="" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a> <a href="" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a> <a href="" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a> </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="nav_sec">
  <div className="container">
    <div className="row nav_inner">


 
      <div className="col-md-4 col-sm-4 logo_box_main">
        <div className="logo_box"> <a href="index.html"><img src={mainLogo} alt="" /></a> </div>
      </div>
      <div className="col-lg-8 col-md-12 col-sm-12 nav_right_box_main">
        <div className="nav_right_box">
          <ul className="list_nav_right">
            <li className="get_app"><a href="">Get Our App</a></li>
            <li><a href=""><img src="images/android_icon.png" alt="" /></a></li>
            <li><a href=""><img src="images/appstore_icon.png" alt="" /></a></li>
            <li className="li_humbargar_drop_menu">
          <div className="dropdown li_humbargar_drop">
          <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
            <span className="humb_icon "><img src="images/humbergar_icon.png" alt="" /></span> Menu
          </button>
          <div className="dropdown-menu">
            <ul className="list_side_menu">
              <li><a href="index.html">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Doctors</a></li>
              <li><a href="">Contact</a></li>
            </ul>
            
          </div>
          </div>
      </li>
        
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</section>


  <table>
    <tr>
      <th>Name 22</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
  </div>
);




ReactDOM.render(myelement, document.getElementById('root'));