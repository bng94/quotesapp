import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 

html{
    font-family: "Share Tech Mono", monospace;
    scroll-behavior: smooth;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.background};
}

a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.green};
    &:visted, :active, :link{
        color: ${({ theme }) => theme.colors.cyan};
     }
     &:hover{
        color: ${({ theme }) => theme.colors.cyan};
     }
}

ul{
    list-style: none;
}

.swiper-container {
    width: 100%;
    padding: 50px 0;
}


.swiper-slide {
    background: ${({ theme }) => theme.colors.darkCyanBlue};
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 15px 50px rgba(0,0,0,0.2);
    filter: blur(4px);
    width: 350px;
    max-width: 100%;
}

.swiper-3d .swiper-slide-shadow-left,
.swiper-3d .swiper-slide-shadow-right{
    background-image: none;
}

.swiper-slide-prev, 
.swiper-slide-next{
    background-image: none;
}

.swiper-slide-active {
    filter: blur(0px);
}

/* Custom ScrollBar */

::-webkit-scrollbar{
    width: 4px;
  @media (max-width: 600px) {
    display: none;
  }

}
::-webkit-scrollbar-thumb{
    background: #31435f;
    border-radius: 20px;
}
/** 
::-webkit-scrollbar-thumb:hover{
    background: #202e46;
}*/

@media (max-width: 768px) {
    .swiper-container {
        width: 100%;
        padding: 10px 0;
    }
}
`;
