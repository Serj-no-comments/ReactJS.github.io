import React from "react";
import PropTypes from 'prop-types'

 function ProfileInfo({name,age,gender}) {
    return(
        <div>
            <p className='app-date-text'>
                <b>Name: </b>
                {name}
            </p>



            <p className='app-date-text'>
                <b>Age: </b>
                {age}
            </p>
            <p className='app-date-text'>
                <b>Gender: </b>
                {gender}
            </p>

        </div>

    )
}

ProfileInfo.propTypes={
    name:PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
}

export default ProfileInfo