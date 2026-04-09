function Card(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}

const data = [
  { title: "React", desc: "Library" },
  { title: "JavaScript", desc: "Language" },
  { title: "HTML", desc: "Markup" }
];

function App() {
  return (
    <div>
      {
        data.map((e,index)=>{
          return <Card index={index} title={e.title} desc={e.desc} />
        })
      }
    </div>
  );
}

export default App;