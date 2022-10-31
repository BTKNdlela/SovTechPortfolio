import Navbar from "./Navbar"; 

function App() {
  const title = "Bandile Ndlela"

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className = "myinfo">
        <h1>{ title }</h1>
        <p className = "content">
          I am Bandile Thulani Kevin Ndlela. I am a recent Computer Science and Informatics gradute. Out of the two majors (Computer Science and Informatics)
          my favourite of the two is Computer Science. This due to Computer Science covering so many fields in modern technology. My hobbies involve playing soccer 
          and I used to play hockey. I would also say another hobby of mine is reading but as of late I am finding it very difficult to immerse myself in the adventure 
          of reading books.
          <br />
          To be honest my short goal right now is to just get a job. Meaning I don't have any other valid reason as to why I would want to work for SovTech. I tend to think 
          working for big companies as a dream and I don't see myself working for any big company anytime soon. Whenever I envision my future I see myself teaching IT so
          if I were to suddenly get a job at SovTech, happy accident. Maybe dreams do come true. 
        </p>
      </div>
    </div>
  );
}

export default App;
