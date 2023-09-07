import './Home.css'

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="greetings">
        <img src="" alt="img" />
      </div>
      <div className="recentContainer">
        <div className="recentJobsContainer">
          <div className="heading">
            <h4 onClick={() => console.log('home')}>Company Name</h4>
            <h5>Position</h5>
          </div>
          <div className="discription">
            <p>Job Descrription</p>
            <div className="line" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home