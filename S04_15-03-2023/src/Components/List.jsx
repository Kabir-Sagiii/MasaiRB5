
  function List(){
      var tech = ["HTML","MONGODB","CSS","JS","BOOTSTRAP","JAVA","REACT","JAVA","DSA","NODE JS"]

    return <div>
        <h2>List Component</h2>
          <ol>

             {
                tech.map((ele,index)=>{
                   return  <li>{ele}</li>
                })
             }
          </ol>
        </div>
  }
  export default List