import React from 'react';

const Blog = () => {
    return (
        <div className='m-5 sm:m-0 shadow-lg'>
            <p className='bg-green-400 text-justify p-6 lg:m-6 rounded-lg shadow-lg text-lg text-bold my-3'>
                <span className='text-blue-500 text-center text-2xl'>Question : What is the Purpose of react router?</span> 
                <br />
                <span className='text-gray-100 text-bold'>
                Answer : A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform. The following illustration shows how react router’s dynamic routing works as compared to traditional static routing.
                </span>
            </p>

            <p className='bg-green-400 text-justify p-6 lg:m-6 rounded-lg text-lg text-bold my-3'>
                <span className='text-blue-500 text-center text-2xl'>Question : How to work context API ?</span> 
                <br />
                <span className='text-gray-100 text-bold'>
                Answer : Store the state in a Context value in the common ancestor component (called the Provider Component), and access it from as many components as needed (called Consumer Components), which can be nested at any depth under this ancestor. This solution has the same benefits as the Props solution, but because of what could be called “hierarchical scoping”, it has the added benefit that any component can access the state in any Context that is rooted above itself in React’s hierarchy, without this state needing to be passed down to it as props. React.js takes care of all the magic behind the scenes to make this work.
                </span>
            </p>
            <p className='bg-green-400 text-justify p-6 lg:m-6 rounded-lg text-lg text-bold my-3'>
                <span className='text-blue-500 text-center text-2xl'>Question: Discuss React useRef Hook ?</span> 
                <br />
                <span className='text-gray-100 text-bold'>
                    Answer : The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                </span>  
            </p>



        </div>
    );
};

export default Blog;