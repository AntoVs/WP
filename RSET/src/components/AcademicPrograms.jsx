import "./AcademicPrograms.css";

const programs = [  {    category: "Undergraduate",    title: "B.Tech. Programmes",    items: [      "Applied Electronics & Instrumentation",      "Artificial Intelligence & Data Science",      "Civil Engineering",      "Computer Science & Engineering",      "Computer Science & Business Systems",      "Electrical & Electronics Engineering",      "Electronics & Communication Engineering",      "Information Technology",      "Mechanical Engineering",    ],
    link: "Explore B.Tech Overview",
  },

  {
    category: "Postgraduate",
    title: "M.Tech. Programmes",
    items: [
      "Computer Science & Engineering",
      "CS & Information Systems",
      "CS & Engineering (AI & ML)",
      "Data Sciences",
      "VLSI & Embedded Systems",
    ],
    link: "Explore M.Tech Overview",
  },

  {
    category: "Doctoral Research",
    title: "Ph.D. Programmes",
    items: [
      "Chemistry",
      "Civil Engineering",
      "Computer Science",
      "Electrical Engineering",
      "Electronics Engineering",
      "Information Technology",
      "Mathematics",
      "Mechanical Engineering",
      "Physics",
    ],
    link: "Explore Research & Ph.D.",
  },
];

function AcademicPrograms() {
  return (
    <section className="academic-section">
      <div className="academic-container">

        <div className="academic-heading">
          <p>ACADEMIC EXCELLENCE</p>
          <h2>Programmes Across Disciplines</h2>
          <span></span>
        </div>

        <div className="program-grid">

          {programs.map((program) => (
            <div className="program-card" key={program.title}>

              <div className="program-header">
                <p>{program.category}</p>
                <h3>{program.title}</h3>
                <span></span>
              </div>

              <div className="program-body">
                {program.items.map((item, index) => (
                  <div className="program-item" key={index}>
                    <div className="program-icon">
                      +
                    </div>

                    <span>{item}</span>
                  </div>
                ))}

                <a
                  href="#"
                  className="program-link"
                  onClick={(e) => e.preventDefault()}
                >
                  {program.link}
                  <span>→</span>
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default AcademicPrograms;