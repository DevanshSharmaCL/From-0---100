function Card(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <img src={props.img}/>
      <button>click me</button>
    </div>
  )
}
const data = [
  { title: "React", img: "https://via.placeholder.com/150" },
  { title: "JavaScript", img: "https://via.placeholder.com/150" },
  { title: "HTML", img: "https://via.placeholder.com/150" }
];


function App() {
  return (
    <div>
      <navbar></navbar>
      <div className="main-section">
        {
          data.map((e,index)=>{
            return <Card key={index} title={e.title} img={e.img}/>
          })
        }
      </div>

      <footer></footer>
    </div>
  );
}

export default App;