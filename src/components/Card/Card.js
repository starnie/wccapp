import React from 'react';
import './Card.css';

const Card =({name, email, id}) => {
  //  const {name, email, id} = props;
    return (
        <div className='card tc dib br3 pa3 ma2 grow bw2 mw6 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2> {/*this is a comment syntax*/}
                <p>{email}</p> {/*we deconstructed props props.email to
               const {email} = props and this we deconstructed again and put it in a parameter feeld of a function */}
            </div>
        </div>
    );
}

export default Card;

//br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"