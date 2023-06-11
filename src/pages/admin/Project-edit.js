import { useEffect, router, useState } from "@/uilities";
import joi from "joi";
// import { products } from "@/data";
const productSchema = joi.object({
    image: joi.string().required().min(3).max(30),
    cate: joi.string().required(),
    title: joi.string().required(),
    desc: joi.string().required(),
    author: joi.string().required(),
});

const AdminProjectEditPage = ({id}) => {
    const [project, setProject] = useState({});
     // lấy ra thông tin sản phẩm để hiển thị form
    useEffect(() => {
        fetch(`http://localhost:3000/project/${id}`)
        .then( (response) => response.json())
        .then((data) =>{setProject(data);}
        )
    },[]);
      // cập nhật sản phẩm
        useEffect (() => {
            const form = document.getElementById("form-add");
            const errorsElement = document.querySelector("#errors");
            if (!form) return;
            const projectImg = document.getElementById("project-img");
            const projectCate= document.getElementById("project-cate");
            const projectTitle = document.getElementById("project-title");
            const projectDesc = document.getElementById("project-desc");
            const projectAuthor = document.getElementById("project-author");

            form.addEventListener(`submit`, function(e){
                //Chặn reload trang
                e.preventDefault();

                const editProject = {
                    // id: id,
                    image : projectImg.value,
                    cate: projectCate.value,
                    title: projectTitle.value,
                    desc: projectDesc.value,
                    author: projectAuthor.value,
                };

                const { error } = productSchema.validate(editProject, { abortEarly: false });
                if (error) {
                    const errors = error.details.map((err) => err.message);
                    errorsElement.innerHTML = errors.map((err) => `<p>${err}</p>`).join("");
                    return;
                }
                
               fetch(`http://localhost:3000/project/${id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(editProject), //'{"a": "10"}'
               }).then(()=> {
                 //redirect sang router
                 router.navigate("/admin");
               });

                               
               
        });
    });
  return /*html*/`
            <div class="container">
             <h1>Cập nhập thông tin </h1>
             
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
                    <button class="btn btn-primary">Cập nhập thông tin </button>
                  </div>
            </form>
            <div id="errors"></div>
            </div>
  `
}

export default AdminProjectEditPage;