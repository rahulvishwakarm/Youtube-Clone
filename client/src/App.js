import styled from "styled-components";

const StyleBUtton = styled.button`
  border:2px solid black;
  padding:10px 20px;
  background-color:pink;
  color:green;
`

function App() {
  return (
    <div className="app">
      Buildng Youtube
      <StyleBUtton></StyleBUtton>
    </div>
  );
}

export default App;
