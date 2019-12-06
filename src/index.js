import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { hydrate, render } from "react-dom";

function scrollOpacity() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = winScroll / height;
  const newOpacity = 1 + scrolled * 2;
  return newOpacity;
}

function scrollFilter() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  const newFilter = 0 + winScroll / 100;
  return newFilter;
}

function App() {
  const [opacity, setOpacity] = useState(1);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOpacity(scrollOpacity());
      setFilter(scrollFilter());
    };

    window.addEventListener("scroll", onScroll);

    return function cleanup() {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <BlurredImageContainer>
        <ImgSrc opacity={opacity} filter={filter} />
      </BlurredImageContainer>
      <Content>
        <Avatar src="https://pbs.twimg.com/profile_images/378800000748837969/bd8e553e5cae83ef488c6b15166bdd55.png" />
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
        <p>This is some test content</p>
      </Content>
    </React.Fragment>
  );
}

const BlurredImageContainer = styled.div`
  display: block;
  padding: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const ImgSrc = styled.div.attrs(props => ({
  style: {
    opacity: `${props.opacity}`,
    filter: "blur(" + `${props.filter}` + "px) brightness(0.7)"
  }
}))`
  position: absolute;
  background: url("http://bromleydemo.files.wordpress.com/2013/10/blossom.jpg?w=600")
    center center;
  background-size: cover;
  top: -10%;
  bottom: 10%;
  left: -10%;
  right: 10%;
  width: 120%;
  height: 120%;
`;

const Content = styled.div`
  padding: 150px 50px;
  color: #fff;
  text-align: center;
`;

const Avatar = styled.div`
  height: 120px;
  width: 120px;
  border-radius: 100%;
  border: 5px solid #fff;
  margin: 0 auto 50px;
`;

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
