ReactJS was used for this project.

For the Form section, functional components were used with React Hooks to manage the state. The Form component is used as a Parent passing props to the child (Preview) component to display the list of inputs.

For the DateTime section, React Class components were used with moment-timezone for the list of timezone names. Both a Digital and analogue clock is display when a time zone is selected with the date also displayed. Using setInterval to re-render the times every second.
A delete button was added to the datetime components to remove from the Main page.

Simple React Router was used to route between the two projects.

Overall requirements:

Easy- Form:

-	Develop a Form component that takes inputs such as Name and Age along with a submit button.
-	Develop another component called Preview that will display all these details on submit.
-	Submitting again should override old data with new.
-	Clear button should clear both Form and Preview content.

Moderate:

-	Develop a Component that displays the current Date and Time ( called DateTime) with a clock ticking showing live time in the local time zone.
-	Add to Form from before by making the Form dynamic (custom form) allowing a user to add input fields at run-time in the UI.
-	These new input fields should also display in the preview Component.

Difficult:

-	Reuse the DateTime component from before and build a page to get “Timezone” as an input from the user.
-	Selecting a Timezone should add the Datetime component with the clock displaying time in that particular time zone.
-	Should be able to add, reuse and add as many components as needed in timezones at run-time.
-	All DateTime components should be showing live time running in that time zone.
-	Bonus points for the ability to remove a DateTime component from the page by hovering and hitting a close button.
-	No duplicate components should be added. The user should be notified if they try to add the same timezone twice.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
