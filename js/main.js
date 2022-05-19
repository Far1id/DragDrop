let rightList = document.getElementById('list2');

let leftListItems = document.querySelectorAll('#list1 li');

leftListItems.forEach(elem=>{
    elem.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('dataId',elem.getAttribute('data-id'));
    })
})

rightList.addEventListener('dragover',function(e){
    e.preventDefault();
})

rightList.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    this.appendChild(li)
})

let leftList = document.getElementById('list1');

let rightListItems = document.querySelectorAll('#list2 li');

rightListItems.forEach(elem=>{
    elem.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('dataId',elem.getAttribute('data-id'));
    })
})

leftList.addEventListener('dragover',function(e){
    e.preventDefault();
})

leftList.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    // console.log(li);
    this.appendChild(li)
})

let box = document.querySelector('.box');

box.addEventListener('dragover', function(e){
    e.preventDefault()
})

box.addEventListener('drop', function(e){
    dataId = e.dataTransfer.getData('dataId');
    li = document.querySelector('[data-id="'+dataId+'"]');
    newP = document.createElement('p');
    newP.style.color = 'white'; 
    newP.innerText = li.innerText;
    box.appendChild(newP);
    li.remove();

})


