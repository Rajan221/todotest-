import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import TaskManagement from "./components/TaskManagement";
import { useQueryClient, QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/tasks" element={<TaskManagement />} />
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;

// // tasks lists
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       viewCompleted: false,
//       activeItem: {
//         title: "",
//         description: "",
//         completed: false
//       },
//       taskList: []
//     };
//   }

//   // Add componentDidMount()
//   componentDidMount() {
//     this.refreshList();
//   }

//   refreshList = () => {
//     axios   //Axios to send and receive HTTP requests
//       .get("http://localhost:8000/api/tasks/")
//       .then(res => this.setState({ taskList: res.data }))
//       .catch(err => console.log(err));
//   };

//   displayCompleted = status => {
//     if (status) {
//       return this.setState({ viewCompleted: true });
//     }
//     return this.setState({ viewCompleted: false });
//   };

//   renderTabList = () => {
//     return (
//       <div className="my-5 tab-list">
//         <span
//           onClick={() => this.displayCompleted(true)}
//           className={this.state.viewCompleted ? "active" : ""}
//         >
//           completed
//             </span>
//         <span
//           onClick={() => this.displayCompleted(false)}
//           className={this.state.viewCompleted ? "" : "active"}
//         >
//           Incompleted
//             </span>
//       </div>
//     );
//   };

//   // Main variable to render items on the screen
//   renderItems = () => {
//     const { viewCompleted } = this.state;
//     const newItems = this.state.taskList.filter(
//       item => item.completed === viewCompleted
//     );
//     return newItems.map(item => (
//       <li
//         key={item.id}
//         className="list-group-item d-flex justify-content-between align-items-center"
//       >
//         <span
//           className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""
//             }`}
//           title={item.description}
//         >
//           {item.title}
//         </span>
//         <span>
//         <div class="row">
//   <div class="col">
//     <button
//       onClick={() => this.editItem(item)}
//       className="btn btn-secondary"
//     >
//       Edit
//     </button>
//   </div>
//   <div class="col">
//     <button
//       onClick={() => this.handleDelete(item)}
//       className="btn btn-danger"
//     >
//       Delete
//     </button>
//   </div>
// </div>

//         </span>
//       </li>
//     ));
//   };
//   // ///////////////////////////////////////////////////////////

//   ////add this after modal creation
//   toggle = () => {//add this after modal creation
//     this.setState({ modal: !this.state.modal });//add this after modal creation
//   };
//   // handleSubmit = item => {//add this after modal creation
//   //   this.toggle();//add this after modal creation
//   //   alert("save" + JSON.stringify(item));//add this after modal creation
//   // };

//   // Submit an item
//   handleSubmit = item => {
//     this.toggle();
//     if (item.id) {
//       // if old post to edit and submit
//       axios
//         .put(`http://localhost:8000/api/tasks/${item.id}/`, item)
//         .then(res => this.refreshList());
//       return;
//     }
//     // if new post to submit
//     axios
//       .post("http://localhost:8000/api/tasks/", item)
//       .then(res => this.refreshList());
//   };

//   // Delete item
//   handleDelete = item => {
//     axios
//       .delete(`http://localhost:8000/api/tasks/${item.id}/`)
//       .then(res => this.refreshList());
//   };
//   // handleDelete = item => {//add this after modal creation
//   //   alert("delete" + JSON.stringify(item));//add this after modal creation
//   // };

//   // Create item
//   createItem = () => {
//     const item = { title: "", description: "", completed: false };
//     this.setState({ activeItem: item, modal: !this.state.modal });
//   };

//   //Edit item
//   editItem = item => {
//     this.setState({ activeItem: item, modal: !this.state.modal });
//   };

//   // -I- Start by visual effects to viewer
//   render() {
//     return (
//       <main className="content p-3 mb-2 bg-info">
//         <h1 className="text-black text-uppercase text-center my-4">To Do List</h1>
//         <div className="row ">
//           <div className="col-md-6 col-sm-10 mx-auto p-0">
//             <div className="card p-3">
//               <div className="">
//                 <button onClick={this.createItem} className="btn btn-primary">
//                   Add task
//                     </button>
//               </div>
//               {this.renderTabList()}
//               <ul className="list-group list-group-flush">
//                 {this.renderItems()}
//               </ul>
//             </div>
//           </div>
//         </div>
//         {this.state.modal ? (
//           <Modal
//             activeItem={this.state.activeItem}
//             toggle={this.toggle}
//             onSave={this.handleSubmit}
//           />
//         ) : null}
//       </main>
//     );
//   }
// }
// export default App;
