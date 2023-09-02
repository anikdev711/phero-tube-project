//Question 1 more answer

document.getElementById('question-1-more').addEventListener('click', () => {
    // console.log('clicked!!!');
    const moreContent1 = document.getElementById('more-content-1');
    const div = document.createElement('div');
    div.innerHTML = `
    
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
      <form method="dialog" class="modal-box">
        <h3 class="font-bold text-lg">More ...</h3>
        <p class="py-4">When array and object are used in the const variable, the properties or elements of object and array can be modified. If reassignment is necessary, then we can use the let variable. In modern Javascript, let and const variables are used instead of var.</p>
        <div class="modal-action">
          <button class="btn">Close</button>
        </div>
      </form>
    </dialog>
    
    `;
    moreContent1.appendChild(div);
    const modal = document.getElementById('my_modal_5');
    modal.showModal();

})

//Question 2 more answer

document.getElementById('question-2-more').addEventListener('click', () => {
    // console.log('clicked!!!');
    const moreContent2 = document.getElementById('more-content-2');
    const div = document.createElement('div');
    div.innerHTML = `
    
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
      <form method="dialog" class="modal-box">
        <h3 class="font-bold text-lg">More ...</h3>
        <p class="py-4">null indicates a variable or object property is empty. It is used to reset or clear a variable.</p>
        <div class="modal-action">
          <button class="btn">Close</button>
        </div>
      </form>
    </dialog>
    
    `;
    moreContent2.appendChild(div);
    const modal = document.getElementById('my_modal_5');
    modal.showModal();

})

//Question 3 more answer

document.getElementById('question-3-more').addEventListener('click', () => {
    // console.log('clicked!!!');
    const moreContent3 = document.getElementById('more-content-3');
    const div = document.createElement('div');
    div.innerHTML = `
    
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
      <form method="dialog" class="modal-box">
        <h3 class="font-bold text-lg">More ...</h3>
        <p class="py-4">For CRUD (create, read, update, and delete) activities, the REST API uses conventional HTTP methods. The most commonly used HTTP methods in the REST API are GET (retrieve data), POST (create data), PUT (update data), and DELETE (remove data).</p>
        <div class="modal-action">
          <button class="btn">Close</button>
        </div>
      </form>
    </dialog>
    
    `;
    moreContent3.appendChild(div);
    const modal = document.getElementById('my_modal_5');
    modal.showModal();

})