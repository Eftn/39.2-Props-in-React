/////renders a div with instances of the other two components.


const App = () => (
    <div>
      <h2>Part 1</h2>
      <FirstComponent />
      <NamedComponent/>
   
      
    </div>
  )
  
  
  
  ReactDOM.render(<App />, document.getElementById("root"))