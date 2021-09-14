import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}
body, html,textarea, #root{
    background:var(--background);
    max-height:100vh;
    max-width:100vw;
    width:100%;
    height: 100%;
    font-family: 'Inter', sans-serif;
}
*, button, input{
    border:0;
    background:none;
    font-family: 400 1rem "Inter", sans-serif, Roboto;
}
:root{
    --background:#EFF2F5;
    --white:#FFFFFF;

    --black:#212121;
    --black-light:#424242;
    --border-gray: #CCCCCC;
    --yellow:#FFD130;
    --red:#FF3E3E;
    --red-light:#FF8B8B;
    --green:#15BD26;
    
@media (max-width:1280px) {
    html{
        font-size:93.75%;
    }
}
@media (max-width:720px) {
    html{
        font-size:87.5%;
    }
}
`;
