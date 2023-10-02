// Used to redirect the user to our social media pages
const FACEBOOK_URL = 'https://www.facebook.com/';
const TWITTER_URL = 'https://twitter.com/';
const LINKEDIN_URL = 'https://www.linkedin.com/';

// Enum for social media styles or presets
export const SocialMedias = {
    Facebook : 0,
    Twitter : 1,
    LinkedIn : 2
}

// Button used to redirect the user to a specific social media link
export const SocialMediaButton = ( {socialMedia} ) => {
    // Callback that opens a new tab when the button is clicked
    const handleClick = (newURL) => {
      window.open(newURL, "_blank");
    }

    // Facebook button
    if (socialMedia === SocialMedias.Facebook) {
      return (
        <div>
          <button className="social-media-button facebook-button" onClick={() => {handleClick(FACEBOOK_URL)}}></button>
        </div>
      );
    }
    // Twitter button
    else if (socialMedia === SocialMedias.Twitter) {
      return (
        <div>
          <button className="social-media-button twitter-button" onClick={() => {handleClick(TWITTER_URL)}}></button>
        </div>
      );
    }
    // LinkedIn button
    else if (socialMedia === SocialMedias.LinkedIn) {
      return (
        <div>
          <button className="social-media-button linked-in-button" onClick={() => {handleClick(LINKEDIN_URL)}}></button>
        </div>
      );
    }

    return (
      <div></div>
    );
}