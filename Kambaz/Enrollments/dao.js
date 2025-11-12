import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function findCoursesForUser(userId) {
  const { courses, enrollments } = Database;
  const enrolledCourses = courses.filter((course) =>
    enrollments.some(
      (enrollment) => enrollment.user === userId && enrollment.course === course._id
    )
  );
  return enrolledCourses;
}

export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
}

export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
  );
}