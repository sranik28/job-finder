import React from 'react';

const Blog = () => {
   return (
      <div className='grid md:grid-cols-2 gap-4 mt-10 mb-20'>
         <div className='p-3 border-2 rounded w-full h-[100%]'>
            <h1 className='text-3xl py-3'>When to use Context api?</h1>
            <p>The <strong>Context API</strong> is a powerful tool for managing state in Our React
               application and can help simplify our code and make it more
               maintainable.The Context API should not be overused, as it can make your code harder to understand and maintain. Only use Context when it's appropriate and necessary for your specific use case.</p>
         </div>
         <div className='p-3 border-2 rounded'>
            <h1 className='text-3xl py-3'>What is Custom Hooks?</h1>
            <p><strong>Custom hooks</strong> in React are a way to reuse stateful logic across
               multiple components in your application. They allow you to extract
               common logic into a reusable function, which can be used across
               different components. Custom hooks are functions that start with the
               prefix use. They can call other hooks, such as useState, useEffect,
               useRef, etc., and can also have their own state and logic.</p>
         </div>
         <div className='p-3 border-2 rounded'> 
            <h1 className='text-3xl py-3'>What is useRef?</h1>
            <p><strong>useRef</strong> is a React Hook.This is a React Hook that allows you to create a mutable variable that persists across re-renders of a component. It is commonly used to access the DOM elements or to store any mutable value that needs to be accessed between renders without triggering a re-render.</p>
         </div>
         <div className='p-3 border-2 rounded'>
            <h1 className='text-3xl py-3'>What is useMemo?</h1>
            <p><strong>useMemo</strong> is a React Hook.This is a React Hook that allows you to memoize the result of a function and only recompute it when the dependencies change. It is used to optimize performance by avoiding unnecessary re-computations of expensive operations. </p>
         </div>



         {/* import React from "react";

const Blog = () => {
  return (
         <div className="text-center bg-slate-200 p-5 rounded-sm">
            <h1>Questions Answers</h1>
            <div className="mx-3 ">
               <div className="bg-sky-600 text-white p-5 border-2 border-black rounded-lg">
                  <h2 className="mb-5 text-3xl ">When to use Context api?</h2>
                  <p className="text-xl mb-5">
                     The Context API is a powerful tool for managing state in Our React
                     application and can help simplify our code and make it more
                     maintainable.
                  </p>
                  <ul className="text-left">
                     <li>
                        1. When you have data that needs to be shared across multiple
                        components in your application.
                     </li>
                     <li>
                        2. When you have deeply nested components that need to access the
                        same data.
                     </li>
                     <li>
                        3. When you want to avoid prop drilling, which can become
                        cumbersome and make your code harder to read and maintain.
                     </li>
                     <li>
                        4. When you need to update the state of multiple components in
                        response to a single event.
                     </li>
                     <li>
                        5. When you want to keep your code modular and avoid coupling
                        between components.
                     </li>
                  </ul>
               </div>
               <div className="bg-sky-600 text-white my-5 p-5 border-2 border-black rounded-lg">
                  <h1 className="mb-5 text-3xl ">What is Custom Hooks?</h1>
                  <p className="text-xl text-left">
                     Custom hooks in React are a way to reuse stateful logic across
                     multiple components in your application. They allow you to extract
                     common logic into a reusable function, which can be used across
                     different components. Custom hooks are functions that start with the
                     prefix use. They can call other hooks, such as useState, useEffect,
                     useRef, etc., and can also have their own state and logic.
                  </p>
               </div>
               <div className="bg-sky-600 text-white p-5 border-2 border-black rounded-lg">
                  <h1 className="mb-5 text-3xl ">What is useRef?</h1>
                  <div className="text-left">
                     <p>
                        1. In React, the useRef hook is used to create a mutable reference
                        to an element or a value that persists across component.
                     </p>
                     <p>
                        2. Accessing the DOM: You can use useRef to reference a DOM
                        element and then access its properties and methods. This is
                        particularly useful when you need to focus an input field or
                        scroll to a specific element.
                     </p>
                     <p>
                        3. Storing a value: You can use useRef to store a value that you
                        don't want to trigger a re-render when it changes. This is because
                        updating a ref object does not trigger a component re-render.
                     </p>
                  </div>
               </div>
               <div className="bg-sky-600 text-white my-5 p-5 border-2 border-black rounded-lg">
                  <h1 className="mb-5 text-3xl ">What is useMemo?</h1>
                  <div className="text-left">
                     <p>
                        1. useMemo is a hook provided by React that allows you to memoize
                        a value that is derived from other values, such as props or state,
                        and only recompute it when the dependencies change. It can help
                        you optimize the performance of your application by reducing
                        unnecessary re-renders.
                     </p>
                     <p>
                        2. By using useMemo, we ensure that the expensive calculation is
                        only performed when necessary, and not on every render of the
                        component.
                     </p>
                     <p>
                        3. useMemo can also be used to memoize function calls, which can
                        be useful when you have a function that takes a long time to
                        execute and is called frequently with the same arguments.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         );
};

         export default Blog */}
      </div>
   );
};

export default Blog;
