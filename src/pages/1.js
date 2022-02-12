const employees = [
    { _id: 1, name: "foo", contact: "abc", age: 20 },
    { _id: 2, name: "bar", contact: "efg", age: 30 },
    { _id: 3, name: "baz", contact: "hij", age: 40 }
  ];
  
  const fakeRequest = () =>
    new Promise(resolve => setTimeout(() => resolve(employees), 1000));
  
  class App extends React.Component {
    state = {
      employees: []
    };
  
    componentDidMount() {
      fakeRequest().then(employees => this.setState({ employees }));
    }
  
    render() {
      const employees = this.state.employees.map(employee => (
        <div style={{ border: "1px solid black" }} key={employee._id}>
          <h3>Name: {employee.name}</h3>
          <p>Contact: {employee.contact}</p>
          <p>{employee.age}</p>
        </div>
      ));
  
      return (
        <div>
          <p>Data will be fetched in a second automatically.</p>
          {employees}
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));