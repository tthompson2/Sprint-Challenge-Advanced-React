- [X] Why would you use class component over function components (removing hooks from the question)?
- [X] Name three lifecycle methods and their purposes.
- [X] What is the purpose of a custom hook?
- [X] Why is it important to test our apps?

1. You would use a class component over a functional component to be able to utilize the lifecycle functions to determine the lifecycle of all of the different React components that you are creating.

2. The three different lifecycle methods of React are compentDidMount(), componentDidUpdate(), and componentWillUnmount(). These different functions are used together to create mount, update, and remove different components that we create as programmers from DOM. The first function (componentDidMount) adds the component after it is generated/rendered to the DOM. The componentDidUpdate function is called whenever we would like to update the state of the DOM, and reflect these changes our React application. The componentWillUnount() function is used to remove the component from the DOM once it is no longer being rendered by the application.

3. Custom hooks are useful as React programmers because they allow us to reuse stateful logic, which allows us to be able to setup hooks which are more esaily able to be reused by the application, which makes our code more DRY, and helps us to create state that is passed down from a higher level from the application.

4. It is important to test our applications because as programmers we are constantly updating and refactoring our codebase and adding new functionality to the code. As we add functionality to the codebase we need to make sure the application is still functioning properly as an integrated whole, and that individual units of our code are working correctly as well. Tests serve as a baseline for how the application should be running, both for invididual units, and the integrated whole. If at any point the tests don't pass to a sufficent degree you will be able to identify bugs in our application that need to be refactored by the development team to ensure that you aren't pushing bugs to production.