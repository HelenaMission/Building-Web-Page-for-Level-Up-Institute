import styles from "./RequestItems.module.css";
import { useState, useEffect } from "react";
import { FaReply } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

export default function RequestItems({ teacher_id }) {
  const [isChecked, setIsChecked] = useState([]);
  const [reqStudents, setReqStudents] = useState([]);

  // fetch
  useEffect(() => {
    fetch(`http://localhost:4000/api/helpRequests?teacher_id=${teacher_id}`)
      .then((res) => res.json())
      .then((res) => setReqStudents(res));
  }, [teacher_id]);

  // handle check box function
  const handleCheckBox = (e) => {
    let { id, checked } = e.target;
    id = parseInt(id);
    if (checked) {
      setIsChecked([...isChecked, id]);
    } else {
      setIsChecked(isChecked.filter((e) => e !== id));
    }
    console.log(isChecked);
  };

  //useEffect for isChecked
  useEffect(() => console.log(isChecked), [isChecked]);

  //updateList to delete the list as well as post data to backend
  const updateList = () => {
    const updatedStudents = reqStudents.filter((student) => !isChecked.includes(student.request_id));
    setReqStudents(updatedStudents);
    setIsChecked([]);

    //map through isChecked
    isChecked.forEach((id) => {
      fetch(`http://localhost:4000/api/markAsDone`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  };
  // option variable for date and time
  let options = {
    timeZone: "Pacific/Auckland",
    year: "numeric",
    month: "long",
    day: "2-digit",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return (
    <div className={styles.mainIn}>
      <div>
        <h3 className={styles.title}>HELP REQUESTS</h3>
        <div className={styles.btns}>
          <button className={styles.btn}>
            <FaReply className={styles.icons} />
            REPLY
          </button>
          <button className={styles.btn} onClick={updateList}>
            <FaCheck className={styles.icons} />
            MARK AS DONE
          </button>
        </div>
      </div>
      <div className={styles.scrollBox}>
        {reqStudents.map((student) => (
          <div className={styles.lists} key={student.request_id}>
            <input className={styles.checkbox} type="checkbox" checked={isChecked.includes(student.request_id)} onChange={handleCheckBox} id={student.request_id} />
            <div className={styles.studentsDetails}>
              <img src={student.profile_pic} className={styles.profilePic} alt="img of student" />
              <div className={styles.helpMsg}>
                {`${student.name} needs help with ${student.gender === "b" ? `his` : `her`}
            project`}
              </div>
              <div className={styles.requestTime}>
                {Intl.DateTimeFormat("en-NZ", options)
                  .format(new Date(student.date_created))
                  .replace(", ", " ")
                  .toUpperCase()
                  .replace(/ AT (\d+:\d+ [AP]M)$/, " $1")}{" "}
                {/* "2023-07-01T21:00:00.000Z" => Sat,01 July 2023 at 8:00 am => SAT 01 JULY 2023 8:00 AM */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
