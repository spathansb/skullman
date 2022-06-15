import { bool, string } from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Utils from '../../utility';
import '../../components/table/LinkableImageCellRendererText.css';

const LinkableImageCellRendererText = ({
  href, className, text,subText, pagination, image,
}) => {
  const newTo = {
    pathname: href,
    param1: localStorage.getItem('pagination') || 1,
  };  

  if (href && href.length) {
    return (
      <>
        <div className="row alignitem" > 
        <div className="col-md-3">
        {image && image.length ? (
          <img width="42px" height="42px" className="rounded-circle mr-2" src={encodeURI(image)} alt="" />
        ) : <img width="42px" height="42px" className="rounded-circle mr-2" src={Utils.getImage('user-placeholder.png')} alt="Profile Pic" />}
        </div>
        <div className="col-md-8 textandsubtext" >
        <Link to={newTo} className={`${className}`}>
           {text}                               
        </Link>
        <br/>
        <span className="subtext">{subText}</span> 
        </div> 
        </div>                      
      </>
    );
  }
  return <></>;
};

LinkableImageCellRendererText.propTypes = {
  className: string,
  href: string.isRequired,
  image: string.isRequired,
  text: string.isRequired,
};

LinkableImageCellRendererText.defaultProps = {
  className: 'text rounded-circle',
  // icon: false,
};

export default LinkableImageCellRendererText;
