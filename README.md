# AI Image Generator

## This is an application that generates images based on the text you enter.

### The application uses the following technologies:
- React
- NodeJs (Express)

### How to run the application:
- Clone the repository
- Go to the root/frontend folder and run `npm install`
- Go to the root/backend folder and run `npm install`
- Go to the root/backend folder and run `node index.js`
- Go to the root/frontend folder and run `npm start`
- Create a new file named .env in the root/backend folder and add the following lines: 
    1. `PORT=< some port number >`
    2. `API_KEY=<your api key >`
- You can get your api key from [here](https://beta.openai.com/)
- Go to http://localhost:3000/ in your browser to see the application

### How to use the application:
- Enter the text you want to generate an image for in the text box
- Enter the number of images you want to generate in the number of images box
- Enter the size of the images you want to generate in the size box
- Click on the generate button
- The generated image will be displayed in the image box

### How the application works:
- The application uses the OpenAI API to generate the image
- The application sends the text to the backend
- The backend sends the text to the OpenAI API
- The OpenAI API returns the generated image
- The backend sends the generated image to the frontend
- The frontend displays the generated image



