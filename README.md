# Managing state by React Simplest

## The React Component Types 
**Function Component & Class-Based Component**<br>
The simplest way to define a component is to write a JavaScript function:
```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
This function is a valid React component because it accepts a single “props” (which stands for properties) object argument with data and returns a React element. We call such components “function components” because they are literally JavaScript functions.

You can also use an ES6 class to define a component:
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
The above two components are equivalent from React’s point of view.

**Before the 16.8 version of React:**
- The class-based type is required if the component will manage the state data and/or lifecycle method (more on this later). Hence, it is called a stateful component. 
- The function component type cannot maintain state and lifecycle logic. And as such, it is referred to as a stateless component.

This type is the simplest form of React component because it is primarily concerned with how things look. 
But now, We can manage the stateful features by the function component in the **React Hooks**. This gives us the flexibility to create a React application ONLY with function component.
