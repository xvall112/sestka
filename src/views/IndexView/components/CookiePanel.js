import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookiePanel = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Souhlasím"
      declineButtonText="Decline"
      cookieName="gatsby-gdpr-google-analytics"
      style={{ background: 'rgb(174, 0, 2)' }}
      buttonStyle={{
        color: 'black',
        backgroundColor: '#e0e0e0',
        borderRadius: '10px',
      }}
    >
      Tento web používá k poskytování služeb soubory cookie.
    </CookieConsent>
  );
};

export default CookiePanel;
