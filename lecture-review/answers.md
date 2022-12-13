# ReactJS #

## Question 1 ##
Props and state are very important concepts of React. 


#### Props: ####
Props, short for properties, are read-only components. They are used to pass data between one React component to other React components. It stores the vlaue of the attributes of a tag. The data flow in React between components is uni-directional which means it flows from parent to child only. Props are also immutible which means we are not able to modify the probs from inside the component. 

Example of data passed using props:

```
class parentCom extends Component {
    render() {
        return (
            <childCom name="The First Child" />
        );
    }
}

const childCom = (props) => {
    return <p>{props.name}</p>
};

```

First, we define some data from the parent component and then assign this to the child component's prop attribute 'name'. This will allow us to pass data with props. Dot notation is then used to access this prop data and render.


#### State: ####
State is known as a built-in React objects which contains information or data about the component. It allows these components to manage and create their own data. So contrary to props, components are not able to pass data with state, but can only manage it internally. State data can't be accessed from the outside.

```
class test extends React.Component {    
    constructor() {    
        this.state = {      
            id: 1,      
            name: "test"    
        };  
    }    
    
    render() {    
        return (      
            <div>        
              <p>{this.state.id}</p>        
              <p>{this.state.name}</p>      
            </div>    
        );  
    }
}

```

States can also be modified with special methods called setState().

```
this.setState({        
    id: "2"
});

```


## Question 2 ##
In functional programming, the term functor refers to containers that can be used with the 'map' function. They are data structures that allow you to map functions over, with the aim of lifting values from containers, changing them and placing them back into the container. This operation allows you to grab a function and apply it to each element of the array. It is a deisgn pattern that establishes the semantics of how fmap should function. 

An example in JavaScript, using fmap is:
```
fmap :: (A -> B) -> Wrapper(A) -> Wrapper(B)

```

The function fmap takes a functor Wrapper(A) and a function (from A -> B), which returns a new functor Wrapper(B) with the outcome of applying the function on the value before closing it once more. Fmap can be regarded as immutable as it essentially returns a new copy of the container with each call.


