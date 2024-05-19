const courses = [
  {
    id: 1,
    title: "English Lecture",
    description: "language lessons with the most popular teachers",
    imageUrl: "/first-project/public/images/React.png",
    rate: "4.5",
    tags: ["langauges"],
    start: "2021-08-01T20:46:30.615Z",
    status: "Completed",
  },
  {
    id: 2,
    title: "Design Strategy",
    description:
      "lesson on planning design concept and proper planning of work",
    imageUrl: "/first-project/public/images/React.png",
    rate: "4",
    tags: ["UI/UX design", "web design"],
    start: "2022-06-01T20:46:30.615Z",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Business Lecture",
    description:
      "lectures on how to build your buisness safely without fare of new projects",
    imageUrl: "/first-project/public/images/React.png",
    rate: "3.9",
    tags: ["Marketing", "Finance"],
    start: "2023-04-01T20:46:30.615Z",
    status: "Active",
  },
];

function CourseList() {
  return (
    <div className="course-list">
      {courses.map((course) => {
        return (
          <div className="course-item" key={course.id}>
            <div className="course-img">
              <img src="/public/images/react.png" alt="" />
            </div>
            <div className="course-body">
              <div className="course-body-desc">
                <h2>{course.title}</h2>
                <span>{course.description}</span>
              </div>
              <div className="course-footer">
                <div className="course-tag">
                  {course.tags.map((t)=>(
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="course-detail">
                  <span className="course-date">
                    {new Date(course.start).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  })}
                  </span>
                  <span className={`detail ${course.status === "Active" ? "active" : course.status === "Upcoming" ? "upcoming" : "completed"}`}>{course.status}</span>
                </div>
              </div>
            </div>
            <span className="rate">⭐{course.rate}</span>
          </div>
        );
      })}
    </div>
  );
}

export default CourseList;
