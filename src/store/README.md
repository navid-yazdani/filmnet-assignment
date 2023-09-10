> This folder includes Redux State Management. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

> Create a file named index.ts Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it: This creates a Redux store. Add a new file named slices/contentSlice.ts In that folder, import the createSlice API from Redux Toolkit.

> Creating a contentSlice, an initial state value, and one or more reducer functions and extraReducer to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators, reducer and extraReducer function for the whole slice.

> Next, we need to import the reducer function from the content slice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.

> While it's possible to import the RootState and AppDispatch types into each component, it's better to create typed versions of the useDispatch and useSelector hooks for usage in your application. This is important for a couple reasons:

>* For useSelector, it saves you the need to type (state: RootState) every time.
>* For useDispatch, the default Dispatch type does not know about thunks. In order to correctly dispatch thunks, you need to use the specific customized AppDispatch type from the store that includes the thunk middleware types, and use that with useDispatch. Adding a pre-typed useDispatch hook keeps you from forgetting to import AppDispatch where it's needed.

> createAsyncThunk: A function that accepts a Redux action type string and a callback function that should return a promise. It generates promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator that will run the promise callback and dispatch the lifecycle actions based on the returned promise. Inside of createAsyncThunk call getContentList after give response save and update it in state;
