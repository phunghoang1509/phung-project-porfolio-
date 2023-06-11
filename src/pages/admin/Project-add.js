import { useEffect, router } from "@/uilities";

// import { products } from "@/data";
const AdminProjectAddPage = () => {

        useEffect (() => {
            const form = document.getElementById("form-add");
            const projectImg = document.getElementById("project-img");
            const projectCate= document.getElementById("project-cate");
            const projectTitle = document.getElementById("project-title");
            const projectDesc = document.getElementById("project-desc");
            const projectAuthor = document.getElementById("project-author");

            form.addEventListener('submit', function(e){
                e.preventDefault();
                const newProject = {
                    image : projectImg.value,
                    cate: projectCate.value,
                    title: projectTitle.value,
                    desc: projectDesc.value,
                    author: projectAuthor.value,
                };
                
               fetch("http://localhost:3000/project", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(newProject), //'{"a": "10"}'
               }).then(()=> {
                 //redirect sang router
                 router.navigate("/admin");
               });

                               
               
        });
    });
  return /*html*/`
            <div class="container">
             <h1>Thêm Thông Tin </h1>
            <form action="" id="form-add">
                  <div class="form-group mb-3">
                    <label for=""> Hình ảnh</label>
                    <input type="text" id="project-img" class="form-control"/>
                  </div>
                  <div class="form-group mb-3">
                    <label for=""> Danh mục </label>
                    <input type="text" id="project-cate" class="form-control"/>
                  </div>
                  <div class="form-group mb-3">
                    <label for=""> Tiêu đề </label>
                    <input type="text" id="project-title" class="form-control"/>
                  </div>
                  <div class="form-group mb-3">
                    <label for=""> Mô Tả </label>
                    <input type="text" id="project-desc" class="form-control"/>
                  </div>
                  <div class="form-group mb-3">
                    <label for=""> Tác giả </label>
                    <input type="text" id="project-author" class="form-control"/>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-primary">Thêm </button>
                  </div>
            </form>
            </div>
  `
}

export default AdminProjectAddPage;