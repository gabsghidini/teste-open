"use client";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Global = createGlobalStyle`
    :root {
        /* --- Colors --- */
		/* Orange */
		--orange-700: #FF5700;
		--orange-600: #FF6A00;
		--orange-500: #FF7B00;
        --orange-400: #F48534;
        --orange-300: #FF9946;
        
        /* Blue */
		--blue-800: #052035;
		--blue-700: #002337;
		--blue-600: #00344D;
		--blue-500: #05537F;
		--blue-400: #3D80A4;
		--blue-300: #4385AA;


        /* White & Black */
        --white: #fff;
        --black: #000;

        /* --- Fonts --- */
        --font-family-questrial: "Questrial", 'Segoe UI' ,sans-serif;

        /* --- Font Sizes --- */
        /* Headings */
        --size-h1: 2.75rem;
        --size-h2: 2.25rem;
        --size-h3: 2rem;
        --size-h4: 1.75rem;
        --size-h5: 1.5rem;
        --size-h6: 1.25rem;
        --size-h7: 1rem;

        /* Body */
        --size-body-1: 1rem;
        --size-body-2: 0.875rem;
        --size-body-3: 0.75rem;

        /* --- Weight --- */
        --weight-400: 400;
        --weight-500: 500;
        --weight-600: 600;
        --weight-700: 700;

        /* --- Gap --- */
        --gap-10: 10px;
        --gap-15: 15px;
        --gap-20: 20px;
        --gap-25: 25px;
        --gap-30: 30px;

        /* --- Boder Radius --- */
        --border-radius-4: 4px;
        --border-radius-8: 8px;
        --border-radius-150: 150px;
    }

    html, body, div, span, iframe, h1, h2, h3, h4, h5, h6, p, a, img, small, strong, form, label, article, aside, figure, figcaption, footer, header, nav, section, button, textarea, option, input, select,ul,li {
        margin: 0;
        padding: 0;
        font-size: 100%;
        vertical-align: baseline;
        text-decoration: none;
        border: none;
        box-sizing: border-box;
        background: none;
    }
    
    input:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px white inset;
    }
    
    article, aside, details, figcaption, figure, 
    footer, header, nav, section {
        display: block;
    }
    
    body {
        font-family: var(--font-family-questrial);
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        position: relative;
        z-index: -6;
    }

    ul,li {
        list-style: none;
    }

    input, select{
        outline: none;
        background: transparent;
        font-family: var(--font-family-questrial);
    }

    button{
        cursor: pointer;
        display: inline-flex;
	    align-items: center;
	    justify-content: center;
        font-family: var(--font-family-questrial);
        border: none;
        background: transparent;
        transition: 0.3s;
    }
`;

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 15px;
`;
