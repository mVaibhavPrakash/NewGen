import Navbar from '../../../LandingpageClient/src/components/Navbar';
import '../css/profile.css'
import img1 from '../../../../../public/img/wave.png'

const Profile= ({footerRef}) => {

    return (
        <>  
        <Navbar/>
        <div className='auth'>
		    <img className="auth-wave" src={img1}/>
        </div>
        <div className='profile'>
            <div id='h2div'>
                <h2>User Profile</h2>
                <button>Saved</button>
            </div>
            <div id='profile-content'>
                <div id='profile-d'>
                    <p>You can change your profile here, click on Edit option to edit</p>
                </div>
                <div className='profile-content-div'>
                    <h3>Name</h3>
                    <p style={{wordBreak:'break-word'}}>Your name appears on your Profile page, as your byline, and in your responses. It is a required field. </p>
                    <textarea placeholder='Enter meta title' id='profile-textarea-seo-title' name='fullname'/>
                </div>
                <div className='profile-content-div'>
                    <h3>Username</h3>
                    <p style={{wordBreak:'break-word'}}>Your username appears on your Profile page, as your byline, and in your responses. It is a required field.</p>
                    <textarea placeholder='Enter meta description' id='profile-textarea-seo-title' name='username'/>
                </div>
                <div className="profile-content-div">
                    <h3>About you</h3>
                    <p style={{wordBreak:'break-word'}}>Date of Birth</p>
                    <p><input placeholder='Enter meta description' type='date' id='profile-input-seo-title' name='dob'/></p>
                </div>
                <div className="profile-content-div">
                    <h3>Bio</h3>
                    <p style={{wordBreak:'break-word'}}>Your short bio appears on your Profile and next to your stories. Max 160 characters. </p>
                    <textarea placeholder='Enter meta title' id='profile-textarea-seo-desc' name='bio'/>
                </div>
                <div className="profile-content-div">
                    <h3>About you</h3>
                    <p style={{wordBreak:'break-word'}}>This page should tell your readers more about you and explain the benefits of reading your work.</p>
                    <textarea placeholder='Enter meta description' id='profile-textarea-seo-title' name='about'/>
                </div>
                <div className="profile-content-div">
                    <h3>Email Address(Not changeable)</h3>
                    <p>{}</p>
                </div>
            </div>
        </div>
        </>
    )

}

export default Profile;
