export default function StudentsScore({ students, valueChange }) {
    const sortScore = students.sort(
        (firstStudent, lastStudent) => lastStudent.score - firstStudent.score
    );
    return (
        <>
            {sortScore.map(({ name, score }) => (
                <tr key={name}>
                    <td>{name}</td>
                    <td>
                        <input
                            type='text'
                            name={name}
                            value={score}
                            onChange={valueChange}
                        />
                    </td>
                </tr>
            ))}
        </>
    );
}
