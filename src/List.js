
import React from "react";

const List = props => (
    <table className="table" style={{ width: "40%" }}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.usedata.length > 0 ? (
                props.usedata.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td style={{ textDecoration: user.isComplete ? "line-through" : "none" }}>{user.name}
                        </td>
                        <td>
                            <button onClick={() => props.onDone1(user)}>Mark as Read</button>
                            <button onClick={() => props.onDelete1(user)}>Delete</button>
                        </td>
                        <td><button onClick={() => props.onEdit(user)}>Edit</button>
                        </td>
                    </tr>
                ))
            ) : (
                <tr>
                    <td colSpan={3}>No users</td>
                </tr>
            )}
        </tbody>
    </table>
);

export default List

