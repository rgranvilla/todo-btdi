import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    /*** Principals Colors ***/
    --primary: #0B4576;
    --secondary: #EA7025;
    --active: #29A30A;
    --alert: #CA322D;
    --unselected: #E7F2F1;

    /*** Background Colors ***/
    --bg-button: #E7F2F1;
    --bg-button-card: #888888;
    --bg-dashboard: #FEFEFE;
    --bg-list: #dfe3e6;
    --bg-card: #FFFFFF;

    /*** Text Colors ***/
    --txt-content: #888888;
    --txt-title: #555555;
    --txt-input: #222222;
    --txt-white: #FFFFFF;

    /*** Cores Tag Areas ***/
    --front: #4ccd41;
    --back: #9666ff;
    --mobile: #ef233c;
    --general: #fca311;
  }

  
  html, body, #root {
    min-width: 100%;
    width: fit-content;
    height: 100%;
  }


  body {
    font: 14px 'Poppins', sans-serif;
    line-height: 18px;
    background: var(--bg-dashboard);
    -webkit-font-smoothing: antialiased;
  }


  button {
    cursor: pointer;
  }
  

  ul {
    list-style: none;
  }

    /*** Default Area Colors ***/
    .front {
    background: var(--front);
  }
  .back {
    background: var(--back);
  }

  .mobile {
    background: var(--mobile);
  }

  .general {
    background: var(--general);
  }
`;
