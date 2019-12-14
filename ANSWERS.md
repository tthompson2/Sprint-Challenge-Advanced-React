- [ ] Why would you use class component over function components (removing hooks from the question)?
- [ ] Name three lifecycle methods and their purposes.
- [ ] What is the purpose of a custom hook?
- [ ] Why is it important to test our apps?

1. You would use class components instead of hooks because when you use class components you are able to declare state in an object, which makes it easier to have multiple different values associated with the object.  

2. The three lifecycle methods are used to deploy our components to the dom. The methods are componentDidMount, componentDidUpdate, and, componentWillUnmount. componentDidMount will mount the component to the DOM. componentDidUpdate, is a method to determine whether or not the component is still successfully mounted. componentWillUnmount is the last functions that components will run, and will makes sure that the component is unmounted from the DOM

3. A custom hook is a strategy by which we can make our code be more DRY. We can create one hook which can be used to as a template for all of the different other hooks that we would like to create.

4. It is important to be able to test our apps because we need to be able to verify that our code is functional throughout different stages of development. If we have tests we can run them at any point during development of new features to ensure that we haven't broken our software adding new updates.