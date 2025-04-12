import colorSharp from "../assets/img/color-sharp.png";

export const Achievements = () => {
  const achievements = [
    "Top 5 Finalist – Smart Delhi Ideathon 2025 | Top 0.5% among 1000+ teams.",
    "LinkedIn CoachIn 2025 - Selected among top 80 from 18,000+ applicants.",
    "Won Best Women Team at NinjaSprint Ideathon by Coding Ninjas",
    
  ];

  return (
    <section className="achievement" id="achievements">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="achievement-bx wow fadeIn">
              <h2>Achievements</h2>
              <br />
              <ul className="achievement-list">
                {achievements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Decoration" />
    </section>
  );
};
