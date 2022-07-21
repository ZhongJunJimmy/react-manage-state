# React State Manage
You can review difference methods to manage state in react by checkout others branch.

### How to use it
- Clone thie repository bt following command
  
  `> git clone git@github.com:ZhongJunJimmy/react-manage-state.git`
- Checkout others branch to review difference methods 

  `> git checkout react-simplest | react-hook | react-context | redux-sample`


### React Simplest
1. The React Component Types — Class-Based Component and Function Component
2. Before the 16.8 version of React:
	- The class-based type is required if the component will manage the state data and/or lifecycle method (more on this later). Hence, it is called a stateful component.
	- The function component type cannot maintain state and lifecycle logic. And as such, it is referred to as a stateless component.
3. Unidirectional flow
4. This type is the simplest form of React component because it is primarily concerned with how things look.

### React Hook
1. Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
2. **Only Call Hooks at the Top Level**  
Don’t call Hooks inside loops, conditions, or nested functions.
3. **Only Call Hooks from React Functions**  
Don’t call Hooks from regular JavaScript functions.  

### React Context
1. Solved Props drilling issue without third Party Packages

### Redux Sample
Action -> Reducer -> Store -> UI  
1. Action: An object describing "what happened"  
2. Reducer: An function that takes a current state value and an action object, and returns a new state value.  

**To be continue...**

