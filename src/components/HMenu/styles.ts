import styled from 'styled-components';

export const Container = styled.nav`
  @media (orientation: landscape) {
    visibility: collapse;
  }

  position: fixed;
  top: 0;
  right: 0;

  #menuToggle {
    display: block;
    position: relative;
    top: 3.5rem;
    right: 3.5rem;

    -webkit-user-select: none;
    user-select: none;
  }

  #menuToggle a {
    text-decoration: none;
    color: #232323;

    transition: color 0.3s ease;
  }

  #menuToggle a:hover {
    color: tomato;
  }

  #menuToggle input {
    display: block;
    width: 40rem;
    height: 3.2rem;
    position: absolute;
    top: -0.7rem;
    right: -0.5rem;

    cursor: pointer;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }

  /*
 * Just a quick hamburger
 */
  #menuToggle span {
    display: block;
    width: 3.3rem;
    height: 0.4rem;
    margin-bottom: 0.5rem;
    position: relative;

    background: #cdcdcd;
    border-radius: 0.3rem;

    z-index: 1;

    transform-origin: 0.4rem 0rem;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  #menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  #menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  /*
 * Transform all the slices of hamburger
 * into a crossmark.
 */
  #menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-0.2rem, -0.1rem);
  }

  /*
 * But let's hide the middle one.
 */
  #menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  /*
 * Ohyeah and the last one should go the other direction
 */
  #menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -0.1rem);
  }

  /*
 * Make this absolute positioned
 * at the top left of the screen
 */
  #menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    width: 105vw;
    height: 105vh;
    margin: -10rem 0 0 -93vw;
    padding: 20rem 7rem 0 0;
    padding-top: 12.5rem;

    background: #232323;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */

    transform-origin: 0% 0%;
    transform: translate(100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  }

  #menu li {
    padding: 1rem 0;
    font-size: 2.2rem;
  }

  /*
 * And let's slide it in from the left
 */
  #menuToggle input:checked ~ ul {
    transform: none;
  }
`;
