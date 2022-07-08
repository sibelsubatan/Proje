export const reformattedData = (arr => {
    let arr2 = [];
    arr.map((data)=>{
        if (data.productId !== undefined){
            arr2.push({
                grupKod: data.grupKod,
                id: data.id,
                kartelaKodu: data.kartelaKodu,
                miktar: data.miktar,
                productId: data.productId,
                productName: data.name,
            })
        }
        else{
            arr2.push({
                miktar:data.miktar,
                productId:data.id,
                productName:data.name
            })
        }
    })
    return arr2
})

