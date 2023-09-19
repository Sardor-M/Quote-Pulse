import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const ImageBlob = styled.div`
  position: relative;
  text-align: center;
  top: 10px;
  margin-top: 20px;
  transition: 0.3s all ease-in-out;
  width: fit-content;
  margin: auto;
  height: 100px;
  z-index: 99999;

  &:hover {
    transform: scale (4.8);
    z-index: 99999;
    transition: 0.3s ease-in-out;
    box-shadow: 0 0 80px 90px rgba (0, 0, 0, 0.6);
    /* height: 100px; */
    @media only screen and (max-width: 800px) {
      transform: scale (3.8);
      z-index: 99999;
      transition: 0.3s all ease-in-out;
      box-shadow: 0 0 80px 90px rgba (0, 0, 0, 0.6);
    }
    @media only screen and (max-width: 600px) {
      transform: scale (2.8);
      z-index: 99999;
      transition: 0.3s all ease-in-out;
      box-shadow: 0 0 80px 90px rgba (0, 0, 0, 0.6);
    }
  }
`;
