import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';


function SubjectsList({ value }) {
    return (
        <ul>
            <li>Title - {value?.title ?? 'N/A'}</li>
            <li>Department - {value?.department ?? 'N/A'}</li>
            <li>Student Count - {value?.studentsCount ?? 'N/A'}</li>
        </ul>
    );
}

SubjectsList.propTypes = {
    value: PropTypes.shape({
        title: PropTypes.string,
        department: PropTypes.string,
        studentsCount: PropTypes.number
    }).isRequired
};

export default function ShowSubjectsList() {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/subjects")
            .then((res) => {
                setSubjects(res.data);
            })
            .catch((error) => {
                console.log('Error fetching subjects:', error);
            });
    }, []);

    const subjectList =
        subjects.length === 0
        ? "No Subjects were Added!"
        : subjects.map((value, index) => <SubjectsList value={value} key={index} />);

    return (
        <div>
            {subjectList}
        </div>
    );
}