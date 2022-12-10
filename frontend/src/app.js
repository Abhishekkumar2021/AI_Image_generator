import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import {AiOutlineLoading3Quarters} from "react-icons/ai";

const StyledApp = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-color: #f5f5f5;
    form {
        flex:0.2;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap:10px;
        background-color: #fff;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        input,select{
            padding: 15px;
            border-radius: 5px;
            border: 1px solid #ccc;
            outline: none;
            min-width: 200px;
            font-size: 1.4rem;
            &:focus{
                border: 1px solid #000;
            }
            &:hover{
                border: 1px solid #000;
            }
        }
        button{
            padding: 15px 25px;
            border-radius: 5px;
            border: 1px solid #ccc;
            outline: none;
            font-size: 1.4rem;
            background-color: teal;
            color: #fff;
            transition: all 0.2s ease-in-out;
            cursor: pointer;
            &:active{
                transform: scale(0.95);
            }
        }
        
    }
    .container{
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 20px;
        padding: 20px;
        font-size: 10rem;
        #icon{
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        
        img{
                object-fit: cover;
                border-radius: 10px;
                box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
                border: 5px solid #fff;
            }
        
    }
`;



function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getdata = async (e) => {
        setIsLoading(true);
        e.preventDefault();
        const prompt = e.target.prompt.value;
        const size = e.target.size.value;
        const number = e.target.number.value;
        const response = await axios.post("http://localhost:8000/generate", {
            prompt,
            size,
            number,
        });
        console.log(response.data.urls);
        setImages(response.data.urls);
        setIsLoading(false);
    };

    return (
        <StyledApp>
            <form onSubmit={getdata}>
                <input type="text" name="prompt" placeholder="Enter image text" />
                <select name="size">
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <input type="number" name="number" placeholder="Number of images" min={1} max={10} />
                <button type="submit"  >Generate</button>
            </form>
            {isLoading ? <div className="container"><AiOutlineLoading3Quarters id="icon"/></div> : <div className="container">
                {images.map((image, index) => {
                    return (
                        <img src={image} alt="Generated!" key={index} />
                    );
                })
                }
            </div>}
        </StyledApp>
    );
}

export default App;