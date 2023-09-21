import React from 'react';
import Avatar from '../assets/Images/Mohan-muruge.jpg';
import commentplus from '../assets/Icons/add_comment.svg';
import logos from '../assets/Logo/logo.png';




const Comments = () => {
    


        return (
          <div className="comments__comment">
            <img className="comments__comment--avatar" src={logos} alt="face" />
            <div className="comments__comment__content">
              <div className="comments__comment__content__head">
                <h5 className="comments__comment__content__head--name">
                  
                </h5>
                <h5 className="comments__comment__content__head--date"></h5>
              </div>
              <p className="comments__comment__content--comment">
                
              </p>
            </div>
          </div>
        );
      };
    return (
      <>
        <form className="comment-input">
          <h3 className="comment-input--count">
           
          </h3>
          <div className="comment-input__section">
            <img
              className="comment-input__section--avatar"
              src={Avatar}
              alt="Avatar"
            />
            <div className="comment-input__section--form">
              <div className="comment-input__section--form--inner">
                <label className="comment-input__section--form--label">
                  JOIN THE CONVERSATION
                </label>
                <textarea
                  name="comment"
                  className="comment-input__section--form--comment"
                  placeholder="Add a new comment"
                ></textarea>
              </div>
              <button
                className="comment-input__section--form--button"
                type="submit"
                id="button"
              >
                <img
                  className="comment-input__section--form--image"
                  src={commentplus}
                  alt="plus sign"
                />
                COMMENT
              </button>
            </div>
          </div>
        </form>
        <div className="comments"></div>
      </>
    );
  ;
  export default Comments;