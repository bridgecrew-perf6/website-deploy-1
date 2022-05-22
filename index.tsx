// import { useEffect, useState } from "https://esm.sh/preact/hooks";
// import styled from "https://esm.sh/styled-components";
// import LayoutTopBar from "./src/components/LayoutTopBar.tsx";
// import LoadingScreen from "./src/components/LoadingScreen.tsx";

const MAINTAINERS = [
  {
    github_username: "crookse",
    image_src: "https://github.com/crookse.png",
  },
  {
    github_username: "ebebbington",
    image_src: "https://github.com/ebebbington.png",
  },
  {
    github_username: "Guergeiro",
    image_src: "https://github.com/Guergeiro.png",
  },
  {
    github_username: "saragee3",
    image_src: "https://github.com/saragee3.png",
  },
];

const KEY_CONTRIBUTORS = [
  {
    github_username: "SnoCold",
    image_src: "https://github.com/SnoCold.png",
  },
  {
    github_username: "prisis",
    image_src: "https://github.com/prisis.png",
  },
];

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
// `;

// const Hero = styled.div`
//   background: #2f343c;
//   color: #ffffff;
//   height: 600px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   width: 100%;
//   position: relative;
//   padding-bottom: 75px;
//   img {
//     position: relative;
//     z-index: 2;
//     margin-bottom: 1rem;
//   }
//   &:after {
//     clip-path: polygon(100% 70%, 73% 64%, 24% 71%, 0 67%, 0 100%, 100% 100%);
//     content: "";
//     position: absolute;
//     background: #ffffff;
//     height: 500px;
//     width: 100%;
//     bottom: -75px;
//     z-index: 1;
//   }
//   &:before {
//     opacity: .05;
//     content: "";
//     position: absolute;
//     background: url("/bg-polygons.jpg") center center no-repeat;
//     height: 100%;
//     width: 100%;
//     z-index: 1;
//   }
// `;

// const Org = styled.p`
//   position: relative;
//   z-index: 2;
//   font-size: 1.4rem;
//   font-weight: bold;
//   letter-spacing: .1rem;
//   color: #7dade2;
//   text-transform: uppercase;
//   margin-bottom: 0.25rem;
// `;

// const Motto = styled.p`
//   position: relative;
//   z-index: 2;
//   font-size: 1.2rem;
// `;

// const Copyright = styled.p`
//   text-align: center;
//   font-weight: bold;
//   font-size: .8rem;
//   letter-spacing: .1rem;
//   text-transform: uppercase;
//   margin-bottom: 0 !important;
// `;

// const InnerContainer = styled.div`
//   width: 100%;
//   max-width: 900px;
// `;

// const Main = styled.div`
//   background: #ffffff;
//   position: relative;
//   z-index: 2;
//   color: #333;
// `;

// const Section = styled.div`
//   background: ${({ background }) => background ? background : "#ffffff"};
//   color: ${({ color }) => color ? color : "#333333"};
//   display: flex;
//   padding: 4rem 2rem;
//   justify-content: center;
//   width: 100%;
// `;

// const SectionTitle = styled.h2`
//   font-weight: bold;
//   letter-spacing: .1rem;
//   text-transform: uppercase;
//   width: 100%;
//   margin-bottom: 3rem;
//   text-align: center;
// `;

// const Lede = styled.h3`
//   font-size: 1.5rem;
//   font-weight: bold;
//   text-align: center;
// `;

// const CardsContainer = styled.div`
//   display: flex;
//   gap: 2rem;
//   margin-bottom: 2rem;
//   justify-content: center;
//   flex-wrap: wrap;
// `;

// const Card = styled.div`
//   cursor: pointer;
//   background: #ffffff;
//   border-radius: 2rem;
//   padding: 1.5rem;
//   color: #333333;
//   display: flex;
//   flex-direction: column;
//   box-shadow: 0 0 1rem rgba(0, 0, 0, .5);
//   text-align: center;
//   transition-property: bottom, position;
//   transition-duration: .25s;
//   bottom: 0;
//   position: relative;
//   max-width: 30%;
//   width: 100%;
//   &:hover {
//     bottom: .5rem;
//   }
//   img {
//     height: 100px;
//     width: 100px;
//     z-index: 2;
//     margin-bottom: 1rem;
//   }
//   @media screen and (max-width: 800px) {
//     max-width: 40%;
//   }
//   @media screen and (max-width: 700px) {
//     max-width: 100%;
//   }
// `;

// const CardTitle = styled.h3`
//   font-weight: bold;
//   font-size: 1.5rem;
// `;

// const CardDescription = styled.p`
//   font-size: 1rem;
//   margin-bottom: 1.5rem;
// `;

// const Button = styled.a`
//   background: #000000;
//   color: #ffffff;
//   padding: 1rem 2rem;
//   border-radius: 3rem;
//   font-weight: bold;
//   font-size: .8rem;
//   letter-spacing: .1rem;
//   text-transform: uppercase;
//   text-align: center;
//   transition-property: color;
//   transition-duration: .15s;
//   text-decoration: none;
//   &:hover {
//     color: #7dade2;
//     text-decoration: none;
//   }
// `;

// const Hr = styled.div`
//   height: 5px;
//   border-radius: 3rem;
//   background: rgba(0, 0, 0, 0.25);
//   margin-bottom: 3rem;
// `;

// const ImageContainer = styled.div`
//   text-align: center;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const TagsContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   justify-items: flex-end;
// `;

// const Tag = styled.div`
//   background: #000000;
//   border-radius: 1rem;
//   color: #ffffff;
//   font-size: .75rem;
//   padding: .15rem .9rem;
//   text-align: center;
//   text-transform: uppercase;
//   margin-right: .25rem;
//   &:last-of-type {
//     margin-right: 0;
//   }
// `;

// const MaintainersContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   flex-wrap: wrap;
//   margin-bottom: 3rem;
// `;

// const Maintainer = styled.img`
//   border-radius: 50%;
//   cursor: pointer;
//   padding: 1rem;
//   max-width: 110px;
//   &:last-of-type {
//     margin-right: 0;
//   }
// `;

export default function Home() {
  // const [mobileViewport, setMobileViewport] = useState(null);

  // TODO(crookse) This is duplicate code. We should switch to using contexts or something else.
  // useEffect(() => {
  //   // Support mobile views, desktop views, and window resizing
  //   addEventListener("resize", handleWindowSizeChange);
  //   if (mobileViewport === null) {
  //     handleWindowSizeChange();
  //   }
  // }, [mobileViewport]);

  // TODO(crookse) This is duplicate code. We should switch to using contexts or something else.
  // function handleWindowSizeChange() {
  //   if (window.innerWidth >= 900) {
  //     setMobileViewport(false);
  //   } else {
  //     setMobileViewport(true);
  //   }
  // }

  const handleTeamMemberClick = (username) => {
    window.open(`https://github.com/${username}`, "_blank").focus();
  };

  // if (mobileViewport === null) {
  //   return <LoadingScreen />;
  // }

  return (
    <div>hee</div>
  );
}