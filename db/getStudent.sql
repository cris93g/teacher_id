SELECT *
FROM students s JOIN Grades g ON s.id = g.student_id
WHERE s.id=$1;