import { useEffect, useState } from "@/uilities";


const AdminProjectPagae = () => {
  const [project,setProject] = useState([]);    
  
  useEffect(() => {    
      fetch("http://localhost:3000/project")
      .then((Response) => Response.json())
      .then(data =>setProject(data));
  }, []);
  useEffect(() => {
          const btns = document.querySelectorAll(".btn-remove");
          for (let btn of btns) {
            btn.addEventListener("click", function () {
              const id = this.dataset.id;
              const confirm = window.confirm("Bạn có chắc chắn muốn xóa không?");
                if (!confirm) return;
              fetch(`http://localhost:3000/project/${id}`,{
                method: "DELETE",
              }).then(() => {
                 //reRender
              const newProject = project.filter((project) => project.id !== +id);
              setProject(newProject);
              });
             
            });
          }
      });
  return /*html*/`
              <div class"container">
              <table class="table table-bordered">
              <thead>
                  <tr>
                    <th>STT</th>
                    <th>Hình Ảnh</th>
                    <th>Danh Mục</th>
                    <th>Tiêu Đề</th>
                    <th>Mô Tả</th>
                    <th>Tác Giả</th>
                  </tr>
              </thead>
              <tbody>
                ${project.map(
                  (project, index) => `
                  <tr>
                      <td> ${index + 1} </td>
                      <td> <img src="${project.image}"></td>
                      <td> ${project.cate}</td>
                      <td> ${project.title}</td>
                      <td> ${project.desc}</td>
                      <td>${project.author} </td>
                      <td>
                        <button data-id="${project.id}" class="btn btn-danger btn-remove">Xóa</button>
                        <a href="/admin/${project.id}/edit" >Sửa </a>
                      </td>
                </tr>
                `
                )
              .join("")}
                
              </tbody>
              </table>
    
    </div>`
    };

export default  AdminProjectPagae;