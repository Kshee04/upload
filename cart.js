// console.log('Hello world')
var updateBtns = document.getElementsByClassName('update-cart')

for (i:0, i <updateBtns.length; i++){
    updateBtns[i].addEventListener('click' function(){
        var productId=this.dataset.product
        var action=this.dataset.action
        console.log('productId:',productId, 'action:',action)

        console.log('USER:', user)
        if (user=='AnonymousUser'){
            console.log('User is not authenticated')
        }else{
            updateUserOrder(productId,action)
        }
    })
}

function updateUserOrder(productId,action){
    console.log('User is logged in, sending data...')

    var url= 'updateitem/'

    fetch(url, {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({'productId':, productId, 'action':, action})
    })
    .then((response)=>{
        return response.json()
    })

    .then((data)=>{
        console.log('data:', data)
    })
}
