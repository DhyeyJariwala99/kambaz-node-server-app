import * as assignmentsDao from "./dao.js";

export default function AssignmentRoutes(app) {
  const deleteAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const status = await assignmentsDao.deleteAssignment(assignmentId);
    res.send(status);
  };

  const updateAssignment = async (req, res) => {
    const { assignmentId } = req.params;
    const assignmentUpdates = req.body;
    const status = await assignmentsDao.updateAssignment(
      assignmentId,
      assignmentUpdates
    );
    res.send(status);
  };

  app.delete("/api/assignments/:assignmentId", deleteAssignment);
  app.put("/api/assignments/:assignmentId", updateAssignment);
}