import React, { useState, useContext } from 'react';

import envelope from '../images/envelope.svg';
import x from '../images/x.png';

import { ThemeContext } from './ThemeWrapper';

import {
  StyledMailWidget,
  CnInput,
  CnTextArea,
  CnSubmit,
} from './styles/StyledMailWidget';

const MailWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({});
  const [formSent, setFormSent] = useState(false);

  const [nightMode] = useContext(ThemeContext);

  function encode(data) {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  }

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (formState.name && formState.email && formState.message) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...formState,
        }),
      })
        .then(setFormSent(true))
        .catch(error => alert(error));
    }
  };

  const handleChange = e => {
    console.log(formState);
    const event = e.target;
    setFormState(prev => ({ ...prev, [event.name]: event.value }));
  };

  return (
    <StyledMailWidget
      nightMode={nightMode}
      className={isVisible ? 'visible' : ''}
    >
      <div
        className="toggleButton"
        onClick={toggleVisible}
        onKeyDown={toggleVisible}
        tabIndex="0"
        role="button"
      >
        <img
          className={isVisible ? 'mailWidgetImg small' : 'mailWidgetImg'}
          src={isVisible ? x : envelope}
          alt="envelope"
        />
      </div>
      <div className="contentMailWidget">
        {!formSent ? (
          <form
            name="cinemacontact"
            method="post"
            action="/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="cinemacontact" />
            <p hidden>
              Don’t fill this out: <CnInput name="bot-field" />
            </p>
            <p>
              <CnInput
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="För- och efternamn"
              />
            </p>
            <p>
              <CnInput
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Epost"
              />
            </p>
            <p>
              <CnTextArea
                name="message"
                onChange={handleChange}
                placeholder="Meddelande"
              />
            </p>
            <p>
              <CnSubmit nightMode={nightMode} type="submit">
                Skicka meddelande
              </CnSubmit>
            </p>
          </form>
        ) : (
          <p>
            Tack för att du kontaktar Cinemanord. Vi återkommer så fort vi bara
            kan ...
          </p>
        )}
      </div>
    </StyledMailWidget>
  );
};

export default MailWidget;
