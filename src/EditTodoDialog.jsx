import { useRef, useEffect } from "react";

function EditTodoDialog({
  editingTodo,
  setEditingTodo,
  saveEdit,
  closeDialog,
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (editingTodo) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [editingTodo]);

  return (
    <dialog ref={dialogRef} className="p-6 rounded-lg shadow-xl m-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Todo</h2>
      {editingTodo && (
        <div className="space-y-4">
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={editingTodo.text}
            onChange={(e) =>
              setEditingTodo({ ...editingTodo, text: e.target.value })
            }
          />
          <div className="flex space-x-3 justify-center">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={saveEdit}
            >
              Save
            </button>
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={closeDialog}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}

export default EditTodoDialog;
